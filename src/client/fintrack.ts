import type { AstroCookies } from "astro";
import axios, { AxiosInstance } from "axios"

let cli: AxiosInstance;
export const getCli = (baseURL: string, token: string) => {
    if (!cli) {
        cli = axios.create({
            baseURL,
            headers: {
                "Token": token,
            }
        })
    }

    return cli;
}

type Budget = {
    id: string;
    budget: string;
}

export const getBudgets = (cli: AxiosInstance) =>
    cli.get<Budget[]>("/budget").then(({ data }) => data)

type Account = {
    id: string;
    name: string;
}

export const getAccounts = (cli: AxiosInstance) =>
    cli.get<Account[]>("/account").then(({ data }) => data)


export type Transaction = {
    id?: string;
    value: number;
    accountId: string;
    budgetId: string;
    description?: string;
}

export const saveTransaction = (cli: AxiosInstance, t: Transaction) =>
    cli.post<Transaction>("/transaction", t)

export type Transfer = {
    fromAccountId: string;
    toAccountId: string;
    value: number;
}

export const saveTransfer = (cli: AxiosInstance, t: Transfer) =>
    cli.post<Transfer>("/transfer", t)