import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gray-950">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-xl md:text-2xl font-medium text-indigo-400">
                Développeur Full Stack
              </h2>
              <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight">
                SNANI Nabil
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
                Étudiant en Bachelor Informatique avec une expertise en développement web et mobile.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <motion.a
                href="#projects"
                className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-indigo-500/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Projets
              </motion.a>
              <motion.a
                href="#contact"
                className="px-8 py-4 bg-gray-800/50 backdrop-blur-sm text-white rounded-xl font-semibold hover:bg-gray-800/70 transition-all duration-300 transform hover:scale-105 border border-gray-700/30 hover:border-indigo-500/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 