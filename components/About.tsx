import React from "react";
import { CodeBracketIcon, DevicePhoneMobileIcon, PaintBrushIcon } from "@heroicons/react/24/outline";

const services = [
  {
    icon: <CodeBracketIcon className="w-10 h-10 text-indigo-500" />,
    title: "Sites Web Modernes",
    description: "Création de sites web performants, responsives et adaptés à vos besoins professionnels ou personnels.",
  },
  {
    icon: <DevicePhoneMobileIcon className="w-10 h-10 text-cyan-500" />,
    title: "Applications Mobiles",
    description: "Développement d'applications mobiles multiplateformes (iOS/Android) avec des technologies modernes.",
  },
  {
    icon: <PaintBrushIcon className="w-10 h-10 text-yellow-400" />,
    title: "Design UI/UX",
    description: "Conception d'interfaces intuitives, attractives et centrées utilisateur pour une expérience optimale.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden bg-gray-950">
      {/* Effet de fond */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12 heading__primary">Ce que je peux réaliser pour vous</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={service.title} className="bg-white/5 border border-indigo-500/20 rounded-2xl p-8 text-center shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 animate-fade-in">
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-300 text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;