import { useEffect, useState } from "react";
import { Instagram, Twitter, Youtube, ArrowUp } from "lucide-react";

const socials = [
  { label: "Instagram", icon: Instagram, href: "#" },
  { label: "Twitter", icon: Twitter, href: "#" },
  { label: "YouTube", icon: Youtube, href: "#" },
];

const SocialBubbles = () => {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY > 300);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Social bubbles - fixed bottom right */}
      <div className="fixed bottom-10 right-10 z-40 flex gap-3">
        {socials.map((social, i) => {
          const Icon = social.icon;
          return (
            <a
              key={social.label}
              href={social.href}
              className="w-12 h-12 rounded-full bg-primary/15 border border-primary/30 text-foreground hover:bg-primary/25 hover:border-primary/50 hover:scale-110 flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
              title={social.label}
            >
              <Icon className="w-4 h-4" />
            </a>
          );
        })}
      </div>

      {/* Back to top - fixed bottom left */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-10 left-10 z-40 w-12 h-12 rounded-full bg-primary/20 border border-primary/40 text-foreground hover:bg-primary/30 hover:border-primary/60 hover:scale-110 flex items-center justify-center backdrop-blur-sm transition-all duration-400 ease-out ${
          showArrow
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-3 pointer-events-none"
        }`}
        title="Back to top"
      >
        <ArrowUp className="w-4 h-4" />
      </button>
    </>
  );
};

export default SocialBubbles;
