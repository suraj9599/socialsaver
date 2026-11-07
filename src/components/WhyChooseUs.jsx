
import {
  Zap,
  ShieldCheck,
  Smartphone,
  MousePointerClick,
  Globe,
  Heart,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Simple and Fast",
    description:
      "Our tools are designed to make downloading supported content straightforward, without complicated steps.",
  },
  {
    icon: ShieldCheck,
    title: "No Account Required",
    description:
      "Use SocialSaver without creating an account or providing your social media login credentials.",
  },
  {
    icon: Smartphone,
    title: "Works Across Devices",
    description:
      "Access SocialSaver through modern browsers on smartphones, tablets, laptops, and desktops.",
  },
  {
    icon: MousePointerClick,
    title: "Easy to Use",
    description:
      "Copy a supported media link, paste it into the appropriate downloader, and follow the instructions.",
  },
  {
    icon: Globe,
    title: "Free Online Tools",
    description:
      "Access our available downloading tools online without paying a subscription fee.",
  },
  {
    icon: Heart,
    title: "Built for Convenience",
    description:
      "A clean, responsive experience that makes it easy to find and use the downloader you need.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="features"
      className="bg-white py-24 transition-colors duration-300 dark:bg-[#080f24]"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            Why SocialSaver
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Why Choose SocialSaver?
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Everything you need for a simple and convenient
            social media downloading experience.
          </p>
        </div>

        {/* Feature cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/50 dark:border-slate-800 dark:bg-[#111c36] dark:hover:border-blue-800 dark:hover:shadow-none"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-900/30 dark:text-blue-400 dark:group-hover:bg-blue-600 dark:group-hover:text-white">
                  <Icon size={26} strokeWidth={1.8} />
                </div>

                <h3 className="mt-7 text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional information */}
        <div className="mx-auto mt-14 max-w-3xl text-center">
          <p className="text-sm leading-7 text-slate-500 dark:text-slate-400">
            SocialSaver is an independent online tool.
            It is not affiliated with, endorsed by, or sponsored
            by Instagram, Facebook, or Meta.
            Please download only content you own or have permission
            to save, and respect applicable platform terms and
            copyright laws.
          </p>
        </div>
      </div>
    </section>
  );
}
