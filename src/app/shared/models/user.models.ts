import { Address } from './address.model';

export interface User {
  firstname: string;
  lastname: string;
  mail: string;
  password: string;
  phone: string;
  address: Address;
}
