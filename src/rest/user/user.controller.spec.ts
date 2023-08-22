import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserMapper } from './mapper/user-mapper';
import { Logger } from '@nestjs/common';
import { UserClient } from '../../client/user-client/user.client';
import { User } from '../../client/entity/user';

describe('UserController', () => {
  let userController: UserController;
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        UserService,
        UserMapper,
        Logger,
        { provide: UserClient, useValue: {} },
      ],
    }).compile();

    userController = module.get<UserController>(UserController);
    userService = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(userController).toBeDefined();
  });

  it('should call userService.create and return mock result', async () => {
    const createUserDto = {
      _name: 'John Doe',
      _document: '123456789',
      _birthDate: '1990-01-01',
      _phones: ['123-456-7890', '987-654-3210'],
      _addresses: ['123 Main St, CityA', '456 Elm St, CityB'],
    } as unknown as User;

    jest
      .spyOn(userService, 'create')
      .mockImplementation(() => Promise.resolve(createUserDto));

    const result = await userController.create(createUserDto);

    expect(userService.create).toHaveBeenCalledWith(createUserDto);
    expect(result).toEqual(createUserDto);
    // expect(result).toBeInstanceOf(CreateUserDto);
    expect(result.name).not.toBeNull();
  });
});
