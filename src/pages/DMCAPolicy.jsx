
import { Scale, Mail, ShieldCheck, FileText } from "lucide-react";

export default function DMCAPolicy() {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-[#080f24] dark:text-white">
      <header className="bg-slate-50 px-5 py-20 text-center dark:bg-[#0c1630]">
        <Scale className="mx-auto text-blue-600" size={42} />
        <h1 className="mt-6 text-4xl font-extrabold">
          DMCA & Copyright Policy
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-slate-600 dark:text-slate-300">
          Information about copyright protection and reporting
          potential infringement involving SocialSaver.
        </p>
        <p className="mt-4 text-sm text-slate-500">
          Effective date: November 7, 2026
        </p>
      </header>

      <main className="mx-auto max-w-4xl space-y-12 px-5 py-16">
        <section>
          <h2 className="text-2xl font-bold">1. Copyright Respect</h2>
          <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
            SocialSaver respects intellectual property rights.
            Our tools are intended for downloading supported
            publicly accessible content where users have the
            necessary rights or permission. Users are responsible
            for complying with copyright laws and platform terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">2. Reporting Infringement</h2>
          <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
            If you believe material or activity associated with
            SocialSaver infringes your copyright, you may send
            a written notice identifying the issue.
          </p>
          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-[#111c36]">
            <FileText className="mb-4 text-blue-600" size={28} />
            <h3 className="text-lg font-bold">Include in Your Notice</h3>
            <ul className="mt-4 list-disc space-y-3 pl-5 leading-7 text-slate-600 dark:text-slate-300">
              <li>Your physical or electronic signature.</li>
              <li>Identification of the copyrighted work.</li>
              <li>The URL or information identifying the material.</li>
              <li>Your name and contact information.</li>
              <li>A good-faith statement that the use is unauthorized.</li>
              <li>
                A statement, under penalty of perjury, that
                the information is accurate and you are the
                copyright owner or authorized representative.
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold">3. Review of Notices</h2>
          <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
            We will review sufficiently detailed copyright
            complaints and take appropriate action where
            required. This may include removing or disabling
            access to material under our control.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">4. Counter-Notifications</h2>
          <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
            If material you submitted was removed because of
            a copyright complaint and you believe the removal
            resulted from a mistake or misidentification,
            you may contact us to request information about
            submitting a counter-notification.
          </p>
          <p className="mt-3 leading-8 text-slate-600 dark:text-slate-300">
            Applicable legal procedures may require your
            signature, identification of the removed material,
            a statement under penalty of perjury, contact
            details, consent to the appropriate court's
            jurisdiction, and acceptance of service of process.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">5. Repeat Infringement</h2>
          <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
            Where applicable, SocialSaver may restrict or
            terminate access for repeat infringers in
            appropriate circumstances.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">6. Third-Party Platforms</h2>
          <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
            SocialSaver is independent of Instagram, Facebook,
            and Meta. We do not control content hosted on
            those platforms. Copyright concerns about
            material hosted by third parties may also need
            to be directed to the relevant platform.
          </p>
        </section>

        <section className="rounded-3xl border border-blue-100 bg-blue-50 p-8 dark:border-blue-900 dark:bg-[#111c36]">
          <ShieldCheck className="text-blue-600" size={30} />
          <h2 className="mt-4 text-2xl font-bold">
            7. Copyright Contact
          </h2>
          <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
            Send copyright-related inquiries and notices
            to our designated contact address once confirmed.
          </p>
          <a
            href="mailto:support@socialsaver.io"
            className="mt-5 inline-flex items-center gap-2 font-semibold text-blue-600 dark:text-blue-400"
          >
            <Mail size={19} />
            support@socialsaver.io
          </a>
        </section>
      </main>
    </div>
  );
}
