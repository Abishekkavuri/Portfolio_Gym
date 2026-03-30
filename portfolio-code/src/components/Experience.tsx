import { motion } from "framer-motion";
import expPersonal from "@/assets/74c7296b-2529-4ce4-936c-6ae6c890b689.png";
import expGroup from "@/assets/ChatGPT Image Mar 30, 2026, 04_36_33 PM.png";
import expStrength from "@/assets/pexels-ardit-mbrati-216809103-18187614.jpg";
import expNutrition from "@/assets/istockphoto-1411445689-612x612.jpg";

const experiences = [
  {
    title: "Personal Training",
    duration: "4+ Years",
    description: "Experienced personal trainer with a background at Cult.fit and freelance coaching, specializing in customized one-on-one fitness programs tailored to individual goals, body composition, and fitness levels.",
    image: expPersonal,
    accent: "bg-primary",
  },
  {
    title: "Group Fitness Classes",
    duration: "1+ Years",
    description: "Conducting structured group fitness sessions including HIIT, circuit training, and functional workouts, tailored to accommodate all fitness levels.",
    image: expGroup,
    accent: "bg-secondary",
  },
  {
    title: "Strength & Conditioning",
    duration: "4+ Years",
    description: "Developing structured strength training programs for athletes and fitness enthusiasts, emphasizing progressive overload and performance improvement, ensuring consistent progress, injury prevention, and long-term sustainable physical development.",
    image: expStrength,
    accent: "bg-accent",
  },
  {
    title: "Nutrition Coaching",
    duration: "6+ Years",
    description: "Providing expert nutrition coaching with comprehensive meal planning and personalized dietary guidance to complement training and accelerate results, ensuring optimal recovery, fat loss, muscle gain, improved energy levels, and overall health.",
    image: expNutrition,
    accent: "bg-primary",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-semibold mb-3 font-body text-center">Experience</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-16 text-center">
            What I Do
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group rounded-2xl overflow-hidden border border-border bg-background hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                  <span className={`absolute top-4 left-4 ${exp.accent} text-primary-foreground text-xs tracking-widest uppercase font-body font-semibold px-4 py-1.5 rounded-full`}>
                    {exp.duration}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-semibold text-foreground mb-2">{exp.title}</h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
