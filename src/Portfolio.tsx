import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Award,
  Briefcase,
  ChevronRight,
  Cpu,
  Mail,
  MapPin,
  Menu,
  Phone,
  Server,
  Shield,
  Sparkles,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import { Badge } from "./components/ui/badge";
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { cn } from "./lib/utils";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const STATS = [
  { value: "12+", label: "Years Experience" },
  { value: "5", label: "Certifications" },
  { value: "3", label: "Industry Sectors" },
  { value: "24/7", label: "Ops Support" },
];

const professionalExperience = [
  {
    title: "Marine IT Specialist & Electrician",
    company: "Nippon Steel Engineering",
    dates: "Jan 2020 — Present",
    icon: Server,
    responsibilities: [
      "Managed and maintained onboard and offshore IT infrastructure for critical marine operations.",
      "Installed, configured, and troubleshot network systems, including satellite and wireless communications.",
      "Provided technical support for navigation systems, server hardware, and specialized marine software.",
    ],
  },
  {
    title: "IT Officer & Store Supervisor",
    company: "PT. Petrus Indonesia",
    dates: "Jan 2018 — Dec 2020",
    icon: Briefcase,
    responsibilities: [
      "Delivered comprehensive tech support across hardware, software, and network systems in office and industrial setups.",
      "Created automated reporting tools and workflow systems using Visual Basic to streamline daily operations.",
      "Managed all IT and office assets, ensuring accurate documentation and secure inventory storage.",
      "Minimized infrastructure downtime through preventive maintenance and rapid issue resolution.",
    ],
  },
  {
    title: "IT Support Technician",
    company: "PT. Petrus Indonesia",
    dates: "Mar 2014 — Dec 2017",
    icon: Wrench,
    responsibilities: [
      "Provided front-line IT support for desktops, printers, local area networks, and user access issues.",
      "Installed and maintained software applications, operating systems, and office productivity tools.",
      "Helped manage IT inventory and documented all equipment movements and technical assets.",
    ],
  },
  {
    title: "IT Assistant",
    company: "PT. Petrus Indonesia",
    dates: "Feb 2012 — Feb 2014",
    icon: Cpu,
    responsibilities: [
      "Assisted senior IT personnel in setting up and maintaining hardware and structured cabling.",
      "Troubleshot basic issues with desktop PCs, network switches, and printers.",
      "Built foundational skills in hardware, networking, and IT service processes.",
    ],
  },
];

const skills = [
  {
    category: "IT Infrastructure",
    icon: Server,
    items: [
      "Secure Systems",
      "Marine Environments",
      "Network Systems",
      "Satellite Systems",
      "Advanced Networking",
    ],
  },
  {
    category: "Automation & IoT",
    icon: Zap,
    items: [
      "IoT & Arduino",
      "Automation Tools",
      "Electrical Systems",
      "CCTV & VoIP",
    ],
  },
  {
    category: "Soft Skills",
    icon: Sparkles,
    items: [
      "Adaptability",
      "Collaboration",
      "Communication",
      "Problem-Solving",
      "Learning Agility",
    ],
  },
];

const certifications = [
  { name: "CCNA", issuer: "Cisco", icon: Shield },
  { name: "AWS Certified Solutions Architect", issuer: "Amazon", icon: Server },
  { name: "Cyber Security Course", issuer: "Basics of Digital Security", icon: Shield },
  { name: "BOSIET + TSBB Certified", issuer: "Offshore Safety Training", icon: Award },
  { name: "High Voltage Training", issuer: "Electrical Systems Safety", icon: Zap },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
};

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "glass shadow-lg shadow-black/20" : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="font-mono text-sm font-medium tracking-tight text-primary">
          naeem<span className="text-foreground">.dev</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <Button asChild size="sm" className="hidden md:inline-flex">
          <a href="mailto:alockkhan@gmail.com">
            <Mail className="size-4" />
            Get in touch
          </a>
        </Button>

        <button
          type="button"
          className="rounded-lg p-2 text-muted-foreground hover:bg-secondary md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass border-t border-border/60 px-4 py-4 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button asChild className="w-full">
                <a href="mailto:alockkhan@gmail.com">Get in touch</a>
              </Button>
            </li>
          </ul>
        </motion.div>
      )}
    </header>
  );
}

