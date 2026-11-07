
import {
  Download,
  Globe,
  ArrowUpRight,
  Heart,
} from "lucide-react";

const footerLinks = {
  tools: [
    {
      label: "Instagram Downloader",
      href: "/instadownloader/",
    },
    {
      label: "Facebook Reel Downloader",
      href: "/fbdownloader/",
    },
  ],
  company: [
    { label: "About Us", href: "/about/" },
    { label: "Contact Us", href: "/contact/" },
    { label: "How It Works", href: "/#how-it-works" },
    { label: "FAQ", href: "/#faq" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy/" },
    { label: "Terms of Service", href: "/terms/" },
    { label: "DMCA Policy", href: "/dmca/" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white transition-colors duration-300 dark:border-slate-800 dark:bg-[#080f24]">
      <div className="mx-auto max-w-7xl px-5 pb-8 pt-16 sm:px-8">

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <a
              href="/"
              className="inline-flex items-center gap-3"
              aria-label="SocialSaver Home"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                <Download size={22} strokeWidth={2.5} />
              </span>

              <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Social
                <span className="text-blue-600 dark:text-blue-400">
                  Saver
                </span>
              </span>
            </a>

            <p className="mt-6 max-w-xs text-sm leading-7 text-slate-600 dark:text-slate-400">
              SocialSaver provides simple online tools for
              downloading supported public social media content.
              Explore our Instagram and Facebook downloaders.
            </p>

            <a
              href="/#tools"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Explore Our Tools
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Tools column */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white">
              Our Tools
            </h2>

            <ul className="mt-6 space-y-4">
              {footerLinks.tools.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-2 text-sm text-slate-600 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                  >
                    <Globe size={15} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white">
              Company
            </h2>

            <ul className="mt-6 space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-600 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal column */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white">
              Legal
            </h2>

            <ul className="mt-6 space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-600 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-slate-200 pt-7 text-center dark:border-slate-800 md:flex-row md:text-left">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} SocialSaver.io.
            All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
            Made with
            <Heart
              size={15}
              className="fill-rose-500 text-rose-500"
              aria-label="love"
            />
            for a simpler web experience.
          </p>
        </div>

        {/* Disclaimer */}
        <p className="mx-auto mt-8 max-w-4xl text-center text-xs leading-6 text-slate-400 dark:text-slate-500">
          SocialSaver is an independent website and is not
          affiliated with, endorsed by, or sponsored by Instagram,
          Facebook, or Meta. Users are responsible for ensuring
          they have the necessary rights to download and use
          content and for complying with applicable laws and
          platform terms.
        </p>
      </div>
    </footer>
  );
}
