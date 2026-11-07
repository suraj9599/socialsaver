
import { useState } from "react";

import {
  Download,
  Globe,
  Menu,
  X,
  ArrowUpRight,
  Sun,
  Moon,
} from "lucide-react";

import { useTheme } from "../context/ThemeContext";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Tools", href: "/#tools" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "FAQ", href: "/#faq" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { darkMode, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl transition-colors duration-300 dark:border-slate-800 dark:bg-[#080f24]/90">
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8">

        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-3"
          aria-label="SocialSaver Home"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
            <Download size={21} strokeWidth={2.5} />
          </span>

          <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Social
            <span className="text-blue-600 dark:text-blue-400">
              Saver
            </span>
          </span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-3">

          {/* Theme toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              darkMode
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
            title={darkMode ? "Light mode" : "Dark mode"}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition-all duration-300 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
          >
            {darkMode ? (
              <Sun size={20} />
            ) : (
              <Moon size={20} />
            )}
          </button>

          {/* Desktop CTA */}
          <a
            href="/#tools"
            className="hidden items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 md:inline-flex"
          >
            Explore Tools
            <ArrowUpRight size={16} />
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((previous) => !previous)}
            className="rounded-xl border border-slate-200 bg-white p-2.5 text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 md:hidden"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile navigation */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-slate-100 bg-white px-5 py-5 transition-colors duration-300 dark:border-slate-800 dark:bg-[#080f24] md:hidden"
        >
          <div className="flex flex-col gap-4">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-slate-700 transition hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400"
              >
                {item.label}
              </a>
            ))}

            <a
              href="/#tools"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              <Globe size={17} />
              Explore Tools
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
