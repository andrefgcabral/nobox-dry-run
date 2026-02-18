import { AuthProvider } from '@/providers/AuthProvider'
import QueryProvider from '@/providers/QueryClientProvider'
import { PropsWithChildren } from 'react'
import { BrowserRouter } from 'react-router-dom'



export default function AppProviders({children}:PropsWithChildren) {
  return (
     <QueryProvider>
        <BrowserRouter>
            <AuthProvider>
                {children}
            </AuthProvider>
        </BrowserRouter>
    </QueryProvider>
)
}