import aboutData from "@/content/about.json";

const c = aboutData;

export const metadata = {
  title: "About Us | Ignatious",
};

export default function AboutPage() {
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
          <p className="text-xl text-gray-500 leading-relaxed max-w-2xl">
            {c.hero.subtext}
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="container-site">
          <p className="text-xs font-semibold tracking-widest uppercase text-green mb-3">
            {c.mission.eyebrow}
          </p>
          <div className="grid md:grid-cols-2 gap-12 mt-6">
            <h2 className="text-3xl font-black text-navy leading-tight">
              {c.mission.headline}
            </h2>
            <div className="space-y-5">
              {c.mission.paragraphs.map((para, i) => (
                <p key={i} className="text-gray-500 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container-site">
          <p className="text-xs font-semibold tracking-widest uppercase text-green mb-3">
            {c.principles.eyebrow}
          </p>
          <h2 className="text-3xl font-black text-navy mb-12 leading-tight">
            {c.principles.headline}
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {c.principles.items.map((item) => (
              <div
                key={item.title}
                className="bg-gray-50 border border-gray-200 rounded-xl p-7"
              >
                <h3 className="text-lg font-bold text-navy mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy">
        <div className="container-site text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            {c.cta_banner.headline}
          </h2>
          <p className="text-white/60 mb-8 max-w-md mx-auto">{c.cta_banner.subtext}</p>
          <a
            href={c.cta_banner.cta.href}
            className="inline-block bg-green text-white text-sm font-bold px-8 py-3.5 rounded-full hover:bg-green-dark transition-colors"
          >
            {c.cta_banner.cta.label}
          </a>
        </div>
      </section>
    </div>
  );
}
