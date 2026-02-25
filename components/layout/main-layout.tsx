'use client';

import React, { useState } from 'react';
import { Sidebar } from './sidebar';
import { Header } from './header';
import { SIDEBAR_WIDTH, SIDEBAR_COLLAPSED_WIDTH, HEADER_HEIGHT } from '@/lib/constants';

interface MainLayoutProps {
    children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
    const [collapsed, setCollapsed] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    const sidebarWidth = collapsed ? SIDEBAR_COLLAPSED_WIDTH : SIDEBAR_WIDTH;

    return (
        <div className="min-h-screen bg-black text-white">
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
                className="transition-all duration-300 md:ml-0"
                style={{
                    marginLeft: sidebarWidth,
                    paddingTop: HEADER_HEIGHT,
                }}
            >
                {/* Add responsive margin on mobile (no sidebar offset) */}
                <style jsx>{`
          @media (max-width: 767px) {
            main {
              margin-left: 0 !important;
            }
          }
        `}</style>
                <div className="max-w-[1400px] mx-auto p-6">
                    {children}
                </div>
            </main>
        </div>
    );
}
