import { motion } from "framer-motion";
import { Satellite, Radio, IndianRupee, Rocket } from "lucide-react";

const MISSIONS = [
  {
    id: "01",
    icon: Satellite,
    emoji: "🛰️",
    title: "Dock Station",
    description: "Login with Google and connect to Mission Control.",
  },
  {
    id: "02",
    icon: Radio,
    emoji: "📡",
    title: "Open Transmission Channel",
    description: "Claim your unique SuperStream tip link.",
  },
  {
    id: "03",
    icon: IndianRupee,
    emoji: "💸",
    title: "Receive Credits",
    description: "Fans send UPI tips instantly from any app.",
  },
  {
    id: "04",
    icon: Rocket,
    emoji: "🚀",
    title: "Broadcast Signal",
    description: "Alerts appear live on your stream in seconds.",
  },
];

export default function MissionTimeline() {
  return (
    <section id="mission" className="relative scroll-mt-28 py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="mb-4 text-cyan-400 tracking-[0.4em] text-xs">
            MISSION PROTOCOL
          </p>

          <h2 className="text-5xl md:text-6xl font-black text-white">
            Launch In
            <span className="block text-cyan-400">Four Missions</span>
          </h2>

          <p className="mt-6 text-zinc-500 max-w-2xl mx-auto">
            No paperwork. No complicated setup. Complete the missions and start
            receiving support.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-24">
          {/* Route */}
          <div className="absolute left-0 right-0 top-1/2 hidden lg:block h-[2px]">
            <div className="h-full bg-gradient-to-r from-cyan-500/0 via-cyan-400 to-cyan-500/0" />
          </div>

          <div className="grid gap-6 lg:grid-cols-4">
            {MISSIONS.map((mission, index) => {
              const Icon = mission.icon;

              return (
                <motion.div
                  key={mission.id}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.15,
                  }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="rounded-3xl border border-cyan-500/10 bg-black/50 backdrop-blur-xl p-8 transition-all duration-300 hover:border-cyan-400/30 hover:-translate-y-2">
                    <div className="mb-6 flex items-center justify-between">
                      <span className="text-xs tracking-[0.3em] text-cyan-400">
                        MISSION {mission.id}
                      </span>

                      <span className="text-3xl">{mission.emoji}</span>
                    </div>

                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10">
                      <Icon className="text-cyan-400" />
                    </div>

                    <h3 className="text-xl font-black text-white">
                      {mission.title}
                    </h3>

                    <p className="mt-3 text-zinc-500">{mission.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
