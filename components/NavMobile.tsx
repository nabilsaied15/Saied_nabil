import React from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import Link from 'next/link';

interface Props {
    showNav: boolean;
    closeNav: () => void;
}

const NavMobile: React.FC<Props> = ({ closeNav, showNav }) => {
    const navOpenStyle = showNav ? "translate-x-0" : "-translate-x-full";

    return (
        <div>
            <div 
                className={`fixed top-0 left-0 bottom-0 w-screen h-screen bg-black opacity-70 z-[10000] 
                            transition-opacity duration-500 ${showNav ? "block" : "hidden"}`}
                onClick={closeNav}
            ></div>

            <div 
                className={`fixed top-0 left-0 h-full w-[60%] bg-gray-950 z-[10006] 
                            transition-transform duration-300 ${navOpenStyle}`}
            >
                <button 
                    className="absolute top-4 right-4 text-white"
                    onClick={closeNav}
                >
                    <XMarkIcon className="w-8 h-8" />
                </button>

                <ul className="text-white flex flex-col items-center justify-center h-full space-y-8 font-poppins">
                    <li><a href="#hero" className="nav__link text-[25px] sm:text-[30px]" onClick={closeNav}>Accueil</a></li>
                    <li><a href="#projects" className="nav__link text-[25px] sm:text-[30px]" onClick={closeNav}>Projets</a></li>
                    <li><a href="#skills" className="nav__link text-[25px] sm:text-[30px]" onClick={closeNav}>Compétences</a></li>
                    <li><a href="#contact" className="nav__link text-[25px] sm:text-[30px]" onClick={closeNav}>Contact</a></li>
                </ul>
            </div>
        </div>
    );
};

export default NavMobile;
