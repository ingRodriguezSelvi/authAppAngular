
export interface AuthResponse {
    ok      : boolean;
    uid?    : string;
    name?   : string;
    token?  : string;
    message? : string;
    email?   : string;
}

export interface User {
  uid      : string;
  name     : string;
  email    : string;
}
