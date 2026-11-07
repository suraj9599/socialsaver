
import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What is SocialSaver?",
    answer:
      "SocialSaver is a free online platform offering tools to download supported public Instagram and Facebook content. Choose a downloader, paste a supported URL, and follow the instructions.",
  },
  {
    question: "Is SocialSaver free to use?",
    answer:
      "Yes. Our available Instagram and Facebook downloading tools can be used without a subscription fee.",
  },
  {
    question: "Do I need to create an account?",
    answer:
      "No. SocialSaver does not require you to register or sign in to use its downloading tools.",
  },
  {
    question: "What content can I download?",
    answer:
      "The Instagram Downloader supports compatible public Reels, photos, and carousel posts. The Facebook Downloader supports compatible public Facebook Reels. Availability depends on the media and platform restrictions.",
  },
  {
    question: "Can I download private Instagram or Facebook content?",
    answer:
      "SocialSaver is intended for supported publicly accessible content. It does not provide access to private accounts or restricted media.",
  },
  {
    question: "Does SocialSaver work on mobile devices?",
    answer:
      "SocialSaver is designed for modern mobile and desktop browsers. Download behavior may vary depending on your device and browser.",
  },
  {
    question: "Is SocialSaver affiliated with Instagram or Facebook?",
    answer:
      "No. SocialSaver is an independent service and is not affiliated with, endorsed by, or sponsored by Instagram, Facebook, or Meta.",
  },
  {
    question: "Can I download copyrighted videos?",
    answer:
      "Only download content you own or have permission or another legal right to save. Respect copyright laws and applicable platform terms.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex((current) =>
      current === index ? null : index
    );
  };

  return (
    <section
      id="faq"
      className="scroll-mt-24 bg-slate-50 py-24 transition-colors duration-300 dark:bg-[#0c1630]"
    >
      <div className="mx-auto max-w-4xl px-5 sm:px-8">

        {/* Section heading */}
        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
            <HelpCircle size={28} />
          </div>

          <span className="mt-6 block text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            Got Questions?
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Find answers to common questions about SocialSaver
            and our downloading tools.
          </p>
        </div>

        {/* FAQ accordion */}
        <div className="mt-14 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 dark:bg-[#111c36] ${
                  isOpen
                    ? "border-blue-200 shadow-md shadow-blue-100/40 dark:border-blue-700 dark:shadow-none"
                    : "border-slate-200 dark:border-slate-700"
                }`}
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-question-${index}`}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-7"
                  >
                    <span className="text-base font-semibold text-slate-900 dark:text-white sm:text-lg">
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                        isOpen
                          ? "rotate-180 bg-blue-600 text-white"
                          : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                      }`}
                    >
                      <ChevronDown size={19} />
                    </span>
                  </button>
                </h3>

                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  hidden={!isOpen}
                >
                  <p className="border-t border-slate-100 px-6 pb-6 pt-5 leading-7 text-slate-600 dark:border-slate-700 dark:text-slate-300 sm:px-7">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Have another question? Visit our Contact page
            once it becomes available.
          </p>
        </div>
      </div>
    </section>
  );
}
