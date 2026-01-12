"use client";
import { motion } from "motion/react";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

interface HeroProps {
  language: "pt" | "en";
}

export function Hero({ language }: HeroProps) {
  const content = {
    pt: {
      greeting: "Olá, eu sou ",
      name: "Demerson Guilherme",
      title: "Desenvolvedor Full Stack",
      subtitle: "Transformando café em código e ideias em realidade",
      cta: "Ver Projetos",
      scroll: "Role para descobrir mais",
    },
    en: {
      greeting: "Hi, I am ",
      name: "Demerson Guilherme",
      title: "Full Stack Developer",
      subtitle: "Turning coffee into code and ideas into reality",
      cta: "View Projects",
      scroll: "Scroll to discover more",
    },
  };

  const handleCTAClick = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollClick = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/Demershow", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://br.linkedin.com/in/demerson-guilherme-190774218",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:demersontorres520@gmail.com", label: "Email" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255, 107, 53, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 107, 53, 0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-blob-1" />

        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-blob-2" />

        <div className="absolute inset-0 opacity-10">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-1 bg-linear-to-r from-transparent via-primary to-transparent"
              style={{ top: `${20 + i * 20}%` }}
              initial={{ x: "-100%", width: "200px" }}
              animate={{ x: "100vw" }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {content[language].greeting}
            <span className="bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              {content[language].name}
            </span>
          </motion.p>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl mb-6 tracking-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              {content[language].title}
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {content[language].subtitle}
          </motion.p>

          <motion.div
            className="flex justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-muted hover:bg-primary/20 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>

          <motion.button
            onClick={handleCTAClick}
            className="px-8 py-4 cursor-pointer bg-linear-to-r from-primary to-secondary rounded-lg text-lg hover:shadow-xl hover:shadow-primary/50 transition-shadow"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            {content[language].cta}
          </motion.button>
        </motion.div>

        <div
          className="
    absolute top-124 left-1/2 -translate-x-1/2
    cursor-pointer
    animate-bounce
  "
          onClick={handleScrollClick}
        >
          <p className="text-sm text-muted-foreground mb-2 text-center">
            {content[language].scroll}
          </p>
          <ChevronDown className="w-6 h-6 mx-auto text-primary" />
        </div>
      </div>
    </section>
  );
}
