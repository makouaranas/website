import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8">{t('about.title')}</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">{t('about.directorMessage.title')}</h2>
          <p className="text-gray-700 mb-4">{t('about.directorMessage.content')}</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">{t('about.mission.title')}</h2>
          <p className="text-gray-700 mb-4">{t('about.mission.content')}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('about.safety.title')}</h2>
          <div className="bg-blue-50 p-6 rounded-lg">
            <p className="text-gray-700 mb-4">{t('about.safety.content')}</p>
            <ul className="list-disc list-inside space-y-2">
              <li>{t('about.safety.points.equipment')}</li>
              <li>{t('about.safety.points.training')}</li>
              <li>{t('about.safety.points.guidelines')}</li>
            </ul>
          </div>
        </section>
      </motion.div>
    </div>
  );
}