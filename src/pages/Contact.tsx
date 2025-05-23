
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { CardSpotlight } from "@/components/ui/aceternity/card-spotlight";
import { GridBackground } from "@/components/ui/aceternity/grid-background";
import { Sparkles } from "@/components/ui/aceternity/sparkles";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "parthyadav141@gmail.com",
    href: "mailto:parthyadav141@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-9301923424",
    href: "tel:+919301923424"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Indore, India",
    href: "https://maps.google.com/?q=Indore,India"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/parthy018",
    href: "https://github.com/parthy018"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/parth-yadav-54558a175",
    href: "https://linkedin.com/in/parth-yadav-54558a175"
  }
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      
      // Show success notification
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          {/* Contact Hero */}
          <section className="relative py-20">
            <GridBackground 
              className="absolute inset-0" 
              dotColor="rgba(var(--primary-rgb), 0.15)"
              dotSpacing={24}
              dotSize={1}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background to-background"></div>
            </GridBackground>
            
            <div className="container px-4 relative z-10 text-center">
              <Sparkles>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
              </Sparkles>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Have a question or want to work together? Feel free to reach out!
              </p>
            </div>
          </section>

          {/* Contact Form and Info */}
          <section className="py-16">
            <div className="container px-4">
              <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                {/* Contact Form */}
                <CardSpotlight>
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Input
                          placeholder="Your Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="bg-background"
                        />
                      </div>
                      <div>
                        <Input
                          type="email"
                          placeholder="Your Email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="bg-background"
                        />
                      </div>
                      <div>
                        <Input
                          placeholder="Subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="bg-background"
                        />
                      </div>
                      <div>
                        <Textarea
                          placeholder="Your Message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          className="min-h-[150px] bg-background"
                        />
                      </div>
                      <Button 
                        type="submit" 
                        className="w-full" 
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>Processing...</>
                        ) : (
                          <>
                            <Send size={16} className="mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </div>
                </CardSpotlight>

                {/* Contact Info */}
                <div className="space-y-6">
                  <CardSpotlight>
                    <div className="p-6">
                      <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                      <div className="space-y-6">
                        {ContactInfo.map((item, index) => (
                          <a 
                            href={item.href} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            key={index}
                            className="flex items-center gap-4 hover:text-primary transition-colors"
                          >
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                              <item.icon size={20} />
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">{item.label}</p>
                              <p className="font-medium">{item.value}</p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </CardSpotlight>

                  <CardSpotlight>
                    <div className="p-6">
                      <h2 className="text-2xl font-bold mb-4">Let's Connect</h2>
                      <p className="text-muted-foreground mb-6">
                        I'm currently open to new opportunities and collaborations. 
                        Whether you have a question or just want to say hi, I'll get 
                        back to you as soon as possible!
                      </p>
                      <div className="flex gap-4">
                        <Button variant="outline" asChild>
                          <a href="https://github.com/parthy018" target="_blank" rel="noopener noreferrer">
                            <Github size={18} className="mr-2" />
                            GitHub
                          </a>
                        </Button>
                        <Button variant="outline" asChild>
                          <a href="https://linkedin.com/in/parth-yadav-54558a175" target="_blank" rel="noopener noreferrer">
                            <Linkedin size={18} className="mr-2" />
                            LinkedIn
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardSpotlight>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Contact;
