import transactionsData from "@/content/transactions.json";

const c = transactionsData;

export const metadata = { title: "Selected Transactions | Ignatious" };

export default function TransactionsPage() {
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

      {/* Case Studies */}
      <section className="py-20 border-t border-white/[0.07]">
        <div className="container-site">
          <p className="text-xs font-semibold tracking-widest uppercase text-green mb-8">
            Case Studies
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {c.transactions.map((txn) => (
              <div key={txn.id} className="bg-[#111] border border-white/[0.08] rounded-2xl overflow-hidden flex flex-col">
                {/* Card header */}
                <div className="px-7 pt-7 pb-5 border-b border-white/[0.07]">
                  <p className="text-xs font-semibold tracking-widest uppercase text-green mb-2">
                    {txn.type}
                  </p>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-xl font-black text-white">{txn.company}</h2>
                      {txn.acquirer !== "Undisclosed Strategic" && txn.acquirer !== "Undisclosed Private Equity" && (
                        <p className="text-white/40 text-sm mt-1">Acquired by {txn.acquirer}</p>
                      )}
                    </div>
                    {txn.value !== "Undisclosed" && (
                      <span className="text-green font-bold text-sm shrink-0">{txn.value}</span>
                    )}
                  </div>
                </div>

                {/* Card body */}
                <div className="px-7 py-6 flex flex-col gap-4 flex-1">
                  <p className="text-white/70 text-sm italic">&ldquo;{txn.tagline}&rdquo;</p>
                  <p className="text-white/40 text-sm leading-relaxed">{txn.description}</p>
                  {txn.outcomes_seller.length > 0 && (
                    <div className="mt-auto pt-4 border-t border-white/[0.07]">
                      <p className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-3">
                        Outcomes
                      </p>
                      <ul className="space-y-1.5">
                        {txn.outcomes_seller.slice(0, 3).map((outcome) => (
                          <li key={outcome} className="flex items-start gap-2 text-sm text-white/50">
                            <span className="text-green font-bold mt-0.5 shrink-0">✓</span>
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="flex items-center justify-between mt-auto pt-2">
                    <span className="text-xs text-white/25">{txn.sector}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Historical highlight */}
      <section className="py-20 border-t border-white/[0.07]">
        <div className="container-site">
          <p className="text-xs font-semibold tracking-widest uppercase text-green mb-3">
            {c.historical_highlight.eyebrow}
          </p>
          <h2 className="text-2xl md:text-3xl font-black text-white mb-10 leading-tight max-w-2xl">
            {c.historical_highlight.headline}
          </h2>
          <div className="flex flex-wrap gap-3">
            {c.historical_highlight.transactions.map((txn) => (
              <span key={txn} className="bg-[#111] border border-white/[0.08] text-white/50 text-sm font-medium px-5 py-2.5 rounded-full">
                {txn}
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
            className="inline-block border border-white/30 text-white text-sm font-semibold px-8 py-3.5 rounded-full hover:bg-white hover:text-black transition-colors"
          >
            {c.cta_banner.cta.label}
          </a>
        </div>
      </section>
    </div>
  );
}
