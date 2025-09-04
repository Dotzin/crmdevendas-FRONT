
import { headers } from 'next/headers'

export default async function NotFound() {
    return (
        <div className="flex items-center justify-center h-max">
            Página não encontrada 404
        </div>
    )
}