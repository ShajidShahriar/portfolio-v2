"use client";
import React from "react";
import {
  Home,
  Folder,
  Briefcase,
  Wrench,
  PenTool,
  Github,
  Twitter,
  Instagram,
  Youtube,
  Globe,
  ArrowUpRight,
  Layers,
  Code,
  Cpu,
  MapPin,
} from "lucide-react";

// --- 1. THE APPLE LIQUID GLASS COMPONENT ---
const LiquidGlass = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`
      relative overflow-hidden
      /* Material: Translucent Black Glass */
      bg-neutral-900/60 
      backdrop-blur-3xl
      /* Borders: Subtle white edge */
      border border-white/10
      /* Shape */
      rounded-[32px]
      /* Lighting: Top-inner highlight for 3D "Liquid" look */
      shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]
      /* Hover State */
      transition-all duration-500 ease-out
      hover:bg-neutral-800/60 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] hover:border-white/20
      ${className}
    `}
  >
    {children}
  </div>
);

// --- 2. NAVIGATION BAR ---
const Navbar = () => (
  <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
    <div className="flex items-center gap-1 px-2 py-2 bg-neutral-900/50 backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl">
      {[Home, Folder, Briefcase, Wrench, PenTool].map((Icon, i) => (
        <button
          key={i}
          className="p-3 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-all"
        >
          <Icon size={20} />
        </button>
      ))}
    </div>
  </div>
);

// --- DATA ARRAYS ---
const projects = [
  {
    title: "Smart-Vet",
    category: "AI Resume Analyzer",
    description:
      "An intelligent parsing engine that scores veterinary resumes against job descriptions using NLP.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop",
    tech: ["OpenAI API", "Python", "Next.js"],
  },
  {
    title: "Medimove",
    category: "Logistics SaaS",
    description:
      "Real-time tracking and inventory management dashboard for sensitive medical equipment transport.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop",
    tech: ["React", "Mapbox", "Node.js"],
  },
  {
    title: "Vortex Finance",
    category: "Fintech Dashboard",
    description:
      "A decentralized trading platform featuring real-time crypto analytics and liquid swapping.",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2670&auto=format&fit=crop",
    tech: ["Solidity", "Web3", "Tailwind"],
  },
];

