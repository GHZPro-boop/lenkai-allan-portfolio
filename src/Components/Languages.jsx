import React, { useState, useEffect } from "react";

export const Languages = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const languagesSection = document.getElementById('languages-section');
            if (languagesSection) {
                const topPosition = languagesSection.getBoundingClientRect().top;
                const isVisible = topPosition < window.innerHeight - 100;
                setIsVisible(isVisible);
            }
        };

        window.addEventListener('scroll', handleScroll);

        //To clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <hr className='mx-[5%] lg:border-2' />
            <div id="languages-section" className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[3%] lg:mt-[8%] md:mt-[8%] gap-10 md:gap-15 lg:gap-20 
            text-center md:text-left lg:text-left text-white mx-[10%] ${isVisible ? 'fade-in' : ''}`}>
                <div className="flex flex-col gap-3">
                    <h3 className="text-[32px] md:text-[48px] lg:text-[48px] font-bold tracking-[-1px] md:tracking-[-1.5px] lg:tracking-[-1.5px] 
                    leading-[40px] md:leading-[56px] lg:leading-[56px]">HTML</h3>
                    <p className="text-[16px] md:text-[18px] lg:text-[18px] font-semibold text-[#D9D9D9] leading-[26px]">1 year experience</p>
                </div>
                <div className="flex flex-col gap-3">
                    <h3 className="text-[32px] md:text-[48px] lg:text-[48px] font-bold tracking-[-1px] md:tracking-[-1.5px] lg:tracking-[-1.5px] 
                    leading-[40px] md:leading-[56px] lg:leading-[56px]">JavaScript</h3>
                    <p className="text-[16px] md:text-[18px] lg:text-[18px] font-semibold text-[#D9D9D9] leading-[26px]">1 year experience</p>
                </div>
                <div className="flex flex-col gap-3">
                    <h3 className="text-[32px] md:text-[48px] lg:text-[48px] font-bold tracking-[-1px] md:tracking-[-1.5px] lg:tracking-[-1.5px] 
                    leading-[40px] md:leading-[56px] lg:leading-[56px]">CSS</h3>
                    <p className="text-[16px] md:text-[18px] lg:text-[18px] font-semibold text-[#D9D9D9] leading-[26px]">1 year experience</p>
                </div>
                <div className="flex flex-col gap-3">
                    <h3 className="text-[32px] md:text-[48px] lg:text-[48px] font-bold tracking-[-1px] md:tracking-[-1.5px] lg:tracking-[-1.5px] 
                    leading-[40px] md:leading-[56px] lg:leading-[56px]">Tailwind CSS</h3>
                    <p className="text-[16px] md:text-[18px] lg:text-[18px] font-semibold text-[#D9D9D9] leading-[26px]">1 year experience</p>
                </div>
                <div className="flex flex-col gap-3">
                    <h3 className="text-[32px] md:text-[48px] lg:text-[48px] font-bold tracking-[-1px] md:tracking-[-1.5px] lg:tracking-[-1.5px] 
                    leading-[40px] md:leading-[56px] lg:leading-[56px]">React.js</h3>
                    <p className="text-[16px] md:text-[18px] lg:text-[18px] font-semibold text-[#D9D9D9] leading-[26px]">1 year experience</p>
                </div>
                <div className="flex flex-col gap-3">
                    <h3 className="text-[32px] md:text-[48px] lg:text-[48px] font-bold tracking-[-1px] md:tracking-[-1.5px] lg:tracking-[-1.5px] 
                    leading-[40px] md:leading-[56px] lg:leading-[56px]">Figma UI/UX</h3>
                    <p className="text-[16px] md:text-[18px] lg:text-[18px] font-semibold text-[#D9D9D9] leading-[26px]">1 year experience</p>
                </div>
            </div>
            <hr className='mx-[5%] mt-8 lg:mt-12' />
        </div>
    );
}