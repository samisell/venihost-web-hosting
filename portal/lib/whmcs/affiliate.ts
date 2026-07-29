import callWHMCS from "./client";

export async function getAffiliates(clientId: number) {
  // GetAffiliates returns details about the client's affiliate account
  return callWHMCS("GetAffiliates", { userid: clientId });
}
