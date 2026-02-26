'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Sidebar } from './sidebar';
import { Header } from './header';
import { PageTransition } from './page-transition';
import { SIDEBAR_WIDTH, SIDEBAR_COLLAPSED_WIDTH, HEADER_HEIGHT } from '@/lib/constants';

interface MainLayoutProps {
    children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
    const [collapsed, setCollapsed] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();

    const sidebarWidth = collapsed ? SIDEBAR_COLLAPSED_WIDTH : SIDEBAR_WIDTH;

    return (
        <div className="relative min-h-screen text-white">
            <Sidebar
                collapsed={collapsed}
                onToggle={() => setCollapsed(!collapsed)}
                mobileOpen={mobileOpen}
                onMobileClose={() => setMobileOpen(false)}
            />

            <Header
                onMenuClick={() => setMobileOpen(!mobileOpen)}
                sidebarWidth={sidebarWidth}
            />

            <main
                className="transition-all duration-300"
                style={{
                    paddingTop: HEADER_HEIGHT,
                }}
            >
                {/* Desktop: offset by sidebar. Mobile: no offset */}
                <style jsx>{`
                    main {
                        margin-left: 0;
                    }
                    @media (min-width: 768px) {
                        main {
                            margin-left: ${sidebarWidth}px;
                        }
                    }
                `}</style>
                <div className="max-w-[1400px] mx-auto px-4 py-4 md:p-6">
                    <PageTransition key={pathname}>
                        {children}
                    </PageTransition>
                </div>
            </main>
        </div>
    );
}
