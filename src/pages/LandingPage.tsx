// import { useState, useEffect, type ReactNode } from "react";
// import { Link } from "react-router-dom";
// import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
// import {
//   Zap,
//   ArrowRight,
//   IndianRupee,
//   Radio,
//   Shield,
//   TrendingUp,
//   Play,
//   Star,
//   Users,
//   Sparkles,
//   Globe,
//   Tv2,
//   Wallet,
//   Menu,
//   Trophy,
// } from "lucide-react";

// // ─── Shared primitives ────────────────────────────────────────────────────────

// function NoiseLayer() {
//   return (
//     <div
//       className="pointer-events-none absolute inset-0 opacity-[0.032] z-0"
//       style={{
//         backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
//         backgroundRepeat: "repeat",
//         backgroundSize: "128px",
//       }}
//     />
//   );
// }

// const TICKER = [
//   "KOR tipped ₹500 🎯",
//   "RiyaPlays tipped ₹1000 🔥",
//   "GamerArvind tipped ₹250 ⚡",
//   "StreamKing tipped ₹750 👑",
//   "NightOwl tipped ₹200 🌙",
//   "TechKaran tipped ₹300 💻",
//   "Apex_Pro tipped ₹500 🎮",
//   "ValorantVK tipped ₹150 🎯",
//   "CR7Fan tipped ₹2000 🏆",
// ];

// function Ticker({ reverse = false }: { reverse?: boolean }) {
//   const doubled = [...TICKER, ...TICKER];
//   return (
//     <div
//       className="relative overflow-hidden py-3.5 border-y border-white/[0.05] bg-zinc-950/40 backdrop-blur-sm"
//       style={{
//         background:
//           "linear-gradient(90deg,rgba(14,165,233,0.04)0%,transparent 45%,transparent 55%,rgba(20,184,166,0.04)100%)",
//       }}
//     >
//       <div
//         className="absolute left-0 inset-y-0 w-20 z-10 pointer-events-none"
//         style={{ background: "linear-gradient(90deg,#030508,transparent)" }}
//       />
//       <div
//         className="absolute right-0 inset-y-0 w-20 z-10 pointer-events-none"
//         style={{ background: "linear-gradient(-90deg,#030508,transparent)" }}
//       />
//       <div
//         className={`flex whitespace-nowrap ${reverse ? "animate-ticker-rev" : "animate-ticker"}`}
//       >
//         {doubled.map((t, i) => (
//           <span
//             key={i}
//             className="flex items-center gap-2 px-5 text-xs text-zinc-500"
//           >
//             <span className="w-1 h-1 rounded-full bg-cyan-500/50 inline-block" />
//             {t}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// }

// // ─── Nav ─────────────────────────────────────────────────────────────────────

// function Nav() {
//   const [scrolled, setScrolled] = useState(false);
//   useEffect(() => {
//     const fn = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", fn);
//     return () => window.removeEventListener("scroll", fn);
//   }, []);

//   return (
//     <nav className="fixed top-5 left-0 right-0 z-50 px-4">
//       <div
//         className={`
//           max-w-7xl mx-auto
//           rounded-3xl
//           transition-all duration-300
//           border
//           ${
//             scrolled
//               ? "bg-black/60 backdrop-blur-2xl border-white/10"
//               : "bg-black/30 backdrop-blur-xl border-white/5"
//           }
//         `}
//       >
//         <div className="px-6 h-20 flex items-center justify-between">
//           {/* LEFT */}
//           <Link to="/" className="flex items-center gap-4 group shrink-0">
//             <div className="relative">
//               <div className="absolute inset-0 bg-cyan-800 blur-xl opacity-50" />

//               <div
//                 className="
//                   relative
//                   w-12 h-12
//                   rounded-2xl
//                   flex items-center justify-center
//                 "
//                 style={{
//                   background:
//                     "linear-gradient(135deg, #0f172a 0%, #082f49 50%, #0ea5e9 100%)",
//                 }}
//               >
//                 <Zap size={20} className="text-white" />
//               </div>
//             </div>

//             <div>
//               <div className="flex items-center gap-2">
//                 <h2 className="text-white font-black text-xl tracking-tight">
//                   SuperStream
//                 </h2>
//               </div>

//               <div className="flex items-center gap-2 text-xs">
//                 <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />

//                 <span className="text-emerald-300 font-medium">
//                   LIVE PLATFORM
//                 </span>
//               </div>
//               {/* <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 font-bold">
//                 BETA
//               </span> */}
//             </div>
//           </Link>

//           {/* CENTER */}
//           <div
//             className="
//               hidden lg:flex
//               items-center
//               gap-1
//               bg-white/[0.03]
//               border
//               border-white/5
//               rounded-2xl
//               p-1.5
//             "
//           >
//             <a
//               href="#how"
//               className="
//                 px-4 py-2
//                 rounded-xl
//                 text-sm
//                 text-zinc-400
//                 hover:text-white
//                 hover:bg-white/5
//                 transition-all
//               "
//             >
//               How it works
//             </a>

//             <a
//               href="#for-streamers"
//               className="
//                 px-4 py-2
//                 rounded-xl
//                 text-sm
//                 text-zinc-400
//                 hover:text-white
//                 hover:bg-white/5
//                 transition-all
//               "
//             >
//               Streamers
//             </a>

//             <a
//               href="#for-supporters"
//               className="
//                 px-4 py-2
//                 rounded-xl
//                 text-sm
//                 text-zinc-400
//                 hover:text-white
//                 hover:bg-white/5
//                 transition-all
//               "
//             >
//               Supporters
//             </a>

//             <Link
//               to="/supporters"
//               className="
//                 flex items-center gap-2
//                 px-4 py-2
//                 rounded-xl
//                 bg-cyan-500/10
//                 border border-cyan-500/20
//                 text-cyan-300
//                 text-sm
//                 font-semibold
//               "
//             >
//               <Trophy size={14} />
//               Leaderboard
//             </Link>
//           </div>

//           {/* RIGHT */}
//           <div className="flex items-center gap-4">
//             {/* Live Stats */}
//             <div className="hidden xl:flex items-center gap-5">
//               <div className="flex items-center gap-2">
//                 <Radio size={14} className="text-emerald-400" />

//                 <span className="text-xs text-zinc-400">1,283 Live</span>
//               </div>

//               <div className="flex items-center gap-2">
//                 <Users size={14} className="text-cyan-400" />

//                 <span className="text-xs text-zinc-400">58K Supporters</span>
//               </div>
//             </div>

