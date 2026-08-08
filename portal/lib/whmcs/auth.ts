import callWHMCS, { WHMCSError } from "./client";
import type {
  WHMCSClient,
  WHMCSValidateLoginResponse,
  WHMCSCreateClientResponse,
} from "@/types/whmcs";

export async function validateLogin(
  email: string,
  password: string
): Promise<WHMCSValidateLoginResponse> {
  return callWHMCS<WHMCSValidateLoginResponse>("ValidateLogin", {
    email,
    password2: password,
  });
}

export async function createClient(data: {
  firstname: string;
  lastname: string;
  email: string;
  password2: string;
  address1: string;
  city: string;
  state: string;
  postcode: string;
  country: string;
  phonenumber: string;
}): Promise<WHMCSCreateClientResponse> {
  return callWHMCS<WHMCSCreateClientResponse>("AddClient", data);
}

export async function requestPasswordReset(email: string) {
  return callWHMCS("ResetPassword", { email });
}

export async function updateClientPassword(
  clientId: number,
  newPassword: string
) {
  return callWHMCS("UpdateClientPassword", {
    userid: clientId,
    newpassword: newPassword,
  });
}
