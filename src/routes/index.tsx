import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  type MotionValue,
} from "framer-motion";
import heroImg from "@/assets/hero-discs.jpg";
import logoImg from "@/assets/logo-3ptech.png";
import {
  ArrowUpRight,
  Code2,
  Cpu,
  Cog,
  Cloud,
  Sparkles,
  Shield,
  Zap,
  Globe,
} from "lucide-react";

function useParallax(value: MotionValue<number>, distance: number) {
  return useSpring(useTransform(value, [0, 1], [0, distance]), {
    stiffness: 80,
    damping: 20,
    mass: 0.4,
  });
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "3P Tech AB — Innovative IT & Software Solutions" },
      {
        name: "description",
        content:
          "3P Tech AB is a Gothenburg-based technology company building applications, AI solutions, automated systems and tailor-made software for businesses and people.",
      },
      { property: "og:title", content: "3P Tech AB — Innovative IT & Software Solutions" },
      {
        property: "og:description",
        content:
          "Scalable, high-quality tech solutions that simplify and improve your digital business.",
      },
    ],
  }),
  component: Index,
});

function Nav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30 px-6 md:px-12 py-6 flex items-center justify-between">
      <a href="#top" className="flex items-center gap-2 text-primary-foreground">
        <img src={logoImg} alt="3P Tech logo" className="h-36 w-36 object-contain drop-shadow-xl" width={288} height={288} />
        <span className="sr-only">3P Tech</span>
      </a>
      <nav className="hidden md:flex items-center gap-8 text-sm text-primary-foreground/90">
        <a href="#services" className="hover:text-primary-foreground">Services</a>
        <a href="#how" className="hover:text-primary-foreground">How it works</a>
        <a href="#about" className="hover:text-primary-foreground">About</a>
        <a href="#contact" className="hover:text-primary-foreground">Contact</a>
      </nav>
      <div className="flex items-center gap-3">
        <button className="hidden sm:inline-flex h-10 items-center rounded-full px-5 text-sm text-primary-foreground/90 hover:bg-white/10 transition">
          Sign in
        </button>
        <a
          href="#contact"
          className="inline-flex h-10 items-center rounded-full bg-white text-primary px-5 text-sm font-medium hover:bg-white/90 transition"
        >
          Get started
        </a>
      </div>
    </header>
  );
}

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yImage = useParallax(scrollYProgress, 240);
  const yTitle = useParallax(scrollYProgress, -120);
  const ySub = useParallax(scrollYProgress, -60);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  // Floating decorative chips
  const yA = useParallax(scrollYProgress, -180);
  const yB = useParallax(scrollYProgress, 320);
  const yC = useParallax(scrollYProgress, 180);

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-[100vh] overflow-hidden hero-bg"
    >
      <Nav />
      <motion.img
        src={heroImg}
        alt="Glowing microchip and circuit board representing advanced computing"
        className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90 will-change-transform"
        width={1536}
        height={1280}
        style={{ y: yImage, scale }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/40" />
      <motion.div
        style={{ opacity }}
        className="relative z-10 px-6 md:px-12 pt-40 md:pt-56 pb-24 max-w-[1400px] mx-auto"
      >
        <motion.h1
          style={{ y: yTitle }}
          className="font-display uppercase text-primary-foreground text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] text-balance max-w-5xl"
        >
          One Tech Firm <br /> For All Your Builds
        </motion.h1>
        <motion.div
          style={{ y: ySub }}
          className="mt-12 md:mt-24 flex flex-col md:flex-row md:items-end md:justify-between gap-8 max-w-5xl"
        >
          <p className="text-primary-foreground/90 text-lg md:text-xl max-w-md">
            Software, AI and infrastructure for teams who ship serious products.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex h-12 items-center rounded-full bg-white text-primary px-7 text-base font-medium hover:scale-[1.02] transition"
            >
              Start a project
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </a>
            <a
              href="#services"
              className="inline-flex h-12 items-center rounded-full border border-white/40 text-primary-foreground px-7 text-base hover:bg-white/10 transition"
            >
              Explore services
            </a>
          </div>
        </motion.div>
      </motion.div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex items-center gap-3 rounded-full bg-black/20 backdrop-blur-md px-5 py-2 text-sm text-primary-foreground">
          <span className="opacity-80">Personal</span>
          <span className="h-3 w-px bg-white/30" />
          <span className="opacity-80">Business</span>
          <span className="h-3 w-px bg-white/30" />
          <span className="opacity-80">Enterprise</span>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: Code2,
    title: "Application development",
    desc: "Web, mobile and cross-platform apps engineered for performance and built to scale with your users.",
  },
  {
    icon: Sparkles,
    title: "AI & intelligent systems",
    desc: "From LLM-powered assistants to custom ML models, we ship AI features that move metrics, not demos.",
  },
  {
    icon: Cog,
    title: "Automation & workflows",
    desc: "Replace repetitive work with reliable automation across your stack, integrations and back office.",
  },
  {
    icon: Cloud,
    title: "Tech consulting",
    desc: "Strategy for IT, digitalisation and system integration — partnering with your team end to end.",
  },
  {
    icon: Shield,
    title: "Operations & support",
    desc: "Hosting, licensing, monitoring and 24/7 support keep your services running and your customers happy.",
  },
  {
    icon: Cpu,
    title: "Product engineering",
    desc: "Prototypes, custom software and emerging-tech R&D — turning new ideas into shippable products.",
  },
];

