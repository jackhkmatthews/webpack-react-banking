import { FetchState } from "../hooks/useFetch";

export interface AccountProvider {
  title: string;
  account_number: string;
  sort_code: string;
  description: string;
}

export interface MocklyAccount {
  id: any;
  provider: AccountProvider;
  balance: any;
  transations: any[];
}

export interface MocklyFetchState extends FetchState {
  data: MocklyAccount;
}
