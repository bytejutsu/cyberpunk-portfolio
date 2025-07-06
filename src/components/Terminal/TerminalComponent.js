'use client';

import { useEffect, useRef } from 'react';
import { Terminal } from 'xterm';
import 'xterm/css/xterm.css';

export default function TerminalComponent() {
    const terminalRef = useRef(null);
    const xterm = useRef(null);
    const input = useRef('');

    const WELCOME_LINES = [
        '┌ Welcome ─────────────────────────────────────────────────────────────┐',
        '│                                                                      |',
        '│  \x1b[1mWelcome to the Matrix.\x1b[0m                                              |',
        '│  Type \x1b[32m`help`\x1b[0m to see available commands.                              |',
        '│                                                                      |',
        '│  Commands include:                                                   |',
        '│    \x1b[32mnode\x1b[0m     → Learn about Node.js                                    |',
        '│    \x1b[32mreact\x1b[0m    → Learn about React                                      |',
        '│    \x1b[32mnext\x1b[0m     → Learn about Next.js                                    |',
        '│    \x1b[32mclear\x1b[0m    → Reset the terminal                                     |',
        '│    \x1b[32mecho\x1b[0m     → Print back your message.                               |',
        '│                                                                      |',
        '└──────────────────────────────────────────────────────────────────────',
    ];


    const printWelcome = () => {
        WELCOME_LINES.forEach(line => xterm.current.writeln(line));
    };

    const prompt = () => {
        xterm.current.write('\r\n$ ');
        input.current = '';
    };

    const commandMap = {
        help: () => [
            'Available commands:',
            '  node   - Learn about Node.js',
            '  react  - Learn about React',
            '  next   - Learn about Next.js',
            '  clear  - Clear the terminal screen',
            '  echo   - Echo back your message (e.g., echo Hello)',
        ],
        node: () => [
            'Node.js is a JavaScript runtime built on Chrome\'s V8 engine.',
            'It allows you to run JavaScript server-side.',
        ],
        react: () => [
            'React is a JavaScript library for building user interfaces.',
            'It uses a virtual DOM and component-based architecture.',
        ],
        next: () => [
            'Next.js is a React framework for building fast web apps.',
            'It supports SSR, API routes, and static site generation.',
        ],
        clear: () => 'HARD_RESET',
        echo: (args) => [args.join(' ') || ''],
    };

    useEffect(() => {
        if (!xterm.current) {
            xterm.current = new Terminal({
                cursorBlink: true,
                theme: {
                    background: '#000000',
                    foreground: '#00FF00',
                },
                fontFamily: 'monospace',
                fontSize: 14,
            });

            xterm.current.open(terminalRef.current);

            printWelcome();
            prompt();

            xterm.current.onKey(({ key, domEvent }) => {
                const code = domEvent.code;
                const char = key;

                if (code === 'Enter') {
                    const commandLine = input.current.trim();
                    xterm.current.write('\r\n');

                    if (commandLine) {
                        const [cmd, ...args] = commandLine.split(' ');
                        const handler = commandMap[cmd.toLowerCase()];

                        if (handler) {
                            const output = handler(args);

                            if (output === 'HARD_RESET') {
                                xterm.current.reset(); // fully reset terminal
                                printWelcome();
                            } else {
                                output.forEach(line => xterm.current.writeln(line));
                            }
                        } else {
                            xterm.current.writeln(`Unknown command: ${cmd}`);
                        }
                    }

                    prompt();
                } else if (code === 'Backspace') {
                    if (input.current.length > 0) {
                        input.current = input.current.slice(0, -1);
                        xterm.current.write('\b \b');
                    }
                } else if (char.length === 1 && !domEvent.ctrlKey && !domEvent.metaKey) {
                    input.current += char;
                    xterm.current.write(char);
                }
            });
        }
    }, []);

    return (
        <div
            ref={terminalRef}
            style={{
                width: '100%',
                height: '100vh',
                backgroundColor: 'black',
            }}
        />
    );
}
