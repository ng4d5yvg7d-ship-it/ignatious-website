import Link from "next/link";

const footerLinks = [
  { label: "About You", href: "/about-you" },
  { label: "About Us", href: "/about" },
  { label: "Capabilities", href: "/services" },
  { label: "Team", href: "/team" },
  { label: "Transactions", href: "/transactions" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-site py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-white font-black text-2xl tracking-tight hover:text-blue transition-colors"
            >
              Ignatious
            </Link>
            <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-xs">
              Delivering extraordinary M&A and private capital outcomes for world-changing technology companies.
            </p>
            <div className="flex gap-4 mt-5">
              <a
                href="https://www.linkedin.com/company/ignatious"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors text-sm"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/ignatious"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors text-sm"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">
              Navigation
            </p>
            <nav className="flex flex-col gap-2.5">
              {footerLinks.map((link) => (
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

          {/* Legal */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">
              Legal
            </p>
            <div className="flex flex-col gap-2.5">
              <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Terms of Use</a>
              <a href="https://finra.org/investors/have-problem/investor-complaint-center/brokercheck" target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 hover:text-white transition-colors">FINRA BrokerCheck</a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 space-y-3">
          <p className="text-xs text-white/40 leading-relaxed">
            Securities are offered through Finalis Securities LLC Member FINRA / SIPC. Ignatious is not a registered broker-dealer, and Finalis Securities LLC and Ignatious are separate, unaffiliated entities.
          </p>
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Ignatious. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
