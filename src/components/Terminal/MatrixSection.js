import dynamic from 'next/dynamic';

import React from "react";
import DigitalRain from "react-digital-rain";

const TerminalComponent = dynamic(() => import('./TerminalComponent'), {
    ssr: false,
});

export default function MatrixSection() {
    return (
        <section className="relative bg-black min-h-screen w-full flex justify-center items-center overflow-hidden">
            {/* Background Rain Layer */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="w-full h-full">
                    <DigitalRain/>
                </div>
            </div>

            {/* Terminal Container */}
            <div className="relative z-1 w-full max-w-5xl mx-4 my-8">
                <TerminalComponent />
            </div>
        </section>
    );
}
