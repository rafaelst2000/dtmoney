import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from './services/api'

export const TransactionsContext = createContext<Transaction[]>([])

interface Transaction {
  id: number
  amount: number
  title: string
  type: string
  category: string
  createdAt: string
}

interface TransactionsProviderProps {
  children: ReactNode
}

export function TransactionsProvider(props: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  return (
    <TransactionsContext.Provider value={transactions}>
      {props.children}
    </TransactionsContext.Provider>
  )
}