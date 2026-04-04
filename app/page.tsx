import homepageData from "@/content/homepage.json";

const c = homepageData;

export default function HomePage() {
  return (
    <div className="bg-black">
      {/* ── Hero ── */}
      <section className="hero-gradient min-h-[85vh] flex items-end pb-20 md:pb-28">
        <div className="container-site">
          <div className="max-w-xl">
            <p className="text-sm font-semibold text-green uppercase tracking-widest mb-6">
              {c.hero.headline_line1}
            </p>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
              {c.hero.subtext}
            </h1>
            <p className="text-base font-medium text-white/50 mb-10">
              {c.hero.subtext_emphasis}
            </p>
            <a
              href={c.hero.cta_primary.href}
              className="inline-block bg-green text-black text-sm font-bold px-8 py-3.5 rounded-full hover:bg-green-dark hover:text-white transition-colors"
            >
              {c.hero.cta_primary.label}
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="border-y border-white/[0.07] py-12">
        <div className="container-site">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {c.stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl md:text-5xl font-black text-white">{stat.value}</p>
                <p className="text-sm text-white/40 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Legacy statement ── */}
      <section className="py-20 md:py-28">
        <div className="container-site">
          <h2 className="text-3xl md:text-5xl font-black text-white max-w-3xl leading-tight">
            {c.capabilities_preview.headline}
          </h2>
          <p className="text-green font-semibold mt-4 text-sm tracking-wide">
            For You, We Are Believers Who Bend the Future
          </p>
        </div>
      </section>

      {/* ── Who we serve ── */}
      <section className="py-16 md:py-20 border-t border-white/[0.07]">
        <div className="container-site">
          <p className="text-xs font-semibold tracking-widest uppercase text-green mb-3">
            {c.who_we_serve.eyebrow}
          </p>
          <h2 className="text-2xl md:text-3xl font-black text-white mb-10 max-w-xl leading-tight">
            {c.who_we_serve.headline}
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {c.who_we_serve.segments.map((seg) => (
              <div key={seg.title} className="bg-[#111] border border-white/[0.08] rounded-2xl p-7">
                <h3 className="text-lg font-bold text-white mb-3">{seg.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{seg.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Capabilities ── */}
      <section className="py-16 md:py-20 border-t border-white/[0.07]">
        <div className="container-site">
          <p className="text-xs font-semibold tracking-widest uppercase text-green mb-3">
            {c.capabilities_preview.eyebrow}
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-8">
            {c.capabilities_preview.services.map((service) => (
              <a
                key={service.title}
                href={service.href}
                className="group bg-green rounded-2xl p-8 flex flex-col gap-4 hover:bg-green-dark transition-colors"
              >
                <h3 className="text-2xl font-black text-black group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                <p className="text-black/70 group-hover:text-white/70 text-sm leading-relaxed transition-colors">
                  {service.description}
                </p>
                <span className="text-sm font-bold text-black group-hover:text-white mt-auto transition-colors">
                  Learn more →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Methodology ── */}
      <section className="py-16 md:py-20 border-t border-white/[0.07]">
        <div className="container-site">
          <p className="text-xs font-semibold tracking-widest uppercase text-green mb-3">
            {c.principles.eyebrow}
          </p>
          <h2 className="text-2xl md:text-3xl font-black text-white mb-10 max-w-xl leading-tight">
            {c.principles.headline}
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {c.principles.items.map((item, i) => (
              <div key={item.title} className="bg-[#111] border border-white/[0.08] rounded-2xl p-6">
                <p className="text-xs font-bold text-green mb-3">0{i + 1}</p>
                <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
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
