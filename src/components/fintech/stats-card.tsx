"use client";

import { motion } from "framer-motion";

type StatsCardProps = {
  label: string;
  value: string;
  tone?: "lime" | "violet";
};

export function StatsCard({
  label,
  value,
  tone = "violet",
}: StatsCardProps) {
  return (
    <motion.article
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className={`rounded-3xl border border-white/10 p-5 shadow-lg ${
        tone === "lime"
          ? "bg-[linear-gradient(145deg,rgba(199,255,125,0.18),rgba(255,255,255,0.06))]"
          : "bg-[linear-gradient(145deg,rgba(154,112,255,0.18),rgba(255,255,255,0.05))]"
      }`}
    >
      <p className="text-sm text-white/62">{label}</p>
      <p className="mt-3 text-2xl font-bold text-white">{value}</p>
    </motion.article>
  );
}
