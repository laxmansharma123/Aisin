
import { useState } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Gauge,
  Droplets,
} from "lucide-react";

const slides = [
  {
    eyebrow: "AISIN AUTOMOTIVE LUBRICANTS",
    title: "ENGINEERED FOR PERFORMANCE",
    highlight: "BUILT AROUND PRECISION",
    description:
      "Discover AISIN engine oil products, with viscosity grades and specifications designed for different engine requirements.",
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=2400&q=85",
  },
  {
    eyebrow: "AISIN synTECH+",
    title: "ADVANCED SYNTHETIC",
    highlight: "ENGINE OIL SOLUTIONS",
    description:
      "Explore fully synthetic lubricant options and select the appropriate product according to the required engine specification.",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2400&q=85",
  },
  {
    eyebrow: "AISIN econTECH",
    title: "RELIABLE LUBRICATION",
    highlight: "FOR YOUR REQUIREMENTS",
    description:
      "Discover mineral and semi-synthetic engine oil options across the AISIN product range.",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2400&q=85",
  },
];

const features = [
  {
    icon: Droplets,
    title: "Engine Oil Range",
    text: "Explore mineral, semi-synthetic and fully synthetic product options.",
  },
  {
    icon: Gauge,
    title: "Viscosity Grades",
    text: "Compare the grades listed in individual product data sheets.",
  },
  {
    icon: ShieldCheck,
    title: "Product Specifications",
    text: "Review technical information before selecting a lubricant.",
  },
];

