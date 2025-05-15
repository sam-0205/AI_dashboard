import React from 'react'
import { Typewriter } from 'react-simple-typewriter';
import { useState, useEffect } from 'react';

const Header = () => {
    const username = "Alex";
    const [showLine1, setShowLine1] = useState(false);
    const [showLine2, setShowLine2] = useState(false);
    // const [showLine3, setShowLine3] = useState(false);

    useEffect(() => {
        setShowLine1(true);
        const line2Timer = setTimeout(() => setShowLine2(true), 1500); // after line 2 finishes
        // const line3Timer = setTimeout(() => setShowLine3(true), 2000); // after line 2 finishes

        return () => {
            clearTimeout(line2Timer);
            // clearTimeout(line3Timer);
        };
    }, []);

    return (
        <header className="bg-gradient-to-r from-slate-800 via-gray-800 to-slate-900 text-white p-6 rounded-lg shadow-lg border-b border-slate-700 h-30 flex flex-col justify-center">

            <p className="text-2xl mt-2 min-h-[2rem]">
                {showLine1 && (
                    <Typewriter
                        words={[`Welcome back, ${username}.`]}
                        cursor={false}
                        typeSpeed={50}
                    />
                )}
            </p>

            <p className="text-sm mt-2 min-h-[1.5rem]">
                {showLine2 && (
                    <Typewriter
                        words={[`System status: Operational.`]}
                        cursor={false}
                        typeSpeed={50}
                    />
                )}
            </p>
        </header>
    )
}

export default Header

// Welcome to your AI Dashboard, Alex! Let’s get started.