function Services() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yHeading = useParallax(scrollYProgress, -80);
  const yGrid = useParallax(scrollYProgress, 60);

  return (
    <section ref={ref} id="services" className="warm-bg py-28 md:py-40 px-6 md:px-12 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          style={{ y: yHeading }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">
              What we build
            </p>
            <h2 className="text-5xl md:text-7xl text-balance max-w-3xl">
              Engineering across the entire stack.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground text-lg">
            Six focused practices, one team. We pair design, engineering and
            operations so your product ships and keeps shipping.
          </p>
        </motion.div>
        <motion.div
          style={{ y: yGrid }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: (i % 3) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6 }}
              className="group relative rounded-3xl bg-card p-8 border border-border/60 hover:border-primary/40 transition-colors"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="text-2xl mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const steps = [
  { n: "01", t: "Discover", d: "We map your goals, users and constraints." },
  { n: "02", t: "Design", d: "Architecture, UX and a clear delivery plan." },
  { n: "03", t: "Build", d: "Iterative engineering with weekly demos." },
  { n: "04", t: "Launch", d: "Hardening, observability and go-live." },
  { n: "05", t: "Operate", d: "Support, evolution and continuous gains." },
];

function HowItWorks() {
  return (
    <section id="how" className="bg-tech-blue text-foreground py-28 md:py-40 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">
          How it works
        </p>
        <h2 className="text-5xl md:text-7xl mb-16 text-balance max-w-4xl text-foreground">
          Simple, fast & reliable delivery.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-foreground/10 rounded-3xl overflow-hidden">
          {steps.map((s) => (
            <div key={s.n} className="bg-tech-blue p-8 md:p-10">
              <div className="text-primary font-display text-2xl mb-12">{s.n}</div>
              <h3 className="text-3xl mb-3 text-foreground">{s.t}</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Showcase() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yImg = useParallax(scrollYProgress, -120);
  const yImgInner = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const yText = useParallax(scrollYProgress, -60);
  const rotate = useTransform(scrollYProgress, [0, 1], [-3, 3]);

  return (
    <section ref={ref} className="warm-bg py-28 md:py-40 px-6 md:px-12 overflow-hidden">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          style={{ y: yImg, rotate }}
          className="relative rounded-[2rem] overflow-hidden will-change-transform"
        >
          <div style={{ boxShadow: "var(--shadow-glow)" }} className="rounded-[2rem] overflow-hidden bg-gradient-to-br from-secondary to-background p-10 md:p-16 flex items-center justify-center">
            <motion.img
              src={logoImg}
              alt="3P Tech logo — circuit-board emblem"
              className="w-full max-w-[520px] h-auto object-contain will-change-transform drop-shadow-2xl"
              width={1200}
              height={1200}
              loading="lazy"
              style={{ y: yImgInner }}
            />
          </div>
        </motion.div>
        <motion.div style={{ y: yText }}>
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">
            Platform
          </p>
          <h2 className="text-5xl md:text-6xl mb-6 text-balance">
            Custom systems? Sure. AI agents? Check. Always-on support? Also
            check.
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg">
            From the first prototype to the platform powering thousands of
            users, 3P Tech is your long-term engineering partner.
          </p>
          <div className="grid grid-cols-2 gap-6 mb-10 max-w-md">
            {[
              { i: Zap, t: "Fast delivery" },
              { i: Shield, t: "Security first" },
              { i: Globe, t: "EU-based team" },
              { i: Sparkles, t: "AI native" },
            ].map((f) => (
              <div key={f.t} className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <f.i className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium">{f.t}</span>
              </div>
            ))}
          </div>
          <a
            href="#contact"
            className="inline-flex h-12 items-center rounded-full bg-primary text-primary-foreground px-7 font-medium hover:bg-primary/90 transition"
          >
            Learn more
            <ArrowUpRight className="ml-1 h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="warm-bg pb-28 md:pb-40 px-6 md:px-12">
      <div className="max-w-[1100px] mx-auto rounded-[2.5rem] bg-card border border-border/60 p-10 md:p-16" style={{ boxShadow: "var(--shadow-card)" }}>
        <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">
          About 3P Tech AB
        </p>
        <h2 className="text-4xl md:text-6xl mb-8 text-balance">
          A Gothenburg-based technology company.
        </h2>
        <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
          <p>
            3P Tech AB is a Gothenburg-based technology company that develops
            and delivers innovative technical solutions for both businesses and
            individuals. Our work spans:
          </p>
          <ul className="space-y-4 list-none">
            {[
              "Development of digital products such as applications, tech platforms, AI solutions and automated systems.",
              "Technical consulting in IT, digitalisation and system integration.",
              "Operations and management of technical services, including support, licensing and tailor-made systems.",
              "Product development connected to new technology, prototypes and bespoke software.",
            ].map((line) => (
              <li key={line} className="flex gap-4">
                <span className="mt-3 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                <span className="text-foreground/80">{line}</span>
              </li>
            ))}
          </ul>
          <p>
            Our purpose is to offer scalable, high-quality tech solutions that
            simplify, streamline and improve our customers' digital
            operations.
          </p>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="hero-bg px-6 md:px-12 py-28 md:py-40 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-5xl md:text-7xl text-primary-foreground text-balance mb-6">
          All your tech, in one team.
        </h2>
        <p className="text-primary-foreground/90 text-lg mb-10">
          Tell us about your project — we'll come back within one business day.
        </p>
        <a
          href="mailto:hello@3ptech.se"
          className="inline-flex h-14 items-center rounded-full bg-white text-primary px-8 text-base font-medium hover:scale-[1.02] transition"
        >
          hello@3ptech.se
          <ArrowUpRight className="ml-2 h-5 w-5" />
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-foreground text-background/70 px-6 md:px-12 py-16">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-8 justify-between items-start">
        <div>
          <div className="font-display text-3xl text-background mb-3">3P Tech AB</div>
          <p className="text-sm max-w-xs">
            Gothenburg, Sweden. Building software, AI and infrastructure for
            modern teams.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 text-sm">
          <div>
            <div className="text-background mb-3 font-medium">Company</div>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-background">About</a></li>
              <li><a href="#services" className="hover:text-background">Services</a></li>
              <li><a href="#contact" className="hover:text-background">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="text-background mb-3 font-medium">Solutions</div>
            <ul className="space-y-2">
              <li>AI & ML</li>
              <li>Custom software</li>
              <li>Cloud & DevOps</li>
            </ul>
          </div>
          <div>
            <div className="text-background mb-3 font-medium">Legal</div>
            <ul className="space-y-2">
              <li>Privacy</li>
              <li>Terms</li>
              <li>Cookies</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto border-t border-white/10 mt-12 pt-6 text-xs flex justify-between">
        <span>© {new Date().getFullYear()} 3P Tech AB. All rights reserved.</span>
        <span>Made in Gothenburg</span>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main>
      <Hero />
      <Services />
      <HowItWorks />
      <Showcase />
      <About />
      <CTA />
      <Footer />
    </main>
  );
}
