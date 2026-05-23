import { AddressDto } from './address.interface';
import { Uuid } from '../types/uuid.type';

export interface UserInterface {
  id: Uuid;
  firstname: string;
  lastname: string;
  mail: string;
  phone: string;
  formulaId?: Uuid;
  roles: string[];
  address?: AddressDto;
}
