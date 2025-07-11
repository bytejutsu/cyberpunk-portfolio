import React from 'react';
import CyberpunkButton from "@/components/cyberpunk/CyberpunkButton/CyberpunkButton";
import EmblaCarousel from "@/components/Projects/EmblaCarousel/EmblaCarousel";
import styles from "@/app/Globals.module.css";
import { FaDraftingCompass } from "react-icons/fa";
import getAssetPath from "@/utils/getAssetPath";

const ProjectSection = () => {

    const OPTIONS = { loop: true }
    const PROJECTS_COUNT = 6
    const PROJECTS = [
        {
            index: 0,
            name: "Arcade Adventures",
            description: "an arcade game made that can be run on the browser",
            imageUrl: getAssetPath('./projects/mockup_1.jpg'),
            demoAvailable: true,
            demoUrl: 'https://www.google.com/',
            githubUrl: 'https://github.com/',
            videoUrl: '',
        },
        {
            index: 1,
            name: "Galaxy Shooter",
            description: "a 2D unity game of a spaceship shooting enemies",
            imageUrl: getAssetPath('./projects/mockup_2.jpg'),
            demoAvailable: true,
            demoUrl: 'https://www.google.com/',
            githubUrl: '',
            videoUrl: 'https://www.youtube.com/',
        },
        {
            index: 2,
            name: "Quick POS",
            description: "a POS system for Prestashop. Simple to use and complete in features",
            imageUrl: getAssetPath('./projects/mockup_3.jpg'),
            demoAvailable: false,
            demoUrl: 'https://www.google.com/',
            githubUrl: '',
            videoUrl: '',
        },
        {
            index: 3,
            name: "Tax Stamp",
            description: "a Prestashop module to add a tax stamp in order to comply with tax regulations",
            imageUrl: getAssetPath('./projects/mockup_4.jpg'),
            demoAvailable: false,
            demoUrl: 'https://www.google.com/',
            githubUrl: '',
            videoUrl: '',
        },
        {
            index: 4,
            name: "Africoin",
            description: "a concept of a cryptocurrency using the blockchain technology in python",
            imageUrl: getAssetPath('./projects/mockup_5.jpg'),
            demoAvailable: true,
            demoUrl: 'https://www.google.com/',
            githubUrl: 'https://github.com/',
            videoUrl: '',
        },
        {
            index: 5,
            name: "Rocket Boost",
            description: "Terminal game made with unity where you guide a rocket through various obstacles",
            imageUrl: getAssetPath('./projects/mockup_6.jpg'),
            demoAvailable: true,
            demoUrl: 'https://www.google.com/',
            githubUrl: 'https://github.com/',
            videoUrl: 'https://www.youtube.com/',
        },
    ]

    return (
        <section id="projects" className="bg-gray-900 relative py-20">
            <div
                className="absolute inset-0 bg-no-repeat bg-contain opacity-10"
                style={{
                    backgroundImage: "url('./pcb_background.png')",
                    backgroundPosition: "top right",  // Crop to bottom-right quarter
                    backgroundSize: "50% 100%", // Zoom in to show only a quarter
                    filter: "invert(85%) sepia(100%) saturate(500%) hue-rotate(20deg)" // Approximate yellow color for non-inline SVGs
                }}
            ></div>
            {/* Mirrored Top Left Corner (Flipped Both Ways) */}
            <div
                className="absolute inset-0 bg-no-repeat bg-contain opacity-10"
                style={{
                    backgroundImage: "url('./pcb_background.png')",
                    backgroundPosition: "top right",
                    backgroundSize: "50% 100%",
                    transform: "scale(-1, -1)", // Flip both horizontally and vertically
                    filter: "invert(85%) sepia(100%) saturate(500%) hue-rotate(20deg)"
                }}
            ></div>
            <div className="flex flex-wrap justify-center text-center mb-6 z-1">
                <CyberpunkButton
                    buttonStyles={{
                        color: '#000000', // text-black
                        padding: '0.75rem', // p-3
                        textAlign: 'center', // text-center
                        display: 'inline-flex', // inline-flex
                        alignItems: 'center', // items-center
                        justifyContent: 'center', // justify-center
                        width: '4rem', // w-16
                        height: '4rem', // h-16
                        marginBottom: '1.5rem', // mb-6
                        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)', // shadow-lg
                    }}
                >
                    <FaDraftingCompass className="text-3xl"/>
                </CyberpunkButton>
                <div className="w-full lg:w-6/12 px-4">
                    <h2 className={`text-7xl text-[#00F0FF] font-semibold ${styles.neonText} font-sans`}>
                        Projects
                    </h2>
                </div>
                <div className="w-[4rem] h-[4rem]"></div>
            </div>
            <EmblaCarousel slides={PROJECTS} options={OPTIONS}/>
        </section>
    );
};

export default ProjectSection;
