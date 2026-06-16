"use client";

import { AnimatePresence, motion, useAnimate, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface SplashScreenProps {
  show: boolean;
}

interface GlowOrb {
  id: number;
  size: string;
  color: string;
  position: { top?: string; bottom?: string; left?: string; right?: string };
  blur: string;
  opacity: string;
  duration: number;
  delay: number;
}

interface Particle {
  id: number;
  size: number;
  x: string;
  y: string;
  duration: number;
  delay: number;
  opacity: number;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const GLOW_ORBS: GlowOrb[] = [
  {
    id: 1,
    size: "500px",
    color: "bg-cyan-500/10",
    position: { top: "-10%", left: "20%" },
    blur: "blur-[140px]",
    opacity: "opacity-70",
    duration: 8,
    delay: 0,
  },
  {
    id: 2,
    size: "380px",
    color: "bg-sky-600/15",
    position: { bottom: "10%", right: "15%" },
    blur: "blur-[120px]",
    opacity: "opacity-60",
    duration: 10,
    delay: 1,
  },
  {
    id: 3,
    size: "280px",
    color: "bg-cyan-400/10",
    position: { bottom: "30%", left: "5%" },
    blur: "blur-[100px]",
    opacity: "opacity-50",
    duration: 12,
    delay: 0.5,
  },
];

const PARTICLES: Particle[] = [
  {
    id: 1,
    size: 2,
    x: "15%",
    y: "20%",
    duration: 8,
    delay: 0,
    opacity: 0.2,
  },
  {
    id: 2,
    size: 3,
    x: "45%",
    y: "65%",
    duration: 10,
    delay: 1,
    opacity: 0.3,
  },
  {
    id: 3,
    size: 1.5,
    x: "80%",
    y: "30%",
    duration: 7,
    delay: 0.5,
    opacity: 0.25,
  },
];

const TITLE = "Mustafa Salah";
const ROLE = "Flutter Developer  ·  Front-End Engineer";

const EASE_PREMIUM = [0.21, 0.47, 0.32, 0.98] as const;

// ─── Sub-components ───────────────────────────────────────────────────────────

function GlowLayer() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
      {GLOW_ORBS.map((orb) => (
        <motion.div
          key={orb.id}
          className={`absolute rounded-full ${orb.color} ${orb.blur} ${orb.opacity}`}
          style={{
            width: orb.size,
            height: orb.size,
            ...orb.position,
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.5, 0.75, 0.5],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,211,238,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}

function ParticleField() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
      {PARTICLES.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-cyan-300"
          style={{
            width: p.size,
            height: p.size,
            left: p.x,
            top: p.y,
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -28, 0],
            opacity: [p.opacity, p.opacity * 2.2, p.opacity],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function CharReveal({ text, delay = 0 }: { text: string; delay?: number }) {
  const chars = text.split("");
  return (
    <>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          style={{ whiteSpace: char === " " ? "pre" : "normal" }}
          initial={{ opacity: 0, y: 36, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.55,
            delay: delay + i * 0.038,
            ease: EASE_PREMIUM,
          }}
        >
          {char}
        </motion.span>
      ))}
    </>
  );
}

function ProgressBar() {
  const progress = useMotionValue(0);
  const scaleX = useTransform(progress, [0, 100], [0, 1]);

  useEffect(() => {
    const controls = { value: 0 };
    const steps = [
      { target: 30, duration: 400 },
      { target: 65, duration: 500 },
      { target: 85, duration: 400 },
      { target: 100, duration: 600 },
    ];

    let elapsed = 0;
    steps.forEach(({ target, duration }) => {
      setTimeout(() => {
        progress.set(target);
      }, elapsed);
      elapsed += duration;
    });
  }, [progress]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.4 }}
      className="mt-10 w-56 mx-auto"
    >
      {/* Track */}
      <div className="h-px w-full bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-500 to-sky-400 rounded-full origin-left"
          style={{ scaleX }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>

      {/* Label */}
      <motion.p
        className="text-slate-600 text-[10px] tracking-[3px] uppercase mt-2.5 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
      >
        Loading portfolio
      </motion.p>
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function SplashScreen({ show }: SplashScreenProps) {
  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div
          role="status"
          aria-label="Loading portfolio"
          className="fixed inset-0 z-[9999] bg-[#020817] flex items-center justify-center overflow-hidden"
          exit={{
            opacity: 0,
            scale: 1.04,
            filter: "blur(12px)",
          }}
          transition={{ duration: 0.9, ease: EASE_PREMIUM }}
        >
          <GlowLayer />
          <ParticleField />

          {/* Center content */}
          <div className="relative z-10 flex flex-col items-center text-center px-6">
            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1, ease: EASE_PREMIUM }}
              className="mb-7 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-cyan-400/80 text-[11px] tracking-[3px] uppercase font-medium">
                Portfolio 2025
              </span>
            </motion.div>

            {/* Name */}
            <h1
              className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight text-white leading-none"
              aria-label={TITLE}
            >
              <CharReveal text={TITLE} delay={0.3} />
            </h1>

            {/* Accent line */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.8, ease: EASE_PREMIUM }}
              className="my-6 h-px w-32 origin-center bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
            />

            {/* Role */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 0.65, ease: EASE_PREMIUM }}
              className="text-slate-400 text-sm sm:text-base tracking-[3px] uppercase font-light"
            >
              {ROLE}
            </motion.p>

            <ProgressBar />
          </div>

          {/* Corner decorations */}
          {(["top-0 left-0", "top-0 right-0", "bottom-0 left-0", "bottom-0 right-0"] as const).map(
            (pos, i) => (
              <motion.div
                key={i}
                aria-hidden="true"
                className={`absolute ${pos} w-16 h-16 border-cyan-500/20
                  ${pos.includes("top") && pos.includes("left") ? "border-t border-l" : ""}
                  ${pos.includes("top") && pos.includes("right") ? "border-t border-r" : ""}
                  ${pos.includes("bottom") && pos.includes("left") ? "border-b border-l" : ""}
                  ${pos.includes("bottom") && pos.includes("right") ? "border-b border-r" : ""}
                `}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + i * 0.08, duration: 0.5, ease: EASE_PREMIUM }}
              />
            )
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}