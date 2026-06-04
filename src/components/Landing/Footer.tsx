import { ArrowRight, IndianRupee, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const FOOTER_LINKS = {
  explore: [
    { label: "Missions", href: "#mission" },
    { label: "Command Center", href: "#command" },
    { label: "Galactic Rankings", href: "#leaderboard" },
    { label: "Transmission Logs", href: "#logs" },
  ],
  product: [
    { label: "Creator Portal", to: "/login" as const },
    { label: "Supporter Board", to: "/supporters" as const },
  ],
  legal: [
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
} as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.06] bg-black/80">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-500/30 bg-cyan-500/15">
                <Rocket size={18} className="text-cyan-400" />
              </div>
              <span className="text-lg font-black tracking-tight text-white">
                SUPERSTREAM
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-500">
              UPI tips, live OBS alerts, and galactic leaderboards — mission
              control for Indian streamers who want fans to reach orbit.
            </p>
            <p className="mt-4 flex items-center gap-2 text-xs text-zinc-600">
              <IndianRupee size={12} className="text-cyan-500/80" />
              UPI · OBS · Made in India
            </p>
          </div>

          <div className="sm:col-span-1 lg:col-span-2 lg:col-start-6">
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-600">
              Explore
            </p>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.explore.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-zinc-500 transition-colors hover:text-cyan-400"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-1 lg:col-span-2">
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-600">
              Product
            </p>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.product.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-sm text-zinc-500 transition-colors hover:text-cyan-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-1 lg:col-span-2">
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-600">
              Legal
            </p>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.legal.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-zinc-500 transition-colors hover:text-cyan-400"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-2">
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-600">
              Launch
            </p>
            <Link
              to="/login"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
            >
              Start your mission
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
            <p className="mt-4 text-xs leading-relaxed text-zinc-600">
              Free to dock. Connect UPI and go live in minutes.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/[0.05] pt-8 text-xs text-zinc-600 sm:flex-row">
          <p>© {year} SuperStream. All rights reserved.</p>
          <p className="text-zinc-700">Built for Indian streamers.</p>
        </div>
      </div>
    </footer>
  );
}
