import callWHMCS from "./client";

export async function getClientDomains(clientId: number) {
  return callWHMCS("GetClientsDomains", { clientid: clientId });
}

export async function domainWhois(domain: string) {
  return callWHMCS("DomainWhois", { domain });
}

export async function updateClientDomain(domainId: number, params: Record<string, string>) {
  return callWHMCS("UpdateClientDomain", { domainid: domainId, ...params });
}

export async function domainGetNameservers(domainId: number) {
  return callWHMCS("DomainGetNameservers", { domainid: domainId });
}

export async function domainUpdateNameservers(domainId: number, ns1: string, ns2: string, ns3?: string, ns4?: string, ns5?: string) {
  return callWHMCS("DomainUpdateNameservers", { domainid: domainId, ns1, ns2, ns3, ns4, ns5 });
}
