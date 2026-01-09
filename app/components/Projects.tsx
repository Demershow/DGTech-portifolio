"use client";
import { motion } from "motion/react";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

interface ProjectsProps {
  language: "pt" | "en";
}

export function Projects({ language }: ProjectsProps) {
  const swiperRef = useRef<any>(null);

  const content = {
    pt: {
      title: "Projetos em Destaque",
      subtitle: "Alguns dos trabalhos que me orgulho de ter criado",
      viewLive: "Ver ao Vivo",
      viewCode: "Ver Código",
      projects: [
        {
          title: "RaceTrack Pro",
          description:
            "Plataforma de gerenciamento de corridas com telemetria em tempo real e análise de performance.",
          tags: ["React", "Node.js", "WebSockets", "TypeScript"],
          image:
            "https://images.unsplash.com/photo-1747115986530-b926e92bf563?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWNpbmclMjBjYXIlMjBzcGVlZHxlbnwxfHx8fDE3Njc5MTA1OTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
          github: "https://github.com",
          demo: "https://example.com",
        },
        {
          title: "GameHub",
          description:
            "Rede social para gamers com sistema de matchmaking e chat em tempo real.",
          tags: ["Next.js", "PostgreSQL", "Prisma", "TailwindCSS"],
          image:
            "https://images.unsplash.com/photo-1614179924047-e1ab49a0a0cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBzZXR1cHxlbnwxfHx8fDE3Njc4Mzc3OTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
          github: "https://github.com",
          demo: "https://example.com",
        },
        {
          title: "PhotoStream",
          description:
            "Plataforma de portfólio para fotógrafos com galeria responsiva e edição de imagens.",
          tags: ["Vue.js", "Firebase", "Cloudinary", "GSAP"],
          image:
            "https://images.unsplash.com/photo-1622319977720-9949ac28adc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMGNhbWVyYXxlbnwxfHx8fDE3Njc5MDQ1OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
          github: "https://github.com",
          demo: "https://example.com",
        },
        {
          title: "DevTools Suite",
          description:
            "Conjunto de ferramentas para desenvolvedores incluindo gerador de snippets e conversor de código.",
          tags: ["React", "Express", "MongoDB", "Redis"],
          image:
            "https://images.unsplash.com/photo-1576936422505-18d321d54d40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwZGV2ZWxvcGVyfGVufDF8fHx8MTc2Nzk1NzQ5OHww&ixlib=rb-4.1.0&q=80&w=1080",
          github: "https://github.com",
          demo: "https://example.com",
        },
        {
          title: "SpeedDash Analytics",
          description:
            "Dashboard de análise de performance em tempo real com visualizações interativas e métricas customizadas.",
          tags: ["React", "D3.js", "GraphQL", "Python"],
          image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNjc3OTU3NDk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
          github: "https://github.com",
          demo: "https://example.com",
        },
        {
          title: "CloudSync Manager",
          description:
            "Gerenciador de sincronização multi-cloud com backup automático e versionamento de arquivos.",
          tags: ["Angular", "AWS", "Azure", "Docker"],
          image:
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNjc3OTU3NDk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
          github: "https://github.com",
          demo: "https://example.com",
        },
      ],
    },
    en: {
      title: "Featured Projects",
      subtitle: "Some of the work I'm proud to have created",
      viewLive: "View Live",
      viewCode: "View Code",
      projects: [
        {
          title: "RaceTrack Pro",
          description:
            "Racing management platform with real-time telemetry and performance analysis.",
          tags: ["React", "Node.js", "WebSockets", "TypeScript"],
          image:
            "https://images.unsplash.com/photo-1747115986530-b926e92bf563?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWNpbmclMjBjYXIlMjBzcGVlZHxlbnwxfHx8fDE3Njc5MTA1OTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
          github: "https://github.com",
          demo: "https://example.com",
        },
        {
          title: "GameHub",
          description:
            "Social network for gamers with matchmaking system and real-time chat.",
          tags: ["Next.js", "PostgreSQL", "Prisma", "TailwindCSS"],
          image:
            "https://images.unsplash.com/photo-1614179924047-e1ab49a0a0cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBzZXR1cHxlbnwxfHx8fDE3Njc4Mzc3OTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
          github: "https://github.com",
          demo: "https://example.com",
        },
        {
          title: "PhotoStream",
          description:
            "Portfolio platform for photographers with responsive gallery and image editing.",
          tags: ["Vue.js", "Firebase", "Cloudinary", "GSAP"],
          image:
            "https://images.unsplash.com/photo-1622319977720-9949ac28adc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMGNhbWVyYXxlbnwxfHx8fDE3Njc5MDQ1OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
          github: "https://github.com",
          demo: "https://example.com",
        },
        {
          title: "DevTools Suite",
          description:
            "Developer tools suite including snippet generator and code converter.",
          tags: ["React", "Express", "MongoDB", "Redis"],
          image:
            "https://images.unsplash.com/photo-1576936422505-18d321d54d40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwZGV2ZWxvcGVyfGVufDF8fHx8MTc2Nzk1NzQ5OHww&ixlib=rb-4.1.0&q=80&w=1080",
          github: "https://github.com",
          demo: "https://example.com",
        },
        {
          title: "SpeedDash Analytics",
          description:
            "Real-time performance analysis dashboard with interactive visualizations and custom metrics.",
          tags: ["React", "D3.js", "GraphQL", "Python"],
          image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNjc3OTU3NDk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
          github: "https://github.com",
          demo: "https://example.com",
        },
        {
          title: "CloudSync Manager",
          description:
            "Multi-cloud synchronization manager with automatic backup and file versioning.",
          tags: ["Angular", "AWS", "Azure", "Docker"],
          image:
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNjc3OTU3NDk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
          github: "https://github.com",
          demo: "https://example.com",
        },
      ],
    },
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "0px",
          variableWidth: false,
        },
      },
    ],
  };

  return (
    <section
      id="projects"
      className="py-20 md:py-32 bg-card/30 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255, 107, 53, 0.3) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
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

        <div className="flex justify-center gap-4 mb-8">
          <motion.button
            onClick={() => swiperRef.current?.slidePrev()}
            className="p-4 rounded-full bg-muted hover:bg-primary/20 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <motion.button
            onClick={() => swiperRef.current?.slideNext()}
            className="p-4 rounded-full bg-muted hover:bg-primary/20 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={2}
          loop
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
          className="px-0 md:px-4 projects-swiper"
        >
          {content[language].projects.map((project, index) => (
            <SwiperSlide key={index} className="h-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group h-full"
              >
                <div
                  className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/10 flex flex-col"
                  style={{ minHeight: "550px" }}
                >
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden bg-muted flex-shrink-0">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center gap-4 pb-6">
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-primary rounded-lg flex items-center gap-2 hover:bg-primary/90 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm">
                          {content[language].viewLive}
                        </span>
                      </motion.a>
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-secondary rounded-lg flex items-center gap-2 hover:bg-secondary/90 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-4 h-4" />
                        <span className="text-sm">
                          {content[language].viewCode}
                        </span>
                      </motion.a>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col grow">
                    <h3 className="text-2xl mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 grow">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
