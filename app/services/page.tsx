import servicesData from "@/content/services.json";

// Type helpers for the two differently-shaped service objects
type MAService = (typeof servicesData.services)[0] & {
  outcomes: { label: string; description: string }[];
};
type CapitalService = (typeof servicesData.services)[1] & {
  pillars: { title: string; description: string }[];
  funding_sources: string[];
  funding_stages: string[];
};

const c = servicesData;
const maService = c.services[0] as unknown as MAService;
const capitalService = c.services[1] as unknown as CapitalService;

export const metadata = {
  title: "Capabilities | Ignatious",
};

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-white pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="container-site max-w-4xl">
          <p className="text-xs font-semibold tracking-widest uppercase text-blue mb-5">
            {c.hero.eyebrow}
          </p>
          <h1 className="text-4xl md:text-6xl font-black text-navy leading-tight mb-6 whitespace-pre-line">
            {c.hero.headline}
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed max-w-2xl">
            {c.hero.subtext}
          </p>
        </div>
      </section>

      {/* M&A Advisory */}
      <section id="ma" className="py-20 md:py-24 bg-gray-50">
        <div className="container-site">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-blue mb-3">
                01
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-navy mb-4 leading-tight">
                {maService.title}
              </h2>
              <p className="text-lg font-semibold text-navy mb-4">
                {maService.tagline}
              </p>
              <p className="text-gray-500 leading-relaxed">{maService.description}</p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {maService.outcomes.map((outcome) => (
                <div
                  key={outcome.label}
                  className="bg-white border border-gray-200 rounded-xl px-6 py-5 flex gap-4 items-start"
                >
                  <span className="text-blue font-bold text-lg mt-0.5">→</span>
                  <div>
                    <p className="font-bold text-navy text-sm">{outcome.label}</p>
                    <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                      {outcome.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Private Capital Advisory */}
      <section id="capital" className="py-20 md:py-24 bg-white">
        <div className="container-site">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-blue mb-3">
                02
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-navy mb-4 leading-tight">
                {capitalService.title}
              </h2>
              <p className="text-lg font-semibold text-navy mb-4">
                {capitalService.tagline}
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">{capitalService.description}</p>

              {/* Funding sources */}
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-3">
                  Capital Sources
                </p>
                <div className="flex flex-wrap gap-2">
                  {capitalService.funding_sources.map((source) => (
                    <span
                      key={source}
                      className="bg-blue-light text-blue text-xs font-semibold px-3 py-1.5 rounded-full"
                    >
                      {source}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {capitalService.pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="bg-gray-50 border border-gray-200 rounded-xl px-6 py-5"
                >
                  <p className="font-bold text-navy mb-2">{pillar.title}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-20 md:py-24 bg-navy">
        <div className="container-site">
          <p className="text-xs font-semibold tracking-widest uppercase text-blue mb-3">
            {c.sectors.eyebrow}
          </p>
          <h2 className="text-3xl font-black text-white mb-12 leading-tight">
            {c.sectors.headline}
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {c.sectors.items.map((sector) => (
              <div
                key={sector.title}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
              >
                <h3 className="font-bold text-white mb-2">{sector.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{sector.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue">
        <div className="container-site text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            {c.cta_banner.headline}
          </h2>
          <p className="text-white/80 mb-8 max-w-md mx-auto">{c.cta_banner.subtext}</p>
          <a
            href={c.cta_banner.cta.href}
            className="inline-block bg-white text-blue text-sm font-bold px-8 py-3.5 rounded-full hover:bg-gray-100 transition-colors"
          >
            {c.cta_banner.cta.label}
          </a>
        </div>
      </section>
    </div>
  );
}
