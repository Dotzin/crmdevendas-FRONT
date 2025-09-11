import Header from "@/components/header";
import Sidebar from "@/components/Sidebar";
import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="flex h-screen">
            <Header type={0} userEmail="nome@gmail.com" userName="Augusto" />
            <div className="flex flex-1 pt-20">
                <Sidebar />
                <main className="flex-1 p-6 bg-gray-50 overflow-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}