import React from "react";
import { motion } from "framer-motion";
import { Users, Globe, TrendingUp, Heart } from "lucide-react";

export default function Impacto() {
  return (
    <div className="min-h-screen bg-slate-950 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Impacto
          </h1>
          <div className="h-2 w-32 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full" />
        </motion.div>

        {/* Continue with similar structure for remaining pages... */}
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 p-10 rounded-3xl border border-yellow-800/50"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Transformação Global
          </h2>
          <p className="text-gray-300 text-xl leading-relaxed">
            Nossa solução tem o potencial de impactar positivamente bilhões de vidas, democratizando o acesso à informação e oportunidades digitais em escala global.
          </p>
        </motion.div>

        {/* Add more content sections following the same pattern... */}
      </div>
    </div>
  );
}