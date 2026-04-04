import aboutData from "@/content/about.json";

const c = aboutData;

export const metadata = { title: "About Us | Ignatious" };

export default function AboutPage() {
  return (
    <div className="bg-black">
      {/* Hero — green headline, matching Webflow */}
      <section className="hero-gradient min-h-[60vh] flex items-center py-24 md:py-32">
        <div className="container-site max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-black text-green leading-tight mb-6">
            {c.hero.headline}
          </h1>
          <p className="text-lg text-white/60 leading-relaxed max-w-2xl">
            {c.hero.subtext}
          </p>
        </div>
      </section>

      {/* Our Team section */}
      <section className="py-20 border-t border-white/[0.07]">
        <div className="container-site">
          <p className="text-xs font-semibold tracking-widest uppercase text-green mb-2">
            {c.mission.eyebrow}
          </p>
          <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
            {c.mission.headline}
          </h2>
          <p className="text-white/50 text-sm mb-10 max-w-2xl">
            We don&apos;t succeed unless you succeed. Our team is your team.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {c.principles.items.map((item) => (
              <div key={item.title} className="bg-[#111] border border-white/[0.08] rounded-2xl p-6">
                <div className="w-10 h-10 rounded-xl bg-green/10 border border-green/20 flex items-center justify-center mb-4">
                  <span className="text-green text-lg font-black">✦</span>
                </div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission paragraphs */}
      <section className="py-16 border-t border-white/[0.07]">
        <div className="container-site grid md:grid-cols-2 gap-12 items-start">
          <h2 className="text-2xl md:text-3xl font-black text-white leading-tight">
            An Insatiable Pull to Do Something Significant
          </h2>
          <div className="space-y-5">
            {c.mission.paragraphs.map((para, i) => (
              <p key={i} className="text-white/50 leading-relaxed text-sm">
                {para}
              </p>
            ))}
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
