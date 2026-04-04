import aboutYouData from "@/content/about-you.json";

const c = aboutYouData;

export const metadata = { title: "About You | Ignatious" };

export default function AboutYouPage() {
  return (
    <div className="bg-black">
      {/* Hero — deep green gradient, large white headline */}
      <section
        className="min-h-[80vh] flex flex-col items-center justify-center text-center py-24 px-6"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(0, 80, 30, 0.95) 0%, #000 60%)" }}
      >
        <span className="inline-block border border-green/40 text-green text-xs font-semibold px-4 py-1.5 rounded-full mb-8">
          {c.hero.subtext.split(".")[0]}
        </span>
        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight max-w-3xl mb-6">
          {c.tagline}
        </h1>
        <p className="text-white/50 text-lg max-w-xl leading-relaxed">
          {c.hero.subtext}
        </p>
      </section>

      {/* Who we work with */}
      <section className="py-20 border-t border-white/[0.07]">
        <div className="container-site">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-10">
            {c.segments.eyebrow}
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {c.segments.items.map((seg) => (
              <div key={seg.title} className="bg-[#111] border border-white/[0.08] rounded-2xl p-7">
                <h3 className="text-lg font-bold text-white mb-3">{seg.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{seg.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What makes a company world-class */}
      <section className="py-20 border-t border-white/[0.07]">
        <div className="container-site">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-10">
            {c.world_class.headline}
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {c.world_class.items.map((item, i) => (
              <div key={item.title} className="bg-[#111] border border-white/[0.08] rounded-2xl p-6">
                <p className="text-xs font-bold text-green mb-3">0{i + 1}</p>
                <h3 className="font-bold text-white mb-2 text-sm">{item.title}</h3>
                <p className="text-white/40 text-xs leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you get — 3 icon cards matching screenshot */}
      <section className="py-20 border-t border-white/[0.07]">
        <div className="container-site">
          <div className="grid sm:grid-cols-3 gap-4 max-w-2xl">
            {["A clear vision", "An ambition to scale", "Real traction"].map((label) => (
              <div key={label} className="bg-[#111] border border-white/[0.08] rounded-2xl p-8 flex flex-col items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-green/10 border border-green/20 flex items-center justify-center">
                  <span className="text-green text-base font-black">✦</span>
                </div>
                <p className="font-semibold text-white text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you get detail */}
      <section className="py-16 border-t border-white/[0.07]">
        <div className="container-site">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-10">
            {c.what_you_get.headline}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {c.what_you_get.items.map((item) => (
              <div key={item.title} className="bg-[#111] border border-white/[0.08] rounded-2xl p-7">
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{item.description}</p>
              </div>
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