const educationData = [
  {
    school: "Islamic University of Technology (IUT)",
    degree: "B.Sc. in EEE",
    detail: "Major in Electrical & Electronic Engineering",
    year: "2022 - 2026",
    status: "Present",
    location: "Gazipur, Dhaka",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20",
  },
  {
    school: "Notre Dame College (NDC)",
    degree: "Higher Secondary Certificate",
    detail: "Science Group | Gold Medalist",
    year: "Class of 2021",
    status: "Alumni",
    location: "Motijheel, Dhaka",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/20",
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-200 font-sans selection:bg-orange-500/30">
      
      {/* --- BACKGROUND AMBIENCE --- */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-orange-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30vw] h-[30vw] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <Navbar />

      {/* --- MAIN LAYOUT CONTAINER --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-28 pb-12">
        
        {/* START GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: STICKY PROFILE CARD */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 h-fit space-y-6">
            <LiquidGlass className="p-2 flex flex-col items-center text-center group">
              <div className="w-full aspect-square rounded-[24px] overflow-hidden relative mb-6">
                <img
                  src="./profile.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
              </div>
              <div className="px-4 pb-6 space-y-4">
                <div>
                  <h1 className="text-3xl font-bold text-white mb-1">
                    Shaijd Shahriar
                  </h1>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                    Software Engineer
                  </div>
                </div>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  A Software Engineer who has developed countless innovative
                  solutions. Passionate about creating intuitive user
                  experiences.
                </p>
                <div className="w-full border-t border-dashed border-neutral-700 my-4" />
                <div className="flex justify-center gap-4">
                  {[Globe, Twitter, Instagram, Youtube].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="text-neutral-500 hover:text-orange-400 transition-colors"
                    >
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </LiquidGlass>
            <LiquidGlass className="p-4 flex items-center justify-between group cursor-pointer">
              <span className="text-sm font-medium text-white">
                Download Resume
              </span>
              <ArrowUpRight
                size={16}
                className="text-neutral-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </LiquidGlass>
          </div>

          {/* RIGHT COLUMN: SCROLLABLE CONTENT */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* HERO HEADER */}
            <div className="py-8 space-y-2">
              <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white/90">
                SOFTWARE <br />
                <span className="text-neutral-800 text-stroke-white">
                  ENGINEER
                </span>
              </h2>
              <p className="text-xl text-neutral-400 max-w-2xl leading-relaxed pt-4">
                Passionate about creating intuitive and engaging user
                experiences. I specialize in transforming ideas into beautifully
                crafted products.
              </p>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Years Experience", val: "+12" },
                { label: "Projects Done", val: "+46" },
                { label: "Worldwide Clients", val: "+20" },
              ].map((stat, i) => (
                <div key={i} className="space-y-1">
                  <h3 className="text-4xl md:text-5xl font-bold text-white">
                    {stat.val}
                  </h3>
                  <p className="text-xs md:text-sm text-neutral-500 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* BENTO GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
              <LiquidGlass className="md:col-span-2 min-h-[300px] p-8 flex items-end relative group !bg-orange-600/80 !border-orange-500/30 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <Layers className="absolute top-8 right-8 text-white/20 w-32 h-32 rotate-12 group-hover:rotate-0 transition-transform duration-700" />
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    System Design
                  </h3>
                  <p className="text-orange-100/80">
                    Architecting scalable solutions for enterprise clients.
                  </p>
                </div>
              </LiquidGlass>

              <LiquidGlass className="min-h-[250px] p-6 relative !bg-lime-400/80 !border-lime-300/30 text-black group">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-multiply" />
                <Code className="mb-4 opacity-50" size={32} />
                <h3 className="text-2xl font-bold mb-2">Frontend Dev</h3>
                <p className="text-sm font-medium opacity-70">
                  React, Next.js, and Framer Motion interactions.
                </p>
                <button className="absolute bottom-6 right-6 bg-black/10 hover:bg-black/20 p-2 rounded-full transition-colors">
                  <ArrowUpRight size={20} />
                </button>
              </LiquidGlass>

              <LiquidGlass className="min-h-[250px] p-6 flex flex-col justify-between group">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-neutral-800 rounded-xl border border-white/5">
                    <Cpu size={24} className="text-white" />
                  </div>
                  <span className="text-xs text-neutral-500 border border-neutral-800 px-2 py-1 rounded-full">
                    2024
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    Backend API
                  </h3>
                  <p className="text-sm text-neutral-400">
                    High performance Go & Rust services.
                  </p>
                </div>
              </LiquidGlass>

              <LiquidGlass className="md:col-span-2 h-[200px] relative group">
                <img
                  src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop"
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/40 to-transparent" />
                <div className="absolute bottom-6 left-6 z-10">
                  <h3 className="text-2xl font-bold text-white">
                    Cyber Security
                  </h3>
                  <p className="text-neutral-400 text-sm">
                    Penetration testing and audit logs.
                  </p>
                </div>
              </LiquidGlass>
            </div>

            {/* RECENT PROJECTS LIST */}
            <div className="pt-24 space-y-12">
              <div className="space-y-0">
                <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                  RECENT
                </h2>
                <h2 className="text-5xl md:text-7xl font-bold text-stroke-white text-transparent tracking-tight opacity-50">
                  PROJECTS
                </h2>
              </div>

              <div className="flex flex-col gap-6">
                {projects.map((project, i) => (
                  <LiquidGlass
                    key={i}
                    className="group p-4 md:p-5 flex flex-col md:flex-row gap-6 items-center md:items-start transition-all duration-500 hover:bg-neutral-800/80"
                  >
                    <div className="w-full md:w-48 h-48 md:h-32 shrink-0 rounded-2xl overflow-hidden relative border border-white/5 shadow-inner">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                    <div className="flex-1 w-full flex flex-col justify-between h-full py-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-2">
                            {project.category}
                          </p>
                        </div>
                        <div className="p-3 rounded-full bg-white/5 border border-white/5 group-hover:bg-white group-hover:text-black transition-all duration-300">
                          <ArrowUpRight
                            size={20}
                            className="group-hover:rotate-45 transition-transform"
                          />
                        </div>
                      </div>
                      <p className="text-neutral-400 text-sm leading-relaxed max-w-md mb-4">
                        {project.description}
                      </p>
                      <div className="flex gap-2 flex-wrap">
                        {project.tech.map((t, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 text-xs font-medium rounded-lg bg-white/5 text-neutral-300 border border-white/5"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </LiquidGlass>
                ))}
              </div>
            </div>

            {/* ACADEMIC JOURNEY */}
            <div className="pt-24 pb-24 space-y-12 relative">
              <div className="space-y-0 relative z-10">
                <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                  ACADEMIC
                </h2>
                <h2 className="text-5xl md:text-7xl font-bold text-stroke-white text-transparent tracking-tight opacity-50">
                  JOURNEY
                </h2>
              </div>
              <div className="relative border-l border-white/10 ml-3 md:ml-6 space-y-12 pl-8 md:pl-12">
                {educationData.map((edu, i) => (
                  <div key={i} className="relative group">
                    <div
                      className={`absolute -left-[43px] md:-left-[59px] top-6 w-6 h-6 rounded-full border border-neutral-800 bg-[#0a0a0a] flex items-center justify-center z-10 group-hover:scale-125 transition-transform duration-500`}
                    >
                      <div
                        className={`w-2 h-2 rounded-full ${edu.color.replace("text-", "bg-")} shadow-[0_0_10px_currentColor]`}
                      />
                    </div>
                    <LiquidGlass className="p-6 md:p-8 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center group-hover:border-white/20 transition-all">
                      <div className="space-y-2">
                        <div
                          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${edu.bg} ${edu.border} border ${edu.color} text-xs font-bold uppercase tracking-wider w-fit`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${edu.color.replace("text-", "bg-")} animate-pulse`}
                          />
                          {edu.status}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white">
                          {edu.school}
                        </h3>
                        <div className="space-y-1">
                          <p className="text-lg text-neutral-300 font-medium">
                            {edu.degree}
                          </p>
                          <p className="text-sm text-neutral-500">
                            {edu.detail}
                          </p>
                        </div>
                      </div>
                      <div className="text-left md:text-right shrink-0">
                        <span className="block text-3xl font-bold text-white/10 group-hover:text-white/30 transition-colors">
                          {edu.year.split("-")[0]}
                        </span>
                        <span className="text-sm text-neutral-500 font-mono">
                          {edu.year}
                        </span>
                        <div className="flex items-center gap-1 text-neutral-600 text-xs mt-1 md:justify-end">
                          <MapPin size={12} />
                          {edu.location}
                        </div>
                      </div>
                    </LiquidGlass>
                  </div>
                ))}
              </div>
              <div className="absolute bottom-0 left-3 md:left-6 w-[1px] h-32 bg-gradient-to-t from-transparent to-white/20" />
            </div>

            {/* CONTACT FORM */}
            <div className="pt-12 pb-12">
              <div className="mb-12">
                <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                  LET'S WORK
                </h2>
                <h2 className="text-5xl md:text-7xl font-bold text-stroke-white text-transparent tracking-tight opacity-30">
                  TOGETHER
                </h2>
              </div>
              <form className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-neutral-400 ml-1">
                      Name
                    </label>
                    <div className="relative group">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full bg-neutral-900/50 border border-white/5 rounded-2xl px-6 py-4 text-white placeholder:text-neutral-600 focus:outline-none focus:bg-neutral-900/80 focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20 transition-all shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]"
                      />
                      <div className="absolute inset-0 rounded-2xl bg-orange-500/5 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-neutral-400 ml-1">
                      Email
                    </label>
                    <div className="relative group">
                      <input
                        type="email"
                        placeholder="Your@email.com"
                        className="w-full bg-neutral-900/50 border border-white/5 rounded-2xl px-6 py-4 text-white placeholder:text-neutral-600 focus:outline-none focus:bg-neutral-900/80 focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20 transition-all shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-400 ml-1">Budget</label>
                  <div className="relative group">
                    <select 
                      defaultValue="" 
                      className="w-full appearance-none bg-neutral-900/50 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:bg-neutral-900/80 focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20 transition-all shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)] cursor-pointer"
                    >
                      <option value="" disabled>Select a range...</option>
                      <option value="s">Less than $1k</option>
                      <option value="m">$1k - $5k</option>
                      <option value="l">$5k - $10k</option>
                      <option value="xl">More than $10k</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m6 9 6 6 6-6"/>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-400 ml-1">
                    Message
                  </label>
                  <div className="relative">
                    <textarea
                      rows={5}
                      placeholder="Tell me about your project..."
                      className="w-full bg-neutral-900/50 border border-white/5 rounded-2xl px-6 py-4 text-white placeholder:text-neutral-600 focus:outline-none focus:bg-neutral-900/80 focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20 transition-all shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)] resize-none"
                    />
                  </div>
                </div>

                <button className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-4 rounded-2xl transition-all duration-300 transform hover:scale-[1.01] active:scale-[0.99] shadow-[0_0_20px_rgba(234,88,12,0.3)] hover:shadow-[0_0_30px_rgba(234,88,12,0.5)] flex items-center justify-center gap-2 group">
                  <span>Send Message</span>
                  <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>

          </div> 
          {/* ^^^ END RIGHT COLUMN */}

        </div>
        {/* ^^^ END GRID */}

        {/* --- 3. FOOTER (Now Outside Grid) --- */}
        <div className="w-full pt-12 pb-8 border-t border-white/5 mt-20">
           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-neutral-500 text-sm">
                 © 2026 Shajid Shahriar. All rights reserved.
              </p>
              <div className="flex gap-6">
                 <a href="mailto:your@email.com" className="text-neutral-500 hover:text-white transition-colors text-sm font-medium">
                    Email
                 </a>
                 <a href="#" className="text-neutral-500 hover:text-white transition-colors text-sm font-medium">
                    LinkedIn
                 </a>
                 <button 
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
                    className="text-neutral-500 hover:text-orange-500 transition-colors text-sm font-medium"
                 >
                    Back to Top ↑
                 </button>
              </div>
           </div>
        </div>

      </div>
      {/* ^^^ END CONTAINER */}
    </div>
  );
}