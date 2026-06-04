import { motion } from "framer-motion";

const STAR_COUNT = 120;

/** Generated once so stars don't jump on every re-render */
const STARS = Array.from({ length: STAR_COUNT }, (_, id) => {
  const size = Math.random() * 3 + 1;
  return {
    id,
    size,
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: Math.random() * 4 + 2,
    delay: Math.random() * 2,
  };
});

export default function SpaceBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Deep Space */}
      <div className="absolute inset-0 bg-black" />

      {/* Galaxy Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="absolute -top-40 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full blur-[140px]"
        style={{
          background:
            "radial-gradient(circle,#0ea5e933 0%,#06b6d422 30%,transparent 70%)",
        }}
      />

      {/* Stars */}
      {STARS.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            width: star.size,
            height: star.size,
            left: `${star.left}%`,
            top: `${star.top}%`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      {/* Planet */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 80,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute right-20 top-32 text-8xl"
      >
        🪐
      </motion.div>

      {/* Moon */}
      <motion.div
        animate={{
          y: [-10, 10, -10],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute left-20 bottom-32 text-7xl"
      >
        🌕
      </motion.div>

      {/* Shooting Stars */}
      <motion.div
        animate={{
          x: [-200, 1200],
          y: [0, 400],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatDelay: 4,
        }}
        className="absolute top-20 left-0 h-[2px] w-40 bg-gradient-to-r from-cyan-400 to-transparent"
      />
    </div>
  );
}
