'use client'
import { motion } from 'motion/react';
import { Car, Gamepad2, Camera, Code2 } from 'lucide-react';

interface AboutProps {
  language: 'pt' | 'en';
}

export function About({ language }: AboutProps) {
  const content = {
    pt: {
      title: 'Sobre Mim',
      description: 'Sou um desenvolvedor de software apaixonado por criar soluções digitais que fazem a diferença. Quando não estou codando, você pode me encontrar dirigindo, jogando, ou capturando momentos únicos através da lente.',
      passions: [
        {
          icon: Car,
          title: 'Carros & Corridas',
          description: 'A velocidade e a precisão das corridas me inspiram a escrever código eficiente e performático.'
        },
        {
          icon: Gamepad2,
          title: 'Gaming',
          description: 'Os jogos me ensinaram sobre lógica, estratégia e a importância de uma boa UX.'
        },
        {
          icon: Camera,
          title: 'Fotografia',
          description: 'Capturar o momento perfeito é como encontrar a solução perfeita para um problema complexo.'
        },
        {
          icon: Code2,
          title: 'Desenvolvimento',
          description: 'Transformar ideias em realidade através do código é minha maior paixão.'
        }
      ],
      stats: [
        { value: '5+', label: 'Anos de Experiência' },
        { value: '50+', label: 'Projetos Concluídos' },
        { value: '30+', label: 'Clientes Satisfeitos' },
        { value: '∞', label: 'Cafés Tomados' }
      ]
    },
    en: {
      title: 'About Me',
      description: 'I\'m a software developer passionate about creating digital solutions that make a difference. When I\'m not coding, you can find me driving, gaming, or capturing unique moments through the lens.',
      passions: [
        {
          icon: Car,
          title: 'Cars & Racing',
          description: 'The speed and precision of racing inspire me to write efficient and performant code.'
        },
        {
          icon: Gamepad2,
          title: 'Gaming',
          description: 'Games taught me about logic, strategy, and the importance of good UX.'
        },
        {
          icon: Camera,
          title: 'Photography',
          description: 'Capturing the perfect moment is like finding the perfect solution to a complex problem.'
        },
        {
          icon: Code2,
          title: 'Development',
          description: 'Turning ideas into reality through code is my greatest passion.'
        }
      ],
      stats: [
        { value: '5+', label: 'Years of Experience' },
        { value: '50+', label: 'Completed Projects' },
        { value: '30+', label: 'Happy Clients' },
        { value: '∞', label: 'Coffees Consumed' }
      ]
    }
  };

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-secondary rounded-full blur-3xl" />
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
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {content[language].description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {content[language].passions.map((passion, index) => (
            <motion.div
              key={passion.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all"
            >
              <motion.div
                className="w-14 h-14 rounded-lg bg-linear-to-br from-primary to-secondary flex items-center justify-center mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <passion.icon className="w-7 h-7 text-primary-foreground" />
              </motion.div>
              <h3 className="text-xl mb-2">{passion.title}</h3>
              <p className="text-muted-foreground">{passion.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {content[language].stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                className="text-4xl md:text-5xl mb-2 bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent"
                whileHover={{ scale: 1.1 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
