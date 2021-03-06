import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { api } from '../services/api'

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
)

interface Transaction {
  id: number
  amount: number
  title: string
  type: string
  category: string
  createdAt: string
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>
interface TransactionsProviderProps {
  children: ReactNode
}

interface TransactionsContextData {
  transactions: Transaction[]
  createTransaction: (transaction: TransactionInput) => Promise<void>
}

export function TransactionsProvider(props: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  async function createTransaction (transactionInput: TransactionInput) {
    const response = await api.post('/transactions', {...transactionInput, createdAt: new Date()})
    const transaction = response.data.transactions

    setTransactions([...transactions, transaction])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {props.children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions () {
  const context = useContext(TransactionsContext)

  return context
}