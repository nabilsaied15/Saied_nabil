import React from "react";
import { motion } from "framer-motion";
import { FaFlag, FaGlobeEurope, FaGlobeAmericas, FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaPython, FaJava, FaNodeJs, FaVuejs, FaLinux } from "react-icons/fa";
import { SiDart, SiMysql, SiFirebase, SiFigma, SiDjango, SiSymfony, SiFlutter, SiFramer, SiVmware, SiPfsense, SiCisco } from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      title: "Langages de Programmation",
      skills: [
        { name: "Python", level: "Intermédiaire", percent: 40, icon: <FaPython className="text-blue-400 w-6 h-6" /> },
        { name: "JavaScript", level: "Intermédiaire", percent: 55, icon: <FaJs className="text-yellow-400 w-6 h-6" /> },
        { name: "C", level: "Débutant", percent: 20, icon: <FaFlag className="text-gray-400 w-6 h-6" /> },
        { name: "Dart", level: "Débutant", percent: 15, icon: <SiDart className="text-cyan-400 w-6 h-6" /> },
        { name: "PHP", level: "Intermédiaire", percent: 60, icon: <FaPhp className="text-indigo-400 w-6 h-6" /> },
        { name: "C#", level: "Débutant", percent: 25, icon: <FaFlag className="text-gray-400 w-6 h-6" /> },
        { name: "Java", level: "Débutant", percent: 10, icon: <FaJava className="text-orange-400 w-6 h-6" /> },
      ],
    },
    {
      title: "Technologies Web",
      skills: [
        { name: "HTML", level: "Avancé", percent: 95, icon: <FaHtml5 className="text-orange-500 w-6 h-6" /> },
        { name: "CSS", level: "Avancé", percent: 90, icon: <FaCss3Alt className="text-blue-500 w-6 h-6" /> },
        { name: "React", level: "Intermédiaire", percent: 45, icon: <FaReact className="text-cyan-400 w-6 h-6" /> },
        { name: "Next.js", level: "Débutant", percent: 20, icon: <FaReact className="text-gray-200 w-6 h-6" /> },
        { name: "MySQL", level: "Intermédiaire", percent: 70, icon: <SiMysql className="text-blue-300 w-6 h-6" /> },
        { name: "Symfony", level: "Débutant", percent: 25, icon: <SiSymfony className="text-gray-300 w-6 h-6" /> },
      ],
    },
    {
      title: "Frameworks & Outils",
      skills: [
        { name: "Flutter", level: "Intermédiaire", percent: 25, icon: <SiFlutter className="text-blue-400 w-6 h-6" /> },
        { name: "Node.js", level: "Intermédiaire", percent: 25, icon: <FaNodeJs className="text-green-500 w-6 h-6" /> },
        { name: "Firebase", level: "Intermédiaire", percent: 60, icon: <SiFirebase className="text-yellow-400 w-6 h-6" /> },
        { name: "Figma", level: "Intermédiaire", percent: 80, icon: <SiFigma className="text-pink-500 w-6 h-6" /> },
        { name: "Linux", level: "Intermédiaire", percent: 60, icon: <FaLinux className="text-yellow-200 w-6 h-6" /> },
        { name: "VMware", level: "Intermédiaire", percent: 70, icon: <SiVmware className="text-blue-300 w-6 h-6" /> },
        { name: "pfSense", level: "Intermédiaire", percent: 70, icon: <SiPfsense className="text-green-900 w-6 h-6" /> },
        { name: "Cisco", level: "Intermédiaire", percent: 50, icon: <SiCisco className="text-blue-700 w-6 h-6" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-gray-950">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-extrabold text-white mb-6 drop-shadow-lg tracking-tight">
            Compétences
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full"
          />
          <p className="text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
            Étudiant en Bachelor Informatique avec une expertise en développement web et mobile et cybersécurité.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-xl border border-indigo-500/20 rounded-2xl p-8 hover:border-indigo-500/40 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-8 drop-shadow">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="flex items-center gap-2 text-gray-300 font-medium">{skill.icon}{skill.name}</span>
                      <span className="text-indigo-400 text-sm">{skill.level}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 bg-gray-800/50 rounded-full overflow-hidden flex-1">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: skill.percent + "%" }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full bg-gradient-to-r from-indigo-500 to-purple-600"
                        />
                      </div>
                      <span className="text-xs text-indigo-400 font-bold w-10 text-right">{skill.percent}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;