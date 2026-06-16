"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import FadeIn from "./FadeIn";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  category: string;
  status: "Live" | "In Progress" | "Case Study";
  featured?: boolean;
  year: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const projects: Project[] = [
  {
    title: "Dalili App",
    description:
      "A location-aware Flutter application that connects users with trusted local service providers. Features real-time search, ratings, and booking flows.",
    image: "/projects/app1-cover.png",
    tech: ["Flutter", "REST API", "Firebase"],
    category: "Mobile App",
    status: "Live",
    featured: true,
    year: "2024",
  },
  {
    title: "Finance App",
    description:
      "Modern finance and services mobile application with dashboard analytics, transaction history, and secure payment integration.",
    image: "/projects/app2.png",
    tech: ["Flutter", "Dart", "REST API"],
    category: "Mobile App",
    status: "Live",
    year: "2024",
  },
  {
    title: "Mobile UI Kit",
    description:
      "A comprehensive mobile interface design system with reusable components, design tokens, and interactive prototypes.",
    image: "/projects/app3.png",
    tech: ["Flutter", "Figma", "UI/UX"],
    category: "Design System",
    status: "Case Study",
    year: "2023",
  },
  {
    title: "Business Website",
    description:
      "Responsive, performance-optimised business website with SSR, custom animations, and a headless CMS integration.",
    image: "/projects/web1.png",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    category: "Web",
    status: "Live",
    year: "2024",
  },
];

// ─── Constants ────────────────────────────────────────────────────────────────

const EASE_PREMIUM = [0.21, 0.47, 0.32, 0.98] as const;

const STATUS_STYLES: Record<Project["status"], string> = {
  Live: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  "In Progress": "bg-amber-500/10 text-amber-400 border-amber-500/20",
  "Case Study": "bg-sky-500/10 text-sky-400 border-sky-500/20",
};

// ─── Featured Card ─────────────────────────────────────────────────────────────

function FeaturedCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <FadeIn delay={index * 0.1}>
      <motion.article
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        className="relative group grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/60 backdrop-blur-sm
          hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500"
      >
        {/* Glow */}
        <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(34,211,238,0.04), transparent 40%)" }}
        />

        {/* Image */}
        <div className="relative overflow-hidden min-h-[280px] lg:min-h-[380px]">
          <motion.div
            animate={{ scale: hovered ? 1.06 : 1 }}
            transition={{ duration: 0.7, ease: EASE_PREMIUM }}
            className="absolute inset-0"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </motion.div>

          {/* Image overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-900/60 lg:block hidden" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent lg:hidden" />

          {/* Featured badge */}
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 text-[11px] font-semibold tracking-widest uppercase backdrop-blur-sm">
              <span className="w-1 h-1 rounded-full bg-cyan-400 animate-pulse" />
              Featured
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center p-8 lg:p-10">
          {/* Meta row */}
          <div className="flex items-center gap-3 mb-5">
            <span className="text-slate-600 text-xs font-mono tracking-widest">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="w-8 h-px bg-slate-700" />
            <span className="text-xs text-slate-500 tracking-widest uppercase">
              {project.category}
            </span>
            <span className={`ml-auto inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full border text-[11px] font-medium ${STATUS_STYLES[project.status]}`}>
              {project.status}
            </span>
          </div>

          <h3 className="text-3xl font-bold text-white tracking-tight mb-3 group-hover:text-cyan-50 transition-colors duration-300">
            {project.title}
          </h3>

          <p className="text-slate-400 leading-7 text-[0.95rem] mb-6">
            {project.description}
          </p>

          {/* Tech */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((item) => (
              <span
                key={item}
                className="px-3 py-1 rounded-full text-xs font-medium bg-slate-800 border border-slate-700 text-slate-300
                  group-hover:border-slate-600 transition-colors duration-300"
              >
                {item}
              </span>
            ))}
          </div>

          {/* CTA */}
          <motion.button
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
            className="self-start inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
          >
            View Case Study
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.button>
        </div>
      </motion.article>
    </FadeIn>
  );
}

