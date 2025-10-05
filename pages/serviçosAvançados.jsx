import React from "react";
import { motion } from "framer-motion";
import { Satellite, Radio, Database, MessageSquare, MapPin, Zap } from "lucide-react";

export default function ServicosAvancados() {
  const services = [
    {
      icon: Radio,
      title: "Internet de Alta Velocidade",
      description: "Banda larga de 100+ Mbps em qualquer lugar do planeta",
      details: "Velocidades comparáveis à fibra óptica com latência <50ms, ideal para streaming, jogos e trabalho remoto."
    },
    {
      icon: MessageSquare,
      title: "Comunicações IoT",
      description: "Conectividade para bilhões de dispositivos IoT",
      details: "Suporte para sensores, veículos autônomos, agricultura inteligente e cidades conectadas."
    },
    {
      icon: Database,
      title: "Backup e Redundância",
      description: "Infraestrutura resiliente para redes críticas",
      details: "Solução de backup para redes terrestres, garantindo continuidade em emergências."
    },
    {
      icon: MapPin,
      title: "Geolocalização Precisa",
      description: "Posicionamento global com precisão centimétrica",
      details: "Serviços de GPS aprimorados para navegação, logística e aplicações de precisão."
    },
    {
      icon: Zap,
      title: "Edge Computing Espacial",
      description: "Processamento de dados no espaço",
      details: "Redução de latência através do processamento distribuído na constelação de satélites."
    },
    {
      icon: Database,
      title: "Observação da Terra",
      description: "Monitoramento contínuo do planeta",
      details: "Dados em tempo real para clima, agricultura, desastres naturais e mudanças ambientais."
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
            Serviços Avançados de Satélites
          </h1>
          <div className="h-2 w-32 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full" />
          <p className="text-xl text-gray-400 mt-6 max-w-3xl">
            Nossa constelação LEO oferece uma gama completa de serviços revolucionários para conectar o mundo
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative h-96 rounded-3xl overflow-hidden mb-16"
        >
          <img
            src="https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=1200&q=80"
            alt="Constelação de satélites"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <Satellite className="w-16 h-16 text-cyan-400 mb-4" />
            <p className="text-white text-3xl font-bold">
              Tecnologia que transforma a conectividade global
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-cyan-400 text-lg mb-4">
                {service.description}
              </p>
              <p className="text-gray-400 leading-relaxed">
                {service.details}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-10 rounded-3xl border border-purple-800/50"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Vantagens Competitivas
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">
                50ms
              </div>
              <p className="text-gray-300">
                Latência média
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-pink-400 mb-2">
                100%
              </div>
              <p className="text-gray-300">
                Cobertura global
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">
                99.9%
              </div>
              <p className="text-gray-300">
                Uptime garantido
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="relative h-64 rounded-2xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&q=80"
              alt="Tecnologia espacial"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="relative h-64 rounded-2xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1541873676-a18131494184?w=800&q=80"
              alt="Conectividade"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}