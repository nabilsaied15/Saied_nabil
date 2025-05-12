import React from "react";
import ProjectCard from "./Helper/Projectcard";

const Project = () => {
  return (
    <div id="projects" className="pt-[5rem] pb-[3rem] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Section Title */}
      <div className="text-center mb-12">
        <p className="heading__mini text-blue-400 font-light tracking-wider">Recent Works</p>
        <h2 className="heading__primary text-white font-bold">
          My Best <span className="text-blue-400 relative">
            Projects
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </span>
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-[90%] mx-auto">
        <ProjectCard
          title="Web Development"
          description="A modern web development project using React and Next.js."
          technologies={["React", "Next.js", "Tailwind", "TypeScript"]}
          image="/images/OIP.jpeg"
          link="https://github.com/yourusername/web-development"
        />
        <ProjectCard
          title="Phantom Burger"
          description="A restaurant website built with HTML, CSS, and PHP."
          technologies={["HTML", "CSS", "PHP", "JavaScript"]}
          image="/images/phantomBurgerlogo.png"
          link="https://github.com/yourusername/phantom-burger"
        />
        <ProjectCard
          title="CityNeed"
          description="Development of an Android/iOS app using FlutterFlow and Firebase."
          technologies={["FlutterFlow", "Supabase", "Flutter", "Firebase"]}
          image="/images/cropped-01_LOGO-WEB-Simple-fond-transp-1.png"
          link="https://github.com/yourusername/cityneed"
        />
        <ProjectCard
          title="Eiffage Rail"
          description="A web platform for managing the company's database using HTML, CSS, PHP, and JavaScript."
          technologies={["HTML", "CSS", "PHP", "JavaScript"]}
          image="/images/logo-eiffage-rail-765x383.png"
          link="https://github.com/yourusername/eiffage-rail"
        />
        <ProjectCard
          title="Smart Bike"
          description="A web platform for managing bike data using modern web technologies."
          technologies={["HTML", "CSS", "PHP", "JavaScript"]}
          image="/images/smartvelo.png"
          link="https://github.com/yourusername/smart-bike"
        />
        <ProjectCard
          title="Conception et architecture de réseaux"
          description="Configuration et simulation de réseaux à l'aide de Cisco Packet Tracer. Mise en place et gestion de pare-feu avec pfSense. Configuration de services réseau tels que VPN et DNS."
          technologies={["Cisco Packet Tracer", "VmWareStation", "Pfsense", "OpenVpn"]}
          image="/images/Pfsense-Firewall..png"
          link="https://github.com/yourusername/network-architecture"
        />
      </div>
    </div>
  );
};

export default Project;