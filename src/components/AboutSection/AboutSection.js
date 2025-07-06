import { MdOutlineWavingHand } from "react-icons/md";
import CyberpunkButton from "@/components/cyberpunk/CyberpunkButton/CyberpunkButton";
import styles from "@/app/Globals.module.css";
import getAssetPath from "@/utils/getAssetPath";
import Image from "next/image";
import CyberProgressBar from "@/components/cyberpunk/CyberProgressBar/CyberProgressBar";
import {NeonDivider} from "@/components/cyberpunk/NeonDivider/NeonDivider";

const AboutSection = () => {
    return (
        <section
            id="about"
            className="bg-tertiary max-w-screen relative py-20 lg:h-screen lg:max-h-screen"
        >
            <div
                className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
                style={{ height: "80px" }}
            >
                <svg
                    className="absolute -bottom-1 overflow-hidden"
                    preserveAspectRatio="none"
                    version="1.1"
                    viewBox="0 0 2560 100"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <polygon className="text-tertiary fill-current" points="2560 0 2560 100 0 100"></polygon>
                </svg>
            </div>

            <div className="grid lg:grid-cols-2 lg:grid-rows-1 grid-rows-2 grid-cols-1 h-full gap-2">
                <div className="h-full w-full">
                    <div className="flex h-full w-full flex-row items-start justify-start">
                        <NeonDivider orientation="vertical" thick="8"/>

                        <div className="relative h-full w-full max-w-xs sm:max-w-md md:max-w-[50%]">
                            <div className="flex h-full flex-col justify-between items-center">
                                <Image
                                    width={250}
                                    height={100}
                                    priority
                                    alt="Dhia Nabli"
                                    src={getAssetPath('./avatar.jpg')}
                                    className="object-cover [clip-path:polygon(0%_0%,_90%_0%,_100%_10%,_100%_100%,_0%_100%)]"
                                    style={{
                                        width: '80%',
                                        height: 'auto',
                                    }}
                                />

                                <NeonDivider variant="secondary" thick="4"/>
                                <NeonDivider variant="secondary" thick="4"/>
                            </div>
                        </div>

                        <NeonDivider orientation="vertical" thick="8"/>
                    </div>
                </div>


                {/* About Me Section */}
                <div
                    className="lg:col-start-2 lg:col-end-3 row-start-1 row-end-2 col-span-full">
                    <div className="flex flex-wrap justify-center text-center mb-24">
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
                                boxShadow:
                                    '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)', // shadow-lg
                            }}
                        >
                            <MdOutlineWavingHand className="text-4xl"/>
                        </CyberpunkButton>
                        <div className="w-full lg:w-6/12 px-4">
                            <h2 className={`text-5xl lg:text-7xl text-center text-[#00F0FF] font-sans ${styles.neonText}`}>
                                Hi, I&apos;m Dhia
                            </h2>
                            <p className="text-lg leading-relaxed m-4 text-gray-200 font-bold font-mono">
                                I&apos;m a <span className="font-bold font-pixel text-3xl">software engineer</span> with
                                a deep passion for building robust
                                software
                                and
                                immersive <span className="font-bold font-pixel text-xl">video games</span>.
                            </p>
                            <p className="text-lg leading-relaxed m-4 text-gray-200 font-bold font-mono">
                                With my <span className="font-bold font-pixel text-2xl">extensive experience</span> I
                                love turning concepts into
                                reality through <span
                                className="font-bold font-pixel text-2xl">Code</span>.
                            </p>

                            <CyberProgressBar/>

                        </div>
                        <div className="w-[4rem] h-[4rem]"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
