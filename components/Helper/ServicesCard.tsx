import React from "react";

interface Props {
    title: string;
    num: string;
    icon: React.ReactNode;
    description: string;
}

const ServicesCard = ({ num, title, icon, description }: Props) => {
    return (
        <div className="relative group rounded-3xl p-8 shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl border border-blue-500/20 hover:border-blue-500/40 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            {/* Overlay radial bleu pâle */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-60" />
            </div>
            {/* Numéro en filigrane */}
            <span className="absolute z-0 right-6 top-6 text-[5rem] font-extrabold text-blue-500/10 select-none pointer-events-none group-hover:text-blue-500/20 transition-colors duration-500">
                {num}
            </span>
            {/* Icône */}
            <div className="w-20 h-20 flex items-center justify-center mx-auto mb-4 relative z-10 bg-blue-500/10 rounded-2xl shadow-lg group-hover:bg-blue-500/20 transition-all duration-500">
                {icon}
            </div>
            {/* Titre */}
            <h1 className="text-2xl font-bold text-blue-300 mt-2 mb-2 relative z-10 group-hover:text-blue-400 transition-colors duration-300 drop-shadow-lg">
                {title}
            </h1>
            {/* Description */}
            <p className="text-gray-200 text-base opacity-95 mt-2 mb-2 relative z-10 drop-shadow">
                {description}
            </p>
        </div>
    );
};

export default ServicesCard;