import React from "react";
import { FaLinkedin, FaDiscord, FaGithubSquare } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";
import myphoto from "../assets/My project-1 (1).png";

export const Section1 = () => {

    return (
        <div>
            <div className='flex flex-col mx-[5%] lg:mx-[10%] md:mx-[20%] items-center pt-[20px] lg:flex-row md:flex-row lg:justify-between md:justify-between'>
                <div className='flex flex-col lg:flex-row md:flex-row justify-center items-center'>
                    <h1 className='lg:absolute md:absolute text-[24px] md:text-[32px] lg:text-[32px] text-[#FFFFFF] leading-[32px] 
                    lg:items-start md:items-start tracking-[-0.333333px] font-bold drop-shadow-[0px 4px 4px rgba(0, 0, 0, 0.25)]'>
                        allanlenkai</h1>
                    <div className="flex lg:absolute md:absolute text-[#FFFFFF] gap-10 lg:right-[10%] md:right-[10%] pt-6">
                        <a href="https://www.linkedin.com/in/naiguta-allan/" target="_blank" rel="noopener noreferrer" style={{ zIndex: '999' }}>
                            <FaLinkedin className='h-[17.6px] w-[19.68px]' />
                        </a>
                        <a href="https://github.com/GHZPro-boop" style={{ zIndex: '999' }}>
                            <FaGithubSquare className='h-[17.6px] w-[19.68px]' />
                        </a>
                        <a href="https://discord.com/channels/@me" style={{ zIndex: '999' }}>
                            <FaDiscord className='h-[17.6px] w-[19.68px]' />
                        </a>
                        <a href="https://www.frontendmentor.io/profile/GHZPro-boop" style={{ zIndex: '999' }}>
                            <SiFrontendmentor className='h-[17.6px] w-[19.68px]' />
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center lg:justify-end md:justify-end lg:w-[85%] md:w-[95%] 
            h-[383px] absolute md:absolute lg:absolute mx-[10%] lg:mx-[10%] md:mx-[5%]">
                <img src={myphoto} alt="my photo" className="h-[110%] w-[150%] md:w-[45%] lg:w-[30%] lg:absolute lg:top-[80px]" />
            </div>
        </div>
    );
}