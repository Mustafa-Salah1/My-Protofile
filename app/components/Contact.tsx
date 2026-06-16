"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

// ─── Icons ────────────────────────────────────────────────────────────────────

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <rect x="2" y="4" width="20" height="16" rx="3" />
      <path d="M2 7l10 7 10-7" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.745 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

// ─── Contact cards data ───────────────────────────────────────────────────────

const contactLinks = [
  {
    id: "email",
    href: "mailto:mustfas2005@gmail.com",
    icon: <MailIcon />,
    label: "Email",
    handle: "mustfas2005@gmail.com",
    description: "Fastest way to reach me.",
    external: false,
  },
  {
    id: "github",
    href: "https://github.com/Mustafa-Salah1",
    icon: <GitHubIcon />,
    label: "GitHub",
    handle: "@Mustafa-Salah1",
    description: "Explore my open-source work.",
    external: true,
  },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/mustafa-salah-38a264335/",
    icon: <LinkedInIcon />,
    label: "LinkedIn",
    handle: "Mustafa Salah",
    description: "Let's connect professionally.",
    external: true,
  },
];

// ─── Shared animation variants ────────────────────────────────────────────────

import { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
    },
  },
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function ContactCard({
  link,
  index,
}: {
  link: (typeof contactLinks)[number];
  index: number;
}) {
  return (
    <motion.a
      href={link.href}
      target={link.external ? "_blank" : undefined}
      rel={link.external ? "noopener noreferrer" : undefined}
      custom={index}
      variants={fadeUp}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group relative flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm overflow-hidden transition-colors duration-300 hover:border-cyan-500/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
    >
      {/* Glow background on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: "radial-gradient(circle at 50% 0%, rgba(6,182,212,0.08) 0%, transparent 70%)" }}
      />

      {/* Icon */}
      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-700 bg-slate-800/80 text-cyan-400 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-colors duration-300">
        {link.icon}
      </div>

      {/* Text */}
      <div className="flex-1">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-1">
          {link.label}
        </p>
        <p className="text-base font-semibold text-white truncate">{link.handle}</p>
        <p className="mt-1 text-sm text-slate-400">{link.description}</p>
      </div>

      {/* Arrow */}
      <div className="flex items-center gap-1.5 text-xs font-medium text-cyan-400 opacity-0 translate-x-[-4px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
        Open <ArrowRightIcon />
      </div>

      {/* Bottom glow line */}
      <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.a>
  );
}

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1600);
  }

  const inputClass =
    "w-full rounded-xl border border-slate-700 bg-slate-800/60 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none backdrop-blur-sm transition-colors duration-200 focus:border-cyan-500/70 focus:ring-1 focus:ring-cyan-500/30 hover:border-slate-600";

  return (
    <motion.form
      onSubmit={handleSubmit}
      variants={fadeUp}
      className="flex flex-col gap-4"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <input required className={inputClass} type="text" placeholder="Your name" />
        <input required className={inputClass} type="email" placeholder="your@email.com" />
      </div>
      <textarea
        required
        rows={5}
        className={`${inputClass} resize-none`}
        placeholder="Tell me about your project or idea…"
      />

      <motion.button
        type="submit"
        disabled={status !== "idle"}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="relative mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all duration-200 hover:bg-cyan-400 hover:shadow-cyan-400/30 disabled:cursor-not-allowed disabled:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
      >
        <AnimatePresence mode="wait" initial={false}>
          {status === "idle" && (
            <motion.span key="idle" className="flex items-center gap-2"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <SendIcon /> Send Message
            </motion.span>
          )}
          {status === "sending" && (
            <motion.span key="sending" className="flex items-center gap-2"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z" />
              </svg>
              Sending…
            </motion.span>
          )}
          {status === "sent" && (
            <motion.span key="sent" className="flex items-center gap-2"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              ✓ Message sent!
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </motion.form>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden bg-slate-950 py-32"
    >
      {/* ── Ambient background glows ── */}
      <div className="pointer-events-none absolute inset-0">
        {/* Top-left blob */}
        <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-cyan-500/5 blur-[120px]" />
        {/* Bottom-right blob */}
        <div className="absolute -bottom-40 -right-20 h-[500px] w-[500px] rounded-full bg-cyan-400/4 blur-[100px]" />
        {/* Center soft grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(6,182,212,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.6) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          animate={inView ? "visible" : "hidden"}
          initial="hidden"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {/* ── Header ── */}
          <div className="mb-20 text-center">
            {/* Availability pill */}
            <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-xs font-medium text-emerald-400">
                Available for freelance projects
              </span>
            </motion.div>

            <motion.p variants={fadeUp} className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Get In Touch
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="text-5xl font-bold tracking-tight text-white sm:text-6xl"
            >
              Let's build something{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent">
                  amazing
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
              </span>
            </motion.h2>

            <motion.p variants={fadeUp} className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-400">
              Have an idea, a project, or just want to say hello? I'm always open
              to new opportunities and interesting conversations.
            </motion.p>
          </div>

          {/* ── Two-column layout ── */}
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">

            {/* Left – contact cards */}
            <div className="flex flex-col gap-4">
              <motion.p variants={fadeUp} className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
                Reach me directly
              </motion.p>
              {contactLinks.map((link, i) => (
                <ContactCard key={link.id} link={link} index={i} />
              ))}
            </div>

            {/* Right – form */}
            <div>
              <motion.p variants={fadeUp} className="mb-6 text-xs font-semibold uppercase tracking-widest text-slate-500">
                Or drop a message
              </motion.p>

              {/* Form card */}
              <motion.div
                variants={fadeUp}
                className="relative rounded-2xl border border-slate-800 bg-slate-900/60 p-7 backdrop-blur-sm"
              >
                {/* Corner glow */}
                <div className="pointer-events-none absolute -top-px left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

                <ContactForm />
              </motion.div>

              {/* CTA micro-text */}
              <motion.p variants={fadeUp} className="mt-5 text-center text-xs text-slate-600">
                Usually responds within{" "}
                <span className="text-slate-400">24 hours</span> · No spam, ever.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}