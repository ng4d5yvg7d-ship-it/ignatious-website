import contactData from "@/content/contact.json";

const c = contactData;

export const metadata = { title: "Let's Connect | Ignatious" };

export default function ContactPage() {
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

      {/* Form */}
      <section className="py-20 border-t border-white/[0.07]">
        <div className="container-site max-w-2xl">
          <h2 className="text-2xl font-black text-white mb-2">{c.form.headline}</h2>
          <p className="text-white/40 text-sm mb-8">{c.form.subtext}</p>

          <form className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-white/60 mb-2">
                  {c.form.fields.name}
                </label>
                <input
                  type="text"
                  className="w-full bg-[#111] border border-white/[0.08] px-4 py-3 text-sm text-white rounded-xl focus:outline-none focus:border-green transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-white/60 mb-2">
                  {c.form.fields.company}
                </label>
                <input
                  type="text"
                  className="w-full bg-[#111] border border-white/[0.08] px-4 py-3 text-sm text-white rounded-xl focus:outline-none focus:border-green transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-white/60 mb-2">
                {c.form.fields.email}
              </label>
              <input
                type="email"
                className="w-full bg-[#111] border border-white/[0.08] px-4 py-3 text-sm text-white rounded-xl focus:outline-none focus:border-green transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-white/60 mb-2">
                {c.form.fields.phone}
              </label>
              <input
                type="tel"
                className="w-full bg-[#111] border border-white/[0.08] px-4 py-3 text-sm text-white rounded-xl focus:outline-none focus:border-green transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-white/60 mb-2">
                {c.form.fields.enquiry_type}
              </label>
              <select className="w-full bg-[#111] border border-white/[0.08] px-4 py-3 text-sm text-white rounded-xl focus:outline-none focus:border-green transition-colors">
                <option value="">Select...</option>
                {c.form.fields.enquiry_types.map((type) => (
                  <option key={type} value={type} className="bg-[#111]">{type}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-white/60 mb-2">
                {c.form.fields.message}
              </label>
              <textarea
                rows={5}
                className="w-full bg-[#111] border border-white/[0.08] px-4 py-3 text-sm text-white rounded-xl focus:outline-none focus:border-green transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green text-black text-sm font-bold py-3.5 rounded-full hover:bg-green-dark hover:text-white transition-colors"
            >
              {c.form.fields.submit}
            </button>
          </form>

          <p className="text-xs text-white/25 mt-8 leading-relaxed">{c.disclaimer}</p>
        </div>
      </section>
    </div>
  );
}
