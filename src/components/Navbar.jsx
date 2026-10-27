
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Mail,
  Phone,
  ArrowUpRight,
} from "lucide-react";

const products = [
  {
    name: "AISIN synTECH+ 5W-40",
    path: "/product/syntech-5w40",
  },
  {
    name: "econTECH+ Semi Synthetic 5W-30",
    path: "/product/econtech-5w30",
  },
  {
    name: "synTECH+ Fully Synthetic 5W-30",
    path: "/product/syntech-5w30",
  },
  {
    name: "econTECH 20W-50 API SL",
    path: "/product/econtech-20w50",
  },
  {
    name: "econTECH 15W-40 API CI4 / SL",
    path: "/product/econtech-15w40",
  },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [navbarHidden, setNavbarHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;
    const scrollThreshold = 8;

    const updateNavbar = () => {
      const currentScrollY = Math.max(0, window.scrollY);
      const difference = currentScrollY - lastScrollY;

      if (currentScrollY <= 12) {
        setNavbarHidden(false);
        lastScrollY = currentScrollY;
      } else if (Math.abs(difference) >= scrollThreshold) {
        if (!mobileMenuOpen) {
          setNavbarHidden(difference > 0);
        }
        lastScrollY = currentScrollY;
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateNavbar);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setProductsOpen(false);
  };

  return (
    <>
      <header
        data-navbar
        className={`sticky top-0 z-50 w-full transition-transform duration-300 ease-in-out ${
          navbarHidden && !mobileMenuOpen
            ? "-translate-y-full"
            : "translate-y-0"
        }`}
      >
        {/* Top Contact Bar */}
        <div className="bg-[#1B1930] text-white">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-5 gap-y-2 px-4 py-2 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-xs">
              <span className="h-2 w-2 rounded-full bg-[#D9A441]" />

              <span className="font-semibold tracking-wide text-[#D9A441]">
                Product Inquiries
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
              <a
                href="mailto:sales@aisinask.co.in "
                className="flex items-center gap-2 transition-colors duration-200 hover:text-[#D9A441]"
              >
                <Mail size={14} className="text-[#D9A441]" />
                <span>sales@aisinask.co.in </span>
              </a>

              <a
                href="tel:0124-4055896"
                className="flex items-center gap-2 transition-colors duration-200 hover:text-[#D9A441]"
              >
                <Phone size={14} className="text-[#D9A441]" />
                <span>0124-4055896</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="relative bg-[#25223F] text-white shadow-lg">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            {/* AISIN Brand */}
            <a
              href="/"
              aria-label="AISIN Home"
              onClick={closeMobileMenu}
              className="group flex shrink-0 items-center gap-3"
            >
              <img
                src="/image.png"
                alt="AISIN"
                className="h-9 w-auto object-contain sm:h-10"
              />

              <span className="hidden h-9 w-px bg-white/20 sm:block" />

              <span className="hidden text-[10px] font-medium uppercase leading-relaxed tracking-[0.18em] text-white/70 sm:block">
                Automotive
                <br />
                Lubricants
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-6 lg:flex xl:gap-8">
              <a
                href="/"
                className="text-sm font-medium transition-colors duration-200 hover:text-[#D9A441]"
              >
                Home
              </a>

              <a
                href="/#about"
                className="text-sm font-medium transition-colors duration-200 hover:text-[#D9A441]"
              >
                About AISIN
              </a>

              {/* Products Dropdown */}
              <div className="group relative">
                <button
                  type="button"
                  aria-haspopup="true"
                  className="flex items-center gap-1.5 py-3 text-sm font-medium transition-colors duration-200 hover:text-[#D9A441]"
                >
                  Products

                  <ChevronDown
                    size={15}
                    className="transition-transform duration-200 group-hover:rotate-180"
                  />
                </button>

                <div className="invisible absolute left-0 top-full z-50 w-80 translate-y-2 rounded-lg border border-gray-100 bg-white py-2 text-[#25223F] opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {products.map((product) => (
                    <a
                      key={product.path}
                      href={product.path}
                      className="flex items-center justify-between gap-3 px-5 py-3 text-sm transition-colors hover:bg-gray-50 hover:text-[#4036AD]"
                    >
                      <span>{product.name}</span>
                      <ArrowUpRight size={15} className="shrink-0" />
                    </a>
                  ))}
                </div>
              </div>

              <a
                href="/#technology"
                className="text-sm font-medium transition-colors duration-200 hover:text-[#D9A441]"
              >
                Technology
              </a>

              <a
                href="/#applications"
                className="text-sm font-medium transition-colors duration-200 hover:text-[#D9A441]"
              >
                Applications
              </a>

              <a
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-md bg-[#D9A441] px-5 py-3 text-sm font-bold text-[#1B1930] transition-all duration-200 hover:bg-white"
              >
                Enquire Now
                <ArrowUpRight size={16} />
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              aria-label={
                mobileMenuOpen ? "Close navigation" : "Open navigation"
              }
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((previous) => !previous)}
              className="flex h-10 w-10 items-center justify-center rounded-md border border-white/20 transition-colors hover:border-[#D9A441] hover:text-[#D9A441] lg:hidden"
            >
              {mobileMenuOpen ? <X size={23} /> : <Menu size={23} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="absolute left-0 top-full z-50 max-h-[calc(100vh-100px)] w-full overflow-y-auto border-t border-white/10 bg-[#25223F] px-5 pb-6 shadow-xl lg:hidden">
              <a
                href="/"
                onClick={closeMobileMenu}
                className="block border-b border-white/10 py-4 text-sm font-medium transition-colors hover:text-[#D9A441]"
              >
                Home
              </a>

              <a
                href="/#about"
                onClick={closeMobileMenu}
                className="block border-b border-white/10 py-4 text-sm font-medium transition-colors hover:text-[#D9A441]"
              >
                About AISIN
              </a>

              {/* Mobile Products Dropdown */}
              <div className="border-b border-white/10">
                <button
                  type="button"
                  aria-expanded={productsOpen}
                  onClick={() => setProductsOpen((previous) => !previous)}
                  className="flex w-full items-center justify-between py-4 text-sm font-medium transition-colors hover:text-[#D9A441]"
                >
                  Products

                  <ChevronDown
                    size={17}
                    className={`transition-transform duration-200 ${
                      productsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {productsOpen && (
                  <div className="mb-4 ml-3 border-l-2 border-[#D9A441] pl-4">
                    {products.map((product) => (
                      <a
                        key={product.path}
                        href={product.path}
                        onClick={closeMobileMenu}
                        className="block py-3 text-sm text-white/80 transition-colors hover:text-[#D9A441]"
                      >
                        {product.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="/#technology"
                onClick={closeMobileMenu}
                className="block border-b border-white/10 py-4 text-sm font-medium transition-colors hover:text-[#D9A441]"
              >
                Technology
              </a>

              <a
                href="/#applications"
                onClick={closeMobileMenu}
                className="block border-b border-white/10 py-4 text-sm font-medium transition-colors hover:text-[#D9A441]"
              >
                Applications
              </a>

              <a
                href="/#contact"
                onClick={closeMobileMenu}
                className="mt-5 flex items-center justify-center gap-2 rounded-md bg-[#D9A441] px-5 py-3.5 text-sm font-bold text-[#1B1930] transition-colors hover:bg-white"
              >
                Enquire Now
                <ArrowUpRight size={17} />
              </a>

              {/* Mobile Contact Details */}
              <div className="mt-5 space-y-3 border-t border-white/10 pt-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#D9A441]">
                  Product Inquiries
                </p>

                <a
                  href="mailto:abc@example.com"
                  className="flex items-center gap-3 break-all text-xs text-white/80 transition-colors hover:text-[#D9A441]"
                >
                  <Mail size={15} className="shrink-0 text-[#D9A441]" />
                  abc@example.com
                </a>

                <a
                  href="tel:+91XXXXXXXXXX"
                  className="flex items-center gap-3 text-xs text-white/80 transition-colors hover:text-[#D9A441]"
                >
                  <Phone size={15} className="shrink-0 text-[#D9A441]" />
                  +91 XXXXXXXXXX
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Navbar;
