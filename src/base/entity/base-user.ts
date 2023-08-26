import { BasePhone } from './base-phone';

export interface BaseUser {
  id: string;
  name: string;
  document: string;
  birthDate: string;
  phones: BasePhone[];
  addresses: string[];
}
