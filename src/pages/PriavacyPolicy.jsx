
import { ShieldCheck, LockKeyhole, Mail } from "lucide-react";

const sections = [
  {
    title: "1. Introduction",
    paragraphs: [
      "Welcome to SocialSaver (https://socialsaver.io). This Privacy Policy explains how information may be collected, used, and processed when you visit our website or use our online tools.",
      "By using SocialSaver, you acknowledge the practices described in this Privacy Policy.",
    ],
  },
  {
    title: "2. Information We May Collect",
    paragraphs: [
      "When you use SocialSaver, certain technical information may be processed, including your IP address, browser type, device information, requested pages, and access timestamps.",
      "If you contact us by email, we may receive your email address and any information you choose to include in your message.",
      "Our downloading tools do not require you to create a SocialSaver account.",
    ],
  },
  {
    title: "3. Downloader URLs and Media Processing",
    paragraphs: [
      "When you submit an Instagram or Facebook URL, the relevant downloader processes that URL to attempt to retrieve supported media.",
      "Submitted URLs and related technical information may be transmitted to our servers and, where necessary, to third-party platforms involved in retrieving the requested content.",
      "Do not submit private, confidential, or sensitive information through downloader URLs.",
    ],
  },
  {
    title: "4. How We Use Information",
    paragraphs: [
      "Information may be processed to operate our tools, respond to inquiries, troubleshoot technical issues, maintain website security, and improve reliability.",
      "We may also use technical information to detect misuse, investigate errors, and maintain our website infrastructure.",
    ],
  },
  {
    title: "5. Cookies and Local Storage",
    paragraphs: [
      "SocialSaver may use browser storage to remember website preferences, such as your selected light or dark theme.",
      "If analytics, advertising, or other third-party services are introduced, they may use cookies or similar technologies. This policy should be updated to describe those services before they are enabled.",
    ],
  },
  {
    title: "6. Third-Party Platforms and Services",
    paragraphs: [
      "SocialSaver operates independently of Instagram, Facebook, and Meta. Our website is not affiliated with or endorsed by these platforms.",
      "When our tools interact with external platforms, information may be processed according to those platforms' applicable privacy policies.",
      "Our website may also rely on hosting and infrastructure providers to deliver its services.",
    ],
  },
  {
    title: "7. Data Retention",
    paragraphs: [
      "The length of time technical information is retained depends on operational requirements, server configuration, and applicable legal obligations.",
      "We aim to avoid retaining information longer than reasonably necessary for the purposes for which it is processed.",
    ],
  },
  {
    title: "8. Information Security",
    paragraphs: [
      "We take reasonable steps to protect our website and the information processed through it.",
      "However, no website, internet transmission, or electronic storage system can be guaranteed to be completely secure.",
    ],
  },
  {
    title: "9. Your Privacy Choices",
    paragraphs: [
      "You may manage cookies and website storage through your browser settings.",
      "Depending on your location and applicable law, you may have rights to request access to, correction of, or deletion of certain personal information.",
      "For privacy-related inquiries, please contact us using the details below.",
    ],
  },
  {
    title: "10. Children's Privacy",
    paragraphs: [
      "SocialSaver is not specifically designed for children. We do not intentionally request personal information from children through account registration.",
      "If you believe a child has provided personal information to us, please contact us so that we can review the concern.",
    ],
  },
  {
    title: "11. Changes to This Policy",
    paragraphs: [
      "We may update this Privacy Policy to reflect changes in our services, technology, or legal requirements.",
      "Any updated version will be published on this page with a revised effective date.",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white transition-colors duration-300 dark:bg-[#080f24]">
      <section className="border-b border-slate-100 bg-slate-50 py-20 dark:border-slate-800 dark:bg-[#0c1630] sm:py-24">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
            <ShieldCheck size={30} />
          </div>

          <h1 className="mt-7 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Privacy Policy
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Learn how SocialSaver handles information when you
            visit our website and use our downloading tools.
          </p>

          <p className="mt-6 text-sm font-medium text-slate-500 dark:text-slate-400">
            Effective date: November 7, 2026
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="space-y-11">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">
                  {section.title}
                </h2>

                <div className="mt-5 space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="leading-8 text-slate-600 dark:text-slate-300"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}

            <section className="rounded-3xl border border-blue-100 bg-blue-50 p-7 dark:border-blue-900 dark:bg-[#111c36] sm:p-9">
              <div className="flex items-center gap-3">
                <LockKeyhole
                  size={24}
                  className="text-blue-600 dark:text-blue-400"
                />
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  12. Contact Us
                </h2>
              </div>

              <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">
                If you have questions about this Privacy Policy
                or how your information is handled, please
                contact SocialSaver.
              </p>

              <a
                href="mailto:support@socialsaver.io"
                className="mt-5 inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400"
              >
                <Mail size={18} />
                support@socialsaver.io
              </a>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
