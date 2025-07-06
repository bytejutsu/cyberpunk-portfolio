import React from 'react';

const CyberToggle = ({ enabled, onToggle }) => (
    <div
        onClick={onToggle}
        className={`cursor-pointer w-16 h-8 border-2 rounded-full p-1 transition 
               duration-300 ${enabled ? 'bg-pink-600' : 'bg-black'} border-pink-500 
               shadow-[0_0_10px_#ff00c8]`}
    >
        <div
            className={`h-6 w-6 rounded-full bg-white transition-transform duration-300 ${
                enabled ? 'translate-x-8' : ''
            }`}
        />
    </div>
);


export default CyberToggle;
