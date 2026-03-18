import { useEffect, useRef } from "react";
import gsap from "gsap";
import heroImg from "../../headphones.png";

declare global {
  interface Window {
    WebFont?: any;
  }
}

if (typeof window !== "undefined" && !document.querySelector('link[href*="Space Grotesk"]')) {
  const link = document.createElement("link");
  link.href = "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700;900&display=swap";
  link.rel = "stylesheet";
  document.head.appendChild(link);
}

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });

      tl.from(".hero-eyebrow", { opacity: 0, y: 16, duration: 0.45, ease: "power2.out" })
        .from(".hero-word-sound", { opacity: 0, y: 70, skewY: 3, duration: 0.45, ease: "power4.out" }, "-=0.18")
        .from(".hero-word-beyond", { opacity: 0, y: 58, skewY: 2, duration: 0.32, ease: "power4.out" }, "-=0.22")
        .from(".hero-sub", { opacity: 0, y: 24, duration: 0.45, ease: "power2.out" }, "-=0.08")
        .from(".hero-cta > *", { opacity: 0, y: 18, duration: 0.45, stagger: 0.07, ease: "power2.out" }, "-=0.15")
        .from(".hero-stat", { opacity: 0, y: 16, duration: 0.4, stagger: 0.06, ease: "power2.out" }, "-=0.1")
        .from(".hero-img", { opacity: 0, y: 86, scale: 0.88, duration: 1.05, ease: "power3.out" }, "+=0.35");

      // Image stays static, no float

      // Mouse parallax on orbs
      const handleMouseMove = (e: MouseEvent) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 40;
        const y = (e.clientY / window.innerHeight - 0.5) * 40;
        gsap.to(".orb-1", { x: x * 1.8, y: y * 1.8, duration: 1.8, ease: "power2.out" });
        gsap.to(".orb-2", { x: -x * 1.4, y: -y * 1.4, duration: 2.2, ease: "power2.out" });
        gsap.to(".orb-3", { x: x * 0.9, y: y * 0.9, duration: 2.5, ease: "power2.out" });
      };
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={containerRef}
      className="relative min-h-screen overflow-hidden px-6 pt-24 pb-16 lg:pt-28"
    >
      {/* Background orbs */}
      <div className="orb-1 absolute top-1/4 left-1/3 w-[700px] h-[700px] rounded-full bg-purple-700/[0.12] blur-[130px] pointer-events-none" />
      <div className="orb-2 absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-violet-900/[0.18] blur-[110px] pointer-events-none" />
      <div className="orb-3 absolute top-1/2 left-1/4 w-[350px] h-[350px] rounded-full bg-indigo-700/[0.08] blur-[90px] pointer-events-none" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[calc(100vh-9rem)] w-full max-w-7xl flex-col items-center justify-start text-center z-10">
        <div className="hero-eyebrow mb-8 inline-flex items-center gap-2.5 text-muted-foreground text-xs tracking-[0.4em] uppercase border border-border/40 px-6 py-2.5 rounded-full bg-white/[0.03] backdrop-blur-sm relative overflow-hidden">
          <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_18%_50%,rgba(150,80,255,0.22),transparent_42%),radial-gradient(circle_at_82%_50%,rgba(88,28,135,0.18),transparent_38%)]" />
          <span className="absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-80 skew-x-[22deg] animate-shimmer-sweep" />
          <span className="relative z-10 w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_16px_hsl(270_60%_58%/0.95)] animate-pulse" />
          <span className="relative z-10">Introducing the Nova Pro X</span>
        </div>

        <div className="overflow-hidden mb-3 max-w-5xl relative z-10">
          <h1 className="leading-[0.9] tracking-[-0.02em]">
            <span className="hero-word-sound hero-word block text-[5rem] md:text-[8rem] lg:text-[11rem] font-black text-gradient-sharp" style={{ fontFamily: '"Space Grotesk", "Inter", sans-serif', fontWeight: 900 }}>
              Sound
            </span>
            <span className="hero-word-beyond hero-word block text-[5rem] md:text-[8rem] lg:text-[11rem] font-black text-gradient-purple" style={{ fontFamily: '"Space Grotesk", "Inter", sans-serif', fontWeight: 900 }}>
              Beyond
            </span>
          </h1>
        </div>

        <p className="hero-sub text-secondary-foreground/72 text-base md:text-lg max-w-lg mx-auto leading-relaxed font-light mt-5 relative z-10">
          50mm planar magnetic drivers. Engineered for those who refuse to compromise.
        </p>

        <div className="hero-cta relative z-30 flex justify-center gap-4 mt-9 flex-wrap">
          <a
            href="#order"
            className="relative overflow-hidden group bg-primary text-primary-foreground px-10 py-4 text-sm font-display font-semibold tracking-[0.1em] uppercase rounded-full transition-all duration-300 hover:shadow-[0_0_40px_hsl(270_60%_58%/0.55)]"
          >
            <span className="relative z-10">Pre-Order — $449</span>
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#features"
            className="px-10 py-4 text-sm font-display font-medium tracking-[0.1em] uppercase rounded-full border border-border/50 text-foreground hover:bg-white/[0.05] hover:border-primary/40 transition-all duration-300"
          >
            Explore
          </a>
        </div>

        <div className="pointer-events-none relative z-40 mt-10 w-full max-w-4xl lg:absolute lg:left-[-16rem] lg:top-[4%] lg:mt-0 lg:w-[min(92vw,84rem)] xl:left-[-10rem] 2xl:left-[-6rem]">
          <div className="absolute inset-[14%_18%_20%_16%] rounded-full bg-[radial-gradient(circle,rgba(138,75,255,0.36),rgba(12,10,16,0)_72%)] blur-3xl" />
          <img
            src={heroImg}
            alt="Nova Pro X premium headphones"
            className="hero-img relative w-full object-contain drop-shadow-[0_50px_140px_rgba(0,0,0,0.88)]"
          />
        </div>

        <div className="relative z-50 flex justify-center gap-4 mt-10 lg:mt-[26rem] flex-wrap">
          {[
            ["72h", "Battery"],
            ["50mm", "Planar"],
            ["268g", "Weight"],
            ["5Hz–40kHz", "Response"],
          ].map(([val, label]) => (
            <div key={label} className="hero-stat relative px-5 py-3.5 rounded-2xl bg-black/45 border border-border/30 backdrop-blur-md shadow-[0_18px_45px_-30px_rgba(0,0,0,0.9)]">
              <p className="font-display font-bold text-base md:text-lg text-foreground">{val}</p>
              <p className="text-muted-foreground text-[10px] tracking-[0.2em] uppercase mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent pointer-events-none" />

    </section>
  );
};

export default HeroSection;