function SectionHeading({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div {...fadeUp} className="mb-12 max-w-2xl">
      <p className="mb-2 font-mono text-xs font-medium uppercase tracking-widest text-primary">
        {label}
      </p>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-3 text-base text-muted-foreground sm:text-lg">{description}</p>
      )}
    </motion.div>
  );
}

const Portfolio = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute -right-32 top-1/3 h-[400px] w-[400px] rounded-full bg-cyan-500/8 blur-[100px]" />
        <div className="absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-emerald-500/6 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.97 0.01 260) 1px, transparent 1px), linear-gradient(90deg, oklch(0.97 0.01 260) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <Navbar />

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-4 pb-20 pt-32 sm:px-6 sm:pt-40">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="outline" className="mb-6 border-primary/30 bg-primary/10 text-primary">
                <span className="mr-1.5 inline-block size-1.5 animate-pulse rounded-full bg-primary" />
                Available for opportunities
              </Badge>

              <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                MD Naeem Khan
              </h1>
              <p className="mt-4 text-xl font-medium text-gradient sm:text-2xl">
                IT Engineer Specialist & Electrician
              </p>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Building and maintaining secure infrastructure across marine, industrial,
                and enterprise environments — with over a decade of hands-on expertise.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <a href="#experience">
                    View experience
                    <ChevronRight className="size-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#contact">Contact me</a>
                </Button>
              </div>

              <div className="mt-10 flex flex-wrap gap-4 text-sm text-muted-foreground">
                <a
                  href="tel:+8801730062298"
                  className="flex items-center gap-2 transition-colors hover:text-primary"
                >
                  <Phone className="size-4 text-primary" />
                  +880 1730 062298
                </a>
                <a
                  href="mailto:alockkhan@gmail.com"
                  className="flex items-center gap-2 transition-colors hover:text-primary"
                >
                  <Mail className="size-4 text-primary" />
                  alockkhan@gmail.com
                </a>
                <span className="flex items-center gap-2">
                  <MapPin className="size-4 text-primary" />
                  Dhaka, Bangladesh
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative mx-auto lg:mx-0"
            >
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl" />
              <div className="relative glow rounded-full p-1.5 ring-1 ring-primary/30">
                <Avatar className="size-48 sm:size-56 lg:size-64">
                  <AvatarImage src="/profile.jpg" alt="MD Naeem Khan" />
                  <AvatarFallback className="bg-linear-to-br from-primary/30 to-cyan-500/20 text-4xl font-bold text-primary">
                    NK
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="absolute -bottom-4 -right-2 glass rounded-xl px-4 py-2.5 shadow-xl sm:-right-4">
                <p className="font-mono text-2xl font-bold text-primary">12+</p>
                <p className="text-xs text-muted-foreground">Years in IT</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            {...fadeUp}
            className="mt-20 grid grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="glass rounded-xl px-4 py-5 text-center transition-colors hover:border-primary/30"
              >
                <p className="font-mono text-2xl font-bold text-primary sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </section>

        {/* About */}
        <section id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading
            label="About"
            title="Engineering reliability in demanding environments"
          />
          <motion.div {...fadeUp}>
            <Card className="glass overflow-hidden border-border/60">
              <CardContent className="grid gap-8 p-6 sm:p-10 lg:grid-cols-5 lg:gap-12">
                <div className="lg:col-span-2">
                  <p className="text-5xl font-bold leading-none text-primary/20">"</p>
                  <p className="text-lg font-medium leading-relaxed sm:text-xl">
                    Turning complex infrastructure challenges into stable, secure systems.
                  </p>
                </div>
                <div className="space-y-4 text-muted-foreground lg:col-span-3">
                  <p className="leading-relaxed">
                    Experienced IT and Electrical Specialist with over a decade of hands-on
                    experience in system maintenance, networking, automation, and electrical
                    systems across marine, industrial, and ISP sectors.
                  </p>
                  <p className="leading-relaxed">
                    Adept at maintaining secure IT infrastructure in challenging environments and
                    ensuring minimal downtime through efficient troubleshooting and proactive
                    system management. Strong analytical skills with a passion for continuous
                    learning and innovation.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Experience */}
        <section id="experience" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading
            label="Experience"
            title="Professional journey"
            description="A track record of growing responsibility across marine and industrial IT operations."
          />

          <div className="relative space-y-0">
            <div className="absolute left-[19px] top-2 hidden h-[calc(100%-16px)] w-px bg-linear-to-b from-primary/60 via-border to-transparent sm:block" />

            {professionalExperience.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={index}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="relative flex gap-6 pb-10 last:pb-0"
                >
                  <div className="relative z-10 hidden shrink-0 sm:flex">
                    <div className="flex size-10 items-center justify-center rounded-full border border-primary/40 bg-card shadow-lg shadow-primary/10">
                      <Icon className="size-4 text-primary" />
                    </div>
                  </div>

                  <Card className="glass flex-1 border-border/60 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                    <CardHeader className="pb-3">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <CardTitle className="text-lg sm:text-xl">{exp.title}</CardTitle>
                          <CardDescription className="mt-1 text-primary/80">
                            {exp.company}
                          </CardDescription>
                        </div>
                        <Badge
                          variant="outline"
                          className="w-fit shrink-0 border-primary/20 bg-primary/5 font-mono text-xs text-primary"
                        >
                          {exp.dates}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2.5">
                        {exp.responsibilities.map((item, i) => (
                          <li
                            key={i}
                            className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                          >
                            <ChevronRight className="mt-0.5 size-4 shrink-0 text-primary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading
            label="Skills"
            title="Technical expertise"
            description="Core competencies honed across infrastructure, automation, and cross-functional collaboration."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {skills.map((group, index) => {
              const Icon = group.icon;
              return (
                <motion.div key={index} {...fadeUp} transition={{ delay: index * 0.1 }}>
                  <Card className="glass h-full border-border/60 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                    <CardHeader>
                      <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="size-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{group.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {group.items.map((skill, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="bg-secondary/80 text-secondary-foreground hover:bg-primary/15 hover:text-primary"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading
            label="Certifications"
            title="Credentials & training"
            description="Industry-recognized certifications across networking, cloud, security, and safety."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <motion.div key={index} {...fadeUp} transition={{ delay: index * 0.08 }}>
                  <Card className="glass group h-full border-border/60 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                    <CardContent className="flex items-start gap-4 p-6">
                      <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                        <Icon className="size-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold leading-snug">{cert.name}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{cert.issuer}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <motion.div {...fadeUp}>
            <Card className="glass overflow-hidden border-primary/20">
              <CardContent className="relative p-8 text-center sm:p-14">
                <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-cyan-500/5" />
                <div className="relative">
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Let's work together
                  </h2>
                  <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
                    Open to IT engineering roles, infrastructure projects, and consulting
                    opportunities in marine, industrial, and enterprise settings.
                  </p>
                  <div className="mt-8 flex flex-wrap justify-center gap-3">
                    <Button asChild size="lg">
                      <a href="mailto:alockkhan@gmail.com">
                        <Mail className="size-4" />
                        alockkhan@gmail.com
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <a href="tel:+8801730062298">
                        <Phone className="size-4" />
                        +880 1730 062298
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-border/60 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-muted-foreground sm:flex-row sm:px-6">
          <p>
            © {new Date().getFullYear()} MD Naeem Khan. All rights reserved.
          </p>
          <p className="font-mono text-xs">Built with React & Vite</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
