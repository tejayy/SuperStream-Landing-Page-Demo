import { motion } from "framer-motion";
import { Activity, Radio, Users, IndianRupee } from "lucide-react";

export default function CommandCenter() {
  return (
    <section id="command" className="relative scroll-mt-28 py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-cyan-400 text-xs tracking-[0.4em]">
              COMMAND CENTER
            </p>

            <h2 className="mt-4 text-5xl font-black text-white">
              Control The Entire
              <span className="block text-cyan-400">Broadcast</span>
            </h2>

            <p className="mt-6 text-zinc-500 text-lg">
              Track supporters, monitor revenue, trigger alerts, and manage your
              stream from a single command center.
            </p>

            <div className="mt-10 space-y-4">
              {[
                "Instant UPI payouts",
                "Custom OBS alerts",
                "Global supporter rankings",
                "Live analytics dashboard",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-cyan-400" />
                  <span className="text-zinc-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <motion.div
            animate={{
              y: [-10, 10, -10],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
            className="rounded-[32px] border border-cyan-500/20 bg-black/60 p-8 backdrop-blur-xl"
          >
            <div className="mb-8 flex items-center justify-between">
              <h3 className="font-black text-white">STREAM STATUS</h3>

              <span className="flex items-center gap-2 text-green-400">
                <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                LIVE
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card icon={<IndianRupee />} title="Credits" value="₹12,480" />

              <Card icon={<Users />} title="Supporters" value="273" />

              <Card icon={<Radio />} title="Signal" value="98%" />

              <Card icon={<Activity />} title="Alerts" value="47" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Card({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-cyan-500/10 bg-cyan-500/5 p-5">
      <div className="text-cyan-400">{icon}</div>

      <p className="mt-3 text-zinc-500 text-sm">{title}</p>

      <p className="text-2xl font-black text-white">{value}</p>
    </div>
  );
}
