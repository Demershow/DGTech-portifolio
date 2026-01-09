'use client'
import { motion } from 'motion/react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  language: 'pt' | 'en';
}

export function Footer({ language }: FooterProps) {
  const content = {
    pt: {
      made: 'Feito com',
      by: 'por Demerson Guilherme',
      rights: 'DGTech Studios. Todos os direitos reservados.'
    },
    en: {
      made: 'Made with',
      by: 'by Demerson Guilherme',
      rights: 'DGTech Studios. All rights reserved.'
    }
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:seu@email.com', label: 'Email' }
  ];

  return (
    <footer className="py-12 border-t border-border relative overflow-hidden">

      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255, 107, 53, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 107, 53, 0.1) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <div className="text-2xl font-bold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
              &lt;DEV/&gt;
            </div>
            <p className="text-sm text-muted-foreground flex items-center gap-2 justify-center md:justify-start">
              {content[language].made}
              <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" />
              {content[language].by}
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              © {new Date().getFullYear()} {content[language].rights}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-primary/20 transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="mt-8 h-1 bg-linear-to-r from-transparent via-primary to-transparent rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>
    </footer>
  );
}