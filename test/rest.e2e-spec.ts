import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { ClientModule } from '../src/client/client.module';
import { UserClient } from '../src/client/user-client/user.client';
import { BaseUser } from '../src/base/entity/base-user';
import {
  createBaseUserFaker,
  createBaseUserListFaker,
} from './faker/base-user.faker';

describe('UserController (e2e)', () => {
  const URL = '/api/user';

  let app: INestApplication;
  let clientMock = {
    get: jest.fn(),
    getById: jest.fn(),
    post: jest.fn(),
    put: jest.fn(),
    delete: jest.fn(),
  };

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule, ClientModule],
    })
      .overrideProvider(UserClient)
      .useValue(clientMock)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('/api/user/ (GET)', () => {
    it('when exists users then assert the size returned', () => {
      const size: number = 3;
      const users: BaseUser[] = createBaseUserListFaker(size);
      clientMock.get.mockResolvedValueOnce(users);

      return request(app.getHttpServer())
        .get(URL)
        .expect(HttpStatus.OK)
        .expect((res) => {
          expect(res.body.length).toEqual(size);
        });
    });
  });

  describe('/api/user/:id (GET)', () => {
    it('when found an user then return this user', () => {
      const user: BaseUser = createBaseUserFaker();
      clientMock.getById.mockResolvedValueOnce(user);

      return request(app.getHttpServer())
        .get(`${URL}/${user.id}`)
        .expect(HttpStatus.OK)
        .expect((res) => {
          expect(res.body).toEqual(user);
        });
    });
  });

  describe('/api/user (POST)', () => {
    it('when SAVE an user then return this user', () => {
      const user: BaseUser = createBaseUserFaker();
      clientMock.post.mockResolvedValueOnce(user);

      return request(app.getHttpServer())
        .post(`${URL}`)
        .send(user)
        .expect(HttpStatus.CREATED)
        .expect((res) => {
          expect(res.body).toEqual(user);
        });
    });
  });

  describe('/api/user/:id (PUT)', () => {
    it('when UPDATE an user then return this user', () => {
      const user: BaseUser = createBaseUserFaker();
      clientMock.put.mockResolvedValueOnce(user);
      clientMock.getById.mockResolvedValueOnce(user);

      return request(app.getHttpServer())
        .put(`${URL}/${user.id}`)
        .send(user)
        .expect(HttpStatus.OK)
        .expect((res) => {
          expect(res.body).toEqual(user);
        });
    });
  });

});
