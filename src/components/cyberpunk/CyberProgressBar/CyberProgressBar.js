import React, { useEffect, useState } from 'react';

const CyberProgressBar = ({ speed = 30 }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
        }, speed); // speed in ms per increment
        return () => clearInterval(interval);
    }, [speed]);

    return (
        <div className="w-full px-4 py-2">
            <div className="w-full h-6 bg-black rounded-md border-2 border-pink-600 relative shadow-[0_0_12px_#ff00c8] overflow-hidden">
                <div
                    className="h-full bg-gradient-to-r from-pink-500 via-fuchsia-600 to-purple-600 rounded-md shadow-[0_0_25px_#ff00c8]"
                    style={{
                        width: `${progress}%`,
                        transition: 'width 0.1s linear',
                    }}
                ></div>
                <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs text-pink-300 font-mono">
          {progress}%
        </span>
            </div>
        </div>
    );
};

export default CyberProgressBar;

