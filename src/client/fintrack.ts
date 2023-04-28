import type { AstroCookies } from "astro";
import axios, { AxiosInstance } from "axios"

let cli: AxiosInstance;
export const getCli = (baseURL: string, token: string) => {
    if (!cli) {
        cli = axios.create({
            baseURL,
            headers: {
                "token": token,
            }
        })
    }

    return cli;
}

export type Budget = {
    id: string;
    name: string;
    limit: number;
    used: number;
}

export const getBudgets = (cli: AxiosInstance, year: string, month: string) =>
    cli.get<Budget[]>(`/budget?year=${year}&month=${month}`).then(({ data }) => data)

export type Account = {
    id: string;
    name: string;
    totalValue: number;
}

export const getAccounts = (cli: AxiosInstance) =>
    cli.get<Account[]>("/recipient").then(({ data }) => data)


export type Transaction = {
    id?: string;
    value: number;
    recipientId: string;
    budgetId: string;
    description?: string;
    budgetName?: string;
    recipientName?: string;
    createdAt?: string;
}

export const saveTransaction = (cli: AxiosInstance, t: Transaction) =>
    cli.post<Transaction>("/transaction", t)

export const getTransactions = (cli: AxiosInstance) =>
    cli.get<Transaction[]>("/transaction").then(({ data }) => data)


export type Transfer = {
    fromRecipientId: string;
    toRecipientId: string;
    value: number;
}

export const saveTransfer = (cli: AxiosInstance, t: Transfer) =>
    cli.post<Transfer>("/transfer", t)

export type ToSchedule = {
    name: string;
    day: number;
    value: number;
    autoDebit: boolean;
}

export const getNextTransactions = (cli: AxiosInstance) =>
    cli.get<{ upcomming: ToSchedule[], lastDay: number }>("/upcomming").then(({ data }) => data)
