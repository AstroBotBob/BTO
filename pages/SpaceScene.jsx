import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function SpaceScene() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax effects
  const earthY = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const earthScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const satelliteY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const satelliteRotate = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const spaceY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden">
      {/* Layer 3: Space Background */}
      <motion.div
        style={{ y: spaceY }}
        className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950 to-slate-900"
      >
        {/* Stars */}
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.8 + 0.2
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Layer 2: Earth */}
      <motion.div
        style={{ 
          y: earthY, 
          scale: earthScale,
          opacity
        }}
        className="absolute left-0 bottom-0 w-full h-full"
      >
        <div className="absolute -left-1/4 -bottom-1/4 w-3/4 h-3/4 md:w-2/3 md:h-2/3">
          <div className="relative w-full h-full">
            {/* Earth Globe */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
              className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 via-green-500 to-blue-600 shadow-2xl"
              style={{
                boxShadow: "0 0 100px rgba(59, 130, 246, 0.5), inset -50px -50px 100px rgba(0,0,0,0.5)"
              }}
            >
              {/* Clouds/Atmosphere */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/20 via-transparent to-transparent" />
            </motion.div>
            
            {/* Earth Glow */}
            <div className="absolute inset-0 rounded-full bg-blue-400/30 blur-3xl scale-110" />
          </div>
        </div>
      </motion.div>

      {/* Layer 1: Satellite */}
      <motion.div
        style={{ 
          y: satelliteY,
          rotate: satelliteRotate,
          opacity
        }}
        className="absolute right-10 top-1/4 md:right-20 md:top-1/3"
      >
        <motion.div
          animate={{ 
            y: [0, -20, 0],
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="relative"
        >
          {/* Satellite Body */}
          <div className="relative w-32 h-32 md:w-48 md:h-48">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500 rounded-lg shadow-2xl transform rotate-45">
              <div className="absolute inset-2 bg-gradient-to-br from-gray-800 to-gray-900 rounded" />
            </div>
            
            {/* Solar Panels */}
            <div className="absolute -left-16 top-1/2 transform -translate-y-1/2 w-16 h-24 md:w-24 md:h-32 bg-gradient-to-r from-blue-900 via-blue-500 to-blue-900 opacity-80">
              <div className="absolute inset-0 grid grid-cols-3 gap-0.5 p-1">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="bg-blue-400/50" />
                ))}
              </div>
            </div>
            
            <div className="absolute -right-16 top-1/2 transform -translate-y-1/2 w-16 h-24 md:w-24 md:h-32 bg-gradient-to-r from-blue-900 via-blue-500 to-blue-900 opacity-80">
              <div className="absolute inset-0 grid grid-cols-3 gap-0.5 p-1">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="bg-blue-400/50" />
                ))}
              </div>
            </div>
            
            {/* Antenna */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full w-1 h-8 bg-gray-400" />
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full w-4 h-4 bg-red-500 rounded-full animate-pulse" />
          </div>

          {/* Satellite Glow */}
          <div className="absolute inset-0 bg-cyan-400/20 blur-2xl scale-150" />
        </motion.div>
      </motion.div>

      {/* Content Overlay */}
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="text-center px-6 max-w-4xl">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Serviços Avançados de
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Satélites LEO
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed"
          >
            Revolucionando a conectividade global através da órbita baixa da Terra
          </motion.p>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            onClick={() => {
              window.scrollTo({ 
                top: window.innerHeight, 
                behavior: 'smooth' 
              });
            }}
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-lg font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50"
          >
            <span className="relative z-10">Explorar Serviços</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500"
              initial={{ x: "100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute bottom-1 left-1/2 transform -translate-x-1/2"
            >
              ↓
            </motion.div>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}