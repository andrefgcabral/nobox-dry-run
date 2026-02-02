import { create } from 'zustand'
import { Session } from '@supabase/supabase-js'

interface AuthState {
    session: Session | null
    setSession: (session: Session | null) => void
    loading: boolean
    setLoading: (loading: boolean) => void
}

export const useAuthStore = create<AuthState>((set) => ({
    session: null,
    setSession: (session) => set({ session }),
    loading: true,
    setLoading: (loading) => set({ loading }),
}))
