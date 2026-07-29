import callWHMCS from "./client";

export async function getInvoices(clientId: number) {
  return callWHMCS("GetInvoices", { userid: clientId });
}

export async function getInvoice(invoiceId: number) {
  return callWHMCS("GetInvoice", { invoiceid: invoiceId });
}

export async function addTransaction(invoiceId: number, transId: string, amountIn: string, gateway: string) {
  return callWHMCS("AddTransaction", { invoiceid: invoiceId, transid: transId, amountin: amountIn, gateway });
}

export async function getTransactions(clientId: number) {
  return callWHMCS("GetTransactions", { clientid: clientId });
}
