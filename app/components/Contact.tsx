'use client'
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

interface ContactProps {
  language: 'pt' | 'en';
}

export function Contact({ language }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const content = {
    pt: {
      title: 'Vamos Trabalhar Juntos',
      subtitle: 'Tem um projeto em mente? Entre em contato!',
      form: {
        name: 'Seu Nome',
        email: 'Seu Email',
        message: 'Sua Mensagem',
        send: 'Enviar Mensagem',
        success: 'Mensagem enviada com sucesso!'
      },
      info: [
        { icon: Mail, text: 'seu@email.com', href: 'mailto:seu@email.com' },
        { icon: Phone, text: '+55 (11) 99999-9999', href: 'tel:+5511999999999' },
        { icon: MapPin, text: 'São Paulo, Brasil', href: '#' }
      ]
    },
    en: {
      title: 'Let\'s Work Together',
      subtitle: 'Have a project in mind? Get in touch!',
      form: {
        name: 'Your Name',
        email: 'Your Email',
        message: 'Your Message',
        send: 'Send Message',
        success: 'Message sent successfully!'
      },
      info: [
        { icon: Mail, text: 'your@email.com', href: 'mailto:your@email.com' },
        { icon: Phone, text: '+55 (11) 99999-9999', href: 'tel:+5511999999999' },
        { icon: MapPin, text: 'São Paulo, Brazil', href: '#' }
      ]
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert(content[language].form.success);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6">
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              {content[language].title}
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            {content[language].subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl mb-6">Get in Touch</h3>
              <p className="text-muted-foreground mb-8">
                {language === 'pt' 
                  ? 'Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades de fazer parte de suas visões.'
                  : 'I\'m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.'}
              </p>
            </div>

            <div className="space-y-4">
              {content[language].info.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-linear-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <span className="text-foreground/80 group-hover:text-foreground transition-colors">
                    {item.text}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm">
                  {content[language].form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  {content[language].form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm">
                  {content[language].form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>

              <motion.button
                type="submit"
                className="w-full px-6 py-4 bg-linear-to-r from-primary to-secondary rounded-lg flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-primary/50 transition-shadow"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-5 h-5" />
                <span>{content[language].form.send}</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
