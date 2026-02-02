import { createBrowserRouter } from 'react-router-dom'
import DashboardLayout from '@/layouts/DashboardLayout'
import DashboardPage from '@/pages/dashboard/DashboardPage'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <DashboardLayout />,
        children: [
            {
                path: '/',
                element: <DashboardPage />,
            },
            // Add other routes here
        ],
    },
])
