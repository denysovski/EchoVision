import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: "The Pro X made me hear details in tracks I've been mixing for twenty years. That's never happened before.",
    name: "Marcus Chen",
    title: "Grammy-winning Producer",
  },
  {
    quote: "I've tested every flagship on the market. The Nova Pro X is the only one I kept.",
    name: "Alina Becker",
    title: "Head of Audio, Wired Magazine",
  },
  {
    quote: "The noise cancellation isn't just good — it's disorienting. You forget you're on a plane.",
    name: "James Whitfield",
    title: "Frequent Flyer, CEO at Halo Labs",
  },
];

const TestimonialsSection = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: ref.current, start: "top 78%" },
      });

      tl.from(".praise-kicker", {
        opacity: 0,
        y: 16,
        duration: 0.45,
        ease: "power2.out",
      })
        .from(
          ".praise-title",
          {
            opacity: 0,
            y: 34,
            duration: 0.75,
            ease: "power3.out",
          },
          "-=0.2"
        )
        .from(
          ".praise-card",
          {
            opacity: 0,
            y: 44,
            duration: 0.75,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .from(
          ".praise-cta",
          {
            opacity: 0,
            y: 20,
            duration: 0.55,
            ease: "power2.out",
          },
          "-=0.3"
        );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="bg-gradient-section py-32">
      <div className="px-6 max-w-6xl mx-auto">
        <div className="mb-20">
          <p className="praise-kicker text-muted-foreground text-xs tracking-[0.3em] uppercase mb-6">Praise</p>
          <h2 className="praise-title text-4xl md:text-6xl font-display font-700 tracking-tight text-foreground">
            What they're saying.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="praise-card space-y-6">
              <p className="text-foreground text-base leading-[1.8] font-light italic">
                "{t.quote}"
              </p>
              <div>
                <p className="text-foreground text-sm font-display font-500">{t.name}</p>
                <p className="text-muted-foreground text-xs mt-0.5">{t.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="praise-cta flex justify-center mt-16">
        <a
          href="#order"
          className="relative overflow-hidden group px-8 py-3.5 text-sm font-display font-semibold tracking-[0.1em] uppercase rounded-full border border-primary/60 text-foreground hover:text-primary-foreground hover:bg-primary transition-all duration-300"
        >
          <span className="relative z-10">Reserve Yours</span>
          <span className="absolute inset-0 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
        </a>
      </div>
    </section>
  );
};

export default TestimonialsSection;
