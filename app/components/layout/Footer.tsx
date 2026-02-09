import Link from "next/link";
import { Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-white shadow-lg text-black">
      <div className="container xl:px-0 px-4">
        {/* Footer Bottom */}
        <div className="border-t border-primary-foreground/10 py-4 flex flex-col md:flex-row justify-between items-center sm:gap-4 gap-6">
          <div className="flex gap-6 items-center sm:flex-row flex-col sm:gap-10">
            {/* social links */}
            <ul className="flex gap-4 text-sm text-[#606060]">
              {
                socialLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>
                      <link.icon className="w-4 h-4" />
                    </a>
                  </li>
                ))
              }
            </ul>
            <Link href="/" className="jesfin text-[#606060]">Aura Talents</Link>
          </div>
            <p className="text-[#606060] jesfin">
              Made with {" "}
              <a href="#" className="transition-colors duration-300 underline">
                Bakar
              </a>
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
