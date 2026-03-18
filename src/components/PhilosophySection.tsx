import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PhilosophySection = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".phil-left", {
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
        opacity: 0,
        x: -60,
        duration: 1,
        ease: "power3.out",
      });
      gsap.from(".phil-right", {
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
        opacity: 0,
        x: 60,
        duration: 1,
        delay: 0.15,
        ease: "power3.out",
      });
      gsap.from(".stat-item", {
        scrollTrigger: { trigger: ".stats-row", start: "top 88%" },
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="px-6 py-32 max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        <div className="phil-left">
          <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase mb-6">Our Philosophy</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black leading-[1.05] tracking-tight text-foreground">
            Sound should disappear.
            <br />
            <span className="text-gradient-purple">Music should remain.</span>
          </h2>
        </div>
        <div className="phil-right space-y-6 lg:pt-4">
          <p className="text-secondary-foreground text-base leading-[1.85] font-light">
            We started Nova with a singular question: what if you could hear music exactly as the artist intended —
            no coloration, no distortion, no compromise?
          </p>
          <p className="text-secondary-foreground text-base leading-[1.85] font-light">
            The Pro X represents four years of acoustic research, 200+ prototype iterations, and an obsession with
            the imperceptible. This is not another headphone. This is the end of the search.
          </p>
          <div className="stats-row pt-6 flex gap-12">
            {[
              ["4 yrs", "Development"],
              ["200+", "Prototypes"],
              ["12", "Patents"],
            ].map(([val, label]) => (
              <div key={label} className="stat-item">
                <p className="text-3xl font-display font-black text-foreground">{val}</p>
                <p className="text-muted-foreground text-xs tracking-[0.2em] uppercase mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-16">
        <a
          href="#features"
          className="relative overflow-hidden group px-8 py-3.5 text-sm font-display font-semibold tracking-[0.1em] uppercase rounded-full border border-primary/60 text-foreground hover:text-primary-foreground hover:bg-primary transition-all duration-300"
        >
          <span className="relative z-10">Learn More</span>
          <span className="absolute inset-0 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
        </a>
      </div>
    </section>
  );
};

export default PhilosophySection;
