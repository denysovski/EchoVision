import { useEffect, useState } from "react";
import {
  Home,
  Compass,
  Layers,
  Wrench,
  Palette,
  Cpu,
  Star,
  ShoppingBag,
} from "lucide-react";

const sections = [
  { label: "Home", icon: Home, href: "#top" },
  { label: "Philosophy", icon: Compass, href: "#philosophy" },
  { label: "Features", icon: Layers, href: "#features" },
  { label: "Craft", icon: Wrench, href: "#craft" },
  { label: "Colors", icon: Palette, href: "#colors" },
  { label: "Reviews", icon: Star, href: "#testimonials" },
  { label: "Specs", icon: Cpu, href: "#specs" },
  { label: "Order", icon: ShoppingBag, href: "#order" },
];

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    const ids = sections.map((section) => section.href.replace("#", ""));

    const updateActiveSection = () => {
      const probe = window.innerHeight * 0.38;
      let current = ids[0];

      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) {
          continue;
        }

        const rect = el.getBoundingClientRect();
        if (rect.top - probe <= 0) {
          current = id;
        }
      }

      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <aside
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      className={`hidden lg:flex fixed left-0 top-1/2 -translate-y-1/2 z-40 h-fit flex-col border border-sidebar-border bg-sidebar/95 backdrop-blur-xl transition-[width,box-shadow] duration-500 rounded-r-2xl overflow-hidden py-6 px-2 ${
        expanded
          ? "w-56 shadow-[0_0_55px_hsl(270_60%_58%/0.32),0_20px_50px_-28px_rgba(0,0,0,0.95)]"
          : "w-16 shadow-none"
      }`}
      style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
    >
      <div
        className={`pointer-events-none absolute inset-0 rounded-r-2xl transition-opacity duration-400 ${
          expanded ? "opacity-100" : "opacity-0"
        } bg-[radial-gradient(circle_at_left,rgba(149,85,255,0.28),rgba(149,85,255,0)_62%)]`}
      />

      <nav className="relative z-10 flex flex-col w-full">
        {sections.map(({ label, icon: Icon, href }) => {
          const isActive = activeSection === href.replace("#", "");

          return (
            <a
              key={label}
              href={href}
              className={`group flex w-full items-center rounded-xl py-2.5 px-3 transition-colors duration-200 ${
                isActive
                  ? "text-foreground bg-sidebar-accent/70"
                  : "text-sidebar-foreground hover:text-foreground hover:bg-sidebar-accent/60"
              }`}
              title={label}
            >
              <span
                className={`flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-250 ${
                  isActive
                    ? "bg-primary/20 text-primary shadow-[0_0_18px_hsl(270_60%_58%/0.45)]"
                    : "group-hover:bg-black/15"
                }`}
              >
                <Icon className="w-4 h-4 flex-shrink-0" />
              </span>
              <span
                className={`text-xs tracking-[0.18em] uppercase whitespace-nowrap overflow-hidden transition-[max-width,opacity,transform] duration-350 ease-out ${
                  expanded
                    ? "max-w-[9rem] opacity-100 translate-x-0"
                    : "max-w-0 opacity-0 -translate-x-1"
                }`}
              >
                {label}
              </span>
            </a>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
