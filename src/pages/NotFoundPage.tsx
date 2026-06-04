import { motion } from "framer-motion";
import { Home, Rocket } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 text-white">
      {/* Background Stars */}
      <div className="absolute inset-0">
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white"
            initial={{
              opacity: 0.2,
              scale: 0.5,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1.4, 0.5],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Floating Astronaut */}
      <motion.div
        animate={{
          y: [-15, 15, -15],
          rotate: [-5, 5, -5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute top-20"
      >
        🚀
      </motion.div>

      <div className="relative z-10 max-w-2xl text-center">
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 120,
          }}
          className="text-8xl font-black md:text-[10rem]"
        >
          404
        </motion.h1>

        <motion.div
          initial={{ rotate: -15 }}
          animate={{ rotate: 15 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2,
          }}
          className="mb-4 text-6xl"
        >
          👽
        </motion.div>

        <h2 className="mb-4 text-3xl font-bold">
          Oops! You flew into the wrong galaxy.
        </h2>

        <p className="mb-8 text-zinc-400">
          The page you're looking for has been abducted by aliens, rage quit the
          server, or never existed in this universe.
        </p>

        <motion.div
          animate={{
            x: [-5, 5, -5],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
          }}
          className="mb-8 rounded-xl border border-red-500/30 bg-red-500/10 p-4"
        >
          <p className="font-mono text-red-400">
            ERROR: Page.exe stopped working
          </p>
          <p className="mt-2 text-sm text-zinc-500">Press Alt + F4 to cry.</p>
        </motion.div>

        <button
          onClick={() => navigate("/")}
          className="group inline-flex items-center gap-3 rounded-xl border border-purple-500/30 bg-purple-600 px-6 py-3 font-semibold transition-all hover:scale-105 hover:bg-purple-500"
        >
          <Home size={18} />
          Take Me Home
          <Rocket
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />
        </button>
      </div>

      {/* Floating Planet */}
      <motion.div
        className="absolute bottom-10 right-10 text-7xl"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        🪐
      </motion.div>
    </div>
  );
}
