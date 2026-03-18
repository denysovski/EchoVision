import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import detailCushion from "@/assets/detail-cushion.png";
import soundwave from "@/assets/soundwave.png";
import { Battery, Waves, Zap, Volume2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const BentoGrid = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: ref.current, start: "top 78%" },
      });

      tl.from(".features-kicker", {
        opacity: 0,
        y: 16,
        duration: 0.45,
        ease: "power2.out",
      })
        .from(
          ".features-title",
          {
            opacity: 0,
            y: 34,
            duration: 0.75,
            ease: "power3.out",
          },
          "-=0.2"
        )
        .from(
          ".bento-card",
          {
            opacity: 0,
            y: 50,
            scale: 0.97,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.25"
        )
        .from(
          ".features-cta",
          {
            opacity: 0,
            y: 20,
            duration: 0.55,
            ease: "power2.out",
          },
          "-=0.35"
        );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="px-6 py-32 max-w-6xl mx-auto">
      <div className="mb-20">
        <p className="features-kicker text-muted-foreground text-xs tracking-[0.3em] uppercase mb-6">Features</p>
        <h2 className="features-title text-4xl md:text-5xl lg:text-6xl font-display font-black tracking-tight text-foreground max-w-2xl">
          Every detail, <span className="text-gradient-purple">considered.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Large card — ANC */}
        <div className="bento-card lg:col-span-2 flex flex-col justify-between min-h-[360px]">
          <div className="space-y-4">
            <Waves className="w-5 h-5 text-muted-foreground" />
            <h3 className="text-2xl font-display font-bold text-foreground">
              Adaptive Noise Cancellation
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
              Our proprietary engine samples ambient sound 48,000 times per second,
              creating a silence profile unique to your environment. Recalibrated in real-time.
            </p>
          </div>
          <div className="mt-8 relative">
            <img src={soundwave} alt="Sound wave" className="w-full rounded-xl opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent rounded-xl" />
          </div>
        </div>

        {/* Battery */}
        <div className="bento-card flex flex-col justify-between min-h-[360px]">
          <Battery className="w-5 h-5 text-muted-foreground" />
          <div>
            <p className="text-7xl font-display font-black text-foreground tracking-tight leading-none">72h</p>
            <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
              Battery life with ANC on. 10 min charge = 8 hours listening.
            </p>
          </div>
        </div>

        {/* Driver */}
        <div className="bento-card flex flex-col justify-between min-h-[280px]">
          <div className="space-y-1.5">
            <Volume2 className="w-5 h-5 text-muted-foreground" />
            <h3 className="text-xl font-display font-bold text-foreground">50mm Planar Magnetic</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Full-range planar drivers. 5Hz–40kHz response. Hi-Res Audio at 96kHz/24-bit.
            </p>
          </div>
          <img src={detailCushion} alt="Driver" className="w-20 h-20 rounded-xl object-cover mt-4 opacity-70" />
        </div>

        {/* Bluetooth */}
        <div className="bento-card flex flex-col justify-between min-h-[280px]">
          <Zap className="w-5 h-5 text-muted-foreground" />
          <div>
            <p className="text-xl font-display font-bold text-foreground">Bluetooth 5.4</p>
            <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
              Lossless LDAC and aptX Adaptive. Multipoint connects 3 devices simultaneously.
            </p>
          </div>
        </div>

        {/* Weight */}
        <div className="bento-card flex flex-col justify-between min-h-[280px]">
          <div className="text-muted-foreground text-[10px] tracking-[0.25em] uppercase">Lightweight</div>
          <div>
            <p className="text-7xl font-display font-black text-foreground tracking-tight leading-none">
              268<span className="text-2xl text-muted-foreground ml-1">g</span>
            </p>
            <p className="text-muted-foreground text-sm mt-3">Precision-milled aluminum and memory foam. Built for hours.</p>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="features-cta flex justify-center mt-16">
        <a
          href="#order"
          className="relative overflow-hidden group bg-primary text-primary-foreground px-8 py-3.5 text-sm font-display font-semibold tracking-[0.1em] uppercase rounded-full transition-all duration-300 hover:shadow-[0_0_30px_hsl(270_60%_58%/0.5)]"
        >
          <span className="relative z-10">Pre-Order Now</span>
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
        </a>
      </div>
    </section>
  );
};

export default BentoGrid;
