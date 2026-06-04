import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Menu, Radio, Rocket, Users, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const NAV_LINKS = [
  { label: "Missions", href: "#mission" },
  { label: "Command", href: "#command" },
  { label: "Rankings", href: "#leaderboard" },
  { label: "Logs", href: "#logs" },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <nav
        aria-label="Main navigation"
        className="fixed inset-x-0 top-0 z-50 px-4 pt-4 pb-2"
      >
        <div
          className={`mx-auto max-w-7xl rounded-3xl border transition-all duration-300 ${
            scrolled
              ? "border-white/10 bg-black/70 shadow-[0_8px_32px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
              : "border-cyan-500/10 bg-black/40 backdrop-blur-xl"
          }`}
        >
          <div className="flex h-[4.5rem] items-center justify-between gap-4 px-4 sm:px-6">
            <Link
              to="/"
              className="flex min-w-0 items-center gap-3"
              onClick={closeMobile}
            >
              <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-cyan-500/30 bg-cyan-500/20">
                <div className="absolute inset-0 rounded-2xl bg-cyan-500/20 blur-md" />
                <Rocket size={18} className="relative text-cyan-400" />
              </div>

              <div className="min-w-0">
                <h2 className="truncate text-lg font-black tracking-tight text-white sm:text-xl">
                  SUPERSTREAM
                </h2>
                <p className="flex items-center gap-1.5 text-[10px] tracking-[0.28em] text-cyan-400">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400 animate-pulse" />
                  MISSION CONTROL
                </p>
              </div>
            </Link>

            <div className="hidden items-center gap-1 rounded-2xl border border-white/5 bg-white/[0.03] p-1 lg:flex">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-xl px-4 py-2 text-sm text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <div className="hidden items-center gap-5 xl:flex">
                <div className="flex items-center gap-2 text-xs text-zinc-500">
                  <Radio size={13} className="text-emerald-400" />
                  1,283 live
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-500">
                  <Users size={13} className="text-cyan-400" />
                  58K+ citizens
                </div>
              </div>

              <Link
                to="/login"
                className="group hidden items-center gap-2 rounded-2xl bg-cyan-500 px-4 py-2.5 text-sm font-bold text-white shadow-[0_10px_28px_rgba(14,165,233,0.28)] transition hover:bg-cyan-400 sm:inline-flex"
              >
                Launch Mission
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>

              <button
                type="button"
                aria-expanded={mobileOpen}
                aria-controls="mobile-nav"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                onClick={() => setMobileOpen((open) => !open)}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-white transition hover:bg-white/5 lg:hidden"
              >
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
              onClick={closeMobile}
            />

            <motion.div
              id="mobile-nav"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-x-4 top-[5.75rem] z-50 rounded-3xl border border-white/10 bg-[#05080c]/95 p-4 shadow-2xl backdrop-blur-2xl lg:hidden"
            >
              <div className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMobile}
                    className="rounded-2xl px-4 py-3 text-base font-medium text-zinc-300 transition hover:bg-white/5 hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
                <Link
                  to="/supporters"
                  onClick={closeMobile}
                  className="rounded-2xl px-4 py-3 text-base font-medium text-cyan-400 transition hover:bg-cyan-500/10"
                >
                  Galactic Rankings
                </Link>
              </div>

              <Link
                to="/login"
                onClick={closeMobile}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-cyan-500 py-3.5 text-sm font-bold text-white"
              >
                Launch Mission
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
