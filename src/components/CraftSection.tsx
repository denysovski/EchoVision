import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import detailCushion from "@/assets/detail-cushion.png";
import headphonesWhite from "@/assets/headphones-white.png";

gsap.registerPlugin(ScrollTrigger);

const CraftSection = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: ref.current, start: "top 78%" },
      });

      tl.from(".materials-kicker", {
        opacity: 0,
        y: 16,
        duration: 0.45,
        ease: "power2.out",
      })
        .from(
          ".materials-title",
          {
            opacity: 0,
            y: 34,
            duration: 0.75,
            ease: "power3.out",
          },
          "-=0.2"
        )
        .from(
          ".materials-card",
          {
            opacity: 0,
            y: 46,
            scale: 0.98,
            duration: 0.75,
            stagger: 0.11,
            ease: "power3.out",
          },
          "-=0.25"
        );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="bg-gradient-section py-32">
      <div className="px-6 max-w-6xl mx-auto">
        <div className="mb-20">
          <p className="materials-kicker text-muted-foreground text-xs tracking-[0.3em] uppercase mb-6">Materials</p>
          <h2 className="materials-title text-4xl md:text-6xl font-display font-700 tracking-tight text-foreground max-w-3xl">
            Obsession you can feel.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-4">
          {/* Left - large image card */}
          <div className="materials-card bento-card p-0 overflow-hidden min-h-[500px] flex flex-col">
            <img 
              src={headphonesWhite} 
              alt="Nova Pro X Lunar White" 
              className="w-full h-80 object-cover object-center"
            />
            <div className="p-8 flex-1 flex flex-col justify-end">
              <h3 className="text-xl font-display font-600 text-foreground mb-2">Aerospace-Grade Aluminum</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The headband is CNC-milled from a single block of 6063 aluminum alloy — the same grade used in 
                satellite components. Every curve is structural. Nothing is decorative.
              </p>
            </div>
          </div>

          {/* Right - stacked cards */}
          <div className="flex flex-col gap-4">
            <div className="materials-card bento-card min-h-[240px] flex flex-col justify-end">
              <h3 className="text-xl font-display font-600 text-foreground mb-2">Protein Leather Cushions</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Memory foam at 65kg/m³ density, wrapped in breathable protein leather. 
                Pressure-mapped for even weight distribution across 22 contact points.
              </p>
            </div>
            <div className="materials-card bento-card p-0 overflow-hidden min-h-[240px] flex flex-col">
              <img 
                src={detailCushion} 
                alt="Ear cushion detail" 
                className="w-full h-40 object-cover"
              />
              <div className="p-8">
                <h3 className="text-xl font-display font-600 text-foreground mb-2">Acoustic Isolation Chamber</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Each ear cup is a sealed acoustic environment, tuned to eliminate standing waves and resonance artifacts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CraftSection;
