import React from "react";
import { motion } from "framer-motion";

export default function ProximosPassos() {
  return (
    <div className="min-h-screen bg-slate-950 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Próximos Passos
          </h1>
          <div className="h-2 w-32 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-slate-900/50 p-10 rounded-3xl border border-slate-800"
        >
          <p className="text-gray-300 text-xl">
            Roadmap e próximas etapas do projeto...
          </p>
        </motion.div>
      </div>
    </div>
  );
}