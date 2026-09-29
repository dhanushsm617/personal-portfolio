"use client"; 
 
import { useEffect, useState } from "react"; 
import Image from "next/image"; 
import { motion, AnimatePresence } from "framer-motion"; 
 
export default function ImageSlideshow({ 
  images = [], 
  alt = "", 
  interval = 3000, // milliseconds between slides 
  className = "", 
}) { 
  const [index, setIndex] = useState(0); 
  const [paused, setPaused] = useState(false); 
 
  // Auto-advance; stops while hovered or when there is only one image 
  useEffect(() => { 
    if (images.length <= 1 || paused) return; 
    const timer = setInterval(() => { 
      setIndex((prev) => (prev + 1) % images.length); 
    }, interval); 
    return () => clearInterval(timer); 
  }, [images.length, interval, paused]); 
 
  if (!images.length) return null; 
 
  return ( 
    <div 
      className={`relative overflow-hidden ${className}`} 
      onMouseEnter={() => setPaused(true)} 
      onMouseLeave={() => setPaused(false)} 
    > 
      <AnimatePresence mode="wait"> 
        <motion.div 
          key={index} 
          className="absolute inset-0" 
          initial={{ opacity: 0, scale: 1.05 }} 
          animate={{ opacity: 1, scale: 1 }} 
          exit={{ opacity: 0 }} 
          transition={{ duration: 0.6 }} 
        > 
          <Image 
            src={images[index]} 
            alt={`${alt} screenshot ${index + 1}`} 
            fill 
            sizes="(max-width: 768px) 100vw, 50vw" 
            className="object-cover" 
            priority={index === 0} 
          /> 
        </motion.div> 
      </AnimatePresence> 
 
      {/* Dots (click to jump to a slide) */} 
      {images.length > 1 && ( 
        <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-2"> 
          {images.map((_, i) => ( 
            <button 
              key={i} 
              type="button" 
              onClick={() => setIndex(i)} 
              aria-label={`Go to image ${i + 1}`} 
              className={`h-2 rounded-full transition-all ${ 
                i === index ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/80" 
              }`} 
            /> 
          ))} 
        </div> 
      )} 
    </div> 
  ); 
}