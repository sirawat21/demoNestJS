// Enum data
export enum EType {
  Expanse = 'expense',
  Income = 'income',
}

// Interface Data
export interface IData {
  id: string;
  sosurce: string;
  amount: number;
  created_at: number;
  updated_at: number;
  type: EType;
}

// Data
export const data = {
  report: [
    {
      id: 'U1001-0001',
      source: 'Salary',
      amount: 7500,
      created_at: Date.now(),
      updated_at: Date.now(),
      type: EType.Expanse,
    },
    {
      id: 'U2002-0002',
      source: 'Salary',
      amount: 8000,
      created_at: Date.now(),
      updated_at: Date.now(),
      type: EType.Income,
    },
  ],
};
