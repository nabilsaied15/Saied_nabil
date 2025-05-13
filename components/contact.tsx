import React, { useState } from "react";
import { motion } from "framer-motion";
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ArrowRightIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import emailjs from "@emailjs/browser";
import { FaLinkedin } from "react-icons/fa";
import { FaFlag, FaGlobeEurope, FaGlobeAmericas } from "react-icons/fa";

const contactItems = [
  {
    icon: <PhoneIcon className="w-7 h-7 text-purple-500" />,
    title: "Téléphone",
    value: "06 69 44 40 50",
  },
  {
    icon: <EnvelopeIcon className="w-7 h-7 text-purple-500" />,
    title: "Email",
    value: "nabilsaied04@gmail.com",
  },
  {
    icon: <MapPinIcon className="w-7 h-7 text-purple-500" />,
    title: "Localisation",
    value: "15 rue de la peupleraie Longjumeau 91160",
  },
  {
    icon: <FaLinkedin className="w-7 h-7 text-purple-500" />,
    title: "LinkedIn",
    value: "Saied Nabil ",
  },
];

const languages = [
  { name: "Français", color: "bg-purple-600", icon: <FaFlag className="w-5 h-5 text-purple-400" /> },
  { name: "Anglais", color: "bg-indigo-500", icon: <FaGlobeEurope className="w-5 h-5 text-indigo-300" /> },
  { name: "Espagnol", color: "bg-pink-500", icon: <FaGlobeAmericas className="w-5 h-5 text-pink-300" /> },
];

const Contact = () => {
  // ... autres hooks et logique si besoin ...

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden min-h-screen flex items-center justify-center bg-gray-950"
    >
      <div className="container mx-auto px-4 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl font-extrabold text-white mb-6 drop-shadow-lg tracking-tight"
            >
              Contact
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "120px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="h-1 bg-gradient-to-r from-indigo-500 to-blue-600 mx-auto rounded-full"
            />
            <p className="text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
              N'hésitez pas à me contacter pour discuter de vos projets ou opportunités.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Coordonnées de contact */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="space-y-10"
            >
              {contactItems.map((item, idx) => (
                <div
                  key={item.title}
                  className="flex items-center gap-4 bg-[#131217] border border-[#23213a] rounded-xl px-8 py-6"
                >
                  <div>{item.icon}</div>
                  <div>
                    <div className="text-white font-semibold text-lg">{item.title}</div>
                    <div className="text-gray-300 text-base">{item.value}</div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Langues à droite */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col justify-center"
            >
              <div className="bg-white/10 backdrop-blur-md border border-indigo-500/30 shadow-xl rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 drop-shadow text-center">Langues</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {languages.map((lang) => (
                    <div
                      key={lang.name}
                      className="flex flex-col items-center bg-[#131217] border border-[#23213a] rounded-lg px-6 py-4 min-w-[170px]"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        {lang.icon}
                        <span className={`font-semibold text-white`}>{lang.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
