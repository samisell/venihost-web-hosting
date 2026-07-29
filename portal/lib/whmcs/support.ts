import callWHMCS from "./client";

export async function getTickets(clientId: number) {
  return callWHMCS("GetTickets", { clientid: clientId });
}

export async function getTicket(ticketId: number) {
  return callWHMCS("GetTicket", { ticketid: ticketId });
}

export async function openTicket(clientId: number, deptId: number, subject: string, message: string, priority: string = "Medium") {
  return callWHMCS("OpenTicket", { clientid: clientId, deptid: deptId, subject, message, priority });
}

export async function addTicketReply(ticketId: number, clientId: number, message: string) {
  return callWHMCS("AddTicketReply", { ticketid: ticketId, clientid: clientId, message });
}
