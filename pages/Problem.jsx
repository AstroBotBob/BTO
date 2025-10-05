import React from "react";
import { motion } from "framer-motion";
import { AlertCircle, WifiOff, DollarSign, Clock } from "lucide-react";

export default function Problema() {
  return (
    <div className="min-h-screen bg-slate-950 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            O Problema
          </h1>
          <div className="h-2 w-32 bg-gradient-to-r from-red-500 to-orange-600 rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative h-80 rounded-3xl overflow-hidden mb-12"
        >
          <img
            src="https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=1200&q=80"
            alt="Área remota"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <p className="text-white text-2xl md:text-3xl font-bold">
              Bilhões ainda sem acesso à conectividade digital
            </p>
          </div>
        </motion.div>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-red-900/20 backdrop-blur-sm p-8 rounded-2xl border border-red-800/50"
          >
            <div className="flex items-start gap-4 mb-4">
              <AlertCircle className="w-8 h-8 text-red-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Desafio da Infraestrutura Tradicional
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  A infraestrutura terrestre tradicional (fibra óptica, torres de celular) enfrenta limitações críticas que impedem a conectividade universal:
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-slate-900/50 p-6 rounded-xl border border-slate-800"
            >
              <DollarSign className="w-10 h-10 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">
                Custos Proibitivos
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Construir infraestrutura em áreas remotas custa de $10.000 a $100.000 por quilômetro. Para regiões montanhosas, desertos ou ilhas, os custos são ainda maiores.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-slate-900/50 p-6 rounded-xl border border-slate-800"
            >
              <Clock className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">
                Tempo de Implementação
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Projetos de infraestrutura terrestre levam anos para serem concluídos, com aprovações regulatórias complexas e desafios logísticos.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-slate-900/50 p-6 rounded-xl border border-slate-800"
            >
              <WifiOff className="w-10 h-10 text-red-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">
                Cobertura Limitada
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Geografias desafiadoras (oceanos, florestas densas, regiões polares) tornam a infraestrutura terrestre impraticável ou impossível.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-slate-900/50 p-6 rounded-xl border border-slate-800"
            >
              <AlertCircle className="w-10 h-10 text-orange-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">
                Vulnerabilidade
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Infraestrutura física é vulnerável a desastres naturais, conflitos e falhas de manutenção, deixando regiões inteiras desconectadas.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl border border-slate-700"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Impacto do Problema
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-red-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-3xl font-bold text-red-400">3B+</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Pessoas Desconectadas
                  </h4>
                  <p className="text-gray-400">
                    Mais de 3 bilhões de pessoas ainda não têm acesso confiável à internet
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-orange-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-3xl font-bold text-orange-400">$2T</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Perda Econômica
                  </h4>
                  <p className="text-gray-400">
                    Estima-se uma perda de $2 trilhões em PIB global devido à falta de conectividade
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-3xl font-bold text-yellow-400">50%</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Áreas Rurais
                  </h4>
                  <p className="text-gray-400">
                    Metade da população rural mundial não tem acesso a serviços de banda larga
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="relative h-72 rounded-2xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80"
              alt="Terra do espaço"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-950/60 flex items-center justify-center p-8">
              <p className="text-white text-2xl md:text-3xl font-bold text-center max-w-3xl">
                "A solução está acima de nós: satélites LEO podem conectar qualquer ponto do planeta"
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}