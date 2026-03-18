import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import headphonesWhite from "@/assets/headphones-white.png";
import headphonesPurple from "@/assets/headphones-purple.png";
import headphonesBlack from "@/assets/headphones-black.png";

gsap.registerPlugin(ScrollTrigger);

const variants = [
  { name: "Obsidian", swatch: "bg-foreground/70", image: headphonesBlack },
  { name: "Astral", swatch: "bg-primary", image: headphonesPurple },
  { name: "Lunar", swatch: "bg-foreground", image: headphonesWhite },
];

const ColorVariants = () => {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: ref.current, start: "top 78%" },
      });

      tl.from(".color-kicker", {
        opacity: 0,
        y: 16,
        duration: 0.45,
        ease: "power2.out",
      })
        .from(
          ".color-title",
          {
            opacity: 0,
            y: 34,
            duration: 0.75,
            ease: "power3.out",
          },
          "-=0.2"
        )
        .from(
          ".color-preview",
          {
            opacity: 0,
            x: -48,
            rotate: -4,
            duration: 0.85,
            ease: "power3.out",
          },
          "-=0.25"
        )
        .from(
          ".color-copy, .color-swatch",
          {
            opacity: 0,
            y: 24,
            duration: 0.6,
            stagger: 0.08,
            ease: "power2.out",
          },
          "-=0.45"
        );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="px-6 py-32 max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div className="color-preview flex items-center justify-center">
          <img
            src={variants[active].image}
            alt={variants[active].name}
            className="w-full max-w-sm transition-opacity duration-500"
          />
        </div>

        {/* Text + picker */}
        <div className="space-y-8">
          <div>
            <p className="color-kicker text-muted-foreground text-xs tracking-[0.3em] uppercase mb-6">Colorways</p>
            <h2 className="color-title text-4xl md:text-5xl font-display font-700 tracking-tight text-foreground">
              Three finishes.<br />One standard.
            </h2>
          </div>
          <p className="color-copy text-secondary-foreground text-base leading-[1.8] font-light max-w-md">
            Each colorway is finished with a proprietary PVD coating process — the same technique 
            used in luxury watchmaking. Scratch-resistant, fingerprint-repellent, and impossibly smooth to the touch.
          </p>

          {/* Swatches */}
          <div className="flex items-center gap-6 pt-2">
            {variants.map((v, i) => (
              <button
                key={v.name}
                onClick={() => setActive(i)}
                className="color-swatch flex flex-col items-center gap-2.5 group"
              >
                <div
                  className={`w-8 h-8 rounded-full ${v.swatch} transition-all duration-300 ${
                    active === i
                      ? "ring-1 ring-foreground/30 ring-offset-2 ring-offset-background"
                      : "opacity-40 group-hover:opacity-60"
                  }`}
                />
                <span
                  className={`text-[10px] tracking-[0.15em] uppercase transition-colors ${
                    active === i ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {v.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColorVariants;
