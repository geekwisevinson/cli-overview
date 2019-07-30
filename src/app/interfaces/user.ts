interface Address {
  city: string;
  state: string;
}
export interface User {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  age: number;
  address: Address;
}
