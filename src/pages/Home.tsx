import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import {
  ChevronLeft,
  ChevronRight,
  Building2,
  Hammer,
  Compass,
  Package,
  Briefcase,
  Sofa,
  Wrench,
  Paintbrush,
  Store,
  Check,
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

const heroSlides = [
  {
    eyebrow: "Chapter 01 — Vision",
    titleA: "FROM",
    titleAccent: "concept",
    titleB: "TO CREATION",
    description:
      "We translate architectural ambition into precise, enduring structures — residential, commercial, and administrative work crafted with discipline.",
  },
  {
    eyebrow: "Chapter 02 — Craft",
    titleA: "BUILT WITH",
    titleAccent: "intent",
    titleB: "DESIGNED TO LAST",
    description:
      "Every joint, line, and surface answers to a standard set by a team that has shaped Cairo's skyline for over a decade.",
  },
  {
    eyebrow: "Chapter 03 — Trust",
    titleA: "WHERE DREAMS",
    titleAccent: "become",
    titleB: "ARCHITECTURE",
    description:
      "From the first sketch to handover, Al-Azab is the quiet partner behind landmarks our clients are proud to own.",
  },
];

const stats = [
  { value: "10+", label: "Years in Practice" },
  { value: "364", label: "Projects Delivered" },
  { value: "127", label: "Trusted Clients" },
  { value: "98", label: "Skilled Craftsmen" },
];

const services = [
  { num: "01", icon: Building2, title: "Building Construction", desc: "End-to-end construction with disciplined execution and architectural integrity." },
  { num: "02", icon: Hammer, title: "House Renovation", desc: "Restoring and reshaping homes into the spaces their owners imagined." },
  { num: "03", icon: Compass, title: "Architecture Design", desc: "Concept, schematic, and detail — drawings that build themselves on site." },
  { num: "04", icon: Package, title: "Material Supply", desc: "Sourcing structural and finishing materials at uncompromising standards." },
  { num: "05", icon: Briefcase, title: "Construction Consultancy", desc: "Independent advice from engineers who have built what they recommend." },
  { num: "06", icon: Sofa, title: "Interior Design", desc: "Considered interiors where proportion, light, and material live in balance." },
  { num: "07", icon: Wrench, title: "Building Maintenance", desc: "Programmed upkeep so the building you commissioned still feels new." },
  { num: "08", icon: Paintbrush, title: "Building Renovation", desc: "Adaptive reuse and façade restoration with a respect for the original." },
  { num: "09", icon: Store, title: "Commercial Fit-outs", desc: "Retail and office environments tuned to brand, traffic, and longevity." },
];

const projects = [
  { title: "Luxury Residential", tags: "Construction · Interior" },
  { title: "Modern Villa", tags: "Design · Build" },
  { title: "Office Building", tags: "Fit-out · Interior" },
  { title: "Retail Outlet", tags: "Brand · Fit-out" },
  { title: "Apartment Renovation", tags: "Renovation" },
  { title: "Commercial Plaza", tags: "Construction · Exterior" },
];

const reviews = [
  { name: "Layla Hassan", role: "Homeowner, Maadi", text: "They treated our home like it was their own. The detailing is something we still notice every day." },
  { name: "Mohamed Youssef", role: "Developer", text: "Delivered on programme and on budget — twice. That's why we keep coming back." },
  { name: "Sara Ahmed", role: "Architect", text: "A contractor that actually reads the drawings. Refreshing, and rare in this market." },
  { name: "Kareem Hassan", role: "Retail Operator", text: "Our store opened on the day we promised our landlord. The work speaks for itself." },
];

const plans = [
  { name: "Basic", price: "4,000", period: "EGP / year", featured: false, tag: "Essential cover" },
  { name: "Premium", price: "8,000", period: "EGP / year", featured: true, tag: "Most chosen" },
  { name: "Ultimate", price: "12,000", period: "EGP / year", featured: false, tag: "Total care" },
];

const planFeatures = ["Interior Design Reviews", "Scheduled Refurbishment", "Material Supply Priority", "Preventive Maintenance", "24 / 7 Site Support"];

const Home = () => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), 6500);
    return () => clearInterval(id);
  }, []);

  const current = heroSlides[slide];

  return (
    <div dir="ltr" className="min-h-screen flex flex-col bg-[#fcfbf8] text-[#141414] font-editorial">
      <Header />

      {/* ───────── HERO ───────── */}
      <section className="relative overflow-hidden border-b border-black/10">
        {/* structural background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#f4f1ea]" />
          <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:80px_80px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-20">
          {/* breadcrumb / chapter line */}
          <div className="flex items-center justify-between mb-12 text-[10px] font-bold uppercase tracking-[0.35em] text-neutral-500">
            <span>Al-Azab&nbsp;·&nbsp;Construction Atelier</span>
            <span className="hidden md:block">Est. 2014&nbsp;·&nbsp;Cairo, Egypt</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* IMAGE COLUMN */}
            <div className="lg:col-span-6 relative group order-2 lg:order-1">
              <div className="relative aspect-[4/5] overflow-hidden bg-neutral-200">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1400"
                  alt="Architectural construction by Al-Azab"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-orange/10 mix-blend-multiply" />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />

                {/* corner index */}
                <div className="absolute top-6 left-6 text-white text-[10px] font-bold uppercase tracking-[0.3em]">
                  IMG / {String(slide + 1).padStart(2, "0")}
                </div>
              </div>

              {/* abstract corner frame */}
              <div className="absolute -top-6 -left-6 w-32 h-32 border-l-2 border-t-2 border-orange/40 -z-10" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-2 border-b-2 border-black/15 -z-10" />

              {/* floating stats card */}
              <div className="absolute -bottom-8 right-6 md:-right-10 bg-white shadow-2xl border border-black/5 p-6 flex items-center gap-5">
                <div>
                  <p className="text-4xl font-extrabold tracking-tighter text-[#141414]">+364</p>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-500 font-bold mt-1">
                    Projects Delivered
                  </p>
                </div>
                <div className="w-12 h-12 bg-orange flex items-center justify-center text-white">
                  <Building2 className="w-6 h-6" strokeWidth={1.5} />
                </div>
              </div>
            </div>

            {/* TEXT COLUMN */}
            <div className="lg:col-span-6 lg:pl-8 order-1 lg:order-2">
              <div key={slide} className="animate-fade-in space-y-8">
                <div className="inline-flex items-center gap-4">
                  <span className="h-px w-12 bg-orange" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-orange">
                    {current.eyebrow}
                  </span>
                </div>

                <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-extrabold leading-[0.92] tracking-tighter text-[#141414]">
                  {current.titleA}{" "}
                  <span className="italic font-serif font-bold text-orange">{current.titleAccent}</span>
                  <br />
                  {current.titleB}
                </h1>

                <p className="text-lg text-neutral-600 max-w-md leading-relaxed font-light">
                  {current.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    to="/login"
                    className="group relative px-8 py-4 bg-[#141414] text-white text-[11px] font-bold uppercase tracking-[0.25em] overflow-hidden transition-all hover:pr-14"
                  >
                    <span className="relative z-10">Explore System</span>
                    <ArrowUpRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                  </Link>
                  <a
                    href="#projects"
                    className="px-8 py-4 border-2 border-orange text-orange text-[11px] font-bold uppercase tracking-[0.25em] hover:bg-orange hover:text-white transition-all"
                  >
                    Visit Alazab Store
                  </a>
                </div>

                {/* slider controls */}
                <div className="flex items-center gap-6 pt-10">
                  <div className="flex items-center gap-3">
                    {heroSlides.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setSlide(i)}
                        aria-label={`Slide ${i + 1}`}
                        className={`h-[3px] transition-all duration-500 ${
                          i === slide ? "w-14 bg-orange" : "w-8 bg-neutral-300 hover:bg-neutral-400"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold tracking-[0.3em] text-neutral-400">
                    {String(slide + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}
                  </span>

                  <div className="ml-auto flex gap-2">
                    <button
                      onClick={() => setSlide((s) => (s - 1 + heroSlides.length) % heroSlides.length)}
                      className="w-10 h-10 border border-black/15 hover:bg-black hover:text-white transition-colors flex items-center justify-center"
                      aria-label="Previous"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setSlide((s) => (s + 1) % heroSlides.length)}
                      className="w-10 h-10 bg-orange text-white hover:bg-[#141414] transition-colors flex items-center justify-center"
                      aria-label="Next"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* bottom ticker */}
        <div className="border-t border-black/10 bg-white/40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-wrap items-center justify-between gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-500">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                Available 24 / 7
              </span>
              <span className="hidden md:inline">RIBA · ISO 9001 · Certified Contractor</span>
            </div>
            <div className="flex gap-6">
              <span>Residential</span>
              <span>Commercial</span>
              <span>Administrative</span>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── ABOUT ───────── */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-3 mb-8">
                <span className="h-px w-10 bg-orange" />
                <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-orange">
                  Chapter 02 — Practice
                </span>
              </div>
              <h2 className="font-display text-4xl lg:text-6xl font-extrabold tracking-tighter leading-[0.95]">
                The work you{" "}
                <span className="italic font-serif font-bold text-orange">dreamt</span> of.
                <br />
                Built once, properly.
              </h2>
              <p className="mt-8 text-neutral-600 leading-relaxed max-w-md">
                Al-Azab is a construction atelier — small enough to care about every detail, large enough to deliver
                landmark work. We balance engineering rigour with material honesty.
              </p>
              <Link
                to="/login"
                className="inline-flex items-center gap-3 mt-8 text-[11px] font-bold uppercase tracking-[0.3em] border-b-2 border-orange pb-1 hover:gap-5 transition-all"
              >
                Read the Practice <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-px bg-black/10 border border-black/10">
                {stats.map((s) => (
                  <div key={s.label} className="bg-[#fcfbf8] p-8 lg:p-10">
                    <p className="font-display text-5xl lg:text-6xl font-extrabold tracking-tighter text-[#141414]">
                      {s.value}
                    </p>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 font-bold mt-3">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── SERVICES ───────── */}
      <section className="py-24 lg:py-32 border-y border-black/10 bg-[#f4f1ea]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
            <div>
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-orange" />
                <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-orange">
                  Chapter 03 — What we offer
                </span>
              </div>
              <h2 className="font-display text-4xl lg:text-6xl font-extrabold tracking-tighter leading-[0.95] max-w-2xl">
                Nine disciplines.{" "}
                <span className="italic font-serif text-orange">One</span> standard.
              </h2>
            </div>
            <p className="text-sm text-neutral-500 max-w-xs">
              Each service is led by a senior practitioner. Nothing is sub-contracted to chance.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-black/10 border border-black/10">
            {services.map((s) => (
              <div
                key={s.title}
                className="group relative bg-[#fcfbf8] p-8 lg:p-10 hover:bg-[#141414] hover:text-white transition-colors duration-500 cursor-pointer"
              >
                <div className="flex items-start justify-between mb-10">
                  <span className="text-[10px] font-bold tracking-[0.3em] text-neutral-400 group-hover:text-orange">
                    {s.num}
                  </span>
                  <s.icon className="w-7 h-7 text-orange" strokeWidth={1.3} />
                </div>
                <h3 className="font-display text-2xl font-bold tracking-tight leading-tight mb-4">
                  {s.title}
                </h3>
                <p className="text-sm text-neutral-500 group-hover:text-neutral-300 leading-relaxed font-light">
                  {s.desc}
                </p>
                <ArrowUpRight className="w-5 h-5 mt-8 text-orange opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── PROJECTS ───────── */}
      <section id="projects" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
            <div>
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-orange" />
                <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-orange">
                  Chapter 04 — Selected Work
                </span>
              </div>
              <h2 className="font-display text-4xl lg:text-6xl font-extrabold tracking-tighter leading-[0.95]">
                A portfolio with{" "}
                <span className="italic font-serif text-orange">weight</span>.
              </h2>
            </div>
            <a
              href="#"
              className="text-[11px] font-bold uppercase tracking-[0.3em] border-b-2 border-black/80 pb-1 hover:border-orange hover:text-orange transition-colors"
            >
              View Full Archive →
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((p, i) => (
              <a
                key={p.title}
                href="#"
                className="group block"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-neutral-200">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(https://mohamedazab224.github.io/alazab/images/project-${i + 1}.jpg)` }}
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors" />
                  <div className="absolute top-5 left-5 text-white text-[10px] font-bold tracking-[0.3em]">
                    № {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="absolute bottom-5 right-5 w-10 h-10 bg-orange flex items-center justify-center text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
                <div className="pt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl font-bold tracking-tight">{p.title}</h3>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 font-bold mt-2">
                      {p.tags}
                    </p>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 font-bold">
                    2024
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── REVIEWS ───────── */}
      <section className="py-24 lg:py-32 bg-[#141414] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-orange" />
            <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-orange">
              Chapter 05 — In Their Words
            </span>
          </div>
          <h2 className="font-display text-4xl lg:text-6xl font-extrabold tracking-tighter leading-[0.95] max-w-3xl mb-16">
            The clients we built{" "}
            <span className="italic font-serif text-orange">with</span> — and still hear from.
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {reviews.map((r, i) => (
              <div key={r.name} className="bg-[#141414] p-8 lg:p-10">
                <span className="text-[10px] font-bold tracking-[0.3em] text-orange">
                  {String(i + 1).padStart(2, "0")} / {String(reviews.length).padStart(2, "0")}
                </span>
                <p className="font-display text-lg leading-relaxed mt-6 text-white/90 font-light">
                  "{r.text}"
                </p>
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-sm font-bold tracking-tight">{r.name}</p>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold mt-1">
                    {r.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── PRICING ───────── */}
      <section className="py-24 lg:py-32 bg-[#fcfbf8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-3 mb-6 justify-center">
              <span className="h-px w-10 bg-orange" />
              <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-orange">
                Chapter 06 — Stewardship
              </span>
              <span className="h-px w-10 bg-orange" />
            </div>
            <h2 className="font-display text-4xl lg:text-6xl font-extrabold tracking-tighter leading-[0.95]">
              Annual maintenance,{" "}
              <span className="italic font-serif text-orange">considered</span>.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-black/10 border border-black/10 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative p-10 ${
                  plan.featured ? "bg-[#141414] text-white" : "bg-[#fcfbf8]"
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-10 bg-orange text-white text-[9px] font-bold uppercase tracking-[0.3em] px-3 py-1.5">
                    {plan.tag}
                  </span>
                )}
                <p
                  className={`text-[10px] font-bold uppercase tracking-[0.3em] ${
                    plan.featured ? "text-orange" : "text-neutral-400"
                  }`}
                >
                  {plan.tag}
                </p>
                <h3 className="font-display text-3xl font-bold tracking-tight mt-3">{plan.name}</h3>

                <div className="mt-8 pb-8 border-b border-current/10">
                  <span className="font-display text-5xl font-extrabold tracking-tighter">
                    {plan.price}
                  </span>
                  <span
                    className={`ml-2 text-[10px] uppercase tracking-[0.3em] font-bold ${
                      plan.featured ? "text-white/60" : "text-neutral-500"
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>

                <ul className="space-y-4 mt-8">
                  {planFeatures.map((f) => (
                    <li
                      key={f}
                      className={`flex items-start gap-3 text-sm font-light ${
                        plan.featured ? "text-white/80" : "text-neutral-600"
                      }`}
                    >
                      <Check className="w-4 h-4 text-orange flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  className={`mt-10 w-full py-4 text-[11px] font-bold uppercase tracking-[0.3em] transition-colors ${
                    plan.featured
                      ? "bg-orange text-white hover:bg-white hover:text-[#141414]"
                      : "border-2 border-[#141414] hover:bg-[#141414] hover:text-white"
                  }`}
                >
                  Choose {plan.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── CONTACT ───────── */}
      <section className="py-24 lg:py-32 border-t border-black/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-orange" />
                <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-orange">
                  Chapter 07 — Reach Us
                </span>
              </div>
              <h2 className="font-display text-4xl lg:text-6xl font-extrabold tracking-tighter leading-[0.95]">
                Let's begin a{" "}
                <span className="italic font-serif text-orange">conversation</span>.
              </h2>
              <p className="mt-8 text-neutral-600 leading-relaxed max-w-md">
                Every project starts with a meeting — over plans, over coffee, on site. Tell us what
                you're building and we'll respond within one working day.
              </p>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-3 gap-px bg-black/10 border border-black/10">
              {[
                { icon: Phone, title: "Call", lines: ["+20 100 400 6620", "+20 101 453 6600"] },
                { icon: Mail, title: "Write", lines: ["info@al-azab.co", "support@alazab.com"] },
                { icon: MapPin, title: "Visit", lines: ["8 / 500 St, Maadi", "Cairo, Egypt"] },
              ].map((c) => (
                <div key={c.title} className="bg-[#fcfbf8] p-8 group hover:bg-[#141414] hover:text-white transition-colors">
                  <c.icon className="w-6 h-6 text-orange mb-8" strokeWidth={1.5} />
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-400 group-hover:text-orange">
                    {c.title}
                  </p>
                  <div className="mt-3 space-y-1">
                    {c.lines.map((l) => (
                      <p key={l} className="font-display text-base font-semibold tracking-tight">
                        {l}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
