import { Uuid } from '../../../../../shared/types/uuid.type';

export interface Formula {
  id?: Uuid;

  title: string;

  description: string;

  price: number;

  code: boolean;

  promotionnalPrice?: number;
}
