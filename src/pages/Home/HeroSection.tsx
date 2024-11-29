import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { fadeInUp, staggerChildren } from '../../components/animations/variants';
import ScrollingBackground from '../../components/animations/ScrollingBackground';
import '../../styles/scrolling-background.css';

const heroImages = [
  '/images/hero-1.jpg',  // Fishing boat at sunset
  '/images/hero-2.jpg',  // Diving scene
  '/images/hero-3.jpg',  // Yacht on blue water
  '/images/hero-4.jpg',  // Fish swimming underwater
  '/images/hero-5.jpg'   // Beach coastline
];

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section 
      className="relative h-screen overflow-hidden"
    >
      <ScrollingBackground images={heroImages} />
      
      <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
        <motion.div 
          variants={staggerChildren}
          initial="initial"
          animate="animate"
          className="max-w-2xl text-white"
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-6xl font-bold mb-6 leading-tight"
          >
            {t('hero.title')}
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl mb-8 text-gray-200"
          >
            {t('hero.subtitle')}
          </motion.p>
          
          <motion.div variants={fadeInUp}>
            <Link 
              to="/booking"
              className="bg-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors duration-300 inline-flex items-center group"
            >
              {t('hero.bookNow')}
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </motion.svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}