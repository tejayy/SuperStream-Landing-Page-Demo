import { motion } from "framer-motion";

const LOGS = [
  {
    sender: "KOR",
    game: "Valorant",
    message: "Made ₹8,000 during my first stream. Crazy.",
  },
  {
    sender: "RiyaGaming",
    game: "Minecraft",
    message: "Setup took less than 2 minutes.",
  },
  {
    sender: "TechKaran",
    game: "Coding",
    message: "Best tool I've used for Indian viewers.",
  },
];

export default function TransmissionLogs() {
  return (
    <section id="logs" className="relative scroll-mt-28 py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-cyan-400 text-xs tracking-[0.4em]">
            TRANSMISSION LOGS
          </p>

          <h2 className="mt-4 text-5xl font-black text-white">
            Signals Received
          </h2>
        </div>

        <div className="mt-20 grid gap-6 lg:grid-cols-3">
          {LOGS.map((log, index) => (
            <motion.div
              key={log.sender}
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
              className="rounded-3xl border border-cyan-500/10 bg-black/60 p-8 backdrop-blur-xl"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="text-cyan-400">📡</span>

                <span className="text-xs text-green-400">RECEIVED</span>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-xs text-zinc-600">FROM</p>

                  <p className="font-bold text-white">{log.sender}</p>
                </div>

                <div>
                  <p className="text-xs text-zinc-600">CHANNEL</p>

                  <p className="text-cyan-400">{log.game}</p>
                </div>

                <div>
                  <p className="text-xs text-zinc-600">MESSAGE</p>

                  <p className="text-zinc-300 leading-relaxed">
                    "{log.message}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
