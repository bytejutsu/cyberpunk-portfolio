import React from 'react';

const CyberConsole = ({ lines = [] }) => (
    <div className="bg-black text-green-400 font-mono p-4 rounded-md border border-green-500 shadow-[0_0_10px_#00ff00] h-64 overflow-y-auto">
        {lines.map((line, i) => (
            <div key={i}>{`> ${line}`}</div>
        ))}
    </div>
);

export default CyberConsole;