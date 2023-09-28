import { CreateUserDto } from './create-user.dto';

describe('CreateUserDto', () => {
  it('given a json then assert that was converted', () => {
    const dto: CreateUserDto = {
      name: 'John Doe',
      document: '123456789',
      birthDate: '1990-01-01',
      phones: ['123-456-7890', '987-654-3210'],
      addresses: ['123 Main St, CityA', '456 Elm St, CityB'],
    } as unknown as CreateUserDto;
    expect(dto).not.toBeNull();
    expect(dto.name).toEqual('John Doe');
  });
  it('given a object by constructor then assert that was converted', () => {
    const dto: CreateUserDto = new CreateUserDto(
      'John Doe',
      '123456789',
      '1990-01-01',
      [
        {
          number: "91234-5678",
          areaCode: "67",
          countryCode: "55",
        }
      ],
      ['123 Main St, CityA', '456 Elm St, CityB'],
    );
    expect(dto).not.toBeNull();
    expect(dto.name).toEqual('John Doe');
  });
});
