
import {
  ArrowRight,
  ArrowUpRight,
  Download,
  Globe,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

const tools = [
  {
    title: "Instagram Downloader",
    description:
      "Download supported public Instagram Reels, photos, and carousel posts with an easy-to-use online tool.",
    href: "/instadownloader/",
    label: "Instagram",
    color: "pink",
  },
  {
    title: "Facebook Reel Downloader",
    description:
      "Save supported public Facebook Reels using a simple link-based downloading tool.",
    href: "/fbdownloader/",
    label: "Facebook",
    color: "blue",
  },
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white transition-colors duration-300 dark:bg-[#080f24]">

      {/* Background gradients */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[550px] w-[850px] -translate-x-1/2 rounded-full bg-blue-100/60 blur-3xl dark:bg-blue-900/20"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-72 -z-10 h-80 w-80 rounded-full bg-pink-100/50 blur-3xl dark:bg-purple-900/20"
      />

      <div className="mx-auto max-w-7xl px-5 pb-24 pt-20 sm:px-8 md:pt-28">

        {/* Hero content */}
        <div className="mx-auto max-w-4xl text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 transition-colors dark:border-blue-800/60 dark:bg-blue-950/60 dark:text-blue-300">
            <Sparkles size={16} />
            Your Free Social Media Toolkit
          </div>

          {/* Main heading */}
          <h1 className="mt-8 text-5xl font-extrabold leading-[1.1] tracking-tight text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
            Save the Content
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
              You Love.
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300 sm:text-xl">
            Discover simple online tools for downloading supported
            Instagram and Facebook content. No complicated setup,
            just paste a link and get started.
          </p>

          {/* CTA buttons */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#tools"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              Explore Our Tools
              <ArrowRight size={18} />
            </a>

            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-3.5 font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:border-blue-500 dark:hover:text-blue-400"
            >
              How It Works
            </a>
          </div>
        </div>

        {/* Downloader cards */}
        <div
          id="tools"
          className="mx-auto mt-20 grid max-w-5xl scroll-mt-28 gap-6 md:grid-cols-2"
        >
          {tools.map((tool) => {
            const isPink = tool.color === "pink";

            return (
              <a
                key={tool.href}
                href={tool.href}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-200/60 dark:border-slate-700 dark:bg-[#111c36] dark:shadow-none dark:hover:border-slate-600 sm:p-9"
              >
                {/* Card gradient */}
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full blur-3xl ${
                    isPink
                      ? "bg-pink-100/70 dark:bg-pink-900/20"
                      : "bg-blue-100/70 dark:bg-blue-900/20"
                  }`}
                />

                <div className="relative">

                  {/* Icon */}
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-lg ${
                      isPink
                        ? "bg-gradient-to-br from-pink-500 to-purple-600"
                        : "bg-gradient-to-br from-blue-500 to-indigo-600"
                    }`}
                  >
                    <Globe size={30} strokeWidth={1.8} />
                  </div>

                  {/* Tool information */}
                  <div className="mt-7">
                    <span
                      className={`text-xs font-bold uppercase tracking-widest ${
                        isPink
                          ? "text-pink-600 dark:text-pink-400"
                          : "text-blue-600 dark:text-blue-400"
                      }`}
                    >
                      {tool.label} Tool
                    </span>

                    <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                      {tool.title}
                    </h2>

                    <p className="mt-4 min-h-20 text-base leading-7 text-slate-600 dark:text-slate-300">
                      {tool.description}
                    </p>
                  </div>

                  {/* Card footer */}
                  <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6 dark:border-slate-700">
                    <span
                      className={`inline-flex items-center gap-2 font-semibold ${
                        isPink
                          ? "text-pink-600 dark:text-pink-400"
                          : "text-blue-600 dark:text-blue-400"
                      }`}
                    >
                      Open Downloader

                      <ArrowUpRight
                        size={19}
                        className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </span>

                    <Download
                      size={21}
                      className="text-slate-400 dark:text-slate-500"
                    />
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Trust highlights */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-medium text-slate-500 dark:text-slate-400">
          <span className="inline-flex items-center gap-2">
            <Zap size={17} className="text-amber-500" />
            Easy to Use
          </span>

          <span className="inline-flex items-center gap-2">
            <ShieldCheck
              size={17}
              className="text-green-600 dark:text-green-400"
            />
            No Account Required
          </span>

          <span className="inline-flex items-center gap-2">
            <Download
              size={17}
              className="text-blue-600 dark:text-blue-400"
            />
            Free Online Tools
          </span>
        </div>
      </div>
    </section>
  );
}
