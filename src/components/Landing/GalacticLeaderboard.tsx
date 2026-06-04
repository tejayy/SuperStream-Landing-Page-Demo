import { motion } from "framer-motion";
import { Crown, Rocket, Star, Orbit } from "lucide-react";

const LEADERS = [
  {
    rank: "GALAXY EMPEROR",
    icon: Crown,
    emoji: "👑",
    name: "KOR",
    amount: "₹12,500",
    color: "#fbbf24",
  },
  {
    rank: "FLEET COMMANDER",
    icon: Rocket,
    emoji: "🚀",
    name: "NightOwlGG",
    amount: "₹9,800",
    color: "#38bdf8",
  },
  {
    rank: "STAR CAPTAIN",
    icon: Star,
    emoji: "⭐",
    name: "TechWithRiya",
    amount: "₹7,200",
    color: "#14b8a6",
  },
  {
    rank: "SPACE EXPLORER",
    icon: Orbit,
    emoji: "🪐",
    name: "ApexLegend",
    amount: "₹5,600",
    color: "#818cf8",
  },
];

export default function GalacticLeaderboard() {
  return (
    <section id="leaderboard" className="relative scroll-mt-28 py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[140px]" />
        <div className="absolute left-0 bottom-0 h-[400px] w-[400px] rounded-full bg-purple-500/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-cyan-400 text-xs tracking-[0.4em]">
            GALACTIC RANKINGS
          </p>

          <h2 className="mt-4 text-5xl md:text-6xl font-black text-white">
            Top Citizens
            <span className="block text-cyan-400">Of The Galaxy</span>
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-zinc-500">
            Every transmission earns status. Every tip increases your influence.
          </p>
        </div>

        {/* Emperor Spotlight */}
        <motion.div
          animate={{
            y: [-8, 8, -8],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
          className="relative mt-20 flex justify-center"
        >
          <div className="relative">
            {/* Orbit Ring */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 scale-[1.4] rounded-full border border-cyan-500/20"
            />

            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 scale-[1.8] rounded-full border border-cyan-500/10"
            />

            <div className="relative rounded-[40px] border border-yellow-500/20 bg-black/70 p-10 backdrop-blur-xl">
              <div className="text-center">
                <div className="text-7xl">👑</div>

                <p className="mt-4 text-yellow-400 text-xs tracking-[0.3em]">
                  GALAXY EMPEROR
                </p>

                <h3 className="mt-2 text-4xl font-black text-white">KOR</h3>

                <p className="mt-4 text-6xl font-black text-yellow-400">
                  ₹12,500
                </p>

                <p className="mt-4 text-zinc-500">
                  Supreme supporter of the galaxy
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Leaders */}
        <div className="mt-20 grid gap-6 lg:grid-cols-3">
          {LEADERS.slice(1).map((leader, index) => {
            const Icon = leader.icon;

            return (
              <motion.div
                key={leader.name}
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
                whileHover={{
                  y: -10,
                }}
                className="group rounded-3xl border border-cyan-500/10 bg-black/50 p-8 backdrop-blur-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="text-4xl">{leader.emoji}</span>

                  <Icon className="text-cyan-400" size={20} />
                </div>

                <p
                  className="mt-6 text-xs tracking-[0.25em]"
                  style={{
                    color: leader.color,
                  }}
                >
                  {leader.rank}
                </p>

                <h3 className="mt-2 text-3xl font-black text-white">
                  {leader.name}
                </h3>

                <p
                  className="mt-5 text-4xl font-black"
                  style={{
                    color: leader.color,
                  }}
                >
                  {leader.amount}
                </p>

                <div
                  className="mt-6 h-1 rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${leader.color}, transparent)`,
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
