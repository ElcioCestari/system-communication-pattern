import { BaseUser } from '../../src/base/entity/base-user';

export const createBaseUserFaker = (): BaseUser => {
  return {
    id: '1',
    name: '',
    document: '',
    birthDate: '',
    phones: [],
    addresses: [],
  };
};

export const createBaseUserListFaker = (size: number): BaseUser[] => {
  const result: BaseUser[] = [];
  while (size > 0) {
    --size;
    const user = createBaseUserFaker();
    result.push(user);
  }
  return result;
};