//             <Link
//               to="/login"
//               className="group relative overflow-hidden flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-semibold text-white"
//               style={{
//                 background: PAGE.gradient,
//                 boxShadow: "0 12px 32px rgba(14,165,233,0.22)",
//               }}
//             >
//               <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />

//               <span className="relative">Creator Portal</span>

//               <ArrowRight
//                 size={15}
//                 className="
//                   relative
//                   transition-transform
//                   group-hover:translate-x-1
//                 "
//               />
//             </Link>

//             <button
//               className="
//                 lg:hidden
//                 w-11 h-11
//                 rounded-xl
//                 border
//                 border-white/10
//                 flex
//                 items-center
//                 justify-center
//                 text-white
//               "
//             >
//               <Menu size={18} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// // ─── Hero ─────────────────────────────────────────────────────────────────────

// const heroSpring = { type: "spring" as const, stiffness: 340, damping: 32 };
// const heroEase = [0.16, 1, 0.3, 1] as const;

// /** Polished hero palette — aligned with landing cyan/teal system */
// const HERO = {
//   bg: "#030508",
//   accent: "#0ea5e9",
//   accentLight: "#38bdf8",
//   teal: "#14b8a6",
//   glow: "rgba(14,165,233,0.12)",
//   border: "rgba(255,255,255,0.08)",
// } as const;

// const HERO_TIPS = [
//   { name: "KOR", amount: 500, msg: "Insane clutch — keep going 🔥" },
//   { name: "RiyaPlays", amount: 1000, msg: "You deserve every rupee" },
//   { name: "NightOwl", amount: 250, msg: "Best BGMI stream tonight" },
// ] as const;

// function HeroPremiumBackdrop({ reduced }: { reduced: boolean | null }) {
//   return (
//     <div
//       className="absolute inset-0 overflow-hidden pointer-events-none"
//       aria-hidden
//     >
//       <div className="absolute inset-0" style={{ background: HERO.bg }} />

//       <div
//         className={`absolute -inset-[35%] opacity-[0.45] ${reduced ? "" : "animate-hero-mesh"}`}
//         style={{
//           background:
//             "radial-gradient(circle at 25% 20%, rgba(14,165,233,.16) 0%, transparent 45%), radial-gradient(circle at 80% 60%, rgba(20,184,166,.1) 0%, transparent 42%)",
//         }}
//       />

//       <div
//         className="absolute inset-0 opacity-[0.03]"
//         style={{
//           backgroundImage:
//             "linear-gradient(rgba(255,255,255,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.07) 1px, transparent 1px)",
//           backgroundSize: "64px 64px",
//           maskImage:
//             "radial-gradient(ellipse 80% 70% at 50% 40%, black, transparent)",
//         }}
//       />

//       {/* Floating glass shards */}
//       {!reduced && (
//         <>
//           <motion.div
//             className="absolute top-[18%] right-[8%] w-32 h-32 rounded-3xl border border-white/[0.06] backdrop-blur-sm rotate-12"
//             style={{
//               background:
//                 "linear-gradient(135deg,rgba(255,255,255,.04),transparent)",
//             }}
//             animate={{ y: [0, -14, 0], rotate: [12, 16, 12] }}
//             transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
//           />
//           <motion.div
//             className="absolute bottom-[22%] left-[6%] w-24 h-24 rounded-2xl border border-white/[0.05] -rotate-6"
//             style={{
//               background:
//                 "linear-gradient(225deg,rgba(14,165,233,.06),transparent)",
//             }}
//             animate={{ y: [0, 12, 0] }}
//             transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
//           />
//         </>
//       )}

//       {/* Giant watermark */}
//       <div
//         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[42%] font-black text-white/[0.02] select-none"
//         style={{ fontSize: "clamp(12rem,35vw,22rem)", lineHeight: 1 }}
//       >
//         ₹
//       </div>

//       <div
//         className="absolute inset-x-0 bottom-0 h-40"
//         style={{
//           background: `linear-gradient(to top, ${HERO.bg}, transparent)`,
//         }}
//       />
//       <NoiseLayer />
//     </div>
//   );
// }

// function HeroPremiumAlert({
//   tip,
//   reduced,
// }: {
//   tip: (typeof HERO_TIPS)[number];
//   reduced: boolean | null;
// }) {
//   return (
//     <motion.div
//       className="relative w-full max-w-[340px] mx-auto"
//       initial={
//         reduced ? false : { opacity: 0, scale: 0.88, filter: "blur(8px)" }
//       }
//       animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
//       exit={
//         reduced ? undefined : { opacity: 0, scale: 0.92, filter: "blur(4px)" }
//       }
//       transition={{ ...heroSpring, duration: 0.55 }}
//     >
//       <div
//         className="absolute -inset-3 rounded-[32px] opacity-70 blur-2xl"
//         style={{
//           background: `radial-gradient(circle, ${HERO.glow}, transparent 70%)`,
//         }}
//         aria-hidden
//       />
//       <div
//         className="relative rounded-[24px] overflow-hidden border border-white/[0.1] bg-zinc-950/90 backdrop-blur-xl"
//         style={{
//           boxShadow:
//             "0 24px 60px rgba(0,0,0,.45), inset 0 1px 0 rgba(255,255,255,.06)",
//         }}
//       >
//         <div
//           className="absolute inset-x-0 top-0 h-px"
//           style={{
//             background: `linear-gradient(90deg, transparent, ${HERO.accent}, ${HERO.teal}, transparent)`,
//           }}
//         />
//         <div className="px-6 py-5 sm:px-8 sm:py-6 text-center">
//           <p className="text-[10px] uppercase tracking-[0.3em] text-cyan-500/80 font-medium mb-3 flex items-center justify-center gap-1.5">
//             <Zap size={11} className="text-cyan-400" />
//             Live alert
//           </p>
//           <p
//             className="font-black leading-none text-white"
//             style={{ fontSize: "clamp(2.25rem,9vw,3.25rem)" }}
//           >
//             ₹{tip.amount.toLocaleString("en-IN")}
//           </p>
//           <p className="text-zinc-200 font-semibold text-base mt-2">
//             {tip.name}
//           </p>
//           <p className="text-zinc-500 text-sm mt-1.5 max-w-[260px] mx-auto leading-snug">
//             &ldquo;{tip.msg}&rdquo;
//           </p>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// function HeroShowcase({ reduced }: { reduced: boolean | null }) {
//   const [tipIdx, setTipIdx] = useState(0);
//   const tip = HERO_TIPS[tipIdx];

//   useEffect(() => {
//     if (reduced) return;
//     const id = setInterval(
//       () => setTipIdx((i) => (i + 1) % HERO_TIPS.length),
//       4500,
//     );
//     return () => clearInterval(id);
//   }, [reduced]);

