import React from 'react';
import { FaGithub, FaYoutube } from 'react-icons/fa'; // Import GitHub and YouTube icons
import styles from '@/app/Globals.module.css';
import getAssetPath from "@/utils/getAssetPath";
import ImageWithModal from "@/components/Projects/ProjectCard/ImageWithModal";


const ProjectCard = ({ name, description, imageUrl, demoAvailable, demoUrl, githubUrl, videoUrl }) => {
    return (
        <div className="p-10 text-center flex flex-row justify-center">
            <div className="relative flex w-full flex-col rounded-sm bg-[#FCEE09] text-gray-700 shadow-md">
                <ImageWithModal imageUrl={imageUrl} name={name} />
                <div className="p-6 relative">
                    {/* Title with Icons */}
                    <div className="flex justify-between items-center">
                        <h5 className="text-blue-gray-900 font-sans2 mb-2 block text-xl font-semibold leading-snug tracking-normal antialiased">
                            {name}
                        </h5>
                        <div className="flex gap-2">
                            {/* GitHub Icon */}
                            {githubUrl && (
                                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                                    <FaGithub className="text-black text-2xl hover:opacity-70 transition-opacity"/>
                                </a>
                            )}
                            {/* YouTube Icon */}
                            {videoUrl && (
                                <a href={videoUrl} target="_blank" rel="noopener noreferrer">
                                    <FaYoutube className="text-red-600 text-2xl hover:opacity-70 transition-opacity"/>
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Description */}
                    <p className="block font-sans2 text-base font-light leading-relaxed text-inherit antialiased line-clamp-3">
                        {description}
                    </p>
                </div>

                {/* Demo Button */}
                <div className="p-6 pt-0">
                    <div className="flex justify-center">
                        <div className="w-full lg:w-3/4">
                            <a
                                className={`${styles.cpBtn} font-sans2`}
                                href={demoAvailable ? demoUrl : '#'}
                                onClick={(e) => {
                                    if (!demoAvailable) {
                                        e.preventDefault();
                                        document.getElementById('contact').scrollIntoView({
                                            behavior: 'smooth',
                                            block: 'start',
                                        });
                                    } else {
                                        e.preventDefault();
                                        window.open(demoUrl, '_blank');
                                    }
                                }}
                                style={{
                                    borderImage: `url(${getAssetPath('./cp-btn-yellow.svg')}) 0 20 fill`,
                                    color: '#fcee0a'
                                }}
                            >
                                {demoAvailable ? 'Demo Link_' : 'Contact For Demo_'}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
