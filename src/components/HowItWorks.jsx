
import {
  Link2,
  ClipboardPaste,
  Download,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Link2,
    title: "Copy the Link",
    description:
      "Find a supported public Instagram post or Facebook Reel and copy its URL.",
  },
  {
    number: "02",
    icon: ClipboardPaste,
    title: "Paste the URL",
    description:
      "Open the appropriate SocialSaver downloader and paste the copied link.",
  },
  {
    number: "03",
    icon: Download,
    title: "Download Your File",
    description:
      "Follow the instructions to download the available media to your device.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-24 bg-slate-50 py-24 transition-colors duration-300 dark:bg-[#0c1630]"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            Simple Process
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            How SocialSaver Works
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Download supported social media content in three
            straightforward steps.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-[#111c36] dark:shadow-none"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                    <Icon size={27} />
                  </div>

                  <span className="text-4xl font-extrabold text-slate-100 dark:text-slate-700">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-bold text-slate-900 dark:text-white">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/#tools"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-700"
          >
            Explore Downloaders
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
