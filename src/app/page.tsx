import Link from "next/link";

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Bem-vindo ao NOIR CRM
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                    Sistema de gestão de vendas e relacionamento com clientes
                </p>
                <Link 
                    href="/login" 
                    className="bg-red-900 text-white px-8 py-3 rounded-lg hover:bg-red-800 transition-colors"
                >
                    Fazer Login
                </Link>
            </div>
        </div>
    );
}