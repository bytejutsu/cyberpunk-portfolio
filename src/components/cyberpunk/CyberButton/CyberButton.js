import React from 'react';

const CyberButton = ({ text = "Start", onClick }) => (
    <button
        onClick={onClick}
        className="relative px-6 py-3 border-2 border-pink-500 text-pink-300 uppercase font-bold tracking-widest
               bg-black hover:bg-pink-600 transition duration-300 ease-in-out
               shadow-[0_0_15px_#ff00c8] hover:shadow-[0_0_30px_#ff00c8] neon-glow"
    >
        {text}
    </button>
);

export default CyberButton;