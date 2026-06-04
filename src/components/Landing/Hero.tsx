import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Radio, Rocket, Users } from "lucide-react";
import { Link } from "react-router-dom";

const MESSAGES = [
  "💬 W CLUTCH!",
  "💬 TAKE MY MONEY",
  "💬 BGMI GOD",
  "💬 ACEEEEE",
  "💬 WHAT A PLAY",
] as const;

const heroEase = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const reduced = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100dvh-1rem)] scroll-mt-28 items-center pt-28 pb-20 sm:pt-32 sm:pb-24 lg:min-h-screen lg:pt-36"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-cyan-500/[0.07] to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: heroEase }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/25 bg-cyan-500/10 px-4 py-2 text-xs font-semibold tracking-wide text-cyan-200 sm:text-sm"
            >
              <span aria-hidden>🚀</span>
              STREAMER MISSION CONTROL
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.06, ease: heroEase }}
              className="text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-6xl xl:text-7xl"
            >
              <span className="text-white">Your Fans</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Are Already
              </span>
              <br />
              <span className="text-white">Trying To Contact You.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12, ease: heroEase }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400 sm:mt-8 sm:text-xl"
            >
              Receive transmissions, credits, and absolute chaos live on stream.
              UPI tips, OBS alerts, and galactic rankings — built for Indian
              creators.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16, ease: heroEase }}
              className="mt-3 text-sm text-zinc-600"
            >
              No aliens involved. Probably.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.22, ease: heroEase }}
              className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4"
            >
              <Link
                to="/login"
                className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-cyan-500 px-7 py-4 text-sm font-bold text-white shadow-[0_14px_36px_rgba(14,165,233,0.32)] transition hover:bg-cyan-400 sm:text-base"
              >
                <Rocket size={18} aria-hidden />
                Launch Mission
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>

              <a
                href="#leaderboard"
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.02] px-7 py-4 text-sm font-semibold text-white transition hover:border-cyan-500/30 hover:bg-white/5 sm:text-base"
              >
                Galactic Rankings
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.28, ease: heroEase }}
              className="mt-10 flex flex-wrap gap-8 sm:mt-12"
            >
              <div>
                <div className="flex items-center gap-2 text-sm text-cyan-400">
                  <Radio size={16} aria-hidden />
                  Ships Online
                </div>
                <p className="mt-1 text-3xl font-black text-white">1,283</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-sm text-cyan-400">
                  <Users size={16} aria-hidden />
                  Citizens
                </div>
                <p className="mt-1 text-3xl font-black text-white">58K+</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-lg lg:max-w-none"
          >
            <div className="pointer-events-none absolute -inset-8 rounded-full bg-cyan-500/10 blur-3xl" />

            <motion.div
              animate={reduced ? undefined : { y: [-12, 12, -12] }}
              transition={
                reduced
                  ? undefined
                  : { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }
              className="relative rounded-[28px] border border-cyan-500/20 bg-black/60 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:rounded-[32px] sm:p-8"
            >
              <div className="mb-5 flex items-center justify-between gap-3 sm:mb-6">
                <span className="text-sm font-semibold text-cyan-400">
                  🛸 Incoming Transmission
                </span>
                <span className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  LIVE
                </span>
              </div>

              <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-b from-cyan-500/10 to-transparent p-6 text-center sm:p-8">
                <p className="mb-3 text-5xl" aria-hidden>
                  👽
                </p>
                <h3 className="text-2xl font-black text-white sm:text-3xl">
                  KOR
                </h3>
                <p className="mt-3 text-4xl font-black text-cyan-400 sm:text-5xl">
                  ₹500
                </p>
                <p className="mt-4 text-sm text-zinc-300 sm:text-base">
                  &ldquo;That clutch was illegal.&rdquo;
                </p>
              </div>
            </motion.div>

            <div className="pointer-events-none absolute inset-0 hidden sm:block">
              {MESSAGES.map((msg, i) => (
                <motion.div
                  key={msg}
                  animate={reduced ? undefined : { y: [-8, 8, -8] }}
                  transition={
                    reduced
                      ? undefined
                      : {
                          duration: 3 + i * 0.4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }
                  }
                  className="absolute max-w-[11rem] truncate rounded-full border border-white/10 bg-black/60 px-4 py-2 text-xs text-white backdrop-blur-xl sm:text-sm"
                  style={{
                    top: `${8 + i * 14}%`,
                    left: i % 2 === 0 ? "-12%" : "78%",
                  }}
                >
                  {msg}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