//   return (
//     <div className="relative w-full max-w-[580px] mx-auto lg:mx-0 lg:ml-auto">
//       {/* Ambient glow */}
//       <div
//         className="absolute -inset-10 rounded-full blur-[80px] opacity-40"
//         style={{
//           background: `radial-gradient(ellipse, ${HERO.glow} 0%, transparent 70%)`,
//         }}
//         aria-hidden
//       />

//       <div
//         className={`relative lg:[transform:rotateY(-7deg)_rotateX(5deg)] lg:[transform-style:preserve-3d] ${reduced ? "" : "animate-hero-float-deck"}`}
//       >
//         {/* Broadcast deck */}
//         <div
//           className="relative rounded-[32px] p-[1px]"
//           style={{
//             background:
//               "linear-gradient(145deg,rgba(255,255,255,.12),rgba(255,255,255,.03),rgba(14,165,233,.08))",
//             boxShadow: "0 40px 80px -24px rgba(0,0,0,.65)",
//           }}
//         >
//           <div
//             className="rounded-[31px] overflow-hidden"
//             style={{ background: "linear-gradient(180deg,#0c1018,#060a10)" }}
//           >
//             {/* Chrome */}
//             <div className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
//               <div className="flex gap-1.5">
//                 {["#f87171", "#fbbf24", "#4ade80"].map((c) => (
//                   <span
//                     key={c}
//                     className="w-2.5 h-2.5 rounded-full"
//                     style={{ background: c }}
//                   />
//                 ))}
//               </div>
//               <div className="flex-1 flex items-center gap-2 h-8 px-3 rounded-lg bg-black/40 border border-white/[0.06]">
//                 <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
//                 <span className="text-[10px] font-mono text-zinc-500 truncate">
//                   obs · superstream/alerts
//                 </span>
//               </div>
//               <span className="text-[9px] font-bold text-red-400/90 tracking-widest">
//                 LIVE
//               </span>
//             </div>

//             {/* Stream + alert */}
//             <div className="relative aspect-[16/10]">
//               <div
//                 className="absolute inset-0"
//                 style={{
//                   background:
//                     "linear-gradient(165deg,#0f172a 0%,#020617 55%,#042f2e 100%)",
//                 }}
//               />
//               <div
//                 className="absolute inset-0 opacity-[0.15]"
//                 style={{
//                   backgroundImage:
//                     "repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(255,255,255,.04) 3px,rgba(255,255,255,.04) 6px)",
//                 }}
//               />
//               <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 border border-white/10 backdrop-blur-md">
//                 <Users size={11} className="text-cyan-400" />
//                 <span className="text-[10px] text-zinc-300 font-medium">
//                   2.4k live
//                 </span>
//               </div>

//               <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6">
//                 <AnimatePresence mode="wait">
//                   <HeroPremiumAlert key={tipIdx} tip={tip} reduced={reduced} />
//                 </AnimatePresence>
//               </div>
//             </div>

//             {/* Deck footer */}
//             <div className="grid grid-cols-3 divide-x divide-white/[0.05] border-t border-white/[0.05]">
//               {[
//                 ["Session", "₹12,480"],
//                 ["Tips", "47"],
//                 ["Latency", "0.4s"],
//               ].map(([k, v]) => (
//                 <div key={k} className="px-4 py-3 text-center">
//                   <p className="text-[9px] uppercase tracking-widest text-zinc-600">
//                     {k}
//                   </p>
//                   <p className="text-sm font-bold text-white mt-0.5">{v}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Floating UPI phone */}
//         <motion.div
//           className="absolute -left-2 sm:-left-10 bottom-[28%] z-20 w-[148px] sm:w-[168px]"
//           initial={reduced ? false : { opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.5, ...heroSpring }}
//         >
//           <motion.div
//             animate={reduced ? undefined : { y: [0, -8, 0] }}
//             transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
//             className="rounded-2xl border border-white/10 p-3 backdrop-blur-xl"
//             style={{
//               background:
//                 "linear-gradient(160deg,rgba(12,14,22,.95),rgba(24,24,32,.9))",
//               boxShadow:
//                 "0 24px 50px rgba(0,0,0,.45), inset 0 1px 0 rgba(255,255,255,.06)",
//             }}
//           >
//             <div className="flex items-center gap-2 mb-2">
//               <div
//                 className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold"
//                 style={{
//                   background: `linear-gradient(135deg,${HERO.accent},${HERO.teal})`,
//                   color: "#fff",
//                 }}
//               >
//                 ₹
//               </div>
//               <div>
//                 <p className="text-[9px] text-zinc-500 uppercase tracking-wider">
//                   UPI
//                 </p>
//                 <p className="text-xs font-semibold text-white">Paid</p>
//               </div>
//             </div>
//             <p className="text-lg font-black text-white">₹{tip.amount}</p>
//             <p className="text-[10px] text-emerald-400/90 mt-1 flex items-center gap-1">
//               <Zap size={10} />
//               Alert triggered
//             </p>
//           </motion.div>
//         </motion.div>

//         {/* Floating rank chip */}
//         <motion.div
//           className="absolute -right-1 sm:-right-6 top-[12%] z-20"
//           initial={reduced ? false : { opacity: 0, x: 16 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.65, ...heroSpring }}
//         >
//           <motion.div
//             animate={reduced ? undefined : { y: [0, 6, 0] }}
//             transition={{
//               duration: 5,
//               repeat: Infinity,
//               ease: "easeInOut",
//               delay: 0.5,
//             }}
//             className="rounded-2xl border border-white/[0.08] px-4 py-3 backdrop-blur-xl"
//             style={{
//               background: "rgba(12,14,20,.92)",
//               boxShadow:
//                 "0 16px 32px rgba(0,0,0,.35), inset 0 1px 0 rgba(255,255,255,.05)",
//             }}
//           >
//             <div className="flex items-center gap-2">
//               <Trophy size={16} className="text-cyan-400" />
//               <div>
//                 <p className="text-[9px] text-zinc-500 uppercase tracking-wider">
//                   Top fan
//                 </p>
//                 <p className="text-sm font-bold text-white">KOR · ₹12.5k</p>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }

// function Hero() {
//   const reduced = useReducedMotion();

//   return (
//     <section className="relative min-h-[100svh] overflow-hidden">
//       <HeroPremiumBackdrop reduced={reduced} />

