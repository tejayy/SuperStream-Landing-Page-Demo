import { motion } from "framer-motion";
import { ArrowRight, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

export default function FinalLaunchCTA() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[2rem] border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-black/80 to-teal-500/5 px-6 py-12 text-center sm:px-12 sm:py-16"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-teal-500/10 blur-3xl" />

          <p className="relative text-xs tracking-[0.35em] text-cyan-400">
            FINAL COUNTDOWN
          </p>
          <h2 className="relative mt-4 text-3xl font-black text-white sm:text-4xl md:text-5xl">
            Ready To Launch
            <span className="block text-cyan-400">Your Mission?</span>
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-sm text-zinc-400 sm:text-base">
            Dock at Mission Control, share your transmission link, and let your
            galaxy send support while you stream.
          </p>

          <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              to="/login"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-cyan-500 px-8 py-4 text-sm font-bold text-white shadow-[0_14px_36px_rgba(14,165,233,0.3)] transition hover:bg-cyan-400 sm:w-auto sm:text-base"
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
              href="#mission"
              className="inline-flex w-full items-center justify-center rounded-2xl border border-white/10 px-8 py-4 text-sm font-semibold text-white transition hover:border-cyan-500/30 hover:bg-white/5 sm:w-auto sm:text-base"
            >
              View mission protocol
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
