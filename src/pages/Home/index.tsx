import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from './HeroSection';
import FeaturedServices from './FeaturedServices';
import LocationsSection from './LocationsSection';
import WeatherWidget from '../../components/Weather/WeatherWidget';

export default function HomePage() {
  return (
    <div className="space-y-12">
      <HeroSection />
      <FeaturedServices />
      <LocationsSection />
      <WeatherWidget />
    </div>
  );
}