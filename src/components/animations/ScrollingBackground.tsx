import React from 'react';
import { motion } from 'framer-motion';

interface ScrollingBackgroundProps {
  images: string[];
}

export default function ScrollingBackground({ images }: ScrollingBackgroundProps) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10" />
      
      <div className="scrolling-wrapper">
        <div className="scrolling-content">
          {[...images, ...images].map((image, index) => (
            <div
              key={`${image}-${index}`}
              className="scrolling-image"
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}