import React from "react";
import TypeWriteEffect from "./Helper/TypeWriteEffect";
import Image from "next/image";

const Home = () => {
    const handleDownloadCV = () => {
        try {
            const link = document.createElement("a");
            link.href = "/files/cv_nabil_saied_alternance.pdf";
            link.download = "cv_nabil_saied_alternance.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error("Erreur lors du téléchargement du CV:", error);
            alert("Une erreur est survenue lors du téléchargement du CV. Veuillez réessayer.");
        }
    };

    const handleHireMe = () => {
        // Redirect to the contact section
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div id="home" className="w-[100vw] pt-[4vh] md:pt-[12vh] h-[85vh] md:h-[100vh] custom-bg text-white bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            <div className="flex justify-center flex-col w-[80%] h-[100%] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[3rem] items-center">
                    <div className="animate-fade-in">
                        <h1 className="text-[30px] text-white mb-[1.3rem] font-light tracking-wider">Welcome To My World</h1>
                        <div>
                            <h1 className="xl:text-[50px] lg:text-[40px] sm:text-[35px] text-[25px] font-bold leading-[2.4rem] text-white">
                                Hi, I&apos;m <span className="text-blue-400 relative">
                                    Saied Nabil
                                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                                </span>
                            </h1>
                            <TypeWriteEffect />
                        </div>
                        <p className="mt-[1.2rem] text-[15px] md:text-[17px] text-gray-300 leading-relaxed">
                            Étudiant en Bachelor Informatique avec une expertise en développement web et mobile.
                        </p>
                        <div className="mt-[2rem] flex items-center space-x-6">
                            <button
                                onClick={handleHireMe}
                                className="group relative flex h-[50px] w-40 items-center justify-center font-semibold overflow-hidden bg-blue-500 text-white shadow-2xl rounded-lg transition-all duration-300 hover:shadow-blue-500/50 hover:scale-105"
                            >
                                <span className="relative z-10 flex items-center">
                                    Contacter-Moi
                                    <svg className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </span>
                            </button>
                            <button
                                onClick={handleDownloadCV}
                                className="group relative flex h-[50px] w-40 items-center justify-center font-semibold overflow-hidden bg-gray-700 text-white shadow-2xl rounded-lg transition-all duration-300 hover:shadow-gray-700/50 hover:scale-105"
                            >
                                <span className="relative z-10 flex items-center">
                                    Download CV
                                    <svg className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="rounded-full border-4 border-blue-400 overflow-hidden w-[500px] h-[500px] shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-blue-500/30">
                            <Image
                                src="/images/57205f19-a74b-4db2-9e14-b6c2085a6f81.jpeg"
                                alt="Nabil Saied"
                                width={800}
                                height={10}
                                className="object-cover transition-transform duration-700 hover:scale-110"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;