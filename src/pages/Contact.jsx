
import {
  Mail,
  MessageCircle,
  ShieldCheck,
  ArrowUpRight,
  HelpCircle,
  Copyright,
} from "lucide-react";

const contactTopics = [
  {
    icon: MessageCircle,
    title: "General Questions",
    description:
      "Questions about SocialSaver, supported content, or how our downloading tools work.",
  },
  {
    icon: HelpCircle,
    title: "Technical Support",
    description:
      "Having trouble with a downloader? Include the tool name, error message, and relevant details.",
  },
  {
    icon: Copyright,
    title: "Copyright & DMCA",
    description:
      "For copyright concerns, please review our DMCA Policy and provide the relevant information.",
  },
];

export default function Contact() {
  return (
    <div className="bg-white transition-colors duration-300 dark:bg-[#080f24]">

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-100 py-20 dark:border-slate-800 sm:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-80 w-96 -translate-x-1/2 rounded-full bg-blue-100/60 blur-3xl dark:bg-blue-900/20"
        />

        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600 dark:border-blue-800 dark:bg-blue-950/50 dark:text-blue-400">
            <Mail size={16} />
            Contact SocialSaver
          </span>

          <h1 className="mt-7 text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-6xl">
            Get in{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
              Touch
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Have a question, feedback, or need assistance with
            SocialSaver? We're here to help you find the
            information you need.
          </p>
        </div>
      </section>

      {/* Contact details */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-2">

            {/* Email card */}
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-700 dark:bg-[#111c36] sm:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                <Mail size={27} />
              </div>

              <h2 className="mt-7 text-2xl font-bold text-slate-900 dark:text-white">
                Email Support
              </h2>

              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                For general inquiries, technical issues, or
                feedback, you can contact us by email.
              </p>

              <a
                href="mailto:support@socialsaver.io"
                className="mt-6 inline-flex items-center gap-2 break-all text-lg font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400"
              >
                support@socialsaver.io
                <ArrowUpRight size={18} className="shrink-0" />
              </a>
            </div>

            {/* Support guidance */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 dark:border-slate-700 dark:bg-[#111c36] sm:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                <ShieldCheck size={27} />
              </div>

              <h2 className="mt-7 text-2xl font-bold text-slate-900 dark:text-white">
                Before You Contact Us
              </h2>

              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                For downloader-related issues, please include
                the following information when possible:
              </p>

              <ul className="mt-5 list-inside list-disc space-y-3 text-sm text-slate-600 dark:text-slate-300">
                <li>Which downloader you are using</li>
                <li>A description of the issue</li>
                <li>Any error message displayed</li>
                <li>Your browser and device type</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry types */}
      <section className="bg-slate-50 py-20 transition-colors dark:bg-[#0c1630] sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              How Can We Help?
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
              What Can You Contact Us About?
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {contactTopics.map((topic) => {
              const Icon = topic.icon;

              return (
                <div
                  key={topic.title}
                  className="rounded-3xl border border-slate-200 bg-white p-8 dark:border-slate-700 dark:bg-[#111c36]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                    <Icon size={26} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">
                    {topic.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                    {topic.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-5 py-20 text-center sm:px-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Looking for Our Downloading Tools?
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-slate-600 dark:text-slate-300">
          Visit our homepage to explore the available Instagram
          and Facebook downloaders.
        </p>

        <a
          href="/#tools"
          className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-700"
        >
          Explore Tools
          <ArrowUpRight size={18} />
        </a>
      </section>
    </div>
  );
}
