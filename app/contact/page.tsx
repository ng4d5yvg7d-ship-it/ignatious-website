import contactData from "@/content/contact.json";

const c = contactData;

export const metadata = {
  title: "Let's Connect | Ignatious",
};

export default function ContactPage() {
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

      {/* Form */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="container-site max-w-2xl">
          <h2 className="text-2xl font-black text-navy mb-2">{c.form.headline}</h2>
          <p className="text-gray-500 text-sm mb-8">{c.form.subtext}</p>

          <form className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-navy mb-2">
                  {c.form.fields.name}
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-200 bg-white px-4 py-3 text-sm text-navy rounded-lg focus:outline-none focus:border-green transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-navy mb-2">
                  {c.form.fields.company}
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-200 bg-white px-4 py-3 text-sm text-navy rounded-lg focus:outline-none focus:border-green transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-navy mb-2">
                {c.form.fields.email}
              </label>
              <input
                type="email"
                className="w-full border border-gray-200 bg-white px-4 py-3 text-sm text-navy rounded-lg focus:outline-none focus:border-green transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-navy mb-2">
                {c.form.fields.phone}
              </label>
              <input
                type="tel"
                className="w-full border border-gray-200 bg-white px-4 py-3 text-sm text-navy rounded-lg focus:outline-none focus:border-green transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-navy mb-2">
                {c.form.fields.enquiry_type}
              </label>
              <select className="w-full border border-gray-200 bg-white px-4 py-3 text-sm text-navy rounded-lg focus:outline-none focus:border-green transition-colors">
                <option value="">Select...</option>
                {c.form.fields.enquiry_types.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-navy mb-2">
                {c.form.fields.message}
              </label>
              <textarea
                rows={5}
                className="w-full border border-gray-200 bg-white px-4 py-3 text-sm text-navy rounded-lg focus:outline-none focus:border-green transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green text-white text-sm font-bold py-3.5 rounded-full hover:bg-green-dark transition-colors"
            >
              {c.form.fields.submit}
            </button>
          </form>

          <p className="text-xs text-gray-400 mt-8 leading-relaxed">{c.disclaimer}</p>
        </div>
      </section>
    </div>
  );
}
