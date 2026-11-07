
import {
  ArrowUpRight,
  Download,
  Globe,
  Heart,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function About() {
  return (
    <div className="bg-white transition-colors duration-300 dark:bg-[#080f24]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-100 py-20 dark:border-slate-800 sm:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-80 w-96 -translate-x-1/2 rounded-full bg-blue-100/60 blur-3xl dark:bg-blue-900/20"
        />

        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600 dark:border-blue-800 dark:bg-blue-950/50 dark:text-blue-400">
            <Sparkles size={16} />
            Get to Know Us
          </div>

          <h1 className="mt-7 text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-6xl">
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
              SocialSaver
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            SocialSaver is an independent website offering simple
            online tools for downloading supported public social
            media content.
          </p>
        </div>
      </section>

      {/* Our story */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              Our Purpose
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Making Online Tools Simpler
            </h2>

            <p className="mt-6 leading-8 text-slate-600 dark:text-slate-300">
              We believe online tools should be easy to find,
              straightforward to use, and accessible across
              different devices.
            </p>

            <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">
              SocialSaver brings together dedicated Instagram
              and Facebook downloading tools in one convenient
              place. Our focus is on providing a clean interface,
              clear instructions, and a practical experience.
            </p>

            <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">
              Our tools are intended for supported publicly
              accessible content. We encourage responsible use
              and respect for content creators' rights.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-700 dark:bg-[#111c36] sm:p-12">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
              <Download size={30} />
            </div>

            <h3 className="mt-8 text-2xl font-bold text-slate-900 dark:text-white">
              One Place. Simple Tools.
            </h3>

            <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
              Choose the downloader you need, paste a compatible
              media link, and follow the instructions.
            </p>

            <div className="mt-8 space-y-4 border-t border-slate-200 pt-7 dark:border-slate-700">
              {[
                "Instagram Reels, photos, and carousel posts",
                "Public Facebook Reels",
                "Mobile and desktop browser support",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <ShieldCheck
                    size={19}
                    className="shrink-0 text-green-600 dark:text-green-400"
                  />
                  <span className="text-sm text-slate-700 dark:text-slate-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-50 py-20 transition-colors dark:bg-[#0c1630] sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              What Matters to Us
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
              Our Core Principles
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Globe,
                title: "Accessibility",
                description:
                  "Provide browser-based tools that are easy to access on different devices.",
              },
              {
                icon: Heart,
                title: "Simplicity",
                description:
                  "Focus on clear instructions, intuitive navigation, and a straightforward experience.",
              },
              {
                icon: ShieldCheck,
                title: "Responsible Use",
                description:
                  "Encourage respect for copyright, content ownership, and applicable platform terms.",
              },
            ].map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="rounded-3xl border border-slate-200 bg-white p-8 dark:border-slate-700 dark:bg-[#111c36]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                    <Icon size={26} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">
                    {value.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-5xl rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-14 text-center text-white sm:px-12">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Explore SocialSaver Tools
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-blue-100">
            Discover our Instagram and Facebook downloaders
            and choose the tool that fits your needs.
          </p>

          <a
            href="/#tools"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-semibold text-blue-700 transition hover:bg-blue-50"
          >
            Explore Tools
            <ArrowUpRight size={18} />
          </a>
        </div>
      </section>
    </div>
  );
}
