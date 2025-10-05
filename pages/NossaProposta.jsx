import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Target, Zap, Shield } from "lucide-react";

export default function NossaProposta() {
  return (
    <div className="min-h-screen bg-slate-950 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Nossa Proposta / Inovação
          </h1>
          <div className="h-2 w-32 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative h-80 rounded-3xl overflow-hidden mb-12"
        >
          <img
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200&q=80"
            alt="Inovação"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent flex items-end p-8">
            <div>
              <Lightbulb className="w-12 h-12 text-yellow-400 mb-4" />
              <p className="text-white text-3xl font-bold">
                Redefinindo a conectividade espacial
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-indigo-900/30 to-blue-900/30 p-10 rounded-3xl border border-indigo-800/50 mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Nossa Missão
          </h2>
          <p className="text-gray-300 text-xl leading-relaxed mb-6">
            Criar uma constelação de satélites LEO de próxima geração que ofereça conectividade universal, acessível e sustentável, revolucionando a forma como o mundo se comunica.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            Combinamos tecnologia de ponta, design eficiente e um modelo de negócios inovador para tornar os serviços satelitais acessíveis a bilhões de pessoas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800"
          >
            <Target className="w-12 h-12 text-indigo-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Diferencial Competitivo
            </h3>
            <ul className="space-y-3">
              {[
                "Satélites 40% mais leves e eficientes",
                "Custo de produção 60% menor que concorrentes",
                "Latência <30ms através de enlaces ópticos",
                "Capacidade de 10 Gbps por satélite",
                "Vida útil estendida de 7-10 anos",
                "Desorbita automática segura"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800"
          >
            <Zap className="w-12 h-12 text-yellow-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Inovações Tecnológicas
            </h3>
            <ul className="space-y-3">
              {[
                "Propulsão elétrica de alta eficiência",
                "Antenas de phased array adaptativas",
                "IA embarcada para otimização de rede",
                "Painéis solares de 3ª geração",
                "Enlaces laser de 100 Gbps",
                "Arquitetura modular escalável"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-slate-900/50 p-10 rounded-3xl border border-slate-800 mb-12"
        >
          <div className="flex items-start gap-4 mb-6">
            <Shield className="w-10 h-10 text-green-400 flex-shrink-0" />
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Modelo de Negócios Sustentável
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Nossa abordagem combina múltiplas fontes de receita para garantir viabilidade financeira e crescimento sustentável:
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-800/50 rounded-xl">
              <h4 className="text-xl font-bold text-white mb-2">
                B2C - Consumidor
              </h4>
              <p className="text-gray-400 text-sm mb-3">
                $99-299/mês
              </p>
              <p className="text-gray-300">
                Planos residenciais com velocidades de 100-500 Mbps para usuários individuais
              </p>
            </div>

            <div className="p-6 bg-slate-800/50 rounded-xl">
              <h4 className="text-xl font-bold text-white mb-2">
                B2B - Empresas
              </h4>
              <p className="text-gray-400 text-sm mb-3">
                $500-5.000/mês
              </p>
              <p className="text-gray-300">
                Soluções corporativas com SLA garantido para negócios e indústrias
              </p>
            </div>

            <div className="p-6 bg-slate-800/50 rounded-xl">
              <h4 className="text-xl font-bold text-white mb-2">
                B2G - Governos
              </h4>
              <p className="text-gray-400 text-sm mb-3">
                Contratos customizados
              </p>
              <p className="text-gray-300">
                Parcerias com governos para conectividade em áreas rurais e serviços estratégicos
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="relative h-64 rounded-2xl overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80"
            alt="Futuro"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-indigo-950/70 flex items-center justify-center p-8">
            <div className="text-center">
              <p className="text-white text-3xl font-bold mb-4">
                Projeção: $2B em receita anual até 2030
              </p>
              <p className="text-indigo-200 text-lg">
                Com 5 milhões de usuários ativos e 500 contratos corporativos
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}