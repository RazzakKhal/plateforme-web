import { AddressDto } from './address.interface';

export interface UserRequestInterface {
  firstname: string;
  lastname: string;
  phone: string;
  address: AddressDto;
}
