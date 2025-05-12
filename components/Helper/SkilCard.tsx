import React from "react";
import Image from "next/image";

interface Props {
    title: string;
    image: string;
    level: string;
}

const SkillCard = ({ image, title, level }: Props) => {
    return (
        <div className="p-6 hover:bg-yellow-500 duration-300 transition-all cursor-pointer text-center rounded-lg bg-white border border-gray-300 shadow-md transform hover:scale-105">
            <Image
                src={image}
                alt={title}
                width={80}
                height={80}
                className="object-cover mx-auto"
            />
            <h1 className="text-[18px] mt-[1rem] text-black font-[600]">{title}</h1>
            <div className="bg-gray-200 mt-[1rem] rounded-lg p-2 text-black opacity-70">{level}</div>
        </div>
    );
};

export default SkillCard;