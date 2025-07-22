import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectCard = ({
  title = "Project Title",
  description = "A short description of the project and its features. This explains what the project does and the technologies used.",
  image = "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80",
  technologies = ["React", "TypeScript", "Tailwind"],
  githubUrl = "https://github.com/dhomini-pereira",
  liveUrl
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
      className="h-full"
    >
      <Card className="overflow-hidden h-full flex flex-col bg-background border-zinc-800 hover:shadow-lg transition-all duration-300">
        <div className="relative overflow-hidden h-48">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>

        <CardHeader>
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          <div className="flex flex-wrap gap-1 mt-2">
            {technologies.map((tech, index) => (
              <Badge
                key={index}
                variant="outline"
                className="bg-zinc-100 dark:bg-zinc-800 text-xs"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardHeader>

        <CardContent className="flex-grow">
          <CardDescription className="text-sm text-zinc-600 dark:text-zinc-400">
            {description}
          </CardDescription>
        </CardContent>

        <CardFooter className="flex justify-between pt-2 border-t border-zinc-200 dark:border-zinc-800">
          {githubUrl && (
            <Button variant="outline" size="sm" asChild>
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                <Github className="h-4 w-4" />
                Code
              </a>
            </Button>
          )}

          {liveUrl && (
            <Button size="sm" asChild>
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
