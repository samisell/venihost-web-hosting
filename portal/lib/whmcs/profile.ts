import callWHMCS from "./client";

export async function getClientDetails(clientId: number) {
  return callWHMCS("GetClientsDetails", { clientid: clientId, stats: true });
}

export async function updateClientDetails(clientId: number, details: Record<string, string>) {
  return callWHMCS("UpdateClient", { clientid: clientId, ...details });
}
