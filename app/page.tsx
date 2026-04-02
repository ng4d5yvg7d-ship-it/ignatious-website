import homepageData from "@/content/homepage.json";

const c = homepageData;

export default function HomePage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="bg-white pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="container-site">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold text-blue uppercase tracking-widest mb-5">
              {c.hero.headline_line1}
            </p>
            <h1 className="text-6xl md:text-8xl font-black text-navy leading-none tracking-tight mb-8">
              {c.hero.headline_line2}
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-2xl mb-3">
              {c.hero.subtext}
            </p>
            <p className="text-lg font-semibold text-navy mb-10">
              {c.hero.subtext_emphasis}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={c.hero.cta_primary.href}
                className="inline-block bg-blue text-white text-sm font-semibold px-8 py-3.5 rounded-full hover:bg-blue-dark transition-colors"
              >
                {c.hero.cta_primary.label}
              </a>
              <a
                href={c.hero.cta_secondary.href}
                className="inline-block border-2 border-navy text-navy text-sm font-semibold px-8 py-3.5 rounded-full hover:bg-navy hover:text-white transition-colors"
              >
                {c.hero.cta_secondary.label}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="bg-navy py-12">
        <div className="container-site">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {c.stats.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <p className="text-4xl font-black text-white">{stat.value}</p>
                <p className="text-sm text-white/60 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who we serve ── */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container-site">
          <p className="text-xs font-semibold tracking-widest uppercase text-blue mb-3">
            {c.who_we_serve.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-navy max-w-2xl mb-12 leading-tight">
            {c.who_we_serve.headline}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {c.who_we_serve.segments.map((seg) => (
              <div
                key={seg.title}
                className="bg-white rounded-xl p-8 border border-gray-200"
              >
                <h3 className="text-xl font-bold text-navy mb-3">{seg.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{seg.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Capabilities preview ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-site">
          <p className="text-xs font-semibold tracking-widest uppercase text-blue mb-3">
            {c.capabilities_preview.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-navy max-w-3xl mb-12 leading-tight">
            {c.capabilities_preview.headline}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {c.capabilities_preview.services.map((service) => (
              <a
                key={service.title}
                href={service.href}
                className="group bg-gray-50 hover:bg-blue-light border border-gray-200 hover:border-blue rounded-xl p-8 transition-all"
              >
                <h3 className="text-2xl font-bold text-navy mb-3 group-hover:text-blue transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                <span className="inline-block mt-5 text-sm font-semibold text-blue">
                  Learn more →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Methodology ── */}
      <section className="py-20 md:py-28 bg-navy">
        <div className="container-site">
          <p className="text-xs font-semibold tracking-widest uppercase text-blue mb-3">
            {c.principles.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white max-w-2xl mb-12 leading-tight">
            {c.principles.headline}
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {c.principles.items.map((item, i) => (
              <div key={item.title} className="border border-white/10 rounded-xl p-6">
                <p className="text-xs font-semibold text-blue mb-3">0{i + 1}</p>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA banner ── */}
      <section className="py-20 md:py-24 bg-blue">
        <div className="container-site text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            {c.cta_banner.headline}
          </h2>
          <p className="text-white/80 mb-8 max-w-md mx-auto">
            {c.cta_banner.subtext}
          </p>
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