//       <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 pt-28 sm:pt-32 pb-16 sm:pb-24">
//         <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
//           {/* Copy */}
//           <motion.div
//             className="lg:col-span-5 space-y-8 text-center lg:text-left order-2 lg:order-1"
//             initial={reduced ? false : { opacity: 0, y: 28 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.75, ease: heroEase }}
//           >
//             <div className="inline-flex items-center gap-2.5 pl-2 pr-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/[0.06] mx-auto lg:mx-0">
//               <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/15">
//                 <Sparkles size={14} className="text-cyan-400" />
//               </span>
//               <span className="text-xs sm:text-sm text-zinc-400 font-medium">
//                 UPI-native · Built for Indian streamers
//               </span>
//             </div>

//             <h1 className="max-w-xl mx-auto lg:mx-0">
//               <span className="block text-zinc-500 font-semibold tracking-[0.2em] uppercase text-[11px] sm:text-xs mb-4">
//                 SuperStream
//               </span>
//               <span
//                 className="block font-black text-white tracking-[-0.04em] leading-[0.92]"
//                 style={{ fontSize: "clamp(2.75rem,6vw,4.25rem)" }}
//               >
//                 Turn UPI tips into
//               </span>
//               <span
//                 className="block font-black tracking-[-0.05em] leading-[0.88] mt-1"
//                 style={{ fontSize: "clamp(3.25rem,8vw,5.25rem)" }}
//               >
//                 <span
//                   className="text-transparent bg-clip-text"
//                   style={{
//                     backgroundImage: `linear-gradient(120deg,${HERO.accentLight},${HERO.accent},${HERO.teal})`,
//                   }}
//                 >
//                   live moments
//                 </span>
//                 <br />
//                 <span className="text-zinc-100">on your stream.</span>
//               </span>
//             </h1>

//             <p className="text-base sm:text-lg text-zinc-500 max-w-md mx-auto lg:mx-0 leading-[1.7]">
//               Instant UPI tips, custom OBS alerts, and live leaderboards —
//               polished enough for pro streams, simple enough to set up in
//               minutes.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
//               <Link
//                 to="/login"
//                 className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-semibold text-white overflow-hidden transition-transform hover:scale-[1.02]"
//                 style={{
//                   background: `linear-gradient(135deg,${HERO.accent},#06b6d4,${HERO.teal})`,
//                   boxShadow: "0 16px 40px rgba(14,165,233,.28)",
//                 }}
//               >
//                 {!reduced && (
//                   <motion.span
//                     className="absolute inset-0 bg-white/15 -skew-x-12"
//                     animate={{ x: ["-120%", "220%"] }}
//                     transition={{
//                       duration: 2.5,
//                       repeat: Infinity,
//                       repeatDelay: 2,
//                     }}
//                   />
//                 )}
//                 <Tv2 size={18} className="relative" />
//                 <span className="relative">Start streaming</span>
//                 <ArrowRight
//                   size={16}
//                   className="relative group-hover:translate-x-1 transition-transform"
//                 />
//               </Link>
//               <Link
//                 to="/supporters"
//                 className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-medium text-zinc-300 border border-white/[0.1] bg-white/[0.03] hover:bg-white/[0.06] hover:text-white transition-colors"
//               >
//                 <Play size={16} className="text-cyan-400" />
//                 View leaderboard
//               </Link>
//             </div>

//             {/* Premium stat pills */}
//             <div className="flex flex-wrap justify-center lg:justify-start gap-2 pt-2">
//               {[
//                 { icon: IndianRupee, value: "₹1.8Cr+", label: "volume" },
//                 { icon: Zap, value: "<1s", label: "alert" },
//                 { icon: Users, value: "4,221+", label: "creators" },
//               ].map(({ icon: Icon, value, label }) => (
//                 <div
//                   key={label}
//                   className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl"
//                   style={{
//                     background: "rgba(255,255,255,.03)",
//                     border: "1px solid rgba(255,255,255,.07)",
//                   }}
//                 >
//                   <Icon size={14} className="text-cyan-500/70" />
//                   <div>
//                     <p className="text-sm font-bold text-white leading-none">
//                       {value}
//                     </p>
//                     <p className="text-[9px] text-zinc-600 uppercase tracking-wider mt-0.5">
//                       {label}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Showcase */}
//           <motion.div
//             className="lg:col-span-7 order-1 lg:order-2"
//             initial={reduced ? false : { opacity: 0, y: 40, rotateX: 8 }}
//             animate={{ opacity: 1, y: 0, rotateX: 0 }}
//             transition={{ duration: 0.85, delay: 0.12, ease: heroEase }}
//             style={{ perspective: 1400 }}
//           >
//             <HeroShowcase reduced={reduced} />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// // ─── Landing sections (shared) ──────────────────────────────────────────────

// const PAGE = {
//   bg: "#030508",
//   gradient: "linear-gradient(135deg,#0ea5e9,#06b6d4,#14b8a6)",
//   gradientText: "linear-gradient(100deg,#38bdf8,#0ea5e9,#14b8a6)",
// } as const;

// const sectionEase = [0.22, 1, 0.36, 1] as const;
// const inView = { once: true, margin: "-80px" as const };

// function SectionDivider() {
//   return (
//     <div
//       className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/15 to-transparent pointer-events-none"
//       aria-hidden
//     />
//   );
// }

// function SectionShell({
//   id,
//   children,
//   className = "",
//   alt = false,
// }: {
//   id?: string;
//   children: ReactNode;
//   className?: string;
//   alt?: boolean;
// }) {
//   return (
//     <section
//       id={id}
//       className={`relative py-24 sm:py-32 px-5 sm:px-6 ${alt ? "bg-white/[0.015]" : ""} ${className}`}
//     >
//       <SectionDivider />
//       <div className="max-w-6xl mx-auto relative">{children}</div>
//     </section>
//   );
// }

// function SectionEyebrow({ children }: { children: ReactNode }) {
//   return (
//     <p className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.28em] text-cyan-500/60 mb-4">
//       {children}
//     </p>
//   );
// }

// function SectionTitle({
//   children,
//   className = "",
// }: {
//   children: ReactNode;
//   className?: string;
// }) {
//   return (
//     <h2
//       className={`text-4xl sm:text-5xl font-black tracking-[-0.04em] text-zinc-50 leading-[1.05] ${className}`}
//       style={{ margin: 0 }}
//     >
//       {children}
//     </h2>
//   );
// }

// function GradientText({ children }: { children: ReactNode }) {
//   return (
//     <span
//       className="text-transparent bg-clip-text"
//       style={{ backgroundImage: PAGE.gradientText }}
//     >
//       {children}
//     </span>
//   );
// }

