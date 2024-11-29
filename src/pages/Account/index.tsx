import React from 'react';
import { motion } from 'framer-motion';

export default function AccountPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl font-bold mb-4">Account Creation</h1>
        <p className="text-xl text-gray-600">NOT AVAILABLE FOR NOW</p>
      </motion.div>
    </div>
  );
}