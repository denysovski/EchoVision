import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const specs = [
  { label: "Driver Type", value: "50mm Planar Magnetic" },
  { label: "Frequency Response", value: "5Hz – 40kHz" },
  { label: "Impedance", value: "32Ω" },
  { label: "Sensitivity", value: "108dB/mW" },
  { label: "Battery Life", value: "72h (ANC on)" },
  { label: "Charging", value: "USB-C, 10min → 8h" },
  { label: "Bluetooth", value: "5.4 (LDAC, aptX)" },
  { label: "Weight", value: "268g" },
  { label: "ANC", value: "6-mic hybrid array" },
  { label: "Codec Support", value: "LDAC, aptX, AAC, SBC" },
  { label: "Multipoint", value: "3 devices" },
  { label: "Rating", value: "IPX4" },
];

const TechSpecs = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: ref.current, start: "top 78%" },
      });

      tl.from(".specs-kicker", {
        opacity: 0,
        y: 16,
        duration: 0.45,
        ease: "power2.out",
      })
        .from(
          ".specs-title",
          {
            opacity: 0,
            y: 34,
            duration: 0.75,
            ease: "power3.out",
          },
          "-=0.2"
        )
        .from(
          ".spec-row",
          {
            opacity: 0,
            x: -30,
            duration: 0.5,
            stagger: 0.05,
            ease: "power2.out",
          },
          "-=0.25"
        )
        .from(
          ".specs-cta",
          {
            opacity: 0,
            y: 20,
            duration: 0.55,
            ease: "power2.out",
          },
          "-=0.25"
        );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="px-6 py-32 max-w-6xl mx-auto" id="specs">
      <div className="mb-20">
        <p className="specs-kicker text-muted-foreground text-xs tracking-[0.3em] uppercase mb-6">Specifications</p>
        <h2 className="specs-title text-4xl md:text-5xl lg:text-6xl font-display font-black tracking-tight text-foreground">
          The numbers.
        </h2>
      </div>

      <div className="border-t border-border">
        {specs.map((spec) => (
          <div
            key={spec.label}
            className="spec-row flex items-center justify-between py-5 border-b border-border/50 group cursor-default"
          >
            <p className="text-muted-foreground text-sm tracking-[0.08em] uppercase group-hover:text-foreground transition-colors duration-200">
              {spec.label}
            </p>
            <p className="text-foreground text-sm font-display font-medium group-hover:text-primary transition-colors duration-200">
              {spec.value}
            </p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="specs-cta flex justify-center mt-16">
        <a
          href="#order"
          className="relative overflow-hidden group px-8 py-3.5 text-sm font-display font-semibold tracking-[0.1em] uppercase rounded-full border border-primary/60 text-foreground hover:text-primary-foreground hover:bg-primary transition-all duration-300"
        >
          <span className="relative z-10">Pre-Order Now</span>
          <span className="absolute inset-0 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
        </a>
      </div>
    </section>
  );
};

export default TechSpecs;
