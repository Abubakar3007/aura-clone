"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdown, setIsDropdown] = useState(false);

  const pathname = usePathname();
  const isHomePage = pathname === "/";

  /* ---------- SCROLL HANDLER ---------- */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---------- CLOSE MOBILE MENU ON ROUTE CHANGE ---------- */
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Models", href: "/models" },
    { name: "AuraaEdge", href: "/auraa-edge" },
    { name: "Contact", href: "/contact" },
    { name: "Join Us", href: "/join" },
  ];

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav
        className={`
          w-full z-50
          transition-all duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]
          ${isScrolled
            ? "lg:fixed top-0 bg-white shadow-sm translate-y-0 opacity-100"
            : isHomePage
              ? "absolute top-0 bg-transparent translate-y-0 opacity-100"
              : "relative bg-white"}
        `}
      >
        <div className="container xl:px-0 px-6">
          <div
            className={`
              flex lg:flex-col items-center justify-between lg:justify-center ${isHomePage ? 'gap-3' : 'gap-6'}
              transition-all duration-300
              ${isScrolled ? "py-3"
                : isHomePage ? 'lg:py-6 py-4'
                  : 'lg:py-8 py-5'}
            `}
          >

            {
              !isScrolled ? (
                <Link
                  href="/"
                  className={`uppercase text-center montserrat leading-tight transition-colors duration-300 text-xl
                ${!isHomePage
                      ? "text-black md:text-4xl"
                      : "text-white md:text-5xl"}
              `}
                >
                  AURAA
                  {!isHomePage && (
                    <>
                      <br />
                      <span className="lg:text-3xl text-base tracking-wider">Talents</span>
                    </>
                  )}
                </Link>
              ) : (null)
            }

            {/* ---------- DESKTOP NAV ---------- */}
            <ul className="hidden lg:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <li key={index} className="relative group">
                  <Link
                    href={link.href}
                    className={`
                      montserrat text-sm relative transition-all duration-200
                      group-hover:text-gray-300
                      ${isScrolled || !isHomePage
                        ? "text-black after:bg-black"
                        : "text-white after:bg-white"}
                      after:absolute after:-bottom-2 after:left-0
                      after:h-[1px] after:w-0 after:transition-all after:duration-300
                      group-hover:after:w-full
                      ${pathname === link.href && "after:w-full"}
                    `}
                  >
                    {link.name}
                    {link.name === "Models" && (
                      <ChevronDown className="w-3 h-3 inline-block ml-1 transition-transform duration-200 group-hover:rotate-180" />
                    )}
                  </Link>

                  {/* ---------- DROPDOWN ---------- */}
                  {link.name === "Models" && (
                    <ul
                      className="
                        absolute top-full left-0 w-40 montserrat
                        bg-background border border-border
                        rounded-[4px] shadow-lg z-50 py-2
                        opacity-0 invisible
                        transition-opacity duration-200
                        group-hover:opacity-100 group-hover:visible
                      "
                    >
                      <li>
                        <Link
                          href="/models/in-town"
                          className="block px-4 py-2 text-sm text-black hover:text-gray-300 transition"
                        >
                          In Town
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/models/direct-bookings"
                          className="block px-4 py-2 text-sm text-black hover:text-gray-300 transition"
                        >
                          Direct Bookings
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            {/* ---------- MOBILE MENU BUTTON ---------- */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`
                lg:hidden p-2 transition-colors duration-300
                ${isScrolled || !isHomePage
                  ? "text-foreground"
                  : "text-primary-foreground"}
              `}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`
    fixed inset-0 z-50 bg-background lg:hidden
    transition-opacity duration-500
    ${isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"}
  `}
      >
        <button className="absolute top-4 z-10 right-4" onClick={()=>setIsOpen(false)}><X/></button>
        <div className="flex flex-col items-center justify-center h-full gap-4">

          {navLinks.map((link, index) => {
            const isModels = link.name === "Models";

            return (
              <div key={index} className="w-full text-center">

                {/* MAIN LINK */}
                {isModels ? (
                  <button
                    onClick={() => setIsDropdown((prev) => !prev)}
                    className="w-full flex items-center justify-center gap-2 relative montserrat text-foreground text-2xl"
                  >
                    <span>{link.name}</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 absolute right-4 top-2
                  ${isDropdown ? "rotate-180" : ""}`}
                    />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className="montserrat text-foreground text-2xl block relative"
                  >
                    {link.name}
                  </Link>
                )}

                {/* MODELS SUBMENU */}
                {isModels && isDropdown && (
                  <div className="mt-3 flex flex-col gap-2 montserrat">
                    <Link
                      href="/models/in-town"
                      className="text-xl transition text-black"
                      onClick={() => setIsOpen(false)}
                    >
                      In Town
                    </Link>

                    <Link
                      href="/models/direct-bookings"
                      className="text-xl transition text-black"
                      onClick={() => setIsOpen(false)}
                    >
                      Direct Bookings
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </>
  );
};

export default Navbar;