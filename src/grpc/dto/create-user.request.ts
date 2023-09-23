import { BasePhone } from '../../base/entity/base-phone';

export class CreateUserRequest {
  name: string;
  document: string;
  birthDate: string;
  phones: BasePhone[];
  addresses: string[];
}
