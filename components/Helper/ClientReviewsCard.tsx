import React from "react";
import Image from "next/image";

interface Props {
    image: string;
    user: string;
    role: string;
    review: string;
}

const ClientReviewsCard = ({ image, user, role, review }: Props) => {
    return (
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300 mx-2">
            <div className="flex flex-col items-center">
                <div className="relative w-20 h-20 mb-4">
                    <div className="absolute inset-0 bg-blue-500 rounded-full opacity-20"></div>
                    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-blue-500">
                        <Image
                            src={image}
                            alt={user}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
                <div className="text-center">
                    <p className="text-gray-300 text-lg mb-4 italic">
                        &quot;{review}&quot;
                    </p>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-1">{user}</h3>
                        <p className="text-blue-400">{role}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientReviewsCard;