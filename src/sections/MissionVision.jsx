import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="grid md:grid-cols-2 gap-10"
    >
      {/* Mission */}
      <div className="bg-[#111827]/70 border border-white/10 p-10 rounded-2xl
                      hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] hover:scale-[1.05] hover:border-[#D4AF37]/40 
                      hover:bg-[#111827] transition">
        <Target className="text-[#D4AF37] mb-5" size={30} />
        <h3 className="text-xl font-semibold mb-4 text-white">Our Mission</h3>
        <p className="text-slate-400 leading-relaxed"> To deliver innovative AI solutions, custom software, web and mobile applications, and digital transformation services that help businesses solve real-world challenges and achieve sustainable growth. </p>
      </div>

      {/* Vision */}
      <div className="bg-[#111827]/70 border border-white/10 p-10 rounded-2xl hover:scale-[1.05]
                      hover:bg-[#111827] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:border-[#D4AF37]/40 transition">
        <Eye className="text-[#D4AF37] mb-5" size={30} />
        <h3 className="text-xl font-semibold mb-4 text-white">Our Vision</h3>
        <p className="text-slate-400 leading-relaxed"> To become a trusted global technology company recognized for AI innovation, software engineering excellence, and building impactful digital solutions that shape the future. </p>
      </div>
    </motion.section>
  );
}
