import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
  ArrowRight,
} from "lucide-react";

const heroSlides = [
  {
    title: "FROM CONCEPT TO CREATION",
    description:
      "At 'Al-Azab Construction', we bring ideas to life, from concept to creation, by providing high-quality building services for residential, commercial, and administrative units.",
  },
  {
    title: "WE PROVIDE BEST SERVICE",
    description:
      "We provide high-quality building services for residential, commercial, and administrative units, focusing on quality, safety, and sustainable materials.",
  },
  {
    title: "MAKING DREAMS COME TO LIFE",
    description:
      "We strive to bring our clients' dreams to life through high-quality building services with a focus on quality, safety, and sustainable materials.",
  },
];

const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "364+", label: "Projects Completed" },
  { value: "127+", label: "Satisfied Clients" },
  { value: "98+", label: "Active Workers" },
];

const services = [
  { icon: Building2, title: "Building Construction", desc: "Comprehensive construction services ensuring quality and safety." },
  { icon: Hammer, title: "House Renovation", desc: "Transform your house into your dream home with complete solutions." },
  { icon: Compass, title: "Architecture Design", desc: "Creative and functional architectural design to bring visions to life." },
  { icon: Package, title: "Material Supply", desc: "High-quality construction materials for your building projects." },
  { icon: Briefcase, title: "Construction Consultant", desc: "Expert advice from our experienced construction consultants." },
  { icon: Sofa, title: "Interior Design", desc: "Stylish and functional interior design tailored to your taste." },
  { icon: Wrench, title: "Building Maintenance", desc: "Reliable maintenance services to keep your property in top condition." },
  { icon: Paintbrush, title: "Building Renovation", desc: "Restore and enhance your property efficiently." },
  { icon: Store, title: "Commercial Fit-outs", desc: "Complete shop fit-outs that attract customers and meet business needs." },
];

const projects = [
  { title: "Luxury Residential", tags: "Construction, Architecture, Interior" },
  { title: "Modern Villa", tags: "Construction, Luxury Design" },
  { title: "Office Building", tags: "Office Fit-outs, Modern Interior" },
  { title: "Retail Outlet", tags: "Shop Fit-out, Brand Design" },
  { title: "Apartment Renovation", tags: "Renovation, Contemporary Interior" },
  { title: "Commercial Plaza", tags: "Construction, Exterior Design" },
];

const reviews = [
  { name: "Layla Hassan", text: "Al-Azab Construction's team was friendly and professional. They made sure everything was perfect, and we love the finished product." },
  { name: "Mohamed Youssef", text: "The team went above and beyond to meet our needs. The quality of their work was exceptional." },
  { name: "Sara Ahmed", text: "Working with Al-Azab was a smooth process. They handled everything professionally." },
  { name: "Kareem Hassan", text: "They exceeded our expectations in terms of quality and efficiency. The team communicated well throughout." },
];

const plans = [
  { name: "Basic Plan", price: "EGP 4,000", period: "/yr", featured: false },
  { name: "Premium Plan", price: "EGP 8,000", period: "/yr", featured: true },
  { name: "Ultimate Plan", price: "EGP 12,000", period: "/yr", featured: false },
];

const planFeatures = ["Interior Design", "Refurbishment", "Material Supply", "Maintenance", "24/7 Support"];

