import servicesData from "@/content/services.json";

type MAService = (typeof servicesData.services)[0] & {
  outcomes: { label: string; description: string }[];
};
type CapitalService = (typeof servicesData.services)[1] & {
  pillars: { title: string; description: string }[];
};

const c = servicesData;
const maService = c.services[0] as unknown as MAService;
const capitalService = c.services[1] as unknown as CapitalService;

export const metadata = { title: "Capabilities | Ignatious" };

export default function ServicesPage() {
  return (
    <div className="bg-black">
      {/* ── Two large green service cards — matches Webflow Capabilities page ── */}
      <section className="pt-8 pb-0">
        <div className="container-site">
          <div className="grid md:grid-cols-2 gap-4">
            {c.services.map((service) => (
              <div key={service.id} className="bg-green rounded-3xl p-10 flex flex-col gap-6 min-h-[280px]">
                <h2 className="text-3xl font-black text-black leading-tight">
                  {service.title}
                </h2>
                <p className="text-black/70 text-sm leading-relaxed flex-1">
                  {service.description}
                </p>
                <a
                  href={`#${service.id}`}
                  className="flex items-center gap-2 text-sm font-bold text-black hover:gap-3 transition-all"
                >
                  {service.cta}
                  <span className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center text-xs">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Core Coverage Areas — 3×3 dark cards ── */}
      <section id="sectors" className="py-20 md:py-24">
        <div className="container-site">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
            {c.sectors.eyebrow}
          </h2>
          <p className="text-white/50 text-sm mb-10 max-w-xl">
            {c.sectors.headline}
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {c.sectors.items.map((sector) => (
              <div key={sector.title} className="bg-[#111] border border-white/[0.08] rounded-2xl p-7">
                <div className="w-10 h-10 rounded-xl bg-green/10 border border-green/20 flex items-center justify-center mb-5">
                  <span className="text-green text-sm font-black">✦</span>
                </div>
                <h3 className="font-black text-white mb-3">{sector.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{sector.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── M&A detail ── */}
      <section id="ma" className="py-20 border-t border-white/[0.07]">
        <div className="container-site">
          <p className="text-xs font-semibold tracking-widest uppercase text-green mb-3">01</p>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-black text-white mb-4 leading-tight">
                {maService.title}
              </h2>
              <p className="text-white/50 text-sm leading-relaxed mb-8">
                {maService.description}
              </p>
            </div>
            <div className="grid gap-3">
              {maService.outcomes.map((outcome) => (
                <div key={outcome.label} className="bg-[#111] border border-white/[0.08] rounded-xl px-6 py-5 flex gap-4">
                  <span className="text-green font-bold mt-0.5 shrink-0">→</span>
                  <div>
                    <p className="font-bold text-white text-sm">{outcome.label}</p>
                    <p className="text-white/40 text-xs mt-1 leading-relaxed">{outcome.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Capital detail ── */}
      <section id="capital" className="py-20 border-t border-white/[0.07]">
        <div className="container-site">
          <p className="text-xs font-semibold tracking-widest uppercase text-green mb-3">02</p>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-black text-white mb-4 leading-tight">
                {capitalService.title}
              </h2>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                {capitalService.description}
              </p>
              {/* Green quote block matching Private Capital page */}
              <div className="bg-green rounded-2xl p-8">
                <p className="text-black font-bold text-lg leading-snug">
                  &ldquo;Without adequate capital, even the most visionary companies may struggle to realize their full potential.&rdquo;
                </p>
              </div>
            </div>
            <div className="grid gap-3">
              {capitalService.pillars.map((pillar) => (
                <div key={pillar.title} className="bg-[#111] border border-white/[0.08] rounded-xl px-6 py-5">
                  <div className="w-8 h-8 rounded-lg bg-green/10 border border-green/20 flex items-center justify-center mb-3">
                    <span className="text-green text-xs font-black">✦</span>
                  </div>
                  <p className="font-bold text-white mb-2">{pillar.title}</p>
                  <p className="text-white/40 text-sm leading-relaxed">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-white/[0.07]">
        <div className="container-site flex flex-col items-center text-center gap-6">
          <h2 className="text-3xl md:text-4xl font-black text-white max-w-xl leading-tight">
            {c.cta_banner.headline}
          </h2>
          <p className="text-white/50 max-w-sm">{c.cta_banner.subtext}</p>
          <a
            href={c.cta_banner.cta.href}
            className="inline-block border border-white/30 text-white text-sm font-semibold px-8 py-3.5 rounded-full hover:bg-white hover:text-black transition-colors"
          >
            {c.cta_banner.cta.label}
          </a>
        </div>
      </section>
    </div>
  );
}
