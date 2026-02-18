import { Button } from '@/components/ui/button'
import { Outlet } from 'react-router-dom'

export default function DashboardLayout() {
    return (
        <div className="flex flex-col flex-1 h-lvh items-center justify-center">
            <header>
                <nav>
                    <h1>Nobox</h1>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
            <Button>teste button</Button>
        </div>
    )
}
