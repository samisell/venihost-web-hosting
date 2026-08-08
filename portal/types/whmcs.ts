export interface WHMCSResponseBase {
  result: "success" | "error";
  message?: string;
  totalresults?: number;
  startnumber?: number;
  numreturned?: number;
}

export interface WHMCSValidateLoginResponse extends WHMCSResponseBase {
  userid: number;
  passwordhash: string;
}

export interface WHMCSCreateClientResponse extends WHMCSResponseBase {
  clientid: number;
}

export interface WHMCSClient {
  id: number;
  firstname: string;
  lastname: string;
  companyname: string;
  email: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  postcode: string;
  country: string;
  phonenumber: string;
  currency: number;
  groupid: number;
  status: "Active" | "Inactive" | "Closed";
  created_at: string;
}