// function SectionHeader({
//   eyebrow,
//   title,
//   description,
//   center = true,
// }: {
//   eyebrow: string;
//   title: ReactNode;
//   description: string;
//   center?: boolean;
// }) {
//   const reduced = useReducedMotion();
//   return (
//     <motion.div
//       className={`${center ? "text-center max-w-2xl mx-auto" : "max-w-xl"} mb-14 sm:mb-16`}
//       initial={reduced ? false : { opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={inView}
//       transition={{ duration: 0.6, ease: sectionEase }}
//     >
//       <SectionEyebrow>{eyebrow}</SectionEyebrow>
//       <SectionTitle className={center ? "" : ""}>{title}</SectionTitle>
//       <p
//         className={`text-zinc-500 mt-5 text-base sm:text-lg leading-relaxed ${center ? "" : "max-w-md"}`}
//       >
//         {description}
//       </p>
//     </motion.div>
//   );
// }

// function PrimaryButton({
//   to,
//   children,
//   icon: Icon = Tv2,
// }: {
//   to: string;
//   children: ReactNode;
//   icon?: typeof Tv2;
// }) {
//   return (
//     <Link
//       to={to}
//       className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
//       style={{
//         background: PAGE.gradient,
//         boxShadow: "0 16px 40px rgba(14,165,233,.22)",
//       }}
//     >
//       <Icon size={18} />
//       {children}
//       <ArrowRight
//         size={14}
//         className="transition-transform group-hover:translate-x-1"
//       />
//     </Link>
//   );
// }

// function AlertPreviewMock() {
//   return (
//     <div className="rounded-2xl border border-white/[0.08] bg-zinc-950/80 overflow-hidden backdrop-blur-sm">
//       <div className="px-3 py-2 flex items-center gap-1.5 border-b border-white/[0.06] bg-white/[0.02]">
//         {["#ef4444", "#eab308", "#22c55e"].map((c) => (
//           <span
//             key={c}
//             className="w-2 h-2 rounded-full"
//             style={{ background: c }}
//           />
//         ))}
//         <span className="text-[10px] text-zinc-600 ml-1 font-mono">
//           obs · alert preview
//         </span>
//       </div>
//       <div className="p-5 sm:p-6">
//         <div
//           className="rounded-xl border border-white/[0.1] bg-zinc-950/90 px-4 py-4 text-center"
//           style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,.05)" }}
//         >
//           <p className="text-[10px] uppercase tracking-[0.25em] text-cyan-500/70 font-medium flex items-center justify-center gap-1">
//             <Zap size={10} className="text-cyan-400" />
//             Live alert
//           </p>
//           <p className="text-3xl font-black text-white mt-2">₹500</p>
//           <p className="text-zinc-200 font-semibold text-sm mt-1">KOR</p>
//           <p className="text-zinc-500 text-xs mt-1">
//             Great stream — keep it up 🔥
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ─── How it works ─────────────────────────────────────────────────────────────

// const STEPS = [
//   {
//     n: "01",
//     icon: Zap,
//     color: "#0ea5e9",
//     title: "Sign in with Google",
//     body: "One click. No forms. You're live on the platform in under two minutes.",
//   },
//   {
//     n: "02",
//     icon: Globe,
//     color: "#22d3ee",
//     title: "Claim your tip page",
//     body: "Get superstream.live/tip/you — drop the link in chat, panels, and bio.",
//   },
//   {
//     n: "03",
//     icon: IndianRupee,
//     color: "#14b8a6",
//     title: "Fans pay via UPI",
//     body: "PhonePe, GPay, Paytm — any UPI app. Money lands in your account instantly.",
//   },
//   {
//     n: "04",
//     icon: Radio,
//     color: "#2dd4bf",
//     title: "Alert hits OBS",
//     body: "Custom GIF, sound, and message on stream in under a second. Fully yours.",
//   },
// ] as const;

// function HowItWorks() {
//   const reduced = useReducedMotion();

//   return (
//     <SectionShell id="how">
//       <SectionHeader
//         eyebrow="// how it works"
//         title={
//           <>
//             Live in <GradientText>four steps</GradientText>
//           </>
//         }
//         description="No payment gateway. No KYC maze. Sign in, share your link, stream — tips handle the rest."
//       />

//       <div className="relative">
//         <div
//           className="hidden lg:block absolute top-[5rem] left-[10%] right-[10%] h-px"
//           style={{
//             background:
//               "linear-gradient(90deg, transparent, rgba(14,165,233,.35), rgba(20,184,166,.35), transparent)",
//           }}
//           aria-hidden
//         />
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
//           {STEPS.map((s, i) => {
//             const Icon = s.icon;
//             return (
//               <motion.div
//                 key={s.n}
//                 className="group relative rounded-2xl border border-white/[0.08] bg-zinc-950/40 backdrop-blur-sm p-6 hover:border-cyan-500/20 transition-all duration-300"
//                 style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,.04)" }}
//                 initial={reduced ? false : { opacity: 0, y: 28 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={inView}
//                 transition={{
//                   duration: 0.5,
//                   delay: i * 0.08,
//                   ease: sectionEase,
//                 }}
//               >
//                 <div
//                   className="absolute inset-x-0 top-0 h-px opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl"
//                   style={{
//                     background: `linear-gradient(90deg, transparent, ${s.color}, transparent)`,
//                   }}
//                 />
//                 <span className="absolute top-4 right-4 font-mono text-4xl font-black text-white/[0.03]">
//                   {s.n}
//                 </span>
//                 <div
//                   className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-5"
//                   style={{
//                     background: `${s.color}15`,
//                     border: `1px solid ${s.color}30`,
//                     color: s.color,
//                   }}
//                 >
//                   <Icon size={20} />
//                 </div>
//                 <h3 className="relative text-base font-bold text-zinc-100 mb-2">
//                   {s.title}
//                 </h3>
//                 <p className="relative text-sm text-zinc-500 leading-relaxed">
//                   {s.body}
//                 </p>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </SectionShell>
//   );
// }

// // ─── For Streamers section ────────────────────────────────────────────────────

// const STREAMER_FEATURES = [
//   {
//     icon: Wallet,
//     color: "#0ea5e9",
//     title: "Instant UPI payouts",
//     body: "No 7-day holds. Tips reach your bank as they come in.",
//     span: "",
//   },
//   {
//     icon: Tv2,
//     color: "#22d3ee",
//     title: "Custom OBS alerts",
//     body: "Your GIF, sound, duration — alerts that match your brand.",
//     span: "sm:col-span-2",
//   },
//   {
//     icon: TrendingUp,
//     color: "#14b8a6",
//     title: "Live analytics",
//     body: "Who tipped, how much, when — all in real time.",
//     span: "",
//   },
//   {
//     icon: Shield,
//     color: "#2dd4bf",
//     title: "Zero friction setup",
//     body: "No gateway, no KYC wait. Sign in and go live in minutes.",
//     span: "",
//   },
//   {
//     icon: Users,
//     color: "#06b6d4",
//     title: "Supporter leaderboard",
//     body: "Top fans featured on stream and globally.",
//     span: "",
//   },
//   {
//     icon: Sparkles,
//     color: "#67e8f9",
//     title: "Full customization",
//     body: "Themes, animations, fonts, glow — your overlay, your rules.",
//     span: "sm:col-span-2",
//   },
// ] as const;

