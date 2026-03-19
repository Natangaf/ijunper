"use client";

import { motion } from "framer-motion";

export function ChartCard() {
  return (
    <div className="relative">
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{ y: -6 }}
        className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(145deg,rgba(199,255,125,0.18),rgba(154,112,255,0.22),rgba(255,255,255,0.06))] p-6 shadow-lg shadow-black/20 backdrop-blur-xl sm:p-7"
      >
        <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-[#c7ff7d]/25 blur-3xl" />
        <div className="absolute left-5 top-5 h-16 w-16 rounded-full border border-white/12" />
        <div className="relative flex items-start justify-between">
          <div>
            <p className="text-sm text-white/68">Valor movimentado</p>
            <p className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              R$ 40.527
            </p>
          </div>
          <span className="rounded-full bg-[#d8ff9d] px-3 py-1 text-sm font-semibold text-[#17311f]">
            +35%
          </span>
        </div>

        <div className="mt-8 flex items-center justify-center">
          <div className="relative flex h-56 w-56 items-center justify-center rounded-full bg-[conic-gradient(from_210deg,#c7ff7d_0deg,#9a70ff_130deg,#ff4fcb_235deg,#ffffff20_235deg)] p-5 shadow-[0_20px_60px_rgba(154,112,255,0.22)]">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-[#1b1232]">
              <div className="text-center">
                <p className="text-xs uppercase tracking-[0.22em] text-white/46">
                  Fluxo ativo
                </p>
                <p className="mt-3 text-3xl font-bold text-white">R$ 18,2 mil</p>
              </div>
            </div>
          </div>
        </div>
      </motion.article>

      <motion.article
        initial={{ opacity: 0, x: 18, y: 18 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.55, delay: 0.15, ease: "easeOut" }}
        whileHover={{ y: -4 }}
        className="absolute -bottom-8 left-4 right-4 rounded-[1.75rem] border border-white/10 bg-[#150f28]/85 p-5 shadow-lg backdrop-blur-xl sm:left-auto sm:right-6 sm:w-72"
      >
        <div className="flex items-end gap-2">
          {[44, 70, 38, 82, 57, 94].map((height, index) => (
            <div
              key={height}
              className={`w-7 rounded-t-2xl ${
                index === 4
                  ? "bg-[linear-gradient(180deg,#ff4fcb_0%,#9a70ff_100%)]"
                  : "bg-[linear-gradient(180deg,#d8ff9d_0%,#7ef0b6_100%)]"
              }`}
              style={{ height }}
            />
          ))}
        </div>
        <p className="mt-5 text-sm text-white/64">
          Podemos aumentar sua reserva estrategica
        </p>
      </motion.article>
    </div>
  );
}
