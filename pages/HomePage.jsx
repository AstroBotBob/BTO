import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Satellite, Globe, Zap, Shield, TrendingUp, Users } from "lucide-react";
import SpaceScene from "../components/home/SpaceScene";

export default function Home() {
  const features = [
    {
      icon: Satellite,
      title: "Constelação LEO",
      description: "Rede de satélites em órbita baixa para cobertura global"
    },
    {
      icon: Zap,
      title: "Baixa Latência",
      description: "Comunicação em tempo real com delay mínimo"
    },
    {
      icon: Globe,
      title: "Cobertura Global",
      description: "Internet e serviços em qualquer lugar do planeta"
    },
    {
      icon: Shield,
      title: "Alta Confiabilidade",
      description: "Redundância e resiliência de rede"
    },
    {
      icon: TrendingUp,
      title: "Escalabilidade",
      description: "Expansão contínua da constelação"
    },
    {
      icon: Users,
      title: "Acesso Universal",
      description: "Conectando regiões remotas e carentes"
    }
  ];

  return (
    <div className="bg-slate-950">
      {/* Hero Section with 3-Layer Animation */}
      <SpaceScene />

      {/* Features Section */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Por Que LEO?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Satélites em órbita baixa oferecem vantagens revolucionárias para comunicação e serviços globais
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="py-20 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Explore Nossa Proposta
            </h2>
            <p className="text-xl text-gray-400">
              Navegue pelos diferentes aspectos do nosso projeto
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Contexto", page: "Contexto", color: "from-blue-500 to-cyan-500" },
              { title: "Problema", page: "Problema", color: "from-red-500 to-orange-500" },
              { title: "Serviços Avançados", page: "ServicosAvancados", color: "from-purple-500 to-pink-500" },
              { title: "Como Funciona", page: "ComoFunciona", color: "from-green-500 to-emerald-500" },
              { title: "Nossa Proposta", page: "NossaProposta", color: "from-indigo-500 to-blue-500" },
              { title: "Impacto", page: "Impacto", color: "from-yellow-500 to-orange-500" },
              { title: "Protótipo", page: "Prototipo", color: "from-cyan-500 to-teal-500" },
              { title: "Próximos Passos", page: "ProximosPassos", color: "from-violet-500 to-purple-500" },
              { title: "Conclusão", page: "Conclusao", color: "from-pink-500 to-rose-500" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link to={createPageUrl(item.page)}>
                  <div className="group relative h-48 bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                    <div className="relative h-full flex items-center justify-center p-6">
                      <h3 className="text-2xl font-bold text-white text-center group-hover:scale-105 transition-transform duration-300">
                        {item.title}
                      </h3>
                    </div>
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color}`} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}