"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

// ─── Icons ────────────────────────────────────────────────────────────────────

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function EmailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/Mustafa-Salah1",
    icon: GitHubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mustafa-salah-38a264335/",
    icon: LinkedInIcon,
  },
  {
    label: "Email",
    href: "mailto:mustfas2005@gmail.com",
    icon: EmailIcon,
  },
];

// ─── Animation Variants ───────────────────────────────────────────────────────

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

import { Variants } from "framer-motion";

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function AnimatedGradientLine() {
  return (
    <div className="relative h-px w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
        style={{ width: "40%" }}
      />
    </div>
  );
}

function AmbientGlow() {
  return (
    <>
      {/* Left glow */}
      <div
        className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full opacity-[0.06]"
        style={{
          background: "radial-gradient(circle, #22d3ee 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      {/* Right glow */}
      <div
        className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full opacity-[0.05]"
        style={{
          background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      {/* Center subtle glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-64 w-px -translate-x-1/2 opacity-20"
        style={{
          background: "linear-gradient(to bottom, #22d3ee, transparent)",
        }}
      />
    </>
  );
}

function InitialsLogo() {
  return (
    <motion.div
      className="relative flex h-12 w-12 items-center justify-center rounded-xl text-sm font-bold tracking-widest text-cyan-300"
      style={{
        background: "linear-gradient(135deg, rgba(34,211,238,0.12) 0%, rgba(6,182,212,0.06) 100%)",
        border: "1px solid rgba(34,211,238,0.25)",
        boxShadow: "0 0 20px rgba(34,211,238,0.08), inset 0 1px 0 rgba(255,255,255,0.06)",
      }}
      whileHover={{
        boxShadow: "0 0 30px rgba(34,211,238,0.2), inset 0 1px 0 rgba(255,255,255,0.1)",
        borderColor: "rgba(34,211,238,0.5)",
      }}
      transition={{ duration: 0.3 }}
    >
      MS
    </motion.div>
  );
}

function SocialButton({
  href,
  label,
  icon: Icon,
  index,
}: {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  index: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      aria-label={label}
      className="group relative flex items-center gap-2.5 rounded-xl px-4 py-2.5 text-sm text-slate-400 transition-colors duration-200 hover:text-cyan-300"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
      variants={itemVariants}
      custom={index}
      whileHover={
        prefersReducedMotion
          ? {}
          : {
              y: -3,
              background: "rgba(34,211,238,0.06)",
              borderColor: "rgba(34,211,238,0.2)",
              boxShadow: "0 8px 24px rgba(34,211,238,0.1)",
            }
      }
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <Icon className="h-4 w-4 transition-colors duration-200 group-hover:text-cyan-400" />
      <span className="font-medium">{label}</span>
    </motion.a>
  );
}

function NavLink({ label, href, index }: { label: string; href: string; index: number }) {
  return (
    <motion.a
      href={href}
      className="group relative text-sm text-slate-500 transition-colors duration-200 hover:text-slate-200"
      variants={itemVariants}
      custom={index}
      whileHover={{ y: -1 }}
      transition={{ duration: 0.2 }}
    >
      {label}
      <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-cyan-400 opacity-70 transition-all duration-300 group-hover:w-full" />
    </motion.a>
  );
}

// ─── Main Footer ──────────────────────────────────────────────────────────────

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();
  const currentYear = new Date().getFullYear();

  const animationProps = prefersReducedMotion
    ? {}
    : {
        variants: containerVariants,
        initial: "hidden",
        animate: isInView ? "visible" : "hidden",
      };

  return (
    <footer ref={ref} className="relative mt-28 overflow-hidden">
      {/* Top gradient separator */}
      <AnimatedGradientLine />

      {/* Ambient background glows */}
      <AmbientGlow />

      <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-20">
        <motion.div {...animationProps} className="space-y-14">

          {/* ── CTA Card ─────────────────────────────────────────── */}
          <motion.div
            variants={itemVariants}
            className="relative overflow-hidden rounded-2xl p-8 md:p-12"
            style={{
              background:
                "linear-gradient(135deg, rgba(34,211,238,0.06) 0%, rgba(15,23,42,0.8) 50%, rgba(6,182,212,0.04) 100%)",
              border: "1px solid rgba(34,211,238,0.12)",
              boxShadow:
                "0 0 0 1px rgba(255,255,255,0.03), 0 20px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
            }}
          >
            {/* Card inner glow */}
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl opacity-40"
              style={{
                background:
                  "radial-gradient(ellipse at 20% 50%, rgba(34,211,238,0.08) 0%, transparent 60%)",
              }}
            />

            <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400/70">
                  Open to opportunities
                </p>
                <h2 className="text-2xl font-bold text-slate-100 md:text-3xl">
                  Let&rsquo;s build something{" "}
                  <span
                    className="bg-clip-text text-transparent"
                    style={{
                      backgroundImage: "linear-gradient(90deg, #22d3ee, #67e8f9, #a5f3fc)",
                    }}
                  >
                    amazing
                  </span>{" "}
                  together.
                </h2>
                <p className="max-w-sm text-sm text-slate-400 leading-relaxed">
                  Available for freelance projects and full-time roles. I turn ideas into
                  polished digital products.
                </p>
              </div>

              <motion.a
                href="mailto:mustfas2005@gmail.com"
                className="group flex shrink-0 items-center gap-2.5 rounded-xl px-6 py-3.5 text-sm font-semibold text-slate-900 transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%)",
                  boxShadow: "0 4px 20px rgba(34,211,238,0.3)",
                }}
                whileHover={
                  prefersReducedMotion
                    ? {}
                    : {
                        scale: 1.03,
                        boxShadow: "0 8px 32px rgba(34,211,238,0.45)",
                      }
                }
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                Get in touch
                <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.a>
            </div>
          </motion.div>

          {/* ── Main Grid ────────────────────────────────────────── */}
          <div className="grid gap-10 md:grid-cols-3 md:gap-8">

            {/* Brand column */}
            <motion.div variants={itemVariants} className="space-y-5">
              <div className="flex items-center gap-3">
                <InitialsLogo />
                <div>
                  <p className="font-bold text-slate-100 tracking-tight">Mustafa Salah</p>
                  <p className="text-xs text-slate-500">Flutter & Front-End Engineer</p>
                </div>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed max-w-[22ch]">
                Crafting fast, beautiful apps — from pixel to production.
              </p>

              {/* Social buttons */}
              <div className="flex flex-wrap gap-2">
                {SOCIAL_LINKS.map((link, i) => (
                  <SocialButton key={link.label} {...link} index={i} />
                ))}
              </div>
            </motion.div>

            {/* Nav column */}
            <motion.div variants={itemVariants} className="space-y-4 md:justify-self-center">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                Navigation
              </p>
              <nav className="flex flex-col gap-3">
                {NAV_LINKS.map((link, i) => (
                  <NavLink key={link.label} {...link} index={i} />
                ))}
              </nav>
            </motion.div>

            {/* Status / stack column */}
            <motion.div variants={itemVariants} className="space-y-4 md:justify-self-end">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                Current Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {["Flutter", "Next.js", "TypeScript", "Tailwind", "Firebase"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg px-3 py-1.5 text-xs font-medium text-slate-400"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Availability indicator */}
              <div
                className="mt-2 inline-flex items-center gap-2 rounded-xl px-4 py-2.5"
                style={{
                  background: "rgba(34,197,94,0.06)",
                  border: "1px solid rgba(34,197,94,0.15)",
                }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span className="text-xs font-medium text-emerald-400">
                  Available for work
                </span>
              </div>
            </motion.div>

          </div>

          {/* ── Bottom Bar ───────────────────────────────────────── */}
          <motion.div variants={itemVariants}>
            <AnimatedGradientLine />
            <div className="flex flex-col items-center justify-between gap-3 pt-8 text-xs text-slate-600 md:flex-row">
              <p>
                © {currentYear} Mustafa Salah. All rights reserved.
              </p>
              <p className="flex items-center gap-1.5">
                Built with{" "}
                <span className="text-slate-500 transition-colors hover:text-cyan-400/80">
                  Next.js
                </span>
                {" & "}
                <span className="text-slate-500 transition-colors hover:text-cyan-400/80">
                  Tailwind CSS
                </span>
              </p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </footer>
  );
}