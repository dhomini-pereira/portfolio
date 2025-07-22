import React, { ReactNode, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface SectionContainerProps {
  id: string;
  title?: string;
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
}

const SectionContainer = ({
  id,
  title,
  children,
  className = "",
  fullWidth = false,
}: SectionContainerProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`min-h-[600px] py-16 md:py-24 bg-background ${className}`}
    >
      <div
        className={`${fullWidth ? "w-full" : "container mx-auto px-4 md:px-6 lg:px-8"}`}
      >
        {title && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-12 text-foreground border-b border-border pb-4"
          >
            {title}
          </motion.h2>
        )}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full"
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default SectionContainer;
