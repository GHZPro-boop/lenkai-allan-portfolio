import React from "react";

export const Section2 = () => {

    return (
        <div className="lg:absolute -top-[-20%] md:absolute -top-[-20%]">
            <h1 className="text-[40px] lg:text-[88px] leading-[100%] tracking-[-1.13636px] lg:tracking-[-2.5px] text-center lg:relative 
            lg:text-left md:text-left drop-shadow-md font-bold">
                Nice to meet you!
                <br />I'm <span className='underline hover:text-[#4EE1A0]'>Allan Naiguta</span>.</h1>
            <p className="text-[16px] lg:text-[18px] text-center lg:text-left md:text-left leading-[162%] lg:leading-[156%] mt-5 
            font-semibold text-[#D9D9D9]">
                Based in Kenya, I'm a front-end developer
                <br />passionate about building accessible web apps <br />
                that users love.</p>
            <p className="text-[16px] text-[#FFFFFF] text-center lg:text-left md:text-left tracking-[2.28571px] leading-[26px] font-bold mt-[8%] 
            hover:underline hover:text-green-300 cursor-pointer contact-link"><a href="#contact">CONTACT ME</a></p>
        </div>
    );
}