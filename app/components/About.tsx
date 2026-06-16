import FadeIn from "./FadeIn";

const skills = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3m-3 3.75h3m-6-3.75H6m.375 3.75H6" />
      </svg>
    ),
    label: "Flutter Development",
    desc: "Cross-platform mobile apps",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      </svg>
    ),
    label: "Front-End Development",
    desc: "Modern, accessible UIs",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    label: "React & Next.js",
    desc: "Scalable web applications",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
      </svg>
    ),
    label: "Firebase Integration",
    desc: "Auth, Firestore & Storage",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
    label: "REST APIs",
    desc: "Integration & architecture",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    ),
    label: "Responsive Design",
    desc: "Pixel-perfect across devices",
  },
];

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-28">
      {/* Section header */}
      <FadeIn>
        <div className="mb-16 text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-cyan-400 mb-4 px-3 py-1 rounded-full border border-cyan-400/20 bg-cyan-400/5">
            About Me
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Crafting digital{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400">
              experiences
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Bridging beautiful design with solid engineering — mobile-first, performance-obsessed.
          </p>
        </div>
      </FadeIn>

      <div className="grid lg:grid-cols-5 gap-8 items-start">
        {/* Left: bio card */}
        
        <FadeIn className="lg:col-span-2">
          <div className="relative rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm p-8 h-full overflow-hidden group">
            {/* Ambient glow */}
            <div className="absolute -top-16 -left-16 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -right-10 w-36 h-36 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />

            {/* Avatar */}
            <div className="relative w-16 h-16 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-sky-600 flex items-center justify-center text-2xl font-bold text-slate-950 select-none shadow-lg shadow-cyan-500/20">
                MS
              </div>
              <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-slate-900" />
            </div>

            <h3 className="text-xl font-bold text-white mb-1">Mustafa Salah</h3>
            <p className="text-cyan-400 text-sm font-medium mb-6 tracking-wide">
              Flutter Developer · Front-End Engineer
            </p>

            <p className="text-slate-400 text-[0.95rem] leading-7">
              I'm a passionate developer focused on building modern mobile applications
              and responsive web experiences. I enjoy transforming ideas into clean,
              fast, and user-friendly digital products.
            </p>

            {/* Divider */}
            <div className="my-6 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

            {/* Meta stats */}
            <div className="flex gap-6">
              <div>
                <p className="text-2xl font-bold text-white">3+</p>
                <p className="text-xs text-slate-500 mt-0.5">Years exp.</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">20+</p>
                <p className="text-xs text-slate-500 mt-0.5">Projects</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">10+</p>
                <p className="text-xs text-slate-500 mt-0.5">Clients</p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Right: skill cards */}
        <FadeIn className="lg:col-span-3">
          <div className="grid sm:grid-cols-2 gap-4">
            {skills.map(({ icon, label, desc }) => (
              <div
                key={label}
                className="group relative flex items-start gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm p-5 cursor-default
                  hover:border-cyan-500/40 hover:bg-slate-900 hover:shadow-lg hover:shadow-cyan-500/5
                  transition-all duration-300"
              >
                {/* Icon bubble */}
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-cyan-400
                  group-hover:bg-cyan-400/10 group-hover:border-cyan-500/30 transition-colors duration-300">
                  {icon}
                </div>
                <div className="min-w-0">
                  <p className="text-white font-semibold text-sm leading-snug">{label}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{desc}</p>
                </div>
                {/* Hover accent line */}
                <div className="absolute bottom-0 left-5 right-5 h-px bg-gradient-to-r from-cyan-500/0 via-cyan-500/40 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}