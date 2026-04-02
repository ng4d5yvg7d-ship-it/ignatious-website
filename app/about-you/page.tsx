import aboutYouData from "@/content/about-you.json";

const c = aboutYouData;

export const metadata = {
  title: "About You | Ignatious",
};

export default function AboutYouPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-white pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="container-site max-w-4xl">
          <p className="text-xs font-semibold tracking-widest uppercase text-green mb-5">
            {c.hero.eyebrow}
          </p>
          <h1 className="text-4xl md:text-6xl font-black text-navy leading-tight mb-6">
            {c.hero.headline}
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mb-6">
            {c.hero.subtext}
          </p>
          <p className="text-2xl font-black text-green">{c.tagline}</p>
        </div>
      </section>

      {/* Who we work with */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="container-site">
          <p className="text-xs font-semibold tracking-widest uppercase text-green mb-3">
            {c.segments.eyebrow}
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {c.segments.items.map((seg) => (
              <div
                key={seg.title}
                className="bg-white border border-gray-200 rounded-xl p-8"
              >
                <h3 className="text-xl font-bold text-navy mb-3">{seg.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{seg.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* World-class characteristics */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container-site">
          <p className="text-xs font-semibold tracking-widest uppercase text-green mb-3">
            {c.world_class.eyebrow}
          </p>
          <h2 className="text-3xl font-black text-navy mb-12 leading-tight">
            {c.world_class.headline}
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {c.world_class.items.map((item, i) => (
              <div
                key={item.title}
                className="bg-green-light border border-green/20 rounded-xl p-6"
              >
                <p className="text-xs font-bold text-green mb-2">0{i + 1}</p>
                <h3 className="font-bold text-navy mb-2 text-sm">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="py-20 md:py-24 bg-navy">
        <div className="container-site">
          <p className="text-xs font-semibold tracking-widest uppercase text-green mb-3">
            {c.what_you_get.eyebrow}
          </p>
          <h2 className="text-3xl font-black text-white mb-12 leading-tight">
            {c.what_you_get.headline}
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {c.what_you_get.items.map((item) => (
              <div
                key={item.title}
                className="border border-white/10 rounded-xl p-7"
              >
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green">
        <div className="container-site text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            {c.cta_banner.headline}
          </h2>
          <p className="text-white/80 mb-8 max-w-md mx-auto">{c.cta_banner.subtext}</p>
          <a
            href={c.cta_banner.cta.href}
            className="inline-block bg-white text-green text-sm font-bold px-8 py-3.5 rounded-full hover:bg-gray-100 transition-colors"
          >
            {c.cta_banner.cta.label}
          </a>
        </div>
      </section>
    </div>
  );
}
