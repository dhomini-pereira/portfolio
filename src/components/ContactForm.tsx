import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface ContactFormProps {
  onSubmitSuccess?: () => void;
}

const ContactForm = ({ onSubmitSuccess = () => {} }: ContactFormProps) => {
  return (
    <Card className="w-full max-w-md mx-auto bg-background">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Entre em Contato
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-center text-muted-foreground mb-6">
          Entre em contato através dos canais abaixo:
        </p>

        <div className="space-y-3">
          <Button
            variant="outline"
            size="lg"
            asChild
            className="w-full justify-start"
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
            className="w-full justify-start"
          >
            <a
              href="https://www.linkedin.com/in/dh-pereira"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <Linkedin className="h-5 w-5" />
              LinkedIn Profile
            </a>
          </Button>

          <Button
            variant="outline"
            size="lg"
            asChild
            className="w-full justify-start"
          >
            <a
              href="https://github.com/dhomini-pereira"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <Github className="h-5 w-5" />
              GitHub Profile
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
