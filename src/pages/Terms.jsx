
import {
  FileText,
  Scale,
  ShieldCheck,
  Mail,
} from "lucide-react";

const sections = [
  {
    title: "1. Acceptance of Terms",
    paragraphs: [
      "Welcome to SocialSaver (https://socialsaver.io). These Terms of Service govern your access to and use of our website and online downloading tools.",
      "By accessing or using SocialSaver, you agree to these Terms. If you do not agree, please discontinue using our services.",
    ],
  },
  {
    title: "2. Description of Services",
    paragraphs: [
      "SocialSaver provides online tools intended to help users download supported publicly accessible Instagram and Facebook content.",
      "Available features may include downloading compatible Instagram Reels, photos, carousel posts, and public Facebook Reels.",
      "We may modify, suspend, or discontinue features at any time.",
    ],
  },
  {
    title: "3. Permitted Use",
    paragraphs: [
      "You may use SocialSaver only for lawful purposes and in accordance with these Terms.",
      "You are responsible for ensuring that you have the necessary rights or permissions to download, store, share, or otherwise use any content.",
      "You must comply with applicable laws and the terms of any third-party platforms involved.",
    ],
  },
  {
    title: "4. Prohibited Activities",
    paragraphs: [
      "You must not use SocialSaver to infringe copyrights, violate privacy rights, access restricted content without authorization, or engage in unlawful activities.",
      "You must not attempt to disrupt our services, bypass security protections, introduce malicious code, or overload our infrastructure.",
      "You must not use automated systems to abuse our services or interfere with their normal operation.",
    ],
  },
  {
    title: "5. Intellectual Property",
    paragraphs: [
      "The SocialSaver website's original branding, interface, text, and other materials may be protected by applicable intellectual property laws.",
      "Instagram, Facebook, and other third-party trademarks remain the property of their respective owners.",
      "SocialSaver does not claim ownership of third-party media accessed through its downloading tools.",
    ],
  },
  {
    title: "6. Third-Party Content and Platforms",
    paragraphs: [
      "SocialSaver is an independent service and is not affiliated with, endorsed by, or sponsored by Instagram, Facebook, or Meta.",
      "Third-party platforms may change their systems, policies, or access restrictions, which can affect the availability or operation of our tools.",
      "You are responsible for reviewing and complying with applicable third-party terms.",
    ],
  },
  {
    title: "7. Service Availability",
    paragraphs: [
      "We aim to provide accessible and useful tools, but we do not guarantee uninterrupted availability, compatibility with every URL, or successful downloads in all circumstances.",
      "Features may become temporarily unavailable due to maintenance, technical issues, platform changes, or other circumstances.",
    ],
  },
  {
    title: "8. Disclaimer of Warranties",
    paragraphs: [
      "To the extent permitted by applicable law, SocialSaver is provided on an 'as is' and 'as available' basis without warranties of any kind.",
      "We do not guarantee that the website will always be error-free, secure, uninterrupted, or suitable for every purpose.",
      "Nothing in these Terms excludes warranties or consumer rights that cannot lawfully be excluded.",
    ],
  },
  {
    title: "9. Limitation of Liability",
    paragraphs: [
      "To the extent permitted by applicable law, SocialSaver and its operators are not liable for indirect, incidental, special, or consequential losses arising from use of the website.",
      "Nothing in these Terms limits liability where doing so would be prohibited by applicable law.",
    ],
  },
  {
    title: "10. Privacy",
    paragraphs: [
      "Our Privacy Policy describes how information may be collected and processed when you access our website or use our tools.",
      "Please review the Privacy Policy for additional information about our data practices.",
    ],
  },
  {
    title: "11. Changes to These Terms",
    paragraphs: [
      "We may revise these Terms of Service to reflect changes in our website, services, or applicable requirements.",
      "Updated Terms will be published on this page with a revised effective date. Continued use after changes take effect constitutes acceptance where permitted by applicable law.",
    ],
  },
  {
    title: "12. Contact Information",
    paragraphs: [
      "If you have questions about these Terms of Service, please contact us using the email address provided below.",
    ],
  },
];

export default function Terms() {
  return (
    <div className="min-h-screen bg-white transition-colors duration-300 dark:bg-[#080f24]">

      {/* Hero */}
      <section className="border-b border-slate-100 bg-slate-50 py-20 dark:border-slate-800 dark:bg-[#0c1630] sm:py-24">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
            <FileText size={30} />
          </div>

          <h1 className="mt-7 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Terms of Service
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Please read these Terms carefully before using
            SocialSaver and its downloading tools.
          </p>

          <p className="mt-6 text-sm font-medium text-slate-500 dark:text-slate-400">
            Effective date: November 7, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="mb-12 flex items-start gap-4 rounded-2xl border border-blue-100 bg-blue-50 p-6 dark:border-blue-900 dark:bg-[#111c36]">
            <Scale
              size={24}
              className="mt-1 shrink-0 text-blue-600 dark:text-blue-400"
            />

            <p className="leading-7 text-slate-700 dark:text-slate-300">
              SocialSaver is designed for responsible use.
              Only download content you own or have permission
              or another legal right to save.
            </p>
          </div>

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

                {section.title === "10. Privacy" && (
                  <a
                    href="/privacy-policy/"
                    className="mt-4 inline-block font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400"
                  >
                    Read our Privacy Policy
                  </a>
                )}
              </section>
            ))}

            {/* Contact card */}
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7 dark:border-slate-700 dark:bg-[#111c36] sm:p-9">
              <div className="flex items-center gap-3">
                <ShieldCheck
                  size={24}
                  className="text-blue-600 dark:text-blue-400"
                />

                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  Questions About These Terms?
                </h2>
              </div>

              <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">
                Contact SocialSaver if you have questions
                about these Terms of Service.
              </p>

              <a
                href="mailto:support@socialsaver.io"
                className="mt-5 inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400"
              >
                <Mail size={18} />
                support@socialsaver.io
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
