import { Test, TestingModule } from '@nestjs/testing';
import { UserMapper } from './user-mapper';
import { CreateUserDto } from '../dto/create-user.dto';

describe('UsermapperService', () => {
  let userMapper: UserMapper;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserMapper],
    }).compile();

    userMapper = module.get<UserMapper>(UserMapper);
  });

  it('should be defined', () => {
    expect(userMapper).toBeDefined();
  });

  describe('toEntity', () =>
    it('given json dto then should be return a valid entity', () => {
      const dto: CreateUserDto = {
        name: 'John Doe',
        document: '123456789',
        birthDate: '1990-01-01',
        phones: ['123-456-7890', '987-654-3210'],
        addresses: ['123 Main St, CityA', '456 Elm St, CityB'],
      } as unknown as CreateUserDto;
      const user = userMapper.toEntity(dto);
      expect(user).toBeDefined();
    }));
});
