"use client";

import { motion } from "framer-motion";
import { Boxes, Diamond, TrendingUp, Users } from "lucide-react";
import logoJumbowhite from "@/assets/icon-ijumper-white.png";
import Image from "next/image";

const CARD_WIDTH = 320;
const CARD_HEIGHT = 320;
const CIRCLE_SIZE = 168;

const NODES = [
  { icon: Users, x: 35, y: 34, size: 48, delay: 0.4 },
  { icon: Boxes, x: 250, y: 34, size: 48, delay: 0.5 },
  { icon: Diamond, x: 250, y: 248, size: 42, delay: 0.7 },
];

function FloatingNode({
  x,
  y,
  size,
  delay,
  icon: Icon,
}: {
  x: number;
  y: number;
  size: number;
  delay: number;
  icon: React.ComponentType<{
    className?: string;
    style?: React.CSSProperties;
  }>;
}) {
  return (
    <motion.div
      className="absolute z-20 flex items-center justify-center rounded-full bg-[#24153d] shadow-lg"
      style={{ left: x, top: y, width: size, height: size }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.45, type: "spring", stiffness: 220 }}
    >
      <Icon
        className="text-white"
        style={{ width: size * 0.45, height: size * 0.45 }}
      />
    </motion.div>
  );
}

function SavingsCard() {
  const bars = [
    { back: 44, front: 30 },
    { back: 70, front: 50 },
    { back: 52, front: 38 },
    { back: 32, front: 22 },
    { back: 84, front: 60 },
    { back: 76, front: 56, active: true },
    { back: 96, front: 70 },
    { back: 72, front: 52 },
  ];

  return (
    <motion.div
      className="absolute bottom-0 left-[-50px] z-30 w-[17.5rem] rounded-[1.7rem] border border-white/8 bg-[linear-gradient(180deg,#2d2b36_0%,#24212c_100%)] p-5 shadow-2xl"
      initial={{ opacity: 0, y: 34, x: -6 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ delay: 0.55, duration: 0.65, type: "spring" }}
    >
      <div className="mb-4 flex h-24 items-end gap-2">
        {bars.map((bar, i) => (
          <motion.div
            key={i}
            className="flex flex-1 items-end gap-[3px]"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 0.8 + i * 0.05, duration: 0.3 }}
            style={{ originY: 1 }}
          >
            <div
              className="flex-1 rounded-t-[0.55rem]"
              style={{
                height: bar.back,
                background: bar.active ? "#a259ff" : "rgba(238,243,255,0.94)",
              }}
            />
            <div
              className="flex-1 rounded-t-[0.55rem]"
              style={{
                height: bar.front,
                background: bar.active ? "#ff4fcb" : "rgba(188,200,235,0.88)",
              }}
            />
          </motion.div>
        ))}
      </div>

      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-semibold leading-snug text-white/84">
          A consultoria organiza cada frente do marketing
        </p>
        <motion.div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#139684]"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.05, duration: 0.3, type: "spring" }}
        >
          <TrendingUp className="h-4 w-4 text-white" />
        </motion.div>
      </div>
    </motion.div>
  );
}

export function ChartCard() {
  return (
    <div className="relative mx-auto" style={{ width: 340, height: 440 }}>
      <motion.div
        className="absolute left-[50px] top-0 overflow-hidden rounded-[2rem] border border-white/8 shadow-lg"
        style={{
          width: CARD_WIDTH,
          height: CARD_HEIGHT,
          background: "linear-gradient(160deg, #ddff7d 0%, #d3fb74 100%)",
        }}
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <defs>
              <pattern
                id="dots-widget"
                width="24"
                height="24"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="1" fill="black" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots-widget)" />
          </svg>
        </div>

        <svg
          className="absolute inset-0 h-full w-full"
          viewBox={`0 0 ${CARD_WIDTH} ${CARD_HEIGHT}`}
          style={{ zIndex: 1 }}
        >
          {NODES.map((node, i) => (
            <motion.line
              key={i}
              x1={CARD_WIDTH / 2}
              y1={CARD_HEIGHT / 2}
              x2={node.x + node.size / 2}
              y2={node.y + node.size / 2}
              stroke="rgba(0,0,0,0.65)"
              strokeWidth="2.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: node.delay - 0.1, duration: 0.35 }}
            />
          ))}
        </svg>

        {NODES.map((node, i) => (
          <FloatingNode
            key={i}
            x={node.x}
            y={node.y}
            size={node.size}
            delay={node.delay}
            icon={node.icon}
          />
        ))}

        <motion.div
          className="absolute inset-0 z-10 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.55, type: "spring" }}
        >
          <div
            className="flex flex-col items-center justify-center rounded-full "
            style={{ width: CIRCLE_SIZE, height: CIRCLE_SIZE }}
          >
            <Image
              src={logoJumbowhite}
              alt="I Jumper Marketing & Consultoria"
              width={110}
              height={28}
              className="h-30 w-auto object-contain "
            />  

          </div>
        </motion.div>
      </motion.div>

      <SavingsCard />
    </div>
  );
}
