import { Mail, Linkedin, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t mt-auto">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-6">
          {/* Contact Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-primary mb-3">
              Get in touch with us
            </h3>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="mailto:info@corporateinnovation.org.au"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                aria-label="Send email to Corporate Innovation Series"
              >
                <Mail size={18} className="group-hover:text-primary" />
                <span>info@corporateinnovation.org.au</span>
              </a>
              
              <a
                href="https://linkedin.com/company/corporate-innovation-series"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                aria-label="Visit our LinkedIn page (opens in new tab)"
              >
                <Linkedin size={18} className="group-hover:text-primary" />
                <span>LinkedIn</span>
                <ExternalLink size={14} className="group-hover:text-primary" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;