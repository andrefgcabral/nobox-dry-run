import { useAuthStore } from "@/store/useAuthStore";
import { ReactElement } from "react";

export default function RequireAuth({ children }: { children?: ReactElement}) {
    const { session } = useAuthStore()

    if (!session) {
        return <div>No Acesse</div>
    }

    return children
}