const products = [
  {
    category: "FULLY SYNTHETIC",
    name: "AISIN synTECH+",
    description:
      "Fully synthetic engine oil range. Check the individual product sheet for viscosity and API specifications.",
    grade: "View individual grade",
  },
  {
    category: "SEMI SYNTHETIC",
    name: "AISIN Semi Synthetic",
    description:
      "Semi-synthetic engine oil options for applications specified in the relevant technical data sheet.",
    grade: "View individual grade",
  },
  {
    category: "MINERAL",
    name: "AISIN econTECH",
    description:
      "Mineral engine oil range with product-specific grades and application information.",
    grade: "View individual grade",
  },
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slide = slides[activeSlide];

  const changeSlide = (direction) => {
    setActiveSlide(
      (current) => (current + direction + slides.length) % slides.length
    );
  };

  return (
    <main className="bg-white font-sans text-[#25223F]">
      {/* FULL BACKGROUND IMAGE HERO */}
      <section
        id="home"
        className="relative flex min-h-[650px] items-center justify-center overflow-hidden bg-[#25223F] text-white sm:min-h-[700px] lg:min-h-[calc(100svh-130px)]"
      >
        {slides.map((item, index) => (
          <div
            key={item.image}
            aria-hidden="true"
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
              index === activeSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url("${item.image}")` }}
          />
        ))}

        {/* Navy overlay */}
        <div className="absolute inset-0 bg-[#17152A]/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#25223F]/90 via-[#25223F]/60 to-[#25223F]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#17152A]/65 via-transparent to-[#17152A]/20" />

        {/* Decorative gold corners */}
        <div className="pointer-events-none absolute left-6 top-8 hidden h-24 w-24 border-l border-t border-[#D9A441]/60 sm:block lg:left-16 lg:top-12" />
        <div className="pointer-events-none absolute bottom-12 right-8 hidden h-24 w-24 border-b border-r border-[#D9A441]/60 sm:block lg:right-16" />

        {/* Center content */}
        <div
          key={slide.title}
          className="relative z-10 mx-auto w-full max-w-[1400px] px-7 py-28 text-center sm:px-16 lg:px-24"
        >
          <div className="mb-7 flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-[#D9A441]" />
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#E8C16F] sm:text-sm sm:tracking-[0.3em]">
              {slide.eyebrow}
            </p>
            <span className="h-px w-9 bg-[#D9A441]" />
          </div>

          <h1 className="mx-auto max-w-5xl text-4xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {slide.title}
            <span className="mt-2 block text-[#D9A441]">
              {slide.highlight}
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-sm leading-7 text-white/85 sm:text-base sm:leading-8 lg:text-lg">
            {slide.description}
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#products"
              className="group inline-flex min-h-14 items-center gap-3 border border-[#D9A441] bg-[#D9A441] px-7 py-4 text-sm font-bold text-[#25223F] transition hover:border-white hover:bg-white"
            >
              Explore Products
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            <a
              href="#about"
              className="inline-flex min-h-14 items-center border border-white/70 px-7 py-4 text-sm font-bold text-white transition hover:border-[#D9A441] hover:bg-[#D9A441] hover:text-[#25223F]"
            >
              Discover AISIN
            </a>
          </div>
        </div>

        {/* Slider controls */}
        <button
          type="button"
          onClick={() => changeSlide(-1)}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 z-20 grid h-10 w-10 -translate-y-1/2 place-items-center border border-white/40 bg-[#25223F]/40 transition hover:border-[#D9A441] hover:bg-[#D9A441] hover:text-[#25223F] sm:left-7 sm:h-14 sm:w-14"
        >
          <ChevronLeft size={25} />
        </button>

        <button
          type="button"
          onClick={() => changeSlide(1)}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 z-20 grid h-10 w-10 -translate-y-1/2 place-items-center border border-white/40 bg-[#25223F]/40 transition hover:border-[#D9A441] hover:bg-[#D9A441] hover:text-[#25223F] sm:right-7 sm:h-14 sm:w-14"
        >
          <ChevronRight size={25} />
        </button>

        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {slides.map((item, index) => (
            <button
              key={item.title}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setActiveSlide(index)}
              className={`h-1.5 transition-all ${
                activeSlide === index
                  ? "w-10 bg-[#D9A441]"
                  : "w-5 bg-white/60"
              }`}
            />
          ))}
        </div>
      </section>

     
{/* ABOUT AISIN SECTION */}
<section
  id="about"
  className="relative -mt-1 overflow-hidden bg-[#F8F7F4] py-10 sm:py-12 lg:py-14"
>
  {/* Decorative Background */}
  <div className="pointer-events-none absolute -left-28 top-20 h-72 w-72 rounded-full bg-[#4036AD]/[0.06] blur-3xl" />
  <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[#D9A441]/[0.10] blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

    {/* Section Header */}
   <div className="mb-8 flex flex-col items-center justify-between gap-4 text-center md:mb-9">
      <div className="mx-auto max-w-3xl">
        <div className="mb-4 inline-flex items-center justify-center gap-3">
          <span className="h-[2px] w-10 bg-[#4036AD]" />

          <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#4036AD]">
            About AISIN
          </span>
        </div>

        <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#25223F] sm:text-4xl lg:text-5xl">
          Explore automotive
          <span className="block text-[#4036AD]">
            lubrication solutions.
          </span>
        </h2>
      </div>

      <div className="max-w-sm">
        <p className="text-sm leading-7 text-slate-600 sm:text-base">
          Explore engine oil options designed for different requirements,
          with product information to help you make an informed choice.
        </p>
      </div>
    </div>

    {/* Main Content */}
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">

      {/* Left Content Card */}
      <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl bg-[#25223F] p-7 text-white shadow-xl shadow-[#25223F]/10 sm:p-10 lg:col-span-5">

        {/* Decorative Circle */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -right-8 -top-8 h-36 w-36 rounded-full border border-white/10" />

        <div className="relative z-10">

          <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl border border-white/15 bg-white/10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="29"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#D9A441"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 3v3" />
              <path d="M7 10.5 12 6l5 4.5" />
              <path d="M5 13a7 7 0 0 0 14 0" />
              <path d="M12 17v4" />
              <path d="M8 21h8" />
            </svg>
          </div>

          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#D9A441]">
            Engine Oil Range
          </p>

          <h3 className="mb-5 text-2xl font-bold leading-snug sm:text-3xl">
            The right information
            <br />
            for your next choice.
          </h3>

          <p className="max-w-md text-sm leading-7 text-white/70 sm:text-base">
            AISIN product data sheets provide details about mineral,
            semi-synthetic and fully synthetic engine oils, including
            viscosity grades and product specifications.
          </p>
        </div>

        <a
          href="#products"
          className="relative z-10 mt-9 inline-flex w-fit items-center gap-3 rounded-lg bg-[#D9A441] px-5 py-3.5 text-sm font-bold text-[#1B1930] transition-all duration-300 hover:gap-5 hover:bg-white"
        >
          Explore Products

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </a>
      </div>

      {/* Right Feature Cards */}
      <div className="flex flex-col gap-4 lg:col-span-7">

        {/* Feature 1 */}
        <div className="group flex flex-1 items-start gap-5 rounded-2xl border border-[#25223F]/[0.07] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#4036AD]/30 hover:shadow-xl hover:shadow-[#25223F]/[0.06] sm:items-center sm:p-7">

          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#4036AD]/[0.08] text-[#4036AD] transition-colors duration-300 group-hover:bg-[#4036AD] group-hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="27"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2.5S5 10 5 14.5a7 7 0 0 0 14 0C19 10 12 2.5 12 2.5Z" />
              <path d="M9 16a3 3 0 0 0 3 3" />
            </svg>
          </div>

          <div className="flex-1">
            <div className="mb-2 flex flex-wrap items-center gap-3">
              <h3 className="text-lg font-bold text-[#25223F]">
                Engine Oil Range
              </h3>

              <span className="rounded-full bg-[#4036AD]/[0.07] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#4036AD]">
                03 Categories
              </span>
            </div>

            <p className="text-sm leading-6 text-slate-600">
              Explore mineral, semi-synthetic and fully synthetic
              product options.
            </p>
          </div>

          <span className="hidden text-[#4036AD]/50 transition-all group-hover:translate-x-1 group-hover:text-[#4036AD] sm:block">
            ↗
          </span>
        </div>

        {/* Feature 2 */}
        <div className="group flex flex-1 items-start gap-5 rounded-2xl border border-[#25223F]/[0.07] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#4036AD]/30 hover:shadow-xl hover:shadow-[#25223F]/[0.06] sm:items-center sm:p-7">

          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#4036AD]/[0.08] text-[#4036AD] transition-colors duration-300 group-hover:bg-[#4036AD] group-hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="27"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 12a9 9 0 1 1 18 0" />
              <path d="m12 12 4-4" />
              <path d="M5 17h14" />
            </svg>
          </div>

          <div className="flex-1">
            <div className="mb-2 flex flex-wrap items-center gap-3">
              <h3 className="text-lg font-bold text-[#25223F]">
                Viscosity Grades
              </h3>

              <span className="rounded-full bg-[#D9A441]/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#80601C]">
                Compare Options
              </span>
            </div>

            <p className="text-sm leading-6 text-slate-600">
              Compare viscosity grades listed in individual product
              data sheets before selecting an oil.
            </p>
          </div>

          <span className="hidden text-[#4036AD]/50 transition-all group-hover:translate-x-1 group-hover:text-[#4036AD] sm:block">
            ↗
          </span>
        </div>

        {/* Feature 3 */}
        <div className="group flex flex-1 items-start gap-5 rounded-2xl border border-[#25223F]/[0.07] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#4036AD]/30 hover:shadow-xl hover:shadow-[#25223F]/[0.06] sm:items-center sm:p-7">

          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#4036AD]/[0.08] text-[#4036AD] transition-colors duration-300 group-hover:bg-[#4036AD] group-hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="27"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </div>

          <div className="flex-1">
            <div className="mb-2 flex flex-wrap items-center gap-3">
              <h3 className="text-lg font-bold text-[#25223F]">
                Product Specifications
              </h3>

              <span className="rounded-full bg-[#4036AD]/[0.07] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#4036AD]">
                Technical Details
              </span>
            </div>

            <p className="text-sm leading-6 text-slate-600">
              Review the technical information and intended applications
              provided in each product data sheet.
            </p>
          </div>

          <span className="hidden text-[#4036AD]/50 transition-all group-hover:translate-x-1 group-hover:text-[#4036AD] sm:block">
            ↗
          </span>
        </div>

      </div>
    </div>

    {/* Bottom Accent */}
    <div className="mt-12 flex items-center gap-4 sm:mt-16">
      <div className="h-1 w-16 rounded-full bg-[#4036AD]" />
      <div className="h-1 w-8 rounded-full bg-[#D9A441]" />
      <p className="text-xs font-medium tracking-wide text-slate-500">
        Explore the AISIN engine oil range
      </p>
    </div>

  </div>
</section>


      {/* PRODUCT RANGE */}
      <section id="products" className="bg-[#F4F2EE] px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#4036AD]">
            Our Product Range
          </p>

          <h2 className="mt-4 max-w-2xl text-3xl font-bold text-[#25223F] sm:text-4xl">
            Find the right AISIN engine oil range
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-gray-600">
            Explore the product families and review each technical data sheet
            for the exact viscosity grade and performance classification.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.name}
                className="group border border-[#25223F]/10 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#D9A441] hover:shadow-xl"
              >
                <span className="inline-flex border border-[#D9A441]/70 bg-[#D9A441]/10 px-3 py-2 text-[10px] font-bold tracking-[0.15em] text-[#25223F]">
                  {product.category}
                </span>

                <div className="mt-7 grid h-14 w-14 place-items-center bg-[#25223F] text-[#D9A441] transition group-hover:bg-[#4036AD]">
                  <Droplets size={28} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#25223F]">
                  {product.name}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {product.description}
                </p>

                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#4036AD] transition hover:text-[#25223F]"
                >
                  {product.grade}
                  <ArrowRight size={17} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section id="technology" className="bg-[#25223F] px-6 py-20 text-white sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#D9A441]">
            Technical Information
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-bold sm:text-4xl">
            Specifications matter when choosing engine oil
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-white/75">
            Compare viscosity grades, API classifications and intended
            applications with your vehicle manufacturer's requirements.
            Always check the relevant AISIN technical data sheet before use.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-3 bg-[#D9A441] px-6 py-4 text-sm font-bold text-[#25223F] transition hover:bg-white"
          >
            Product Enquiry <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section id="applications" className="bg-white px-6 py-16 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-[#25223F]">
            Applications & Compatibility
          </h2>
          <p className="mt-4 max-w-3xl leading-8 text-gray-600">
            Application suitability depends on the exact oil product and
            vehicle requirements. Check the product documentation and vehicle
            manual before selecting a lubricant.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-[#F4F2EE] px-6 py-16 sm:px-10 lg:px-20">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4036AD]">
              Get in Touch
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#25223F]">
              Need product information?
            </h2>
            <p className="mt-3 text-gray-600">
              Contact the authorised AISIN team for product enquiries.
            </p>
          </div>

          <a
            href="mailto:info@example.com"
            className="inline-flex items-center justify-center gap-3 bg-[#25223F] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#4036AD]"
          >
            Contact Us <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <footer className="bg-[#1B1930] px-6 py-8 text-white sm:px-10 lg:px-20">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 sm:flex-row">
          <span className="text-2xl font-black tracking-wider">AISIN</span>
          <span className="text-sm text-white/60">
            Please refer to the applicable product technical data sheet.
          </span>
        </div>
      </footer>
    </main>
  );
}