// function ForStreamers() {
//   const reduced = useReducedMotion();

//   return (
//     <SectionShell id="for-streamers" alt className="overflow-hidden">
//       <div
//         className="absolute left-0 top-1/3 w-[480px] h-[480px] pointer-events-none blur-3xl opacity-30"
//         style={{
//           background:
//             "radial-gradient(circle,rgba(14,165,233,.1) 0%,transparent 70%)",
//         }}
//         aria-hidden
//       />

//       <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
//         <motion.div
//           className="space-y-6 lg:sticky lg:top-32"
//           initial={reduced ? false : { opacity: 0, x: -24 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={inView}
//           transition={{ duration: 0.6, ease: sectionEase }}
//         >
//           <SectionEyebrow>// for streamers</SectionEyebrow>
//           <SectionTitle>
//             Monetize the moment
//             <br />
//             <GradientText>fans already feel.</GradientText>
//           </SectionTitle>
//           <p className="text-zinc-500 text-base sm:text-lg leading-relaxed max-w-md">
//             Valorant, chess, coding, cooking — if you stream, Superstream turns
//             hype into income. Two-minute setup. Alerts the same night.
//           </p>
//           <AlertPreviewMock />
//           <PrimaryButton to="/login">Start streaming free</PrimaryButton>
//         </motion.div>

//         <div className="grid sm:grid-cols-2 gap-3">
//           {STREAMER_FEATURES.map((f, i) => {
//             const Icon = f.icon;
//             return (
//               <motion.div
//                 key={f.title}
//                 className={`group rounded-2xl border border-white/[0.08] bg-zinc-950/40 backdrop-blur-sm p-5 hover:border-cyan-500/15 transition-colors ${f.span}`}
//                 style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,.03)" }}
//                 initial={reduced ? false : { opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={inView}
//                 transition={{
//                   duration: 0.45,
//                   delay: i * 0.06,
//                   ease: sectionEase,
//                 }}
//               >
//                 <div
//                   className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
//                   style={{
//                     background: `${f.color}12`,
//                     border: `1px solid ${f.color}28`,
//                     color: f.color,
//                   }}
//                 >
//                   <Icon size={18} />
//                 </div>
//                 <p className="text-sm font-semibold text-zinc-100 mb-1">
//                   {f.title}
//                 </p>
//                 <p className="text-xs text-zinc-500 leading-relaxed">
//                   {f.body}
//                 </p>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </SectionShell>
//   );
// }

// // ─── For Supporters section ───────────────────────────────────────────────────

// const MOCK_SUPPORTERS = [
//   {
//     rank: 1,
//     name: "CryptoRaider",
//     total: "₹12,500",
//     tips: 47,
//     badge: "👑",
//     color: "#38bdf8",
//   },
//   {
//     rank: 2,
//     name: "NightOwlGG",
//     total: "₹9,800",
//     tips: 31,
//     badge: "🔥",
//     color: "#0ea5e9",
//   },
//   {
//     rank: 3,
//     name: "TechWithRiya",
//     total: "₹7,200",
//     tips: 28,
//     badge: "⚡",
//     color: "#22d3ee",
//   },
//   {
//     rank: 4,
//     name: "Apex_Legend",
//     total: "₹5,600",
//     tips: 19,
//     badge: "🎯",
//     color: "#14b8a6",
//   },
//   {
//     rank: 5,
//     name: "GamerKing99",
//     total: "₹4,100",
//     tips: 15,
//     badge: "💎",
//     color: "#2dd4bf",
//   },
// ] as const;

// const SUPPORTER_PERKS = [
//   {
//     icon: Wallet,
//     color: "#0ea5e9",
//     title: "No app needed",
//     body: "PhonePe, GPay, Paytm — any UPI app works from your tip link.",
//   },
//   {
//     icon: Zap,
//     color: "#22d3ee",
//     title: "On-stream in 1 second",
//     body: "Your name and message hit the overlay while you're still in chat.",
//   },
//   {
//     icon: Trophy,
//     color: "#14b8a6",
//     title: "Climb the leaderboard",
//     body: "Total tips rank you across every streamer on Superstream.",
//   },
// ] as const;

// function ForSupporters() {
//   const reduced = useReducedMotion();

//   return (
//     <SectionShell id="for-supporters" className="overflow-hidden">
//       <div
//         className="absolute right-0 top-1/4 w-[440px] h-[440px] pointer-events-none blur-3xl opacity-30"
//         style={{
//           background:
//             "radial-gradient(circle,rgba(20,184,166,.08) 0%,transparent 70%)",
//         }}
//         aria-hidden
//       />

//       <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
//         <motion.div
//           className="space-y-6 order-2 lg:order-1"
//           initial={reduced ? false : { opacity: 0, x: -24 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={inView}
//           transition={{ duration: 0.6, ease: sectionEase }}
//         >
//           <SectionEyebrow>// for supporters</SectionEyebrow>
//           <SectionTitle>
//             Tip once.
//             <br />
//             <GradientText>Get seen live.</GradientText>
//           </SectionTitle>
//           <p className="text-zinc-500 text-base sm:text-lg leading-relaxed max-w-md">
//             Send a UPI tip, watch your message on stream, and climb the global
//             board. No account required to pay.
//           </p>

//           <div className="space-y-3">
//             {SUPPORTER_PERKS.map((p) => {
//               const Icon = p.icon;
//               return (
//                 <div
//                   key={p.title}
//                   className="flex gap-4 p-4 rounded-2xl border border-white/[0.08] bg-zinc-950/40 backdrop-blur-sm hover:border-cyan-500/15 transition-colors"
//                   style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,.03)" }}
//                 >
//                   <div
//                     className="w-10 h-10 shrink-0 rounded-xl flex items-center justify-center"
//                     style={{
//                       background: `${p.color}12`,
//                       border: `1px solid ${p.color}28`,
//                       color: p.color,
//                     }}
//                   >
//                     <Icon size={18} />
//                   </div>
//                   <div>
//                     <p className="text-sm font-semibold text-zinc-100">
//                       {p.title}
//                     </p>
//                     <p className="text-xs text-zinc-500 mt-0.5 leading-relaxed">
//                       {p.body}
//                     </p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           <Link
//             to="/supporters"
//             className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400/90 hover:text-cyan-300 transition-colors"
//           >
//             View global leaderboard
//             <ArrowRight size={14} />
//           </Link>
//         </motion.div>

