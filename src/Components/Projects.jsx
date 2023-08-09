import React, { useState, useEffect } from "react";
import todo_img from "../assets/to-do (1).png"
import countries_img from "../assets/to-do (2).png"
import fylo_img from "../assets/to-do (3).png"
import azubi_img from "../assets/App.jpg"

export const Projects = () => {

    const [hoveredImg, setHoveredImg] = useState(null);

    const projectsData = [
        { img: azubi_img, title: "AZUBI SHOP APPLICATION", technologies: ["JavaScript", "HTML", "CSS", "REACT"], projectUrl: "https://azubi-shop-app.netlify.app/", codeUrl: "https://github.com/GHZPro-boop/azubi-shop-app" },
        { img: todo_img, title: "TO-DO APPLICATION", technologies: ["JavaScript", "HTML", "CSS", "REACT"], projectUrl: "https://naigutaallan-todo-app.netlify.app/", codeUrl: "https://github.com/GHZPro-boop/todo-app" },
        { img: countries_img, title: "COUNTRY APP - REST COUNTRIES API", technologies: ["JavaScript", "HTML", "CSS", "REACT"], projectUrl: "https://naigutaallan-countries-api.netlify.app/", codeUrl: "https://github.com/GHZPro-boop/countries_api_app" },
        { img: fylo_img, title: "FYLO LANDING PAGE", technologies: ["JavaScript", "HTML", "CSS", "REACT"], projectUrl: "https://ghzpro-boop-fylo-landing-page.netlify.app/", codeUrl: "https://github.com/GHZPro-boop/fylo-landing-page" },
    ];

    const handleImageHover = (index) => {
        setHoveredImg(index);
    };

    const handleImageLeave = () => {
        setHoveredImg(null);
    };

    const openProjectLink = (projectUrl) => {
        window.open(projectUrl, "_blank");
    };

    const openCodeLink = (codeUrl) => {
        window.open(codeUrl, "_blank");
    };

    return (
        <div>
            <div className="flex items-center justify-between text-white mx-[5%] mt-[15%]">
                <h2 className={`text-[40px] leading-[40px] tracking-[-1.13636px] font-bold`} >Projects</h2>
                <p className="text-[16px] leading-[26px] tracking-[2.28571px] font-bold hover:text-[#4EE1A0] cursor-pointer">
                    <a href="#contact">CONTACT ME</a></p>
            </div>
            <div className="flex items-center">
                <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-20 mx-[10%] mt-[5%]">
                    {projectsData.map((project, index) => (
                        <div
                            key={index}
                            className={`relative ${hoveredImg === index ? 'dim-image' : ''}`}
                            onMouseEnter={() => handleImageHover(index)}
                            onMouseLeave={handleImageLeave}
                        >
                            <img src={project.img} alt={project.title} />
                            {hoveredImg === index && (
                                <div className="absolute top-0 left-0 w-full h-[80%] flex flex-col items-center justify-center bg-black bg-opacity-50">
                                    <button
                                        onClick={() => openProjectLink(project.projectUrl)}
                                        className="text-white text-[16px] leading-[26px] tracking-[2.28571px] font-bold mb-3
                                         hover:text-[#4EE1A0] hover:underline cursor-pointer"
                                    >
                                        View Project
                                    </button>
                                    <button
                                        onClick={() => openCodeLink(project.codeUrl)}
                                        className="text-white text-[16px] leading-[26px] tracking-[2.28571px] font-bold 
                                        hover:text-[#4EE1A0] hover:underline cursor-pointer"
                                    >
                                        View Code
                                    </button>
                                </div>
                            )}
                            <h3 className="text-[24px] leading-[32px] text-white font-bold drop-shadow-[0px 4px 4px rgba(0, 0, 0, 0.25)] my-[3%]">{project.title}</h3>
                            <div className="flex gap-5 text-[18px] leading-[28px] font-semibold text-[#D9D9D9]">
                                {project.technologies.map((tech, idx) => (
                                    <p key={idx}>{tech}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}