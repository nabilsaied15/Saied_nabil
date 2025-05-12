import Image from 'next/image';
import { motion } from 'framer-motion';

interface SkillCardProps {
    title: string;
    image: string;
    level: string;
}

const SkillCard = ({ title, image, level }: SkillCardProps) => {
    const getLevelColor = (level: string) => {
        switch (level.toLowerCase()) {
            case 'avancé':
                return 'bg-green-500';
            case 'intermédiaire':
                return 'bg-yellow-500';
            case 'débutant':
                return 'bg-red-500';
            default:
                return 'bg-gray-500';
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
            <div className="relative w-16 h-16 mx-auto mb-4">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-contain filter group-hover:brightness-110 transition-all duration-300"
                />
            </div>
            <h3 className="text-white text-center font-semibold mb-2 group-hover:text-blue-400 transition-colors duration-300">
                {title}
            </h3>
            <div className="flex items-center justify-center space-x-2">
                <div className={`w-2 h-2 rounded-full ${getLevelColor(level)}`} />
                <span className="text-gray-400 text-sm">{level}</span>
            </div>
            <div className="mt-4 h-1 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: level === 'Avancé' ? '100%' : level === 'Intermédiaire' ? '66%' : '33%' }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className={`h-full ${getLevelColor(level)}`}
                />
            </div>
        </motion.div>
    );
};

export default SkillCard; 