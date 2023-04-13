export interface movementType {
  type: string;
  amount: number;
  date: string;
}

export interface accountType {
  name: string;
  email: string;
}

export interface userType {
  cuit: number;
  email: string;
  balance: number;
  movements: movementType[];
  linkedAccounts: accountType[];
  logged: boolean;
}