// ─── Standard Card ─────────────────────────────────────────────────────────────

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <FadeIn delay={index * 0.1}>
      <motion.article
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        className="relative group flex flex-col rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/60 backdrop-blur-sm h-full
          hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/8 transition-all duration-500"
      >
        {/* Image */}
        <div className="relative overflow-hidden h-56">
          <motion.div
            animate={{ scale: hovered ? 1.07 : 1 }}
            transition={{ duration: 0.7, ease: EASE_PREMIUM }}
            className="absolute inset-0"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />

          {/* Hover overlay */}
          <motion.div
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-cyan-500/5 flex items-center justify-center"
          >
            <motion.div
              animate={{ scale: hovered ? 1 : 0.85, opacity: hovered ? 1 : 0 }}
              transition={{ duration: 0.3, ease: EASE_PREMIUM }}
              className="px-5 py-2.5 rounded-full bg-slate-900/90 border border-cyan-500/40 text-cyan-400 text-sm font-semibold backdrop-blur-sm"
            >
              View Details
            </motion.div>
          </motion.div>

          {/* Year chip */}
          <div className="absolute top-4 right-4">
            <span className="px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-700/60 text-slate-400 text-xs font-mono backdrop-blur-sm">
              {project.year}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-6">
          {/* Meta row */}
          <div className="flex items-center gap-2.5 mb-4">
            <span className="text-slate-700 text-xs font-mono tracking-widest">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="w-6 h-px bg-slate-800" />
            <span className="text-xs text-slate-600 tracking-widest uppercase">
              {project.category}
            </span>
            <span className={`ml-auto inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-[11px] font-medium ${STATUS_STYLES[project.status]}`}>
              {project.status}
            </span>
          </div>

          <h3 className="text-xl font-bold text-white tracking-tight mb-2.5 group-hover:text-cyan-50 transition-colors duration-300">
            {project.title}
          </h3>

          <p className="text-slate-500 text-sm leading-6 flex-1 mb-5">
            {project.description}
          </p>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-slate-800 via-slate-700/50 to-transparent mb-5" />

          {/* Tech + CTA */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex flex-wrap gap-1.5">
              {project.tech.slice(0, 2).map((item) => (
                <span
                  key={item}
                  className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-slate-800 border border-slate-700/80 text-slate-400"
                >
                  {item}
                </span>
              ))}
              {project.tech.length > 2 && (
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-slate-800 border border-slate-700/80 text-slate-500">
                  +{project.tech.length - 2}
                </span>
              )}
            </div>

            <motion.span
              animate={{ x: hovered ? 3 : 0 }}
              transition={{ duration: 0.2 }}
              className="flex-shrink-0 text-slate-600 group-hover:text-cyan-400 transition-colors duration-300"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.span>
          </div>
        </div>
      </motion.article>
    </FadeIn>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="relative max-w-6xl mx-auto px-6 py-28 overflow-hidden">
      {/* Background glow */}
      <div aria-hidden="true" className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px]" />

      {/* Header */}
      <FadeIn>
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-cyan-400 mb-4 px-3 py-1 rounded-full border border-cyan-400/20 bg-cyan-400/5">
            Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400">
              Projects
            </span>
          </h2>
          <p className="text-slate-500 text-lg max-w-lg mx-auto">
            A curated selection of work spanning mobile applications, web platforms, and design systems.
          </p>
        </div>
      </FadeIn>

      {/* Featured project */}
      <div className="mb-8">
        <FeaturedCard project={featured} index={0} />
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {rest.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i + 1} />
        ))}
      </div>

      {/* Bottom CTA */}
      <FadeIn delay={0.3}>
        <div className="text-center mt-14">
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
            transition={{ duration: 0.2 }}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-slate-700 bg-slate-900/60 text-slate-300 text-sm font-medium
              hover:border-cyan-500/40 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 backdrop-blur-sm"
          >
            View all projects
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.button>
        </div>
      </FadeIn>
    </section>
  );
}