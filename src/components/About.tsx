import { motion } from "framer-motion";
import { Trophy, Users, Award } from "lucide-react";

const stats = [
  { label: "Years Experience", value: "5+", icon: Trophy, color: "text-primary" },
  { label: "Clients Trained", value: "200+", icon: Users, color: "text-accent" },
  { label: "Certifications", value: "6", icon: Award, color: "text-primary" },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-primary font-semibold mb-3 font-body">About Me</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Passionate About <span className="text-primary">Fitness</span> & Helping Others
            </h2>
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
              <p>
                As a certified gym trainer, I bring years of hands-on experience in personal training, 
                group fitness, and strength conditioning. My approach combines science-backed methods 
                with personalized attention to deliver real results.
              </p>
              <p>
                Whether you're a beginner starting your fitness journey or an athlete pushing for peak 
                performance, I design programs tailored to your unique goals and lifestyle.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex items-center gap-5 p-5 rounded-xl bg-card border border-border hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className={`p-3 rounded-lg bg-muted ${stat.color}`}>
                  <stat.icon className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-3xl font-display font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground font-body uppercase tracking-wider">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
