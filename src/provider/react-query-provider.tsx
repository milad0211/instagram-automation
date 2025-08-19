'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'

type Props = {
  children:React.ReactNode
}

const ReactQueryProvider = ({children}: Props) => {
  const client = new QueryClient()
  return (
    <QueryClientProvider client={client}>
      {children}
    </QueryClientProvider>
  )
}

export default ReactQueryProvider