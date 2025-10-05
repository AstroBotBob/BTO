import React from "react";
import { motion } from "framer-motion";
import { Rocket, Orbit, Wifi, CheckCircle } from "lucide-react";

export default function ComoFunciona() {
  const steps = [
    {
      number: "01",
      title: "Lançamento",
      description: "Satélites são lançados em órbitas LEO entre 300-2000km de altitude",
      icon: Rocket
    },
    {
      number: "02",
      title: "Constelação",
      description: "Centenas de satélites formam uma rede interconectada",
      icon: Orbit
    },
    {
      number: "03",
      title: "Comunicação",
      description: "Sinais são transmitidos via laser e radiofrequência",
      icon: Wifi
    },
    {
      number: "04",
      title: "Usuário Final",
      description: "Antenas receptoras conectam dispositivos à rede",
      icon: CheckCircle
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Como Funciona?
          </h1>
          <div className="h-2 w-32 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="relative h-96 rounded-3xl overflow-hidden mb-16"
        >
          <img
            src="https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=1200&q=80"
            alt="Satélite em órbita"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="relative bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-green-500/50 transition-all duration-300"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                {step.number}
              </div>
              <step.icon className="w-12 h-12 text-green-400 mb-4 mt-4" />
              <h3 className="text-xl font-bold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-slate-900/50 p-10 rounded-3xl border border-slate-800 mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-8">
            Arquitetura Técnica
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-green-400 mb-3">
                Camada Espacial (Space Segment)
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Constelação de satélites em múltiplos planos orbitais, garantindo cobertura contínua e redundância. Cada satélite possui:
              </p>
              <ul className="space-y-2 ml-6">
                {[
                  "Antenas de phased array para comunicação com usuários",
                  "Enlaces ópticos inter-satélite para baixa latência",
                  "Painéis solares de alta eficiência",
                  "Propulsão elétrica para manutenção orbital",
                  "Computadores de bordo com processamento edge"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-400">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-cyan-400 mb-3">
                Camada Terrestre (Ground Segment)
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Infraestrutura de controle e gateway que conecta a rede satelital à internet terrestre:
              </p>
              <ul className="space-y-2 ml-6">
                {[
                  "Estações de controle para telemetria e comando",
                  "Gateways de alta capacidade conectados à internet backbone",
                  "Centros de processamento de dados",
                  "Sistemas de monitoramento e previsão orbital"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-400">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-purple-400 mb-3">
                Camada de Usuário (User Segment)
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Terminais e dispositivos que conectam usuários finais à rede:
              </p>
              <ul className="space-y-2 ml-6">
                {[
                  "Antenas de usuário de phased array (tamanho pizza)",
                  "Terminais móveis para veículos e embarcações",
                  "Módems IoT de baixo consumo",
                  "Smartphones compatíveis (gerações futuras)"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-400">
                    <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="grid md:grid-cols-3 gap-6"
        >
          <div className="relative h-48 rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1581822261290-991b38693d1b?w=600&q=80"
              alt="Lançamento"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent flex items-end p-4">
              <p className="text-white font-bold">Lançamento</p>
            </div>
          </div>
          <div className="relative h-48 rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=600&q=80"
              alt="Órbita"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent flex items-end p-4">
              <p className="text-white font-bold">Em Órbita</p>
            </div>
          </div>
          <div className="relative h-48 rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80"
              alt="Conectividade"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent flex items-end p-4">
              <p className="text-white font-bold">Conectividade Global</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}