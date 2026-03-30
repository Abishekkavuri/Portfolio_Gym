import { motion } from "framer-motion";

const skills = [
  { name: "Strength Training", level: 95, color: "from-primary to-accent" },
  { name: "Weight Loss Coaching", level: 90, color: "from-accent to-primary" },
  { name: "Nutrition Planning", level: 95, color: "from-primary to-primary/60" },
  { name: "HIIT & Cardio", level: 92, color: "from-accent to-accent/60" },
  { name: "Injury Rehabilitation", level: 88, color: "from-primary to-accent" },
  { name: "Flexibility & Mobility", level: 98, color: "from-accent to-primary" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-semibold mb-3 font-body text-center">Competencies</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-16 text-center">
            Skills & <span className="text-primary">Expertise</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="font-body font-medium text-foreground">{skill.name}</span>
                  <span className="text-sm text-primary font-bold font-body">{skill.level}%</span>
                </div>
                <div className="h-3 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
