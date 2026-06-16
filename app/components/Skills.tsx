"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// ─── Data ────────────────────────────────────────────────────────────────────

const skillGroups = [
  {
    id: "mobile",
    title: "Mobile Development",
    description: "Cross-platform apps built with a single codebase, shipped to iOS & Android.",
    experience: "2+ yrs",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <circle cx="12" cy="18" r="1" fill="currentColor" />
      </svg>
    ),
    accentFrom: "#06b6d4",
    accentTo: "#0284c7",
    skills: [
      { name: "Flutter", icon: "🐦" },
      { name: "Dart", icon: "🎯" },
      { name: "Firebase", icon: "🔥" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Modern, performant UIs with Next.js and the React ecosystem.",
    experience: "3+ yrs",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    accentFrom: "#818cf8",
    accentTo: "#6366f1",
    skills: [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "TypeScript", icon: "🔷" },
      { name: "Tailwind CSS", icon: "🎨" },
    ],
  },
  {
    id: "tools",
    title: "Tools & APIs",
    description: "Version control, collaboration, and RESTful service integration.",
    experience: "3+ yrs",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    accentFrom: "#34d399",
    accentTo: "#059669",
    skills: [
      { name: "Git", icon: "🌿" },
      { name: "GitHub", icon: "🐙" },
      { name: "REST APIs", icon: "🔗" },
    ],
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function StatBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-white/5 text-white/50 border border-white/10">
      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
      {label}
    </span>
  );
}

interface SkillPillProps {
  name: string;
  icon: string;
  accent: string;
  index: number;
}

function SkillPill({ name, icon, accent, index }: SkillPillProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.07 + 0.3, duration: 0.3, ease: "easeOut" }}
      whileHover={{ scale: 1.06, y: -2 }}
      className="group relative flex items-center gap-2 px-3.5 py-2 rounded-xl
                 bg-white/5 border border-white/10 cursor-default
                 hover:border-white/25 hover:bg-white/10 transition-all duration-200"
    >
      {/* subtle per-pill glow on hover */}
      <span
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md -z-10"
        style={{ background: `radial-gradient(ellipse at 50% 100%, ${accent}33, transparent 70%)` }}
      />
      <span className="text-base leading-none">{icon}</span>
      <span className="text-sm font-medium text-white/75 group-hover:text-white/90 transition-colors">
        {name}
      </span>
    </motion.div>
  );
}

interface CardProps {
  group: (typeof skillGroups)[0];
  index: number;
}

function SkillCard({ group, index }: CardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group relative rounded-3xl overflow-hidden"
    >
      {/* Glassmorphism card shell */}
      <div
        className="relative h-full rounded-3xl border border-white/10
                   bg-gradient-to-b from-white/[0.06] to-white/[0.02]
                   backdrop-blur-xl p-7 flex flex-col gap-6
                   shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_24px_48px_rgba(0,0,0,0.5)]
                   transition-shadow duration-300
                   group-hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_32px_64px_rgba(0,0,0,0.7)]"
      >
        {/* Ambient top-edge glow */}
        <span
          className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(90deg, transparent, ${group.accentFrom}99, transparent)`,
          }}
        />

        {/* Card inner radial glow */}
        <span
          className="pointer-events-none absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
          style={{ background: group.accentFrom }}
        />

        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div
            className="flex items-center justify-center w-12 h-12 rounded-2xl border border-white/10 shadow-inner"
            style={{
              background: `linear-gradient(135deg, ${group.accentFrom}22, ${group.accentTo}11)`,
              color: group.accentFrom,
            }}
          >
            {group.icon}
          </div>
          <StatBadge label={group.experience} />
        </div>

        {/* Title + description */}
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-white tracking-tight">{group.title}</h3>
          <p className="text-sm text-white/45 leading-relaxed">{group.description}</p>
        </div>

        {/* Divider */}
        <div
          className="h-px w-full opacity-20"
          style={{
            background: `linear-gradient(90deg, transparent, ${group.accentFrom}, transparent)`,
          }}
        />

        {/* Skill pills */}
        <div className="flex flex-wrap gap-2">
          {group.skills.map((skill, i) => (
            <SkillPill
              key={skill.name}
              name={skill.name}
              icon={skill.icon}
              accent={group.accentFrom}
              index={i}
            />
          ))}
        </div>

        {/* Skill count footer */}
        <div className="mt-auto pt-1 flex items-center gap-2">
          <div className="flex -space-x-1">
            {group.skills.map((s, i) => (
              <span
                key={i}
                className="w-5 h-5 rounded-full flex items-center justify-center text-[9px]
                           border border-white/10 bg-white/5"
              >
                {s.icon}
              </span>
            ))}
          </div>
          <span className="text-xs text-white/30">
            {group.skills.length} technologies
          </span>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function Skills() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-40px" });

  return (
    <section
      id="skills"
      className="relative max-w-6xl mx-auto px-6 py-28 overflow-hidden"
    >
      {/* ── Ambient background glows ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/4 w-[600px] h-[600px]
                   rounded-full blur-[140px] opacity-[0.07]"
        style={{ background: "radial-gradient(circle, #06b6d4, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 w-[400px] h-[400px]
                   rounded-full blur-[120px] opacity-[0.06]"
        style={{ background: "radial-gradient(circle, #818cf8, transparent 70%)" }}
      />

      {/* ── Section header ── */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 32 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-20 space-y-5"
      >
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                        border border-cyan-500/25 bg-cyan-500/5 text-cyan-400
                        text-xs font-semibold tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          Tech Stack
        </div>

        <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-white">
          Skills &amp;{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(135deg, #06b6d4 0%, #818cf8 100%)",
            }}
          >
            Technologies
          </span>
        </h2>

        <p className="text-white/40 text-base max-w-md mx-auto leading-relaxed">
          A curated stack I rely on to ship fast, reliable products — from mobile
          to web and everything in between.
        </p>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="flex justify-center gap-8 pt-4"
        >
          {[
            { value: "10+", label: "Technologies" },
            { value: "3", label: "Specializations" },
            { value: "3+", label: "Years exp." },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-white/35 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Cards grid ── */}
      <div className="grid md:grid-cols-3 gap-5">
        {skillGroups.map((group, i) => (
          <SkillCard key={group.id} group={group} index={i} />
        ))}
      </div>

      {/* ── Bottom CTA strip ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-16 flex justify-center"
      >
        <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl
                        border border-white/8 bg-white/[0.03] text-white/40 text-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Always learning · Currently exploring AI integration & LLM tooling
        </div>
      </motion.div>
    </section>
  );
}