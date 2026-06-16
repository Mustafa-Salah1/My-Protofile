"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

// ─── Types ────────────────────────────────────────────────────────────────────

interface NavLink {
  label: string;
  href: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

// ─── Scroll progress bar ──────────────────────────────────────────────────────

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  return (
    <motion.div
      style={{ scaleX, transformOrigin: "left" }}
      className="absolute bottom-0 left-0 right-0 h-[1.5px]
                 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500"
    />
  );
}

// ─── Logo ─────────────────────────────────────────────────────────────────────

function Logo() {
  return (
    <motion.a
      href="#home"
      aria-label="Mustafa — home"
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className="flex items-center gap-3 group select-none"
    >
      {/* Monogram badge */}
      <div className="relative w-9 h-9 rounded-xl flex items-center justify-center
                      bg-gradient-to-br from-cyan-500/20 to-blue-600/20
                      border border-cyan-500/30 shadow-[0_0_16px_rgba(6,182,212,0.15)]
                      group-hover:shadow-[0_0_24px_rgba(6,182,212,0.3)]
                      group-hover:border-cyan-400/50 transition-all duration-300">
        <span className="text-sm font-black tracking-tight bg-gradient-to-br from-cyan-300 to-blue-400
                         bg-clip-text text-transparent">
          MS
        </span>
        {/* corner dot */}
        <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-cyan-400
                         shadow-[0_0_6px_rgba(6,182,212,0.8)] animate-pulse" />
      </div>

      {/* Name — hide on very small screens */}
      <div className="hidden sm:block">
        <div className="text-sm font-bold tracking-widest text-white uppercase leading-none">
          Mustafa
        </div>
        <div className="text-[9px] text-cyan-400/70 tracking-[0.2em] uppercase mt-0.5">
          Developer
        </div>
      </div>
    </motion.a>
  );
}

// ─── Desktop nav link ─────────────────────────────────────────────────────────

function DesktopLink({
  link,
  active,
  onClick,
}: {
  link: NavLink;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <a
      href={link.href}
      onClick={onClick}
      className="relative px-1 py-0.5 text-sm font-medium group"
    >
      {/* Active pill behind text */}
      {active && (
        <motion.span
          layoutId="active-pill"
          className="absolute inset-x-0 inset-y-[-6px] rounded-lg bg-cyan-500/10 border border-cyan-500/20"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}

      <span
        className={`relative transition-colors duration-200 ${
          active ? "text-cyan-300" : "text-slate-400 group-hover:text-slate-100"
        }`}
      >
        {link.label}
      </span>

      {/* Hover underline */}
      <span
        className="absolute left-0 -bottom-0.5 h-px w-0 group-hover:w-full
                   bg-gradient-to-r from-cyan-400 to-blue-500
                   transition-all duration-300 ease-out"
      />
    </a>
  );
}

// ─── Hamburger ────────────────────────────────────────────────────────────────

function Hamburger({
  open,
  onClick,
}: {
  open: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 0.9 }}
      aria-label={open ? "Close menu" : "Open menu"}
      className="md:hidden relative w-10 h-10 rounded-xl flex flex-col items-center justify-center gap-1.5
                 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-cyan-500/30
                 transition-all duration-200"
    >
      <motion.span
        animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="block w-4.5 h-px bg-white origin-center"
        style={{ width: 18 }}
      />
      <motion.span
        animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.2 }}
        className="block h-px bg-white"
        style={{ width: 14 }}
      />
      <motion.span
        animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="block h-px bg-white origin-center"
        style={{ width: 18 }}
      />
    </motion.button>
  );
}

// ─── Mobile menu ─────────────────────────────────────────────────────────────

function MobileMenu({
  open,
  active,
  onNavigate,
}: {
  open: boolean;
  active: string;
  onNavigate: (href: string) => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0, y: -8 }}
          animate={{ opacity: 1, height: "auto", y: 0 }}
          exit={{ opacity: 0, height: 0, y: -8 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="md:hidden overflow-hidden"
        >
          <nav className="px-4 pb-5 pt-2 flex flex-col gap-1">
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => onNavigate(link.href)}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 + 0.05, duration: 0.28, ease: "easeOut" }}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium
                            border transition-all duration-200 ${
                              active === link.href
                                ? "bg-cyan-500/10 border-cyan-500/25 text-cyan-300"
                                : "border-transparent text-slate-400 hover:bg-white/5 hover:text-white hover:border-white/10"
                            }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${
                    active === link.href ? "bg-cyan-400" : "bg-slate-600"
                  }`}
                />
                {link.label}
              </motion.a>
            ))}

            {/* Mobile resume button */}
            <motion.a
              href="/resume.pdf"
              download
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32, duration: 0.28 }}
              className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-xl
                         bg-gradient-to-r from-cyan-500/15 to-blue-600/15
                         border border-cyan-500/25 text-cyan-300 text-sm font-semibold
                         hover:from-cyan-500/25 hover:to-blue-600/25 transition-all duration-200"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Resume
            </motion.a>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Main Navbar ──────────────────────────────────────────────────────────────

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [scrolled, setScrolled] = useState(false);
  const ticking = useRef(false);

  // Floating effect on scroll
  useEffect(() => {
    const onScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 24);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(`#${id}`);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNavigate = (href: string) => {
    setActiveSection(href);
    setMobileOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "top-3 px-4 sm:px-6" : "top-0 px-0"
      }`}
    >
      {/* Floating pill wrapper */}
      <div
        className={`relative mx-auto max-w-5xl transition-all duration-500 ${
          scrolled
            ? "rounded-2xl border border-white/10 bg-slate-950/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.05)]"
            : "rounded-none border-b border-slate-800/60 bg-slate-950/80 backdrop-blur-md"
        }`}
      >
        {/* Scroll progress bar */}
        <ScrollProgressBar />

        {/* Main bar */}
        <div className="h-[60px] flex items-center justify-between px-4 sm:px-6">
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <DesktopLink
                key={link.href}
                link={link}
                active={activeSection === link.href}
                onClick={() => handleNavigate(link.href)}
              />
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2.5">
            {/* Social icons */}
            <div className="hidden md:flex items-center gap-1.5">
              {/* GitHub */}
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="GitHub"
                className="w-8 h-8 rounded-lg flex items-center justify-center
                           text-slate-400 hover:text-white border border-transparent
                           hover:border-white/10 hover:bg-white/5 transition-all duration-200"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-lg flex items-center justify-center
                           text-slate-400 hover:text-white border border-transparent
                           hover:border-white/10 hover:bg-white/5 transition-all duration-200"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </motion.a>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-5 bg-white/10" />

            {/* Resume button */}
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="hidden md:flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold
                         bg-gradient-to-r from-cyan-500/15 to-blue-600/15
                         border border-cyan-500/25 text-cyan-300
                         hover:from-cyan-500/25 hover:to-blue-600/25 hover:border-cyan-400/40
                         hover:shadow-[0_0_16px_rgba(6,182,212,0.2)]
                         transition-all duration-200"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Resume
            </motion.a>

            {/* Hamburger */}
            <Hamburger open={mobileOpen} onClick={() => setMobileOpen((v) => !v)} />
          </div>
        </div>

        {/* Mobile dropdown */}
        <MobileMenu
          open={mobileOpen}
          active={activeSection}
          onNavigate={handleNavigate}
        />
      </div>
    </motion.header>
  );
}