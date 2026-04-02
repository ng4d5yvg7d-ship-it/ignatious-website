import teamData from "@/content/team.json";

const c = teamData;

export const metadata = {
  title: "Team | Ignatious",
};

export default function TeamPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-white pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="container-site max-w-4xl">
          <p className="text-xs font-semibold tracking-widest uppercase text-blue mb-5">
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

      {/* Senior Partners */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="container-site">
          <p className="text-xs font-semibold tracking-widest uppercase text-blue mb-3">
            Senior Partners
          </p>
          <div className="space-y-8 mt-8">
            {c.senior_partners.map((member) => (
              <div
                key={member.id}
                className="bg-white border border-gray-200 rounded-xl p-8 grid md:grid-cols-3 gap-8"
              >
                {/* Photo placeholder */}
                <div className="flex flex-col gap-4">
                  <div className="w-20 h-20 rounded-full bg-blue-light flex items-center justify-center">
                    <span className="text-blue text-2xl font-black">
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <h2 className="text-xl font-black text-navy">{member.name}</h2>
                    <p className="text-blue text-sm font-semibold mt-1">{member.title}</p>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <p className="text-gray-500 leading-relaxed mb-4">{member.bio}</p>
                  {"education" in member && (
                    <p className="text-xs text-gray-400 border-t border-gray-100 pt-4">
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
      <section className="py-16 bg-white">
        <div className="container-site">
          <p className="text-xs font-semibold tracking-widest uppercase text-blue mb-6">
            Junior Partners
          </p>
          <div className="flex flex-wrap gap-3">
            {c.junior_partners.map((name) => (
              <span
                key={name}
                className="bg-gray-50 border border-gray-200 text-navy text-sm font-medium px-5 py-2.5 rounded-full"
              >
                {name}
              </span>
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
            className="inline-block bg-blue text-white text-sm font-bold px-8 py-3.5 rounded-full hover:bg-blue-dark transition-colors"
          >
            {c.cta_banner.cta.label}
          </a>
        </div>
      </section>
    </div>
  );
}
