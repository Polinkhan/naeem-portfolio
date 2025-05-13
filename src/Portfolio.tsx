import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import { motion } from "framer-motion";


const Portfolio = () => {
  const professionalExperience = [
    {
      title: "Marine IT Specialist & Electrician",
      company: "Nippon Steel Engineering",
      dates: "Jan 2020 - Now",
      responsibilities: [
        "Managed and maintained onboard and offshore IT infrastructure for critical marine operations.",
        "Installed, configured, and troubleshot network systems, including satellite and wireless communications.",
        "Provided technical support for navigation systems, server hardware, and specialized marine software.",
      ],
    },
    {
      title: "IT Officer & Store Supervisor",
      company: "PT. Petrus Indonesia",
      dates: "Jan 2018 - Dec 2020",
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
      dates: "Mar 2014 - Dec 2017",
      responsibilities: [
        "Provided front-line IT support for desktops, printers, local area networks, and user access issues.",
        "Installed and maintained software applications, operating systems, and office productivity tools.",
        "Helped manage IT inventory and documented all equipment movements and technical assets.",
      ],
    },
    {
      title: "IT Assistant",
      company: "PT. Petrus Indonesia",
      dates: "Feb 2012 - Feb 2014",
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
      items: [
        "IoT & Arduino",
        "Automation Tools",
        "Electrical Systems",
        "CCTV & VoIP",
      ],
    },
    {
      category: "Soft Skills",
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
    { name: "CCNA", issuer: "Cisco" },
    { name: "AWS Certified Solutions Architect", issuer: "Amazon" },
    { name: "Cyber Security Course", issuer: "Basics of Digital Security" },
    { name: "BOSIET + TSBB Certified", issuer: "Offshore Safety Training" },
    { name: "High Voltage Training", issuer: "Electrical Systems Safety" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <div className="container mx-auto px-4 py-16 space-y-20">
        {/* Header Section - Modernized */}
        <header className="relative">
          <div className="absolute inset-0 bg-teal-500/10 blur-3xl -z-10"></div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-8 py-20"
          >
            <Avatar className="w-40 h-40 mx-auto ring-4 ring-teal-500/20 shadow-xl" >
            <AvatarImage src="/profile.jpg" alt="naeemkhan" />
              <AvatarFallback className="bg-teal-100 text-teal-700 text-2xl">NK</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-6xl font-bold text-gray-800 mb-4">MD Naeem Khan</h1>
              <h2 className="text-2xl text-teal-600 font-medium">IT Engineer Specialist & Electrician</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="px-4 py-2 bg-teal-50 text-teal-700 hover:bg-teal-100">
                +8801730062298
              </Badge>
              <Badge className="px-4 py-2 bg-teal-50 text-teal-700 hover:bg-teal-100">
                alockkhan@gmail.com
              </Badge>
              <Badge className="px-4 py-2 bg-teal-50 text-teal-700 hover:bg-teal-100">
                Dhaka, Bangladesh
              </Badge>
            </div>
          </motion.div>
        </header>

        {/* About Section - Modernized */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-white/50 backdrop-blur-sm border-teal-100">
            <CardHeader>
              <CardTitle className="text-3xl text-teal-800">About Me</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-600 leading-relaxed">
              Experienced IT and Electrical Specialist with over a decade of hands-on experience in system maintenance,
              networking, automation, and electrical systems across marine, industrial, and ISP sectors. Adept at
              maintaining secure IT infrastructure in challenging environments and ensuring minimal downtime through
              efficient troubleshooting and proactive system management. Strong analytical skills with a passion for
              continuous learning and innovation.
              </p>
            </CardContent>
          </Card>
        </motion.section>

        {/* Experience Section - Modernized */}
        <section className="space-y-12">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
            Professional Experience
          </h2>
          <div className="grid gap-8">
            {professionalExperience.map((exp, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                key={index}
              >
                <Card className="group hover:shadow-lg transition-all duration-300 border-teal-100">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-2xl text-teal-700">{exp.title}</CardTitle>
                        <CardDescription className="text-teal-600">{exp.company}</CardDescription>
                      </div>
                      <Badge variant="outline" className="bg-teal-50 text-teal-700">
                        {exp.dates}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {exp.responsibilities.map((item, i) => (
                      <p key={i} className="text-gray-600 flex items-start space-x-2">
                        <span className="text-teal-500">•</span>
                        <span>{item}</span>
                      </p>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills Section - Modernized */}
        <section className="space-y-12">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
            Professional Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                key={index}
              >
                <Card className="h-full bg-white/50 backdrop-blur-sm border-teal-100">
                  <CardHeader>
                    <CardTitle className="text-xl text-teal-700">{skillGroup.category}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, i) => (
                      <Badge 
                        key={i} 
                        className="bg-teal-50 text-teal-700 hover:bg-teal-100"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Certifications Section - Modernized */}
        <section className="space-y-12 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
            Certifications
          </h2>
          <Card className="bg-white/50 backdrop-blur-sm border-teal-100">
            <CardContent className="divide-y divide-teal-100">
              {certifications.map((cert, index) => (
                <div key={index} className="py-4 first:pt-6 last:pb-6">
                  <h3 className="text-xl font-medium text-teal-700">{cert.name}</h3>
                  <p className="text-teal-600">{cert.issuer}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;