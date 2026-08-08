import callWHMCS from "./client";

export async function getClientProducts(clientId: number) {
  return callWHMCS("GetClientsProducts", { clientid: clientId });
}

export async function getProducts() {
  return callWHMCS("GetProducts");
}

export async function moduleCreate(serviceId: number) {
  return callWHMCS("ModuleCreate", { accountid: serviceId });
}

export async function moduleSuspend(serviceId: number, suspendReason: string) {
  return callWHMCS("ModuleSuspend", { accountid: serviceId, suspendreason: suspendReason });
}

export async function moduleUnsuspend(serviceId: number) {
  return callWHMCS("ModuleUnsuspend", { accountid: serviceId });
}

export async function moduleTerminate(serviceId: number) {
  return callWHMCS("ModuleTerminate", { accountid: serviceId });
}
