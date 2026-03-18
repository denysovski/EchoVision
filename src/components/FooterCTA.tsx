import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const FooterCTA = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-cta-item", {
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
        opacity: 0,
        y: 40,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <footer ref={ref} className="px-6 py-32 relative overflow-hidden" id="order">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-700/[0.09] blur-[120px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center space-y-8 z-10">
        <p className="footer-cta-item text-muted-foreground text-xs tracking-[0.35em] uppercase">Limited First Edition</p>
        <h2 className="footer-cta-item text-5xl md:text-7xl font-display font-black tracking-tight text-foreground leading-[0.95]">
          Hear everything.<br />
          <span className="text-gradient-purple">Miss nothing.</span>
        </h2>
        <p className="footer-cta-item text-secondary-foreground text-base max-w-md mx-auto leading-relaxed font-light">
          The first 1,000 units ship with a hand-numbered aluminum case and a lifetime driver warranty.
        </p>

        <div className="footer-cta-item pt-2">
          <button className="relative overflow-hidden group bg-primary text-primary-foreground px-12 py-4 text-sm font-display font-semibold tracking-[0.15em] uppercase rounded-full transition-all duration-300 hover:shadow-[0_0_50px_hsl(270_60%_58%/0.55)]">
            <span className="relative z-10">Pre-Order Nova Pro X - $449</span>
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>

      <div className="relative mt-24 max-w-6xl mx-auto border-t border-border/40 pt-10 z-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-6">
            <span className="font-display font-black text-sm text-foreground tracking-[0.25em] uppercase">Nova</span>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
              {["Privacy", "Terms", "Support"].map((l) => (
                <a key={l} href="#" className="text-muted-foreground text-xs hover:text-foreground transition-colors tracking-[0.12em] uppercase">{l}</a>
              ))}
            </div>
            <p className="text-muted-foreground text-xs">(c) 2026 Nova Audio</p>
          </div>

          <div className="footer-cta-item w-full max-w-md lg:text-right">
            <label className="block text-xs text-muted-foreground tracking-[0.15em] uppercase mb-4">Get notified at launch</label>
            <form
              className="flex gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! We will notify you at launch.");
                (e.target as HTMLFormElement).reset();
              }}
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-white/5 border border-border/30 rounded-full px-6 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
                required
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center bg-primary text-primary-foreground w-12 h-12 rounded-full hover:shadow-[0_0_20px_hsl(270_60%_58%/0.4)] transition-all"
                aria-label="Notify me at launch"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterCTA;
