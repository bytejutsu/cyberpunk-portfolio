import React from "react";
import Image from "next/image";
import getAssetPath from "@/utils/getAssetPath";
import { FaFacebookSquare, FaFacebookMessenger } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";

const Footer = () => {
    const date = new Date().getFullYear();

    return (
        <footer className="relative bg-primary pt-8 pb-6">
            <div
                className="bottom-auto top-1 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
                style={{height: "5rem"}}
            >
                <svg
                    className="absolute bottom-0 overflow-hidden"
                    preserveAspectRatio="none"
                    version="1.1"
                    viewBox="0 0 2560 100"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <polygon
                        className="fill-current text-primary"
                        points="2560 0 2560 100 0 100"
                    />
                </svg>
            </div>
            <div className="mx-auto">
                <div className="flex flex-col">
                    <div className="flex flex-col justify-around items-center lg:flex-row">
                        <div className="lg:w-1/3"></div>
                        <div className="flex flex-col justify-between h-full lg:w-1/3">
                            <div className="w-full px-4 text-center">
                                <h4 className="text-5xl font-bold text-black font-mono">
                                    Keep in Touch
                                </h4>
                                <h5 className="text-lg mt-4 mb-2 text-black font-mono">
                                    Stay updated with our latest news
                                </h5>
                                <div className="flex justify-center space-x-16 my-12">
                                    <a
                                        href="https://facebook.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Facebook"
                                    >
                                        <FaFacebookSquare
                                            className="text-black text-3xl hover:text-white transition duration-300"/>
                                    </a>
                                    <a
                                        href="https://linkedin.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="LinkedIn"
                                    >
                                        <ImLinkedin
                                            className="text-black text-3xl hover:text-white transition duration-300"/>
                                    </a>
                                    <a
                                        href="https://messenger.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Facebook Messenger"
                                    >
                                        <FaFacebookMessenger
                                            className="text-black text-3xl hover:text-white transition duration-300"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row w-1/2 lg:w-1/3 justify-center">
                            <div className="w-2/3 lg:w-1/2">
                                <Image
                                    width={250}
                                    height={250}
                                    style={{
                                        width: "100%",
                                        height: "auto", // Maintain aspect ratio
                                    }}
                                    src={getAssetPath('./logo-tiger.png')}
                                    alt="Logo"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-black mx-0"/>
                <div className="flex flex-wrap items-center justify-center">
                    <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div className="text-sm text-black font-semibold py-1">
                            Copyright © {date} by ByteJutsu
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
