import { User } from '../../graphql/user/entities/user.entity';

describe('user', () => {
  it('when create a user then should create with a id', () => {
    const user = new User('fake_id', 'name', 'document', 'birthDate', [], []);
    expect(user.id).not.toBeNull();
    expect(user.id).not.toEqual('fake_id');
  });
});
