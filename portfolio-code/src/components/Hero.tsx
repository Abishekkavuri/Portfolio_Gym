import { motion } from "framer-motion";
import { ArrowDown, Phone, Mail, Dumbbell, Heart, Flame, Trophy, Zap } from "lucide-react";
import trainerImg from "@/assets/profile_800x800.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left - Details */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-semibold mb-4 font-body">
            Certified Gym Trainer
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-tight mb-6">
            Transform
            <span className="block text-primary">
              Your Body
            </span>
            <span className="block text-accent">
              & Mind
            </span>
          </h1>
          <p className="text-lg text-muted-foreground font-light max-w-md mb-10 font-body leading-relaxed">
            Dedicated fitness professional helping clients achieve their goals through personalized training, nutrition guidance, and unwavering motivation.
          </p>

          <motion.a
            href="#about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-body font-semibold text-sm tracking-wider uppercase shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-shadow"
          >
            Get Started <ArrowDown className="w-4 h-4 animate-bounce" />
          </motion.a>
        </motion.div>

        {/* Right - Square Image + Contact */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center md:items-end"
        >
          <div className="relative">
            <div className="w-72 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl shadow-primary/10">
              <img
                src={trainerImg}
                alt="Gym Trainer"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative corner accent */}
            <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-primary rounded-tl-lg" />
            <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-accent rounded-br-lg" />

            {/* Gym sticker icons */}
            <motion.div animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute -top-4 -right-4 bg-primary text-primary-foreground p-2 rounded-full shadow-lg">
              <Dumbbell className="w-4 h-4" />
            </motion.div>
            <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2.5 }} className="absolute top-1/4 -left-5 bg-accent text-accent-foreground p-2 rounded-full shadow-lg">
              <Flame className="w-4 h-4" />
            </motion.div>
            <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 3 }} className="absolute bottom-1/4 -right-5 bg-primary/80 text-primary-foreground p-2 rounded-full shadow-lg">
              <Heart className="w-4 h-4" />
            </motion.div>
            <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2.2 }} className="absolute -bottom-4 left-1/4 bg-accent/80 text-accent-foreground p-2 rounded-full shadow-lg">
              <Trophy className="w-4 h-4" />
            </motion.div>
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1.8 }} className="absolute top-1/2 -left-6 bg-primary/60 text-primary-foreground p-1.5 rounded-full shadow-md">
              <Zap className="w-3 h-3" />
            </motion.div>
          </div>

          {/* Contact info below image */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+91 7560852535"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-body bg-card px-4 py-2.5 rounded-lg border border-border"
            >
              <Phone className="w-4 h-4 text-primary" />
              +91 75608 52535
            </a>
            <a
              href="mailto:swaroopta2535@gmail.com"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-body bg-card px-4 py-2.5 rounded-lg border border-border"
            >
              <Mail className="w-4 h-4 text-accent" />
              swaroopta2535@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
