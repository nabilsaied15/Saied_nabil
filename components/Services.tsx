import React from "react";
import ServicesCard from "./Helper/ServicesCard";
import { FaReact, FaMobileAlt, FaDatabase, FaCloud, FaShoppingCart, FaSearch } from "react-icons/fa";

const Services = () => {
    return (
        <div className="pt-[5rem] pb-[3rem] bg-white">
            <div className="text-center">
                <p className="heading__mini">Popular Services</p>
                <h1 className="heading__primary">
                    My Special <span className="text-yellow-400">Services</span> For You
                </h1>
            </div>
            <div className="pt-[1rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center">
                <div>
                    <ServicesCard 
                        title="React Website" 
                        num="01" 
                        icon={<FaReact className="text-blue-500 text-4xl mb-2" />} 
                        description="I create responsive and dynamic websites using React, ensuring a seamless user experience across all devices."
                    />
                </div>
                <div>
                    <ServicesCard 
                        title="Mobile App Development" 
                        num="02" 
                        icon={<FaMobileAlt className="text-green-500 text-4xl mb-2" />} 
                        description="Developing high-quality mobile applications for both Android and iOS platforms, tailored to your business needs."
                    />
                </div>
                <div>
                    <ServicesCard 
                        title="Database Management" 
                        num="03" 
                        icon={<FaDatabase className="text-red-500 text-4xl mb-2" />} 
                        description="Offering robust database management services to ensure your data is secure, accessible, and well-organized."
                    />
                </div>
                <div>
                    <ServicesCard 
                        title="Cloud Services" 
                        num="04" 
                        icon={<FaCloud className="text-yellow-500 text-4xl mb-2" />} 
                        description="Providing scalable cloud solutions to help you manage your infrastructure efficiently and cost-effectively."
                    />
                </div>
                <div>
                    <ServicesCard 
                        title="E-commerce Solutions" 
                        num="05" 
                        icon={<FaShoppingCart className="text-purple-500 text-4xl mb-2" />} 
                        description="Building comprehensive e-commerce platforms that offer a seamless shopping experience for your customers."
                    />
                </div>
                <div>
                    <ServicesCard 
                        title="SEO Optimization" 
                        num="06" 
                        icon={<FaSearch className="text-indigo-500 text-4xl mb-2" />} 
                        description="Enhancing your website's visibility on search engines through effective SEO strategies and techniques."
                    />
                </div>
            </div>
        </div>
    );
};

export default Services;