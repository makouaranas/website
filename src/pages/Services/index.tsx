import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ServiceCard from '../../components/Services/ServiceCard';
import { Activity } from '../../types';

const services: Activity[] = [
  {
    id: '1',
    title: 'EXECUTION Fishing and Leisure',
    description: 'Experience the thrill of fishing in the beautiful waters of northern Morocco.',
    price: 1500,
    currency: 'MAD',
    images: ['/images/fishing.jpg'],
  },
  {
    id: '2',
    title: 'EXECUTION MARITIME PLEASURE',
    description: 'Enjoy a luxurious maritime experience with our pleasure cruises.',
    price: 2000,
    currency: 'MAD',
    images: ['/images/pleasure.jpg'],
  },
  {
    id: '3',
    title: 'SEA EXCURSION + DIVING',
    description: 'Discover the underwater world with our professional diving experiences.',
    price: 2500,
    currency: 'MAD',
    images: ['/images/diving.jpg'],
  },
];

export default function ServicesPage() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        {t('services.title')}
      </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}