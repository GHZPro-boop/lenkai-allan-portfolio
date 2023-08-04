import React from "react";
import { FaLinkedin, FaDiscord, FaGithubSquare } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";

export const Footer = () => {

    const phoneNumber = '+254726671120';
    const email = 'naigutaallan@gmail.com';

    const copyPhoneNumberToClipboard = () => {
        navigator.clipboard.writeText(phoneNumber).then(() => {
            alert('Phone number copied to clipboard!');
        });
    };

    const copyEmailAndCompose = () => {
        // Copy email to clipboard
        navigator.clipboard.writeText(email).then(() => {
            alert('Email address copied to clipboard!');
            // Compose email
            window.location.href = `mailto:${email}`;
        });
    };

    const sendContactMessage = () => {
        const message = 'This is a test message from the website.';
        const targetEmail = 'naigutaallan@gmail.com';

        alert(`Message has been sent to ${targetEmail}:\n${message}`);
    };

    return (
        <div>
            <div className="bg-[#242424] mt-[10%] pb-9" id="contact">
                <div className="mx-[10%]">
                    <div className="flex flex-col lg:flex-row gap-8 lg:justify-between">
                        <div className="flex flex-col gap-8 mt-[5%]">
                            <h2 className="text-[40px] leading-[40px] text-white tracking-[-1.13636px] font-bold text-center lg:text-left">Contact</h2>
                            <p className="text-[16px] text-[#D9D9D9] leading-[26px] font-semibold text-center lg:text-left">
                                I would love to hear about your project and how I <br />
                                could help. Please fill in the form, and I'll get back <br />
                                to you as soon as possible.</p>
                            <div className="text-center text-white mt-5 lg:text-left">
                                <p className="text-[16px]">Email: <span onClick={copyEmailAndCompose}
                                    className="cursor-pointer hover:text-blue-600">{email}</span></p>
                                <p className="text-[16px]">Cell: <span onClick={copyPhoneNumberToClipboard}
                                    className="cursor-pointer hover:text-blue-600">{phoneNumber}</span></p>
                                <p className='text-[16px]'>Address: 00511, Ongata Rongai</p>
                                <p className='text-[16px]'>Kajiado County, Kenya</p>
                            </div>
                        </div>
                        <div className="mt-[5%] lg:w-[350px] text-white text-center font-semibold lg:text-right">
                            <form action="" className="flex flex-col gap-5">
                                <input type="text" placeholder="NAME" className="bg-[#252525] mix-blend-normal opacity-25 text-[16px] leading-[26px] tracking-[-0.222222px] 
                                relative -right-5" />
                                <hr className="border-gray-400" />
                                <input type="text" placeholder="EMAIL" className="bg-[#252525] mix-blend-normal opacity-25 text-[16px] leading-[26px] tracking-[-0.222222px] 
                                relative -right-5" />
                                <hr className="border-gray-400" />
                                <textarea id="message" cols="30" rows="10" placeholder="MESSAGE" className="bg-[#252525] mix-blend-normal opacity-25 text-[16px] leading-[26px] 
                                tracking-[-0.222222px] relative -right-5"></textarea>
                                <hr className="border-gray-400" />
                            </form>
                            <div className="flex justify-end text-[#FFFFFF]">
                                <button onClick={sendContactMessage} className="text-[16px] leading-[26px] tracking-[2.28571px] mt-[5%] mb-[10%] 
                  font-bold hover:underline">SEND MESSAGE</button>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mt-[10%]">
                        <h1 className="text-[24px] text-white leading-[32px] tracking-[-0.333333px] font-bold drop-shadow-lg">allanlenkai</h1>
                        <div className="flex text-white gap-5">
                            <a href="https://www.linkedin.com/in/naiguta-allan/" target="_blank" rel="noopener noreferrer"><FaLinkedin className='h-[19.2px] w-[19.2px]' /></a>
                            <a href="https://github.com/GHZPro-boop"><FaGithubSquare className='h-[19.2px] w-[19.2px]' /></a>
                            <a href="https://discord.com/channels/@me"><FaDiscord className='h-[19.2px] w-[19.2px]' /></a>
                            <a href="https://www.frontendmentor.io/profile/GHZPro-boop"><SiFrontendmentor className='h-[19.2px] w-[19.2px]' /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}