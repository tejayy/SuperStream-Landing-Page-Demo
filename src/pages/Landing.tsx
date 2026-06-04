import CommandCenter from "@/components/Landing/CommandCenter";
import FinalLaunchCTA from "@/components/Landing/FinalLaunchCTA";
import Footer from "@/components/Landing/Footer";
import Hero from "@/components/Landing/Hero";
import MissionTimeline from "@/components/Landing/MissionTimeline";
import Navbar from "@/components/Landing/Navbar";
import SpaceBackground from "@/components/Landing/SpaceBackground";
import TransmissionLogs from "@/components/Landing/TransmissionLogs";
import GalacticLeaderboard from "@/components/Landing/GalacticLeaderboard";

const Landing = () => {
  return (
    <div className="scroll-smooth bg-black text-white">
      <main className="relative min-h-screen overflow-x-hidden">
        <SpaceBackground />

        <Navbar />
        <Hero />

        <MissionTimeline />
        <CommandCenter />
        <GalacticLeaderboard />
        <TransmissionLogs />

        <FinalLaunchCTA />
        <Footer />
      </main>
    </div>
  );
};

export default Landing;
