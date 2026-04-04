import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About You", href: "/about-you" },
  { label: "Capabilities", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Use", href: "#" },
  { label: "Finalis Privacy Policy", href: "#" },
  { label: "Finalis Business Continuity Plan", href: "#" },
  { label: "FINRA BrokerCheck", href: "https://finra.org/investors/have-problem/investor-complaint-center/brokercheck" },
];

export default function Footer() {
  return (
    <footer className="bg-black overflow-hidden">
      {/* Dark card */}
      <div className="bg-[#111111] rounded-t-3xl mx-4 px-10 py-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-10">
          {/* Logo + tagline */}
          <div className="shrink-0">
            <Link href="/" aria-label="Ignatious home">
              <Image src="/images/logo.svg" alt="Ignatious" width={108} height={22} />
            </Link>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="border-t border-white/[0.08] pt-6 space-y-4">
          <p className="text-xs text-white/40 leading-relaxed max-w-3xl">
            Securities are offered through Finalis Securities LLC Member FINRA / SIPC. Ignatious is not a registered broker-dealer, and Finalis Securities LLC and Ignatious are separate, unaffiliated entities. ignatious.com is a website operated by Ignatious, a privately held Delaware limited liability company. Ignatious provides Financial and strategic advisory services.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-xs text-white/40 hover:text-white/70 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* IGNATIOUS watermark */}
      <div className="overflow-hidden -mt-2 pb-0 select-none pointer-events-none" aria-hidden>
        <p className="text-[18vw] font-black text-white/[0.03] leading-none tracking-tight text-center whitespace-nowrap">
          IGNATIOUS
        </p>
      </div>
    </footer>
  );
}
