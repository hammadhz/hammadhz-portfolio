import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const Contact = () => (
  <section
    id="contact"
    className="py-20 px-4 text-center max-w-3xl mx-auto bg-background"
  >
    <div className="animate-fade-in-up">
      <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-foreground">
        Get In Touch
      </h2>
      <p className="text-muted-foreground mb-8 text-lg">
        Have a project in mind? Let&apos;s discuss how we can work together to
        bring your ideas to life.
      </p>
      <form className="flex flex-col gap-4">
        <Input
          placeholder="Your Name"
          required
          className="border-border focus:border-primary transition-colors"
        />
        <Input
          placeholder="Your Email"
          type="email"
          required
          className="border-border focus:border-primary transition-colors"
        />
        <Textarea
          placeholder="Your Message"
          rows={4}
          required
          className="border-border focus:border-primary transition-colors"
        />
        <Button
          type="submit"
          className="w-full hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          <Send className="h-4 w-4 mr-2" />
          Send Message
        </Button>
      </form>
    </div>
  </section>
);

export default Contact;
