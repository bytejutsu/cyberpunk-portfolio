import Marquee from "react-fast-marquee";

import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiNestjs } from "react-icons/si";
import { RiVuejsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaDigitalOcean } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { FaWordpress } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { SiPhp } from "react-icons/si";
import { SiPhpstorm } from "react-icons/si";
import { FaLinux } from "react-icons/fa";
import { FaUnity } from "react-icons/fa6";
import { SiUnrealengine } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const technologies = [
    <FaReact key={0} />,
    <RiNextjsFill key={1} />,
    <SiNestjs key={2} />,
    <RiVuejsFill key={3} />,
    <SiMongodb key={4} />,
    <FaDigitalOcean key={5} />,
    <FaGitAlt key={6} />,
    <FaGithub key={7} />,
    <TbBrandReactNative key={8} />,
    <FaWordpress key={9} />,
    <FaLaravel key={10} />,
    <DiNodejs key={11} />,
    <SiPhp key={12} />,
    <SiPhpstorm key={13} />,
    <FaLinux key={14} />,
    <FaUnity key={15} />,
    <SiUnrealengine key={16} />,
    <VscVscode key={17} />,
];

const TechnologiesBanner = () => {
    return (
        <Marquee gradient={false} speed={60} style={{zIndex: 0}}>
            {technologies.map((Icon, index) => (
                <div key={index} className="mx-16 text-8xl text-white">
                    {Icon}
                </div>
            ))}
        </Marquee>
    );
};

export default TechnologiesBanner;
