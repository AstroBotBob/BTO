import React from "react";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Conclusao() {
  return (
    <div className="min-h-screen bg-slate-950 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Conclusão
          </h1>
          <div className="h-2 w-32 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-slate-900 to-slate-800 p-12 rounded-3xl border border-slate-700 text-center"
        >
          <Rocket className="w-16 h-16 text-pink-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-6">
            Junte-se à Revolução Espacial
          </h2>
          <p className="text-gray-300 text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            O futuro da conectividade global começa agora. Seja parte da transformação que conectará o mundo inteiro.
          </p>
          <Button className="bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white px-12 py-6 text-lg rounded-full">
            Entre em Contato
          </Button>
        </motion.div>
      </div>
    </div>
  );
}