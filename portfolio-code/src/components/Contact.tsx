import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-card border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-semibold mb-3 font-body">Get in Touch</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-muted-foreground font-body mb-12 max-w-md mx-auto">
            Interested in learning more about my training journey? Feel free to reach out.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:swaroopta2535@gmail.com" className="flex items-center gap-3 bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg transition-all duration-300 font-body text-sm font-semibold">
              <Mail className="w-5 h-5" />
              swaroopta2535@gmail.com
            </a>
            <a href="#" className="flex items-center gap-3 bg-muted text-foreground hover:bg-primary hover:text-primary-foreground px-6 py-3 rounded-lg transition-all duration-300 font-body text-sm border border-border">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <span className="flex items-center gap-3 bg-muted text-muted-foreground px-6 py-3 rounded-lg font-body text-sm border border-border">
              <MapPin className="w-5 h-5 text-accent" />
              BTM 1st Stage, Bangalore, India
            </span>
          </div>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-border text-center">
        <p className="text-sm text-muted-foreground font-body">
          © 2026 Gye Training Portfolio. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;
