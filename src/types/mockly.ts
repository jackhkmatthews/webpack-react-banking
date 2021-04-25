import { FetchState } from "../hooks/useFetch";

export interface AccountProvider {
  title: string;
  account_number: string;
  sort_code: string;
  description: string;
}

export interface MocklyAmount {
  value: number;
  currency_iso: string;
}

export interface MocklyTransaction {
  id: string;
  date: string;
  description: string;
  category_title: string;
  amount: MocklyAmount;
}

export interface MocklyAccount {
  id: any;
  provider: AccountProvider;
  balance: any;
  transactions: MocklyTransaction[];
}

export interface MocklyFetchState extends FetchState {
  data: MocklyAccount;
}
