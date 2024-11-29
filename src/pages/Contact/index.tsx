import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 text-center">{t('contact.title')}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">{t('contact.form.title')}</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
              >
                {t('contact.form.submit')}
              </button>
            </form>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-6">{t('contact.info.title')}</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-gray-900">{t('contact.info.social')}</h3>
                <div className="mt-2 space-y-2">
                  <p>WhatsApp: +212 XXXXXXXXX</p>
                  <p>Telegram: @maritimeactivities</p>
                  <p>Facebook: /maritimeactivities</p>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900">{t('contact.info.address')}</h3>
                <p className="mt-2">
                  123 Maritime Street<br />
                  Northern Morocco<br />
                  90000
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900">{t('contact.info.hours')}</h3>
                <p className="mt-2">
                  Monday - Sunday: 8:00 AM - 8:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}