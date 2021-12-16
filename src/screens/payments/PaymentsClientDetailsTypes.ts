export interface Payment {
  id: number;
  userId: string;
  status: PaymentStatusType;
  created: number;
  amount: number;
  description: string;
}

export type PaymentStatusType = 'paid' | 'open';

export type DetailsTabType = 'Payments' | 'Sessions';
