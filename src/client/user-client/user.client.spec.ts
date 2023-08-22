import { Test, TestingModule } from '@nestjs/testing';
import { UserClient } from './user.client';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { Logger } from '@nestjs/common';

describe('UserClient', () => {
  let service: UserClient;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserClient,
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn().mockReturnValue('fake_data'),
          },
        },
        {
          provide: HttpService,
          useValue: {},
        },
        {
          provide: Logger,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<UserClient>(UserClient);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
