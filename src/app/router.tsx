import { Routes, Route } from 'react-router-dom';
import DashboardLayout from '@/layouts/DashboardLayout'
import DashboardPage from '@/pages/dashboard/DashboardPage'

export function AppRouter() {
    return (
        <Routes>
            <Route element={<DashboardLayout />} >
                <Route path='/' element={<DashboardPage />}></Route>
            </Route>
        </Routes>
    )
}