//         <motion.div
//           className="order-1 lg:order-2 rounded-[24px] p-[1px]"
//           style={{
//             background:
//               "linear-gradient(145deg,rgba(255,255,255,.1),rgba(255,255,255,.02),rgba(14,165,233,.12))",
//           }}
//           initial={reduced ? false : { opacity: 0, x: 24 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={inView}
//           transition={{ duration: 0.6, ease: sectionEase }}
//         >
//           <div className="rounded-[23px] bg-zinc-950/80 backdrop-blur-xl p-4 sm:p-5">
//             <div className="flex items-center justify-between mb-5 px-1">
//               <div className="flex items-center gap-2">
//                 <Trophy size={18} className="text-cyan-400" />
//                 <h3
//                   className="text-lg font-black text-zinc-50"
//                   style={{ margin: 0 }}
//                 >
//                   Top supporters
//                 </h3>
//               </div>
//               <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-cyan-400/90 font-semibold px-2.5 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/10">
//                 <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
//                 Live
//               </span>
//             </div>

//             <div className="space-y-2">
//               {MOCK_SUPPORTERS.map((s, i) => (
//                 <motion.div
//                   key={s.name}
//                   className={`flex items-center gap-3 px-4 py-3.5 rounded-xl border transition-colors ${
//                     i === 0
//                       ? "border-cyan-500/25 bg-cyan-500/[0.06]"
//                       : "border-white/[0.06] bg-white/[0.02] hover:border-cyan-500/12"
//                   }`}
//                   initial={reduced ? false : { opacity: 0, x: 12 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={inView}
//                   transition={{ duration: 0.4, delay: i * 0.05 }}
//                 >
//                   <span
//                     className="text-base w-6 text-center opacity-80"
//                     aria-hidden
//                   >
//                     {s.badge}
//                   </span>
//                   <div
//                     className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
//                     style={{
//                       background: `linear-gradient(135deg,${s.color}cc,${s.color}44)`,
//                     }}
//                   >
//                     {s.name[0]}
//                   </div>
//                   <div className="flex-1 min-w-0">
//                     <p className="text-sm font-semibold text-zinc-100 truncate">
//                       {s.name}
//                     </p>
//                     <p className="text-[11px] text-zinc-600">{s.tips} tips</p>
//                   </div>
//                   <div className="text-right shrink-0">
//                     <p className="text-sm font-bold" style={{ color: s.color }}>
//                       {s.total}
//                     </p>
//                     <p className="text-[10px] text-zinc-600 font-mono">
//                       #{s.rank}
//                     </p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>

//             <Link
//               to="/supporters"
//               className="mt-4 flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-medium text-zinc-400 border border-white/[0.08] bg-white/[0.02] hover:text-zinc-100 hover:border-cyan-500/20 transition-colors"
//             >
//               See full rankings
//               <ArrowRight size={14} />
//             </Link>
//           </div>
//         </motion.div>
//       </div>
//     </SectionShell>
//   );
// }

// // ─── Social proof / testimonials ─────────────────────────────────────────────

// const TESTIMONIALS = [
//   {
//     name: "KOR",
//     handle: "@kor_plays",
//     text: "Made ₹8,000 in my first stream. The alert fired before I even refreshed the page.",
//     game: "Valorant",
//     earned: "₹8k first night",
//     color: "#0ea5e9",
//   },
//   {
//     name: "RiyaGaming",
//     handle: "@riyagaming",
//     text: "My chat goes crazy when the alert pops. Setup literally took 2 minutes.",
//     game: "Minecraft",
//     earned: "2 min setup",
//     color: "#22d3ee",
//   },
//   {
//     name: "TechKaran",
//     handle: "@techkaran",
//     text: "Best tool for Indian streamers. UPI works perfectly. My viewers love it.",
//     game: "Coding",
//     earned: "UPI native",
//     color: "#14b8a6",
//   },
// ] as const;

// function Testimonials() {
//   const reduced = useReducedMotion();

//   return (
//     <SectionShell alt>
//       <SectionHeader
//         eyebrow="// social proof"
//         title={
//           <>
//             Streamers who <GradientText>went live</GradientText>
//           </>
//         }
//         description="Real tips, real alerts, real Indian creators."
//         center
//       />

//       <div className="grid md:grid-cols-3 gap-4 sm:gap-5">
//         {TESTIMONIALS.map((t, i) => (
//           <motion.article
//             key={t.handle}
//             className="group relative flex flex-col rounded-2xl border border-white/[0.08] bg-zinc-950/50 backdrop-blur-sm p-6 hover:border-cyan-500/15 transition-all duration-300"
//             style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,.04)" }}
//             initial={reduced ? false : { opacity: 0, y: 24 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={inView}
//             transition={{ duration: 0.5, delay: i * 0.08, ease: sectionEase }}
//           >
//             <span
//               className="absolute top-5 right-5 text-[10px] font-medium uppercase tracking-wider px-2 py-1 rounded-md border"
//               style={{
//                 color: t.color,
//                 borderColor: `${t.color}28`,
//                 background: `${t.color}10`,
//               }}
//             >
//               {t.earned}
//             </span>
//             <div className="flex gap-0.5 mb-4">
//               {[...Array(5)].map((_, j) => (
//                 <Star
//                   key={j}
//                   size={12}
//                   className="fill-cyan-500/50 text-cyan-500/50"
//                 />
//               ))}
//             </div>
//             <p className="text-3xl text-cyan-500/15 font-serif leading-none mb-2">
//               &ldquo;
//             </p>
//             <p className="text-sm text-zinc-400 leading-relaxed flex-1">
//               {t.text}
//             </p>
//             <div className="flex items-center gap-3 pt-5 mt-5 border-t border-white/[0.06]">
//               <div
//                 className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
//                 style={{
//                   background: `linear-gradient(135deg,${t.color}bb,${t.color}40)`,
//                 }}
//               >
//                 {t.name[0]}
//               </div>
//               <div>
//                 <p className="text-sm font-semibold text-zinc-100">{t.name}</p>
//                 <p className="text-[11px] text-zinc-600">
//                   {t.handle} · {t.game}
//                 </p>
//               </div>
//             </div>
//           </motion.article>
//         ))}
//       </div>
//     </SectionShell>
//   );
// }

// // ─── Final CTA ────────────────────────────────────────────────────────────────

// function FinalCTA() {
//   const reduced = useReducedMotion();

