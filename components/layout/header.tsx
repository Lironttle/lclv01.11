'use client';

import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, Bell, Search } from 'lucide-react';
import { NAV_ITEMS, HEADER_HEIGHT } from '@/lib/constants';

interface HeaderProps {
    onMenuClick: () => void;
    sidebarWidth: number;
}

export function Header({ onMenuClick, sidebarWidth }: HeaderProps) {
    const pathname = usePathname();
    const currentPage = NAV_ITEMS.find((item) => item.href === pathname);
    const pageTitle = currentPage?.label || 'Dashboard';

    return (
        <header
            className="fixed top-0 right-0 z-30 flex items-center justify-between border-b bg-[#0a0a0a]/80 backdrop-blur-md border-[#1a1a1a] px-6 transition-all duration-300"
            style={{
                height: HEADER_HEIGHT,
                left: sidebarWidth,
            }}
        >
            {/* Left: Mobile menu + Page title */}
            <div className="flex items-center gap-4">
                <button
                    onClick={onMenuClick}
                    className="md:hidden p-2 rounded-lg text-[#a3a3a3] hover:text-white hover:bg-white/5 transition-colors"
                    aria-label="Toggle menu"
                >
                    <Menu className="w-5 h-5" />
                </button>
                <h1 className="text-lg font-semibold text-white tracking-tight">{pageTitle}</h1>
            </div>

            {/* Right: Search + Notifications */}
            <div className="flex items-center gap-2">
                <button className="p-2 rounded-lg text-[#666] hover:text-white hover:bg-white/5 transition-colors">
                    <Search className="w-5 h-5" />
                </button>
                <button className="relative p-2 rounded-lg text-[#666] hover:text-white hover:bg-white/5 transition-colors">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#730404] rounded-full" />
                </button>
                <div className="ml-2 w-8 h-8 rounded-full overflow-hidden border border-[#730404]/50 flex items-center justify-center">
                    <Image
                        src="/logo.svg"
                        alt="LCL"
                        width={32}
                        height={32}
                        className="w-8 h-8"
                    />
                </div>
            </div>
        </header>
    );
}
