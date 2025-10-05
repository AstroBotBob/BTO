import React from "react";
import { motion } from "framer-motion";
import { Globe2, Wifi, TrendingUp } from "lucide-react";

export default function Contexto() {
  return (
    <div className="min-h-screen bg-slate-950 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Contexto
          </h1>
          <div className="h-2 w-32 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full" />
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative h-96 rounded-3xl overflow-hidden mb-12"
        >
          <img
            src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1200&q=80"
            alt="Espaço"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        </motion.div>

        {/* Content */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-800"
          >
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
              <Globe2 className="w-8 h-8 text-cyan-400" />
              A Era da Conectividade Espacial
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Vivemos em uma era onde a conectividade digital é essencial para o desenvolvimento econômico, social e educacional. No entanto, mais de 3 bilhões de pessoas ainda não têm acesso à internet, principalmente em regiões remotas e rurais.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              A tecnologia de satélites em órbita baixa da Terra (LEO - Low Earth Orbit) surgiu como uma solução revolucionária para este desafio global, prometendo conectividade universal, baixa latência e alta velocidade.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid md:grid-cols-2 gap-6"
          >
            <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 p-8 rounded-2xl border border-cyan-800/50">
              <Wifi className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">
                Mercado em Expansão
              </h3>
              <p className="text-gray-300 leading-relaxed">
                O mercado de satélites LEO está projetado para crescer de $8,4 bilhões em 2023 para $20+ bilhões até 2030, com uma taxa de crescimento anual de 13,5%.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-8 rounded-2xl border border-purple-800/50">
              <TrendingUp className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">
                Inovação Tecnológica
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Avanços em miniaturização, custos de lançamento reduzidos e tecnologias de comunicação tornaram os satélites LEO economicamente viáveis.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-800"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Principais Aplicações
            </h2>
            <div className="grid gap-4">
              {[
                "Internet de alta velocidade em áreas remotas",
                "Comunicações móveis globais",
                "Internet das Coisas (IoT) e M2M",
                "Monitoramento ambiental e climático",
                "Comunicações de emergência e resgate",
                "Agricultura de precisão",
                "Logística e rastreamento global",
                "Telemedicina em regiões isoladas"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.05 }}
                  className="flex items-center gap-3 text-gray-300"
                >
                  <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                  <span className="text-lg">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Additional Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="relative h-64 rounded-2xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=1200&q=80"
              alt="Satélites"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 to-transparent flex items-center p-8">
              <p className="text-white text-2xl font-bold max-w-md">
                "A próxima revolução da conectividade virá do espaço"
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}