//   return (
//     <section className="relative py-24 sm:py-32 px-5 sm:px-6 overflow-hidden">
//       <div className="max-w-4xl mx-auto">
//         <motion.div
//           className="relative rounded-[28px] p-[1px] overflow-hidden"
//           style={{
//             background:
//               "linear-gradient(145deg,rgba(255,255,255,.12),rgba(14,165,233,.2),rgba(20,184,166,.15))",
//           }}
//           initial={reduced ? false : { opacity: 0, y: 28, scale: 0.98 }}
//           whileInView={{ opacity: 1, y: 0, scale: 1 }}
//           viewport={inView}
//           transition={{ duration: 0.65, ease: sectionEase }}
//         >
//           <div
//             className="relative rounded-[27px] bg-zinc-950/90 backdrop-blur-xl px-6 sm:px-12 py-12 sm:py-16 text-center"
//             style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,.06)" }}
//           >
//             <div
//               className="absolute inset-0 pointer-events-none"
//               style={{
//                 background:
//                   "radial-gradient(ellipse 90% 70% at 50% 0%, rgba(14,165,233,.12), transparent 60%)",
//               }}
//               aria-hidden
//             />

//             <div className="relative space-y-6">
//               <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium text-cyan-400/90 border border-cyan-500/20 bg-cyan-500/[0.08]">
//                 <Sparkles size={12} />
//                 Free to start — always
//               </span>

//               <h2
//                 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black tracking-[-0.04em] text-zinc-50 leading-[1.05]"
//                 style={{ margin: 0 }}
//               >
//                 Your next tip is
//                 <br />
//                 <GradientText>already waiting.</GradientText>
//               </h2>

//               <p className="text-zinc-500 text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
//                 Join 5,000+ Indian creators on SuperStream. Google sign-in, UPI
//                 tips, OBS alerts — no credit card, no paperwork.
//               </p>

//               <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
//                 <Link
//                   to="/login"
//                   className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-semibold text-white overflow-hidden"
//                   style={{
//                     background: PAGE.gradient,
//                     boxShadow: "0 20px 48px rgba(14,165,233,.25)",
//                   }}
//                 >
//                   {!reduced && (
//                     <motion.span
//                       className="absolute inset-0 bg-white/12 -skew-x-12"
//                       animate={{ x: ["-120%", "220%"] }}
//                       transition={{
//                         duration: 2.8,
//                         repeat: Infinity,
//                         repeatDelay: 1.5,
//                       }}
//                     />
//                   )}
//                   <Tv2 size={18} className="relative" />
//                   <span className="relative">Start streaming free</span>
//                   <ArrowRight
//                     size={14}
//                     className="relative transition-transform group-hover:translate-x-1"
//                   />
//                 </Link>
//                 <Link
//                   to="/supporters"
//                   className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border border-white/[0.1] bg-white/[0.03] text-zinc-200 font-medium hover:bg-white/[0.06] hover:text-white transition-colors"
//                 >
//                   <Trophy size={16} className="text-cyan-400" />
//                   Explore leaderboard
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// // ─── Footer ───────────────────────────────────────────────────────────────────

// const FOOTER_LINKS = {
//   product: [
//     { label: "How it works", href: "#how" },
//     { label: "For streamers", href: "#for-streamers" },
//     { label: "For supporters", href: "#for-supporters" },
//     { label: "Leaderboard", to: "/supporters" as const },
//   ],
//   legal: [
//     { label: "Terms", href: "#" },
//     { label: "Privacy", href: "#" },
//   ],
// } as const;

// function Footer() {
//   return (
//     <footer
//       className="relative border-t border-white/[0.06]"
//       style={{ background: `${PAGE.bg}` }}
//     >
//       <div className="max-w-6xl mx-auto px-5 sm:px-6 py-12 sm:py-14">
//         <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 sm:gap-8">
//           <div className="col-span-2 sm:col-span-1">
//             <Link to="/" className="inline-flex items-center gap-2.5 group">
//               <div
//                 className="w-9 h-9 rounded-xl flex items-center justify-center"
//                 style={{
//                   background: "linear-gradient(135deg,#0f172a,#0ea5e9)",
//                 }}
//               >
//                 <Zap size={16} className="text-white" />
//               </div>
//               <span className="text-base font-black text-white tracking-tight">
//                 SuperStream
//               </span>
//             </Link>
//             <p className="mt-4 text-sm text-zinc-600 leading-relaxed max-w-[220px]">
//               UPI tips, live OBS alerts, and leaderboards — built for Indian
//               creators.
//             </p>
//           </div>

//           <div>
//             <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600 mb-4">
//               Product
//             </p>
//             <ul className="space-y-2.5">
//               {FOOTER_LINKS.product.map((item) => (
//                 <li key={item.label}>
//                   {"to" in item ? (
//                     <Link
//                       to={item.to}
//                       className="text-sm text-zinc-500 hover:text-cyan-400 transition-colors"
//                     >
//                       {item.label}
//                     </Link>
//                   ) : (
//                     <a
//                       href={item.href}
//                       className="text-sm text-zinc-500 hover:text-cyan-400 transition-colors"
//                     >
//                       {item.label}
//                     </a>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600 mb-4">
//               Legal
//             </p>
//             <ul className="space-y-2.5">
//               {FOOTER_LINKS.legal.map((item) => (
//                 <li key={item.label}>
//                   <a
//                     href={item.href}
//                     className="text-sm text-zinc-500 hover:text-cyan-400 transition-colors"
//                   >
//                     {item.label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className="col-span-2 sm:col-span-1">
//             <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600 mb-4">
//               Get started
//             </p>
//             <Link
//               to="/login"
//               className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
//             >
//               Start streaming
//               <ArrowRight size={14} />
//             </Link>
//             <p className="mt-4 flex items-center gap-2 text-xs text-zinc-700">
//               <IndianRupee size={12} className="text-cyan-600/80" />
//               UPI · OBS · Made in India
//             </p>
//           </div>
//         </div>

//         <div className="mt-12 pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-700">
//           <p>© {new Date().getFullYear()} SuperStream. All rights reserved.</p>
//           <p className="text-zinc-800">Built for Indian streamers.</p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// // ─── Page ─────────────────────────────────────────────────────────────────────

// export default function Landing() {
//   return (
//     <div className="min-h-screen bg-[#030508] text-white relative">
//       <NoiseLayer />
//       <Nav />
//       <Hero />
//       <Ticker />
//       <HowItWorks />
//       <Ticker reverse />
//       <ForStreamers />
//       <ForSupporters />
//       <Testimonials />
//       <FinalCTA />
//       <Footer />
//     </div>
//   );
// }
