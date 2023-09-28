import { User } from '../../graphql/entities/user.entity';

describe('user', () => {
  it('when create a user then should create with a id', () => {
    const user = new User('fake_id', 'name', 'document', 'birthDate', [], []);
    expect(user.id).not.toBeNull();
    expect(user.id).toEqual('fake_id');
  });
});
