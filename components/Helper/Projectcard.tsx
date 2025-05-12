import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

interface Props {
    title: string;
    description: string;
    technologies: string[];
    image: string;
    link: string;
}

const ProjectCard = ({ title, description, technologies, image, link }: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
        >
            <div className="relative w-full h-48 rounded-t-2xl overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                />
            </div>

            <div className="flex flex-col flex-1 p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {title}
                </h3>

                <p className="text-sm text-gray-700 mb-4 line-clamp-3">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="bg-gray-100 text-gray-800 text-xs px-2 py-0.5 rounded-full font-medium"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="mt-auto">
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors"
                    >
                        Voir le projet
                        <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-1" />
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
