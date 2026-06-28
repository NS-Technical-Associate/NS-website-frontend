import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async"; // ✅ added

import WhoWeAre from "../sections/WhoWeAre";
import MissionVision from "../sections/MissionVision";
import Leadership from "../sections/Leadership";

export default function About() {
  return (
    <section className=" text-white">

      {/* ✅ SEO added */}
      <Helmet>
        <title>
          About Neuricorn Syndicate | AI, Software & Digital Solutions Company
        </title>

        <meta
          name="description"
          content="Learn about Neuricorn Syndicate, a technology company delivering AI solutions, custom software, web development, mobile applications, automation, and digital transformation services."
        />

        <meta
          name="keywords"
          content="Neuricorn Syndicate, AI company, software development, web development, mobile app development, IT consulting, automation, digital transformation"
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://neuricornsyndicate.com/about"
        />
      </Helmet>

      {/* Hero */}
      <div className="py-24 border-b border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-6 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-5 text-[#F1C232]">
            About Neuricorn Syndicate
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Neuricorn Syndicate is a technology company delivering AI-powered solutions, custom software, and digital products that help businesses innovate, automate processes, and solve real-world challenges.
          </p>
        </motion.div>
      </div>

      {/* Sections */}
      <div className="max-w-6xl mx-auto px-6 py-24 space-y-28 md:space-y-36">
        <WhoWeAre />
        <MissionVision />
        <Leadership />
      </div>

    </section>
  );
}