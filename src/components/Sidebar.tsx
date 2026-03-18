import { useState } from "react";
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

  return (
    <aside
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      className={`hidden lg:flex fixed left-0 top-1/2 -translate-y-1/2 z-40 h-fit flex-col border border-sidebar-border bg-sidebar/95 backdrop-blur-xl transition-[width,box-shadow] duration-500 rounded-r-2xl overflow-hidden py-6 px-2 ${
        expanded ? "w-56" : "w-16"
      }`}
      style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
    >
      <nav className="flex flex-col w-full">
        {sections.map(({ label, icon: Icon, href }) => (
          <a
            key={label}
            href={href}
            className="group flex w-full items-center rounded-xl py-2.5 px-3 text-sidebar-foreground hover:text-foreground hover:bg-sidebar-accent/60 transition-colors duration-200"
            title={label}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors duration-200 group-hover:bg-black/15">
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
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
