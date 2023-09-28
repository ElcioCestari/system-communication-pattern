import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { ClientModule } from '../src/client/client.module';
import { UserClient } from '../src/client/user-client/user.client';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let clientMock = { get: jest.fn() };

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

  it('/ (GET)', () => {
    clientMock.get.mockResolvedValueOnce([]);
    return request(app.getHttpServer())
      .get('/api/user')
      .expect(HttpStatus.OK)
      .expect((res) => {
        expect(res.body.length).toEqual(0);
      });
  });
});
