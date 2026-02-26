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
        <div className="relative min-h-screen bg-[#050505] text-white">
            {/* Bubbly radial gradient overlays */}
            <div
                className="pointer-events-none fixed inset-0 -z-20"
                style={{
                    backgroundColor: '#050505',
                    backgroundImage: [
                        'radial-gradient(ellipse 65% 90% at 12% -10%, rgba(255,255,255,0.11), transparent 62%)',
                        'radial-gradient(ellipse 45% 65% at 88% -20%, rgba(120,120,120,0.08), transparent 70%)',
                    ].join(', '),
                }}
            />
            {/* Dot pattern overlay */}
            <div
                className="pointer-events-none fixed inset-0 -z-10 opacity-80"
                style={{
                    backgroundImage: [
                        'radial-gradient(circle at 25% 25%, rgba(250,250,250,0.08) 0.65px, transparent 1px)',
                        'radial-gradient(circle at 75% 75%, rgba(250,250,250,0.08) 0.65px, transparent 1px)',
                    ].join(', '),
                    backgroundSize: '12px 12px',
                }}
            />
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
