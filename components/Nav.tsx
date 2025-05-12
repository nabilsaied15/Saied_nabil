import { Bars3CenterLeftIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import React from 'react';

interface Props {
    openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="fixed w-full z-[1000] bg-black">
            <div className="flex items-center justify-between w-[80%] mx-auto py-4">
                <div className="font-logo text-white text-[18px]">
                    <span className="text-[30px] md:text-[40px] text-yellow-400">Portfolio</span> Nabil Saied
                </div>
                <ul className="md:flex hidden items-center space-x-10">
                    <li>
                        <a className="nav__link text-white hover:text-yellow-400 transition" onClick={() => handleScroll('home')}>Home</a>
                    </li>
                    <li>
                        <a className="nav__link text-white hover:text-yellow-400 transition" onClick={() => handleScroll('about')}>About</a>
                    </li>
                    <li>
                        <a className="nav__link text-white hover:text-yellow-400 transition" onClick={() => handleScroll('skills')}>Skills</a>
                    </li>
                    <li>
                        <a className="nav__link text-white hover:text-yellow-400 transition" onClick={() => handleScroll('projects')}>Projects</a>
                    </li>
                    <li>
                        <a className="nav__link text-white hover:text-yellow-400 transition" onClick={() => handleScroll('contact')}>Contact</a>
                    </li>
                </ul>
                <Bars3CenterLeftIcon onClick={openNav} className="w-[2.3rem] md:hidden h-[2.3rem] text-white rotate-180 cursor-pointer" />
            </div>
        </div>
    );
};

export default Nav;
