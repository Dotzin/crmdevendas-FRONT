"use client"

import { useState } from "react";
import { CalendarSearch, Funnel, LayoutDashboard, MessageCircleMore } from "lucide-react";

export default function Sidebar() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`h-screen bg-black text-white transition-all duration-300 flex flex-col 
      ${isHovered ? "w-56" : "w-16"}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <ul className="flex flex-col gap-2 mt-4 m-auto">
                <li className="flex items-center gap-3 p-3 hover:bg-gray-700 rounded-xl cursor-pointer">
                    <Funnel size={22} />
                    {isHovered && <span>Funil</span>}
                </li>
                <li className="flex items-center gap-3 p-3 hover:bg-gray-700 rounded-xl cursor-pointer">
                    <CalendarSearch size={22} />
                    {isHovered && <span>Agenda</span>}
                </li>
                <li className="flex items-center gap-3 p-3 hover:bg-gray-700 rounded-xl cursor-pointer">
                    <LayoutDashboard size={22} />
                    {isHovered && <span>Dashboard</span>}
                </li>
                <li className="flex items-center gap-3 p-3 hover:bg-gray-700 rounded-xl cursor-pointer">
                    <MessageCircleMore size={22} />
                    {isHovered && <span>Contato</span>}
                </li>
            </ul>
        </div>
    );
}
