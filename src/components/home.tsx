import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SectionContainer from "./SectionContainer";
import ProjectCard from "./ProjectCard";
import {
  ArrowDown,
  Linkedin,
  Mail,
  Moon,
  Sun,
  Users,
  Settings,
} from "lucide-react";
import {
  SiAngular,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiAmazonwebservices,
  SiCloudflare,
  SiVercel,
  SiRust,
  SiPython,
  SiNestjs,
  SiPostgresql,
  SiMysql,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Navigation from "./Navigation";

const Home = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const shouldUseDark = savedTheme === "dark" || (!savedTheme && prefersDark);

    setIsDarkMode(shouldUseDark);
    document.documentElement.classList.toggle("dark", shouldUseDark);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    document.documentElement.classList.toggle("dark", newDarkMode);
    localStorage.setItem("theme", newDarkMode ? "dark" : "light");
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const projects = [
    {
      id: 1,
      title: "Task Management System",
      description:
        "Gerenciamento de tarefas em tempo real",
      image:
        "/todo.png",
      technologies: ["NextJS", "TypeScript", "CloudFlare", "WebSockets"],
      link: "https://github.com/dhomini-pereira/todo",
      liveUrl: null,
    },
    {
      id: 2,
      title: "Naxapa",
      description:
        "Landing page de exibição de produtos, contato e localização de uma lanchonete",
      image: "/naxapa.png",
      technologies: ["React", "TypeScript", "Node.js"],
      link: "https://github.com/dhomini-pereira/naxapa",
      liveUrl: "https://naxapa.pages.dev",
    },
  ];

  const skills = [
    { name: "Angular", icon: SiAngular, color: "from-red-500 to-red-600" },
    { name: "ReactJS", icon: SiReact, color: "from-blue-500 to-blue-600" },
    { name: "NextJS", icon: SiNextdotjs, color: "from-gray-700 to-gray-800" },
    {
      name: "TypeScript",
      icon: SiTypescript,
      color: "from-blue-600 to-blue-700",
    },
    { name: "React Native", icon: SiReact, color: "from-cyan-500 to-cyan-600" },
    { name: "Java", icon: FaJava, color: "from-orange-500 to-orange-600" },
    {
      name: "NestJS",
      icon: SiNestjs,
      color: "from-red-500 to-red-600",
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
      color: "from-yellow-500 to-yellow-600",
    },
    {
      name: "Node.js",
      icon: SiNodedotjs,
      color: "from-green-500 to-green-600",
    },
    {
      name: "Rust",
      icon: SiRust,
      color: "from-orange-500 to-orange-600",
    },
    {
      name: "Python",
      icon: SiPython,
      color: "from-blue-500 to-blue-700",
    },
    {
      name: "PostgreSQL",
      icon: SiPostgresql,
      color: "from-blue-800 to-blue-900",
    },
    {
      name: "MySQL",
      icon: SiMysql,
      color: "from-blue-400 to-blue-500",
    },
    {
      name: "AWS",
      icon: SiAmazonwebservices,
      color: "from-orange-400 to-orange-500",
    },
    {
      name: "CloudFlare",
      icon: SiCloudflare,
      color: "from-orange-500 to-orange-600",
    },
    { name: "Vercel", icon: SiVercel, color: "from-black to-gray-800" },
    { name: "Scrum", icon: Users, color: "from-purple-500 to-purple-600" },
    { name: "RAD", icon: Settings, color: "from-indigo-500 to-indigo-600" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation activeSection={activeSection} />
      <div className="fixed top-20 right-4 z-40">
        <Button
          variant="outline"
          size="icon"
          onClick={toggleDarkMode}
          className="bg-background/90 backdrop-blur-sm border-2 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          {isDarkMode ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4" />
          )}
        </Button>
      </div>

      <section
        id="hero"
        className="min-h-screen flex flex-col justify-center items-center px-4 relative"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Dhomini Pereira
          </h1>
          <h2 className="text-xl md:text-2xl mb-8 text-muted-foreground">
            Full Stack Developer
          </h2>
          <p className="text-lg mb-10">
            Desenvolvedor Web Full Stack com sólida experiência em Angular,
            TypeScript, Java e AWS, especializado na criação de soluções
            escaláveis, responsivas e funcionais.
          </p>
          <div className="flex justify-center gap-4 mb-12">
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://github.com/dhomini-pereira"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubLogoIcon className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://www.linkedin.com/in/dh-pereira"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="mailto:dhomini-pereira@outlook.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </motion.div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollToSection("about")}
            aria-label="Scroll to About section"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </section>

      {/* About Section */}
      <SectionContainer id="about" title="Sobre">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Quem sou eu</h3>
            <p className="mb-4">
              Desenvolvedor Web Full Stack com sólida experiência em Angular,
              TypeScript, Java e AWS, especializado na criação de soluções
              escaláveis, responsivas e funcionais.
            </p>
            <p>
              Busco integrar uma equipe ágil e inovadora, aplicando minhas
              habilidades em front-end e back-end, além de aprender
              continuamente e gerar impacto positivo em projetos digitais de
              alta performance.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Formação Acadêmica</h3>
            <div className="mb-4">
              <h4 className="text-lg font-medium">Ciência da Computação</h4>
              <p className="text-muted-foreground">
                UNESA | Conclusão: 12/2025 – 8º Período – CR.: 8,90
              </p>
            </div>
            <div>
              <h4 className="text-lg font-medium">Projeto Acadêmico:</h4>
              <ul className="list-disc list-inside text-muted-foreground">
                <li>
                  Desenvolvimento de um sistema de gerenciamento de tarefas em
                  tempo real utilizando NextJS e TypeScript
                </li>
                <li>
                  Experiência prática em otimização de aplicações com CloudFlare
                </li>
              </ul>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Experience Section */}
      <SectionContainer id="experience" title="Experiência">
        <div className="space-y-12">
          <div className="border-l-2 border-primary pl-6 relative">
            <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
            <h3 className="text-xl font-semibold">IBLUE CONSULTING</h3>
            <p className="text-muted-foreground mb-2">
              Desenvolvedor fullstack junior | abril/2025 até o momento
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Desenvolvimento e manutenção de APIs utilizando Node.js e
                TypeScript
              </li>
              <li>Criação de interfaces com Angular</li>
              <li>Consumo e integração de APIs RESTful</li>
              <li>
                Participação em cerimônias ágeis (daily, planning, review)
              </li>
              <li>
                Colaboração em times multidisciplinares utilizando versionamento
                com Git
              </li>
              <li>Apoio na resolução de bugs e melhorias de performance</li>
              <li>
                Foco em boas práticas de código, componentização e
                reaproveitamento
              </li>
              <li>
                Evolução contínua através de estudos, pair programming e code
                reviews
              </li>
              <li>
                Utilização da AWS para implementação de serviços e gerenciamento
                de recursos
              </li>
              <li>Modelagem de solução e fluxo de projetos</li>
            </ul>
          </div>

          <div className="border-l-2 border-primary pl-6 relative">
            <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
            <h3 className="text-xl font-semibold">
              BRASILCAP CAPITALIZAÇÃO S.A.
            </h3>
            <p className="text-muted-foreground mb-2">
              Estágio - Desenvolvimento web | abril/2023 à abril/2025
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Suporte na realização de manutenções corretivas e evolutivas em
                sistemas financeiros para gestão e análise de dados, além de
                plataformas internas de monitoramento (dashboards e relatórios)
                para acompanhamento operacional
              </li>
              <li>
                Apoio na criação de soluções para automatização de processos de
                negócios, utilizando Node.js para execução assíncrona e angular
                para desenvolvimento de interfaces interativas com integração de
                APIs
              </li>
              <li>
                Implementação de melhorias nas plataformas, integração (API) e
                automatização de processos
              </li>
            </ul>
            <div className="mt-4">
              <h4 className="font-medium">Principais Resultados:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Desenvolvimento e manutenção de sistemas em Angular e
                  TypeScript, melhorando a eficiência de processos internos
                </li>
                <li>
                  Otimização APIs RESTful, reduzindo o tempo de resposta em 97%
                </li>
                <li>
                  Colaboração em equipes ágeis (Scrum) para entregar soluções
                  dentro dos prazos estabelecidos
                </li>
                <li>Automatização das integrações e fluxos utilizando AWS</li>
              </ul>
            </div>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer id="skills" title="Habilidades">
        <div className="flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 max-w-7xl w-full">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.3 },
                  }}
                >
                  <Card className="h-32 relative overflow-hidden group cursor-pointer bg-gradient-to-br from-background to-background/95 border-2 border-border/50 hover:border-primary/50 shadow-lg hover:shadow-2xl transition-all duration-500 backdrop-blur-sm">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

                    <CardContent className="p-4 h-full flex flex-col items-center justify-center relative z-10">
                      <div
                        className={`p-3 rounded-full bg-gradient-to-br ${skill.color} mb-3 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent className="h-5 w-5 text-white" key={index} />
                      </div>
                      <h3 className="text-sm font-semibold text-center text-foreground group-hover:text-primary transition-colors duration-300">
                        {skill.name}
                      </h3>
                    </CardContent>
                    <div
                      className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${skill.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                    />
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </SectionContainer>
      <SectionContainer id="projects" title="Projetos">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              githubUrl={project.link}
              liveUrl={project.liveUrl}
            />
          ))}
        </div>
      </SectionContainer>

      <SectionContainer id="contact" title="Contato">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-6">Vamos conversar</h3>
          <p className="text-lg mb-8 text-muted-foreground">
            Estou sempre aberto a novas oportunidades e colaborações. Se você
            tem um projeto interessante ou uma oportunidade de trabalho, não
            hesite em entrar em contato.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Button
              variant="outline"
              size="lg"
              asChild
              className="w-full sm:w-auto"
            >
              <a
                href="mailto:dhomini-pereira@outlook.com"
                className="flex items-center gap-3"
              >
                <Mail className="h-5 w-5" />
                dhomini-pereira@outlook.com
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="w-full sm:w-auto"
            >
              <a
                href="https://www.linkedin.com/in/dh-pereira"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="w-full sm:w-auto"
            >
              <a
                href="https://github.com/dhomini-pereira"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <GitHubLogoIcon className="h-5 w-5" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </SectionContainer>

      {/* Footer */}
      <footer className="py-8 border-t text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Dhomini Pereira. Todos os direitos
          reservados.
        </p>
      </footer>
    </div>
  );
};

export default Home;
