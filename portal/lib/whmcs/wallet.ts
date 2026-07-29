import callWHMCS from "./client";

export async function getClientBalance(clientId: number) {
  // WHMCS might not have a direct GetClientBalance API, but GetClientsDetails with stats=true returns it.
  // Creating a helper function here for convenience.
  const details = await callWHMCS<any>("GetClientsDetails", { clientid: clientId, stats: true });
  return details.stats?.creditbalance || "0.00";
}

export async function addFunds(clientId: number, amount: string, description: string = "Add Funds") {
  return callWHMCS("AddCredit", { clientid: clientId, amount, description });
}
