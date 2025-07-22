import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

interface NavigationProps {
  sections?: {
    id: string;
    label: string;
  }[];
  activeSection?: string;
}

const Navigation = ({
  sections = [
    { id: "about", label: "Sobre" },
    { id: "experience", label: "Experiência" },
    { id: "skills", label: "Habilidades" },
    { id: "projects", label: "Projetos" },
    { id: "contact", label: "Contato" },
  ],
  activeSection = "about",
}: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState(activeSection);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setCurrentSection(activeSection);
  }, [activeSection]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setCurrentSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-background ${isScrolled ? "shadow-md py-2" : "py-4"}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="font-bold text-xl">Dhomini Pereira</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`relative px-1 py-2 text-sm font-medium transition-colors ${currentSection === section.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              {section.label}
              {currentSection === section.id && (
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                  layoutId="activeSection"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-background border-t border-border"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`text-left px-2 py-2 text-sm font-medium transition-colors ${currentSection === section.id ? "text-foreground bg-accent rounded-md" : "text-muted-foreground"}`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navigation;
