import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { u as useScroll, a as useTransform, m as motion, b as useSpring } from "../_libs/framer-motion.mjs";
import { A as ArrowUpRight, C as CodeXml, S as Sparkles, a as Cog, b as Cloud, c as Shield, d as Cpu, Z as Zap, G as Globe } from "../_libs/lucide-react.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const heroImg = "/assets/hero-discs-CLDPBQdf.jpg";
const logoImg = "/assets/logo-3ptech-BMHF_EjQ.png";
function useParallax(value, distance) {
  return useSpring(useTransform(value, [0, 1], [0, distance]), {
    stiffness: 80,
    damping: 20,
    mass: 0.4
  });
}
function Nav() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "absolute top-0 left-0 right-0 z-30 px-6 md:px-12 py-6 flex items-center justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#top", className: "flex items-center gap-2 text-primary-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoImg, alt: "3P Tech logo", className: "h-36 w-36 object-contain drop-shadow-xl", width: 288, height: 288 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "3P Tech" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden md:flex items-center gap-8 text-sm text-primary-foreground/90", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#services", className: "hover:text-primary-foreground", children: "Services" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#how", className: "hover:text-primary-foreground", children: "How it works" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#about", className: "hover:text-primary-foreground", children: "About" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", className: "hover:text-primary-foreground", children: "Contact" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "hidden sm:inline-flex h-10 items-center rounded-full px-5 text-sm text-primary-foreground/90 hover:bg-white/10 transition", children: "Sign in" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", className: "inline-flex h-10 items-center rounded-full bg-white text-primary px-5 text-sm font-medium hover:bg-white/90 transition", children: "Get started" })
    ] })
  ] });
}
function Hero() {
  const ref = reactExports.useRef(null);
  const {
    scrollYProgress
  } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const yImage = useParallax(scrollYProgress, 240);
  const yTitle = useParallax(scrollYProgress, -120);
  const ySub = useParallax(scrollYProgress, -60);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  useParallax(scrollYProgress, -180);
  useParallax(scrollYProgress, 320);
  useParallax(scrollYProgress, 180);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { ref, id: "top", className: "relative min-h-[100vh] overflow-hidden hero-bg", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.img, { src: heroImg, alt: "Glowing microchip and circuit board representing advanced computing", className: "absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90 will-change-transform", width: 1536, height: 1280, style: {
      y: yImage,
      scale
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/40" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { style: {
      opacity
    }, className: "relative z-10 px-6 md:px-12 pt-40 md:pt-56 pb-24 max-w-[1400px] mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h1, { style: {
        y: yTitle
      }, className: "font-display uppercase text-primary-foreground text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] text-balance max-w-5xl", children: [
        "One Tech Firm ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        " For All Your Builds"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { style: {
        y: ySub
      }, className: "mt-12 md:mt-24 flex flex-col md:flex-row md:items-end md:justify-between gap-8 max-w-5xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/90 text-lg md:text-xl max-w-md", children: "Software, AI and infrastructure for teams who ship serious products." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#contact", className: "inline-flex h-12 items-center rounded-full bg-white text-primary px-7 text-base font-medium hover:scale-[1.02] transition", children: [
            "Start a project",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "ml-1 h-4 w-4" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#services", className: "inline-flex h-12 items-center rounded-full border border-white/40 text-primary-foreground px-7 text-base hover:bg-white/10 transition", children: "Explore services" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-8 left-1/2 -translate-x-1/2 z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 rounded-full bg-black/20 backdrop-blur-md px-5 py-2 text-sm text-primary-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-80", children: "Personal" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-px bg-white/30" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-80", children: "Business" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-px bg-white/30" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-80", children: "Enterprise" })
    ] }) })
  ] });
}
const services = [{
  icon: CodeXml,
  title: "Application development",
  desc: "Web, mobile and cross-platform apps engineered for performance and built to scale with your users."
}, {
  icon: Sparkles,
  title: "AI & intelligent systems",
  desc: "From LLM-powered assistants to custom ML models, we ship AI features that move metrics, not demos."
}, {
  icon: Cog,
  title: "Automation & workflows",
  desc: "Replace repetitive work with reliable automation across your stack, integrations and back office."
}, {
  icon: Cloud,
  title: "Tech consulting",
  desc: "Strategy for IT, digitalisation and system integration — partnering with your team end to end."
}, {
  icon: Shield,
  title: "Operations & support",
  desc: "Hosting, licensing, monitoring and 24/7 support keep your services running and your customers happy."
}, {
  icon: Cpu,
  title: "Product engineering",
  desc: "Prototypes, custom software and emerging-tech R&D — turning new ideas into shippable products."
}];
function Services() {
  const ref = reactExports.useRef(null);
  const {
    scrollYProgress
  } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const yHeading = useParallax(scrollYProgress, -80);
  const yGrid = useParallax(scrollYProgress, 60);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { ref, id: "services", className: "warm-bg py-28 md:py-40 px-6 md:px-12 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1400px] mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { style: {
      y: yHeading
    }, className: "flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm uppercase tracking-[0.2em] text-primary mb-4", children: "What we build" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-5xl md:text-7xl text-balance max-w-3xl", children: "Engineering across the entire stack." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-md text-muted-foreground text-lg", children: "Six focused practices, one team. We pair design, engineering and operations so your product ships and keeps shipping." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { style: {
      y: yGrid
    }, className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: services.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.article, { initial: {
      opacity: 0,
      y: 60
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true,
      margin: "-80px"
    }, transition: {
      duration: 0.6,
      delay: i % 3 * 0.08,
      ease: [0.22, 1, 0.36, 1]
    }, whileHover: {
      y: -6
    }, className: "group relative rounded-3xl bg-card p-8 border border-border/60 hover:border-primary/40 transition-colors", style: {
      boxShadow: "var(--shadow-card)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-6 w-6" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl mb-3", children: s.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: s.desc })
    ] }, s.title)) })
  ] }) });
}
const steps = [{
  n: "01",
  t: "Discover",
  d: "We map your goals, users and constraints."
}, {
  n: "02",
  t: "Design",
  d: "Architecture, UX and a clear delivery plan."
}, {
  n: "03",
  t: "Build",
  d: "Iterative engineering with weekly demos."
}, {
  n: "04",
  t: "Launch",
  d: "Hardening, observability and go-live."
}, {
  n: "05",
  t: "Operate",
  d: "Support, evolution and continuous gains."
}];
function HowItWorks() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "how", className: "bg-tech-blue text-foreground py-28 md:py-40 px-6 md:px-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1400px] mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm uppercase tracking-[0.2em] text-primary mb-4", children: "How it works" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-5xl md:text-7xl mb-16 text-balance max-w-4xl text-foreground", children: "Simple, fast & reliable delivery." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-5 gap-px bg-foreground/10 rounded-3xl overflow-hidden", children: steps.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-tech-blue p-8 md:p-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary font-display text-2xl mb-12", children: s.n }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl mb-3 text-foreground", children: s.t }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/70 text-sm leading-relaxed", children: s.d })
    ] }, s.n)) })
  ] }) });
}
function Showcase() {
  const ref = reactExports.useRef(null);
  const {
    scrollYProgress
  } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const yImg = useParallax(scrollYProgress, -120);
  const yImgInner = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const yText = useParallax(scrollYProgress, -60);
  const rotate = useTransform(scrollYProgress, [0, 1], [-3, 3]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { ref, className: "warm-bg py-28 md:py-40 px-6 md:px-12 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { style: {
      y: yImg,
      rotate
    }, className: "relative rounded-[2rem] overflow-hidden will-change-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      boxShadow: "var(--shadow-glow)"
    }, className: "rounded-[2rem] overflow-hidden bg-gradient-to-br from-secondary to-background p-10 md:p-16 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.img, { src: logoImg, alt: "3P Tech logo — circuit-board emblem", className: "w-full max-w-[520px] h-auto object-contain will-change-transform drop-shadow-2xl", width: 1200, height: 1200, loading: "lazy", style: {
      y: yImgInner
    } }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { style: {
      y: yText
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm uppercase tracking-[0.2em] text-primary mb-4", children: "Platform" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-5xl md:text-6xl mb-6 text-balance", children: "Custom systems? Sure. AI agents? Check. Always-on support? Also check." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground mb-8 max-w-lg", children: "From the first prototype to the platform powering thousands of users, 3P Tech is your long-term engineering partner." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-6 mb-10 max-w-md", children: [{
        i: Zap,
        t: "Fast delivery"
      }, {
        i: Shield,
        t: "Security first"
      }, {
        i: Globe,
        t: "EU-based team"
      }, {
        i: Sparkles,
        t: "AI native"
      }].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(f.i, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: f.t })
      ] }, f.t)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#contact", className: "inline-flex h-12 items-center rounded-full bg-primary text-primary-foreground px-7 font-medium hover:bg-primary/90 transition", children: [
        "Learn more",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "ml-1 h-4 w-4" })
      ] })
    ] })
  ] }) });
}
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "about", className: "warm-bg pb-28 md:pb-40 px-6 md:px-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1100px] mx-auto rounded-[2.5rem] bg-card border border-border/60 p-10 md:p-16", style: {
    boxShadow: "var(--shadow-card)"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm uppercase tracking-[0.2em] text-primary mb-4", children: "About 3P Tech AB" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl md:text-6xl mb-8 text-balance", children: "A Gothenburg-based technology company." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5 text-lg text-muted-foreground leading-relaxed", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "3P Tech AB is a Gothenburg-based technology company that develops and delivers innovative technical solutions for both businesses and individuals. Our work spans:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-4 list-none", children: ["Development of digital products such as applications, tech platforms, AI solutions and automated systems.", "Technical consulting in IT, digitalisation and system integration.", "Operations and management of technical services, including support, licensing and tailor-made systems.", "Product development connected to new technology, prototypes and bespoke software."].map((line) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-3 h-1.5 w-1.5 rounded-full bg-primary shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/80", children: line })
      ] }, line)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Our purpose is to offer scalable, high-quality tech solutions that simplify, streamline and improve our customers' digital operations." })
    ] })
  ] }) });
}
function CTA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contact", className: "hero-bg px-6 md:px-12 py-28 md:py-40 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-5xl md:text-7xl text-primary-foreground text-balance mb-6", children: "All your tech, in one team." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/90 text-lg mb-10", children: "Tell us about your project — we'll come back within one business day." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "mailto:hello@3ptech.se", className: "inline-flex h-14 items-center rounded-full bg-white text-primary px-8 text-base font-medium hover:scale-[1.02] transition", children: [
      "hello@3ptech.se",
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "ml-2 h-5 w-5" })
    ] })
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "bg-foreground text-background/70 px-6 md:px-12 py-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1400px] mx-auto flex flex-col md:flex-row gap-8 justify-between items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl text-background mb-3", children: "3P Tech AB" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm max-w-xs", children: "Gothenburg, Sweden. Building software, AI and infrastructure for modern teams." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-10 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-background mb-3 font-medium", children: "Company" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#about", className: "hover:text-background", children: "About" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#services", className: "hover:text-background", children: "Services" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", className: "hover:text-background", children: "Contact" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-background mb-3 font-medium", children: "Solutions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "AI & ML" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Custom software" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Cloud & DevOps" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-background mb-3 font-medium", children: "Legal" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Privacy" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Terms" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Cookies" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1400px] mx-auto border-t border-white/10 mt-12 pt-6 text-xs flex justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " 3P Tech AB. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Made in Gothenburg" })
    ] })
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Services, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HowItWorks, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Showcase, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTA, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  Index as component
};
