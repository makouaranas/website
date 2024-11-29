import React from 'react';
import { motion } from 'framer-motion';
import { Activity } from '../../types';
import { useStore } from '../../store/useStore';
import { formatCurrency } from '../../utils/currency';
import { scaleUp } from '../animations/variants';

interface ServiceCardProps {
  service: Activity;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const { currency } = useStore();
  
  return (
    <motion.div 
      variants={scaleUp}
      whileHover={{ 
        y: -8,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 20
        }
      }}
      className="bg-white rounded-lg shadow-lg overflow-hidden transform-gpu"
    >
      <motion.div 
        className="aspect-w-16 aspect-h-9 overflow-hidden"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img 
          src={service.images[0]} 
          alt={service.title}
          className="object-cover w-full h-full transition-transform duration-300"
        />
      </motion.div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <p className="text-lg font-semibold text-blue-600">
          {formatCurrency(service.price, currency)}
        </p>
      </div>
    </motion.div>
  );
}