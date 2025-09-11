import React from "react";

interface HeaderProps {
    userName?: string;
    userEmail?: string;
    userImage?: string;
    type: number;
}

export default function Header({
    userName = "User",
    userEmail,
    userImage,
    type,
}: HeaderProps) {
    return (
        <header className="fixed top-0 left-0 w-full bg-red-900 flex items-center px-6 py-4 h-20 z-50">
            <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white flex items-center justify-center rounded">
                    <span className="text-red-900 font-bold text-xl">N</span>
                </div>
                <div>
                    <p className="text-white font-bold text-lg">NOIR</p>
                </div>
            </div>
            <div className="bg-black px-4 h-12 flex items-center flex-grow mx-6 rounded">
                <h1 className="text-white text-lg font-medium">Olá, {userName}!</h1>
            </div>
            <div className="flex items-center space-x-3">
                {userImage ? (
                    <img
                        src={userImage}
                        alt={userName}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                ) : (
                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-700">
                        {userName[0]?.toUpperCase()}
                    </div>
                )}
                <div className="text-white">
                    <p className="font-medium">{userName}</p>
                    {userEmail && <p className="text-sm text-gray-300">{userEmail}</p>}
                </div>
            </div>
        </header>
    );
}