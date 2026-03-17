import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  resources: [
    { label: "VBS Curriculum", href: "/curriculum" },
    { label: "Sunday School", href: "/curriculum" },
    { label: "Training", href: "/training" },
    { label: "Mobile Apps", href: "/flock-ministries" },
  ],
  company: [
    { label: "Our Approach", href: "#approach" },
    { label: "Our Mission", href: "#mission" },
    { label: "Partner", href: "/partner" },
    { label: "Contact", href: "#contact" },
  ],
  support: [
    { label: "Flock Ministries", href: "/flock-ministries" },
    { label: "Flock Shepherds", href: "/flock-ministries" },
    { label: "FAQs", href: "/flock-ministries#faq" },
    { label: "Give", href: "/partner" },
  ],
};

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#111315", color: "#F0F4F8" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <Image
                src="/images/flock-logo.png"
                alt="Flock Logo"
                width={36}
                height={36}
                className="w-9 h-9"
              />
              <span className="text-xl font-bold tracking-tight text-white">FLOCK</span>
            </Link>
            <p className="text-sm text-[#94A3B8] max-w-xs leading-relaxed">
              Helping churches raise the next generation in faith through VBS
              and Sunday School programs.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-white">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#94A3B8] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-white">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#94A3B8] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-white">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#94A3B8] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#64748B]">
            &copy; {new Date().getFullYear()} Flock Ministry. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-sm text-[#64748B] hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-[#64748B] hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
