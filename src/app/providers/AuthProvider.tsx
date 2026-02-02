import { useEffect, ReactNode } from 'react'
import { useAuthStore } from '@/store/useAuthStore'
import { supabase } from '@/services/supabase/client'

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const setSession = useAuthStore((state) => state.setSession)
    const setLoading = useAuthStore((state) => state.setLoading)

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
            setLoading(false)
        })

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })

        return () => subscription.unsubscribe()
    }, [setSession, setLoading])

    return <>{children}</>
}
