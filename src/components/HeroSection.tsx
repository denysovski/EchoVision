import { useEffect, useRef } from "react";
import gsap from "gsap";
import heroImg from "../../headphones.png";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });

      tl.from(".hero-eyebrow", { opacity: 0, y: 16, duration: 0.45, ease: "power2.out" })
        .from(".hero-word-sound", { opacity: 0, y: 70, skewY: 3, duration: 0.45, ease: "power4.out" }, "-=0.18")
        .from(".hero-word-beyond", { opacity: 0, y: 58, skewY: 2, duration: 0.32, ease: "power4.out" }, "-=0.22")
        .from(".hero-scroll-indicator", { opacity: 0, y: 12, duration: 0.32, ease: "power2.out" }, "-=0.05")
        .from(".hero-sub", { opacity: 0, y: 24, duration: 0.45, ease: "power2.out" }, "-=0.08")
        .from(".hero-stat", { opacity: 0, y: 16, duration: 0.4, stagger: 0.06, ease: "power2.out" }, "-=0.1")
        .from(".hero-note", { opacity: 0, y: 18, duration: 0.45, ease: "power2.out" }, "-=0.08")
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
      className="relative min-h-screen overflow-x-hidden px-6 pt-24 pb-16 lg:pt-28"
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

        <div className="overflow-visible pb-7 md:pb-8 mb-1 max-w-5xl w-full relative z-10">
          <h1 className="leading-[1.06] md:leading-[1.03] tracking-[-0.02em]">
            <span className="hero-word-sound hero-word block text-[5rem] md:text-[8rem] lg:text-[11rem] font-normal text-gradient-sharp" style={{ fontFamily: '"Special Gothic Expanded One", sans-serif', fontWeight: 400 }}>
              Sound
            </span>
            <span className="hero-word-beyond hero-word block -mt-1 md:-mt-2 lg:-mt-3 text-[5rem] md:text-[8rem] lg:text-[11rem] font-normal text-gradient-purple" style={{ fontFamily: '"Special Gothic Expanded One", sans-serif', fontWeight: 400 }}>
              Beyond
            </span>
          </h1>
        </div>

        <p className="hero-sub text-secondary-foreground/72 text-base md:text-lg max-w-[22rem] leading-relaxed font-light mt-5 md:mt-4 relative z-20 text-center lg:text-right lg:self-end lg:pr-10 lg:-mt-10">
          50mm planar magnetic drivers. Engineered for those who refuse to compromise.
        </p>

        <div className="pointer-events-none relative z-40 mt-10 w-full max-w-4xl lg:absolute lg:left-[-22rem] lg:top-[-6rem] lg:mt-0 lg:w-[min(92vw,84rem)] xl:left-[-16rem] 2xl:left-[-12rem]">
          <div className="absolute inset-[10%_14%_16%_12%] rounded-full bg-[radial-gradient(circle,rgba(148,88,255,0.26),rgba(67,30,118,0.12)_38%,rgba(12,10,16,0)_74%)] blur-[90px]" />
          <div className="absolute inset-[20%_20%_26%_18%] rounded-full bg-[radial-gradient(circle,rgba(168,110,255,0.21),rgba(12,10,16,0)_70%)] blur-[120px]" />
          <img
            src={heroImg}
            alt="Nova Pro X premium headphones"
            className="hero-img relative w-full object-contain drop-shadow-[0_54px_138px_rgba(0,0,0,0.85)] [filter:drop-shadow(0_0_40px_rgba(157,96,255,0.23))_drop-shadow(0_0_96px_rgba(121,60,223,0.18))]"
          />
        </div>

        <div className="hero-note relative z-50 mt-5 max-w-xs text-center lg:absolute lg:left-10 lg:bottom-12 lg:mt-0 lg:text-left">
          <p className="text-[10px] tracking-[0.26em] uppercase text-muted-foreground/70 mb-2">Design Language</p>
          <p className="text-xs md:text-sm leading-relaxed text-secondary-foreground/78">
            Minimalistic, but professional. Built with restraint, engineered with precision.
          </p>
        </div>

        <div className="relative z-50 flex justify-center lg:justify-end gap-3 mt-4 lg:mt-10 flex-wrap max-w-[26rem] lg:self-end lg:pr-10">
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

      <a
        href="#philosophy"
        className="hero-scroll-indicator group absolute bottom-8 md:bottom-10 lg:bottom-[56px] left-1/2 z-30 -translate-x-1/2 inline-flex flex-col items-center gap-1.5 md:gap-2 text-muted-foreground/70 hover:text-foreground transition-colors duration-250"
      >
        <span className="relative flex h-7 w-4 md:h-8 md:w-4.5 lg:h-9 lg:w-5 items-start justify-center rounded-full border border-current/70 group-hover:border-current">
          <span className="mt-1 md:mt-1.5 h-1 w-1 md:h-1.5 md:w-1.5 rounded-full bg-current animate-[mouse-wheel_1.6s_ease-in-out_infinite]" />
        </span>
        <span className="text-[9px] md:text-[10px] tracking-[0.25em] md:tracking-[0.28em] uppercase">Scroll</span>
      </a>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent pointer-events-none" />

    </section>
  );
};

export default HeroSection;
