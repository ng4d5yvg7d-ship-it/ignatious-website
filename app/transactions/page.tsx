import transactionsData from "@/content/transactions.json";

const c = transactionsData;

export const metadata = {
  title: "Selected Transactions | Ignatious",
};

export default function TransactionsPage() {
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

      {/* Transactions */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="container-site">
          <div className="grid md:grid-cols-2 gap-6">
            {c.transactions.map((txn) => (
              <div
                key={txn.id}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden"
              >
                {/* Card header */}
                <div className="bg-navy px-7 py-5 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase text-blue mb-1">
                      {txn.type}
                    </p>
                    <h2 className="text-xl font-black text-white">
                      {txn.company}
                    </h2>
                    {txn.acquirer !== "Undisclosed Strategic" && txn.acquirer !== "Undisclosed Private Equity" && (
                      <p className="text-white/50 text-sm">Acquired by {txn.acquirer}</p>
                    )}
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-white/40 uppercase tracking-wide">
                      {txn.sector}
                    </span>
                    {txn.value !== "Undisclosed" && (
                      <p className="text-blue font-bold text-sm mt-1">{txn.value}</p>
                    )}
                  </div>
                </div>

                {/* Card body */}
                <div className="px-7 py-6">
                  <p className="text-sm font-semibold text-navy mb-3 italic">
                    &ldquo;{txn.tagline}&rdquo;
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">
                    {txn.description}
                  </p>
                  {txn.outcomes_seller.length > 0 && (
                    <div>
                      <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-3">
                        Outcomes
                      </p>
                      <ul className="space-y-1.5">
                        {txn.outcomes_seller.map((outcome) => (
                          <li
                            key={outcome}
                            className="flex items-start gap-2 text-sm text-gray-600"
                          >
                            <span className="text-blue font-bold mt-0.5">✓</span>
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Historical highlight */}
      <section className="py-20 bg-navy">
        <div className="container-site">
          <p className="text-xs font-semibold tracking-widest uppercase text-blue mb-3">
            {c.historical_highlight.eyebrow}
          </p>
          <h2 className="text-3xl font-black text-white mb-10 leading-tight max-w-2xl">
            {c.historical_highlight.headline}
          </h2>
          <div className="flex flex-wrap gap-3">
            {c.historical_highlight.transactions.map((txn) => (
              <span
                key={txn}
                className="bg-white/5 border border-white/10 text-white/70 text-sm font-medium px-5 py-2.5 rounded-full"
              >
                {txn}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue">
        <div className="container-site text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            {c.cta_banner.headline}
          </h2>
          <p className="text-white/80 mb-8 max-w-md mx-auto">{c.cta_banner.subtext}</p>
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
