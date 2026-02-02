import { Outlet } from 'react-router-dom'

export default function DashboardLayout() {
    return (
        <div className="dashboard-layout">
            <header>
                <nav>
                    <h1>Nobox</h1>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}
