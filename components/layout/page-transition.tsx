'use client';

import React, { useEffect, useState } from 'react';

interface PageTransitionProps {
    children: React.ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Trigger enter animation on mount
        const frame = requestAnimationFrame(() => setMounted(true));
        return () => cancelAnimationFrame(frame);
    }, []);

    return (
        <div
            className="transition-all duration-300 ease-out"
            style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateY(0)' : 'translateY(6px)',
            }}
        >
            {children}
        </div>
    );
}
