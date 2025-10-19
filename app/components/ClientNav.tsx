"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/patterns", label: "Patterns" },
  { href: "/examples", label: "Examples" },
  { href: "/about", label: "About" },
];

function NavLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-sm font-medium
        ${active ? "bg-white/10 text-white" : "text-white/80 hover:bg-white/5"}`}
    >
      <span className="w-5 h-5 rounded-sm bg-white/10" aria-hidden />
      <span className="hidden md:inline">{label}</span>
    </Link>
  );
}

export default function ClientNav() {
  const pathname = usePathname() ?? "/";

  return (
    <>
      {/* Desktop sidebar links (kept small so layout can place them) */}
      <nav className="flex-1 space-y-1">
        {navItems.map((item) => (
          <NavLink key={item.href} href={item.href} label={item.label} active={pathname === item.href} />
        ))}
      </nav>

      {/* Mobile top links used inside the header in layout */}
      <div className="flex items-center gap-2 md:hidden">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`text-sm px-2 py-1 rounded ${pathname === item.href ? "bg-white/20" : "hover:bg-white/10"}`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </>
  );
}
