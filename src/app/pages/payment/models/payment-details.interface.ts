import { Uuid } from '../../../shared/types/uuid.type';

export type PaymentStatus =
  | 'PENDING'
  | 'SUCCESS'
  | 'FAILED'
  | 'INVALID_SIGNATURE'
  | 'COMPLETED';

export interface PaymentDetails {
  status: PaymentStatus | string;
  userId: Uuid;
  formulaId: Uuid;
  reference: string;
}