const Home = () => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-background to-orange-light/30 border-b border-border">
        <div className="container mx-auto px-6 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <span className="inline-block text-sm font-semibold tracking-widest text-orange uppercase border-b-2 border-orange pb-1">
                Al-Azab Construction
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-tight">
                {heroSlides[slide].title}
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                {heroSlides[slide].description}
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button variant="orange" size="lg" className="gap-2">
                  Visit Alazab Store <ArrowRight className="w-4 h-4" />
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/login">Explore System</Link>
                </Button>
              </div>

              {/* Slide dots */}
              <div className="flex gap-2 pt-6">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSlide(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === slide ? "w-10 bg-orange" : "w-2 bg-muted-foreground/30"
                    }`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-orange/20 via-orange/5 to-transparent border border-orange/20 flex items-center justify-center overflow-hidden">
                <div className="text-[14rem] font-black text-orange/10 select-none">عز</div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-orange rounded-xl flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">364+</p>
                    <p className="text-sm text-muted-foreground">Projects Delivered</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero arrows */}
        <div className="absolute bottom-6 right-6 flex gap-2">
          <Button variant="outline" size="icon" onClick={() => setSlide((s) => (s - 1 + heroSlides.length) % heroSlides.length)}>
            <ChevronRight className="w-4 h-4" />
          </Button>
          <Button variant="orange" size="icon" onClick={() => setSlide((s) => (s + 1) % heroSlides.length)}>
            <ChevronLeft className="w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-1.5 h-8 bg-orange rounded-full" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">About Us</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/90 to-primary/60 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,hsl(var(--orange-accent)/0.3),transparent_60%)]" />
              <div className="absolute bottom-6 left-6 right-6 bg-card/95 backdrop-blur rounded-xl p-5">
                <p className="text-sm font-semibold text-orange uppercase tracking-wider mb-1">Quality First</p>
                <p className="text-foreground font-medium">Building trust since 2014</p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground leading-tight">
                We Will Provide You The Best Work Which You Dreamt For!
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                At Al-Azab Construction, we bring ideas to life, from concept to creation, providing the best work you've
                dreamed of through high-quality building services for residential, commercial, and administrative units,
                focusing on quality, safety, and sustainable materials.
              </p>
              <Button variant="orange" className="gap-2">
                Read More <ArrowRight className="w-4 h-4" />
              </Button>

              <div className="grid grid-cols-2 gap-4 pt-6">
                {stats.map((s) => (
                  <div key={s.label} className="bg-card border border-border rounded-xl p-5">
                    <p className="text-3xl font-bold text-orange">{s.value}</p>
                    <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-orange uppercase tracking-widest mb-3">What We Offer</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Services</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Card
                key={s.title}
                className="group hover:border-orange hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-orange-light flex items-center justify-center group-hover:bg-orange transition-colors">
                    <s.icon className="w-7 h-7 text-orange group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <div className="flex items-center gap-2 text-orange text-sm font-semibold pt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-orange uppercase tracking-widest mb-3">Our Work</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Projects</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <div
                key={p.title}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer bg-gradient-to-br from-primary to-primary/60"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                  style={{ backgroundImage: `url(https://mohamedazab224.github.io/alazab/images/project-${i + 1}.jpg)` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-xs font-semibold text-orange uppercase tracking-wider mb-2">{p.tags}</p>
                  <h3 className="text-xl font-bold">{p.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-orange uppercase tracking-widest mb-3">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Clients Reviews</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((r) => (
              <Card key={r.name} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="flex text-orange text-lg">★★★★★</div>
                  <p className="text-sm text-muted-foreground leading-relaxed italic">"{r.text}"</p>
                  <div className="flex items-center gap-3 pt-3 border-t border-border">
                    <div className="w-10 h-10 rounded-full bg-orange flex items-center justify-center text-white font-bold">
                      {r.name.charAt(0)}
                    </div>
                    <p className="font-semibold text-foreground">{r.name}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-orange uppercase tracking-widest mb-3">Our Pricing</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Annual Maintenance Packages</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`relative ${
                  plan.featured ? "border-orange border-2 shadow-2xl scale-105" : ""
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange text-white text-xs font-bold px-4 py-1 rounded-full">
                    MOST POPULAR
                  </span>
                )}
                <CardContent className="p-8 text-center space-y-6">
                  <h3 className="text-xl font-bold text-foreground uppercase">{plan.name}</h3>
                  <div>
                    <span className="text-4xl font-extrabold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 text-start">
                    {planFeatures.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <Check className="w-5 h-5 text-orange flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button variant={plan.featured ? "orange" : "outline"} className="w-full">
                    Choose Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-orange uppercase tracking-widest mb-3">Reach Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Get In Touch</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Phone, title: "Call Us", lines: ["+20 100 400 6620", "+20 101 453 6600"] },
              { icon: Mail, title: "Email Us", lines: ["info@al-azab.co", "support@alazab.com"] },
              { icon: MapPin, title: "Visit Us", lines: ["8/500st Maadi", "Cairo, Egypt"] },
            ].map((c) => (
              <Card key={c.title} className="text-center hover:border-orange transition-colors">
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-orange-light flex items-center justify-center">
                    <c.icon className="w-8 h-8 text-orange" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{c.title}</h3>
                  <div className="space-y-1">
                    {c.lines.map((l) => (
                      <p key={l} className="text-muted-foreground">{l}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
