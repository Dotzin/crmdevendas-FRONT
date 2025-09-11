import Header from "@/components/header";
import Sidebar from "@/components/Sidebar"
import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children } : LayoutProps) {
    return (
        <>
            <Header type={0} userEmail="Nome@gmail.com" userName="Augusto" />
            <Sidebar></Sidebar>
            <main>
                {children}
            </main>
        </>
    );
}
