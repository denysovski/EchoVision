import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,backdrop-filter,box-shadow,padding] duration-200 ease-out ${
        scrolled
          ? "bg-background/68 backdrop-blur-2xl py-3 shadow-[0_22px_40px_-28px_rgba(0,0,0,0.95)]"
          : "bg-transparent py-4 md:py-5"
      }`}
    >
      <div className="px-6 md:px-8 flex items-center justify-between min-h-[52px]">
        {/* Center logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <a
            href="/"
            className="font-display font-black text-lg tracking-[0.4em] uppercase"
          >
            NOVA
          </a>
        </div>

        {/* Right pre-order button */}
        <a
          href="#order"
          className="relative ml-auto overflow-hidden group bg-primary text-primary-foreground px-6 py-2.5 text-xs font-display font-semibold tracking-[0.15em] uppercase rounded-full transition-all duration-300 hover:shadow-[0_0_25px_hsl(270_60%_58%/0.5)]"
        >
          <span className="relative z-10">Pre-Order</span>
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
