import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { GithubIcon, YoutubeIcon } from "lucide-react";

const Projects = () => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    alert("Pour plus d'informations, veuillez envoyer un message par email. Mon Mail : nabilsaied04@gmail.com ❤❤");
  };

  const projects = [
    {
      title: "Phantom Burger",
      description: "Site web pour un restaurant avec système de réservation en ligne et interface d'administration intégrée.",
      image: "/images/phantomBurgerlogo.png",
      technologies: ["HTML", "CSS", "JavaScript", "PHP"],
      note: "17/20",
      date: "Novembre 2024",
      github: "",
      youtube: "",
      featured: false,
    },
    {
      title: "Projet réalisé dans le cadre d'un workshop",
      description: "  Vie la vie d'un étudiant en numérique  Développement d'un jeu en 3D  ",
      image: "/images/Pfsense-Firewall..png",
      technologies: ["Unity", "C#"],
      note: "19/20",
      date: "Premier Prix de l'école ",
      github: "",
      youtube: "",
      featured: false,
    },
    {
      title: "Développeur d'application – Stage",
      description: "Développement d'une application Android/iOS pour promouvoir le commerce de proximité .Conception de l'interface utilisateur (UX/UI) avec FlutterFlow : navigation formulaires, affichage dynamique .Intégration de Supabase pour la gestion des données (authentification base PostgreSQL, stockage d'images) .",
      image: "/images/cropped-01_LOGO-WEB-Simple-fond-transp-1.png",
      technologies: ["Flutter FLOW", "Supabase"],
      note: "",
      date: "Septembre 2024 - Mars 2025",
      github: "",
      youtube: "",
      featured: true,
    },
    {
      title: "Smart Bike",
      description: "Site web pour un projet d'apprentissage de PHP avec interface en ligne de commande et design moderne.",
      image: "/images/smartvelo.png",
      technologies: ["HTML", "CSS", "JavaScript", "PHP"],
      note: "20/20",
      date: "Décembre 2023",
      github: "",
      youtube: "",
      featured: false,
    },
    {
      title: "Infrastructure de serveurs",
      description: "Configuration d'un cluster de serveurs avec mise en place de la haute disponibilité, serveurs, VM, VPN, etc...",
      image: "/images/Pfsense-Firewall..png",
      technologies: ["PFsense", "VMware", "Linux", "Cisco"],
      note: "17/20",
      date: "Décembre 2024",
      github: "",
      youtube: "",
      featured: false,
    },
    {
      title: "Développeur Web – Stage",
      description: "Développement d'un site web en HTML, CSS, PHP et JavaScript. Création d'un site web interne pour la gestion de chantiers ferroviaires.",
      image: "/images/cropped-01_LOGO-WEB-Simple-fond-transp-1.png",
      technologies: ["HTML", "CSS", "JavaScript", "PHP"],
      date: "Avril  2024 - Juin 2024",
      github: "",
      youtube: "",
      featured: true,
    },


  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-gray-950">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-extrabold text-white mb-6 drop-shadow-lg tracking-tight">
            Projets
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full"
          />
          <p className="text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
            Découvrez mes projets personnels et académiques
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group bg-white/5 backdrop-blur-xl border border-indigo-500/20 rounded-2xl overflow-hidden hover:border-indigo-500/40 transition-all duration-300 ${
                project.featured ? "md:col-span-2" : ""
              }`}
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 drop-shadow">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="inline-block px-3 py-1 text-sm bg-indigo-500/20 text-indigo-400 rounded-full font-medium mb-4">
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="text-right">
                    <div className="text-indigo-400 font-semibold mb-1">{project.note}</div>
                    <div className="text-gray-400 text-sm">{project.date}</div>
                  </div>
                </div>

                <p className="text-gray-300 mb-6">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-indigo-500/10 text-indigo-400 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleLinkClick}
                    className="flex items-center gap-2 text-gray-300 hover:text-indigo-400 transition-colors duration-300"
                  >
                    <GithubIcon className="w-5 h-5" />
                    GitHub
                  </a>
                  <a
                    href={project.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleLinkClick}
                    className="flex items-center gap-2 text-gray-300 hover:text-indigo-400 transition-colors duration-300"
                  >
                    <YoutubeIcon className="w-5 h-5" />
                    YouTube
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;