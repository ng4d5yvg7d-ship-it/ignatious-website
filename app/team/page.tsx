import teamData from "@/content/team.json";

const c = teamData;

export const metadata = { title: "Team | Ignatious" };

export default function TeamPage() {
  return (
    <div className="bg-black">
      {/* Hero */}
      <section className="hero-gradient py-24 md:py-32">
        <div className="container-site max-w-4xl">
          <p className="text-xs font-semibold tracking-widest uppercase text-green mb-5">
            {c.hero.eyebrow}
          </p>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
            {c.hero.headline}
          </h1>
          <p className="text-lg text-white/50 leading-relaxed max-w-2xl">
            {c.hero.subtext}
          </p>
        </div>
      </section>

      {/* Senior Partners */}
      <section className="py-20 border-t border-white/[0.07]">
        <div className="container-site">
          <p className="text-xs font-semibold tracking-widest uppercase text-green mb-8">
            Senior Partners
          </p>
          <div className="space-y-5">
            {c.senior_partners.map((member) => (
              <div key={member.id} className="bg-[#111] border border-white/[0.08] rounded-2xl p-8 grid md:grid-cols-4 gap-8">
                <div className="flex flex-col gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-green/10 border border-green/20 flex items-center justify-center">
                    <span className="text-green text-xl font-black">
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <h2 className="text-lg font-black text-white">{member.name}</h2>
                    <p className="text-green text-xs font-semibold mt-1">{member.title}</p>
                  </div>
                </div>
                <div className="md:col-span-3">
                  <p className="text-white/50 leading-relaxed text-sm mb-4">{member.bio}</p>
                  {"education" in member && (
                    <p className="text-xs text-white/25 border-t border-white/[0.07] pt-4">
                      {(member as { education?: string }).education}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Junior Partners */}
      <section className="py-16 border-t border-white/[0.07]">
        <div className="container-site">
          <p className="text-xs font-semibold tracking-widest uppercase text-green mb-6">
            Junior Partners
          </p>
          <div className="flex flex-wrap gap-3">
            {c.junior_partners.map((name) => (
              <span key={name} className="bg-[#111] border border-white/[0.08] text-white/70 text-sm font-medium px-5 py-2.5 rounded-full">
                {name}
              </span>
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
            className="inline-block bg-green text-black text-sm font-bold px-8 py-3.5 rounded-full hover:bg-green-dark hover:text-white transition-colors"
          >
            {c.cta_banner.cta.label}
          </a>
        </div>
      </section>
    </div>
  );
}
