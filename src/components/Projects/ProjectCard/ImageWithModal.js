'use client';

import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import Image from 'next/image';
import SvgCyberEl72 from './SvgCyberEl72';
import CyberpunkButton from "@/components/cyberpunk/CyberpunkButton/CyberpunkButton"; // adjust path as needed

const ImageWithModal
    = ({ imageUrl, name }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Clickable Image */}
            <div onClick={() => setIsOpen(true)} className="cursor-pointer">
                <SvgCyberEl72
                    className="cyber-el72 flex items-center justify-center p-4"
                    style={{
                        width: '100%',
                        maxWidth: '100%',
                        height: 'auto',
                    }}
                    imageUrl={imageUrl}
                />
            </div>

            {/* Modal using Headless UI Dialog */}
            <Dialog
                open={isOpen}
                onClose={() => setIsOpen(false)}
                className="relative z-50"
            >
                {/* Backdrop */}
                <div className="fixed inset-0 bg-black/50" aria-hidden="true" />

                {/* Modal Panel */}
                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <Dialog.Panel
                        className="mx-auto w-full md:w-[50vw] h-[80vh] max-w-none bg-white p-4 flex flex-col relative"
                        style={{
                            clipPath: 'polygon(10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%, 0% 10%)',
                            boxShadow: '0 0 20px rgba(0, 255, 255, 0.6)',
                            border: '8px solid rgba(0, 255, 255, 0.6)'
                        }}
                    >
                        <Dialog.Title className="text-lg font-bold text-black mb-2 font-sans2 text-right">
                            {name}
                        </Dialog.Title>

                        {/* Image container */}
                        <div className="flex-grow relative">
                            <Image
                                src={imageUrl}
                                alt={name}
                                fill
                                style={{ objectFit: 'fill', margin: '2px', padding: '10px' }}
                            />
                        </div>

                        {/* Close Button */}
                        <div className="flex flex-row justify-center font-sans2 mt-4">
                            <CyberpunkButton
                                onClick={() => setIsOpen(false)}
                                buttonStyles={{ width: '50%', backgroundColor: 'black' }}
                            >
                                Close
                            </CyberpunkButton>
                        </div>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </>
    );
};

export default ImageWithModal;
