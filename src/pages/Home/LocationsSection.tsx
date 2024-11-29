import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { fadeInUp, slideIn, imageReveal } from '../../components/animations/variants';

export default function LocationsSection() {
  const { t } = useTranslation();

  return (
    <section className="container mx-auto px-4 py-16">
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="text-3xl font-bold mb-12 text-center"
      >
        {t('home.locations.title')}
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div 
          variants={imageReveal}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="rounded-lg overflow-hidden shadow-xl"
        >
          <img 
            src="/images/map-placeholder.jpg" 
            alt="Activity Locations"
            className="w-full h-[400px] object-cover"
          />
        </motion.div>

        <div className="space-y-8">
          <motion.div
            variants={slideIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold mb-4">{t('home.locations.northern')}</h3>
            <p className="text-gray-600 leading-relaxed">{t('home.locations.northernDesc')}</p>
          </motion.div>

          <motion.div
            variants={slideIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold mb-4">{t('home.locations.coastal')}</h3>
            <p className="text-gray-600 leading-relaxed">{t('home.locations.coastalDesc')}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}