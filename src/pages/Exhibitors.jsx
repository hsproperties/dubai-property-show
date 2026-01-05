import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Building2,
  Star,
  MapPin,
  Phone,
  Mail,
  Globe,
  ArrowRight,
  Users,
  Award,
  TrendingUp,
  Eye,
  CheckCircle,
  Clock,
  Calendar,
  Target,
} from "lucide-react";
import AnimatedCounter from "../components/sections/AnimatedCounter";

const ExhibitorCard = ({ exhibitor, delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      <Card className="relative group h-full hover:shadow-2<xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2 bg-white border-0 shadow-lg">
        <span className="absolute top-11 right-3 bg-gray-100 rounded-lg px-2 py-1 text-sm font-semibold bg-gradient-to-r from-[#073c75] to-[#51779e] hover:from-[#073c75] hover:to-[#51779e] text-white">
          Booth {exhibitor.booth}
        </span>
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between mb-4">
            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300 p-2">
              {/* <Building2 className="text-white" size={28} /> */}
              <img src={exhibitor.logo} alt={exhibitor.name} />
            </div>
            {/* <Badge className={`bg-[#073c75] text-white`}>
              {exhibitor.tier}
            </Badge> */}
          </div>

          <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-[#073c75] transition-colors mb-2">
            {exhibitor.name}
          </CardTitle>

          {/* <div className="flex items-center text-gray-500 mb-3">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="text-sm">{exhibitor.location}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center text-yellow-400">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm text-gray-600 ml-1">
                {exhibitor.rating}
              </span>
            </div>
            <div className="text-sm text-gray-500">
              {exhibitor.projectsCount} Projects
            </div>
          </div> */}
        </CardHeader>

        <CardContent>
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
            {exhibitor.description}
          </p>

          {/* Specialties */}
          {/* <div className="flex flex-wrap gap-2 mb-6">
            {exhibitor.specialties.map((specialty, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {specialty}
              </Badge>
            ))}
          </div> */}

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
            <div className="text-center">
              <div className="text-lg font-bold text-[#073c75]">
                <AnimatedCounter end={exhibitor.yearsExperience} suffix="+" />
              </div>
              <div className="text-xs text-gray-500">Years</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-[#073c75]">
                <AnimatedCounter end={exhibitor.completedProjects} suffix="+" />
              </div>
              <div className="text-xs text-gray-500">Delivered</div>
            </div>
          </div>

          {/* Contact Actions */}
          <div className="space-y-2">
            <Button
              size="sm"
              className="w-full group/btn bg-gradient-to-r from-[#073c75] to-[#51779e] hover:from-[#073c75] hover:to-[#51779e] text-white"
            >
              Visit Booth
              <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="flex-1"
                onClick={() => window.open(`tel:${exhibitor.phone}`, "_blank")}
              >
                <Phone className="w-4 h-4 mr-1" />
                Call
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex-1"
                onClick={() =>
                  window.open(`mailto:${exhibitor.email}`, "_blank")
                }
              >
                <Mail className="w-4 h-4 mr-1" />
                Email
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex-1"
                onClick={() => window.open(exhibitor.website, "_blank")}
              >
                <Globe className="w-4 h-4 mr-1" />
                Website
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Exhibitors = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  const categories = [
    "All",
    "Luxury",
    "Residential",
    "Commercial",
    "Mixed-Use",
  ];

  // Sample exhibitors data
  // const exhibitors = [
  //   {
  //     id: 1,
  //     name: "Emaar Properties",
  //     logo: "/brand-logos/emaar-logo.svg",
  //     location: "Downtown Dubai",
  //     rating: 4.9,
  //     projectsCount: 25,
  //     tier: "Platinum",
  //     yearsExperience: "25",
  //     completedProjects: "100",
  //     description:
  //       "Leading real estate developer in Dubai, creator of iconic landmarks including Burj Khalifa and Dubai Mall.",
  //     specialties: ["Luxury", "Residential", "Commercial"],
  //     category: "Luxury",
  //   },
  //   {
  //     id: 2,
  //     name: "DAMAC Properties",
  //     logo: "/brand-logos/damac-logo.svg",
  //     location: "Business Bay",
  //     rating: 4.8,
  //     projectsCount: 18,
  //     tier: "Premium",
  //     yearsExperience: "20",
  //     completedProjects: "80",
  //     description:
  //       "Luxury real estate developer known for high-end residential and commercial projects across prime Dubai locations.",
  //     specialties: ["Luxury", "Residential", "Hotels"],
  //     category: "Luxury",
  //   },
  //   {
  //     id: 3,
  //     name: "Dubai Properties",
  //     logo: "/brand-logos/dp-logo.svg",
  //     location: "JBR",
  //     rating: 4.7,
  //     projectsCount: 22,
  //     tier: "Premium",
  //     yearsExperience: "18",
  //     completedProjects: "65",
  //     description:
  //       "Subsidiary of Dubai Holding, developing premium residential and commercial properties across Dubai.",
  //     specialties: ["Residential", "Commercial", "Mixed-Use"],
  //     category: "Residential",
  //   },
  //   {
  //     id: 4,
  //     name: "Nakheel",
  //     logo: "/brand-logos/nakheel-logo.svg",
  //     location: "Palm Jumeirah",
  //     rating: 4.8,
  //     projectsCount: 15,
  //     tier: "Platinum",
  //     yearsExperience: "22",
  //     completedProjects: "50",
  //     description:
  //       "Master developer behind iconic projects like Palm Jumeirah, creating unique waterfront communities.",
  //     specialties: ["Luxury", "Waterfront", "Master Communities"],
  //     category: "Luxury",
  //   },
  //   {
  //     id: 5,
  //     name: "Sobha Realty",
  //     logo: "/brand-logos/shoba-logo.svg",
  //     location: "Mohammed Bin Rashid City",
  //     rating: 4.6,
  //     projectsCount: 12,
  //     tier: "Premium",
  //     yearsExperience: "15",
  //     completedProjects: "35",
  //     description:
  //       "Premium developer focused on creating luxury residential communities with world-class amenities.",
  //     specialties: ["Luxury", "Residential", "Villas"],
  //     category: "Residential",
  //   },
  //   {
  //     id: 6,
  //     name: "Meraas",
  //     logo: "/brand-logos/meras-logo.svg",
  //     location: "Dubai Marina",
  //     rating: 4.7,
  //     projectsCount: 20,
  //     tier: "Premium",
  //     yearsExperience: "12",
  //     completedProjects: "45",
  //     description:
  //       "Innovative developer creating lifestyle destinations that blend residential, retail, and entertainment with world-class amenities.",
  //     specialties: ["Mixed-Use", "Entertainment", "Retail"],
  //     category: "Mixed-Use",
  //   },
  // ];

  // const exhibitors = [
  //   {
  //     id: 1,
  //     name: "DAMAC Properties",
  //     logo: "/brand-logos/damac-logo.svg",
  //     location: "Downtown Dubai",
  //     rating: 4.9,
  //     projectsCount: 187,
  //     tier: "Platinum",
  //     yearsExperience: "20",
  //     completedProjects: "170",
  //     description:
  //       "The DAMAC Group of Companies established its property development division with the formation of DAMAC Properties in 2002, which has since grown and expanded to become a globally recognised brand.",
  //     specialties: ["Luxury", "Residential", "Commercial"],
  //     category: "Luxury",
  //     website: "https://www.damacproperties.com/",
  //     email: "connect@damacgroup.com",
  //     phone: "+971 4 409 4444",
  //   },
  //   {
  //     id: 2,
  //     name: "Sobha Realty",
  //     logo: "/brand-logos/sobha-logo.svg",
  //     location: "Dubai, UAE",
  //     rating: 4.7,
  //     projectsCount: "100+ projects in Dubai & UAE",
  //     tier: "Premium",
  //     yearsExperience: "47",
  //     completedProjects: "400",
  //     description:
  //       "Sobha Realty is a luxury real estate developer headquartered in Dubai, with roots dating back to 1976 when it was founded in Oman by P.N.C. Menon.",
  //     specialties: [
  //       "Luxury Residential",
  //       "Villas",
  //       "Master Communities",
  //       "Waterfront Projects",
  //     ],
  //     category: "Residential",
  //     website: "https://sobharealty.com/",
  //     email: "helpdesk@sobharealty.com",
  //     phone: "+971 800 76242",
  //   },

  //   {
  //     id: 3,
  //     name: "Binghatti",
  //     logo: "/brand-logos/binghatti-logo.svg",
  //     location: "Dubai, UAE",
  //     rating: 4.7,
  //     projectsCount: 100,
  //     tier: "Premium",
  //     yearsExperience: "18",
  //     completedProjects: "80",
  //     description:
  //       "Binghatti is a Dubai-based real estate developer known for distinctive, design-led architecture and branded luxury collaborations (e.g., BUGATTI, Mercedes-Benz, Jacob & Co.), with a track record of delivering developments ahead of schedule.",
  //     specialties: [
  //       "Luxury Residential",
  //       "Branded Residences",
  //       "Premium Apartments",
  //       "Design-Led Architecture",
  //     ],
  //     category: "Luxury",
  //     website: "https://www.binghatti.com",
  //     email: "uksales@binghatti.com",
  //     phone: "+97180015",
  //   },
  //   {
  //     id: 4,
  //     name: "BNW Developments",
  //     logo: "/brand-logos/bnw-logo.svg",
  //     location: "Dubai & Ras Al Khaimah, UAE",
  //     rating: 4.8,
  //     projectsCount: 6,
  //     tier: "Premium",
  //     yearsExperience: "3",
  //     completedProjects: "2",
  //     description:
  //       "BNW Developments is a fast-growing luxury real estate developer in the UAE shaping iconic residencies and premium communities in Dubai and Ras Al Khaimah. With a gross development value exceeding AED 30+ billion, BNW focuses on high-quality design, strategic locations and branded partnerships, delivering modern residential, mixed-use and waterfront projects that appeal to investors and lifestyle homeowners alike.",
  //     specialties: ["Luxury", "Waterfront", "Master Communities"],
  //     category: "Luxury",
  //     website: "https://bnw.ae/en",
  //     email: "info@bnw.ae",
  //     phone: "+971-54-999-4155",
  //   },
  //   {
  //     id: 5,
  //     name: "One Development",
  //     logo: "/brand-logos/one-dev-logo.svg",
  //     location: "Dubai & Abu Dhabi",
  //     rating: 4.7,
  //     projectsCount: 4,
  //     tier: "Premium",
  //     yearsExperience: "3",
  //     completedProjects: "1",
  //     description:
  //       "One Development (ONE) is a boutique UAE real estate developer focused on creating future-ready, innovation-driven living spaces and communities. The company blends smart technology, sustainable design, and modern lifestyles into its developments, with flagship projects such as Laguna Residence and ONE Residence shaping its emerging presence in Dubai and Abu Dhabi.",
  //     specialties: ["Luxury", "Residential", "Villas"],
  //     category: "Residential",
  //     website: "https://oneuae.com/",
  //     email: "info@oneuae.com",
  //     phone: "+800 663 338",
  //   },
  //   {
  //     id: 6,
  //     name: "Pantheon Development",
  //     logo: "/brand-logos/pantheon-dev-logo.svg",
  //     location: "Dubai Marina",
  //     rating: 4.7,
  //     projectsCount: 6,
  //     tier: "Premium",
  //     yearsExperience: "10",
  //     completedProjects: "4",
  //     description:
  //       "Pantheon Development is a UAE real estate developer delivering design-led residential and mixed-use projects across Dubai and expanding into Ras Al Khaimah. Its portfolio includes the Pantheon Elysee series, Maison Elysee, Elysee Heights, Pantheon Boulevard, and One Central at RAK Central.",
  //     specialties: ["Residential", "Mixed-Use", "Lifestyle Communities"],
  //     category: "Residential",
  //     website: "https://pantheondevelopment.ae",
  //     email: "info@pered.ae",
  //     phone: "+971 4 523 5235",
  //   },
  //   {
  //     id: 6,
  //     name: "Citi Developers",
  //     logo: "/brand-logos/citi-dev-logo.svg",
  //     location: "Dubai, UAE",
  //     rating: 4.9,
  //     projectsCount: 4,
  //     tier: "Premium",
  //     yearsExperience: "10",
  //     completedProjects: "1",
  //     description:
  //       "Pantheon Development is a UAE real estate developer delivering design-led residential and mixed-use projects across Dubai and expanding into Ras Al Khaimah. Its portfolio includes the Pantheon Elysee series, Maison Elysee, Elysee Heights, Pantheon Boulevard, and One Central at RAK Central.",
  //     specialties: [
  //       "Luxury Residential",
  //       "Urban Living",
  //       "Design-Led Communities",
  //       "Innovation",
  //     ],
  //     category: "Luxury",
  //     website: "https://citideveloper.com/",
  //     email: "Hello@citideveloper.com",
  //     phone: "+80044440",
  //   },
  //   {
  //     id: 8,
  //     name: "Object One Developers",
  //     logo: "/brand-logos/object-1-logo.svg",
  //     location: "Dubai, UAE",
  //     rating: 4.9,
  //     projectsCount: 10,
  //     tier: "Premium",
  //     yearsExperience: "14",
  //     completedProjects: "6",
  //     description:
  //       "Object 1 (Object One Developers) is a fast-growing real estate developer in Dubai that blends contemporary architecture and urban living concepts. Part of international TSZ Group, it aims to make real estate akin to a gallery of modern architecture, with projects focused on quality design and lifestyle-oriented communities in high-growth areas such as Jumeirah Village Circle, Jumeirah Village Triangle and DubaiLand. Its portfolio includes RA1N Residence, EVERGR1N House, LUM1NAR Towers, W1NNER Tower and more.",
  //     specialties: [
  //       "Luxury Residential",
  //       "Urban Living",
  //       "Design-Led Communities",
  //       "Innovation",
  //     ],
  //     category: "Luxury",
  //     website: "https://www.object-1.com/",
  //     email: "info@object-1.com",
  //     phone: "+971 52 381 0148",
  //   },
  //   {
  //     id: 10,
  //     name: "Tiger Group  ",
  //     logo: "/brand-logos/tiger-logo.svg",
  //     location: "Dubai, UAE",
  //     rating: 4.9,
  //     projectsCount: 270,
  //     tier: "Premium",
  //     yearsExperience: "48",
  //     completedProjects: "270",
  //     description:
  //       "Tiger Group is one of the oldest and most respected real estate developers in the UAE, founded in 1976 with over 40 years of combined experience. The group has completed more than 270 projects and expanded operations into multiple sectors including real estate, construction, hospitality, manufacturing, education and healthcare. Tiger Properties, its real estate arm, delivers residential, commercial and mixed-use developments throughout the UAE, with a strong focus on quality, innovation, and long-term value.",
  //     specialties: [
  //       "Luxury Residential",
  //       "Urban Living",
  //       "Design-Led Communities",
  //       "Innovation",
  //     ],
  //     category: "Mixed-Use",
  //     website: "https://www.tigergroup.ae/",
  //     email: "contact@tigergroup.ae",
  //     phone: "+971 800 300 300",
  //   },
  //   {
  //     id: 11,
  //     name: "Lington Properties",
  //     logo: "/brand-logos/ellington-logo.svg",
  //     location: "Business Bay, Dubai, UAE",
  //     rating: 4.4,
  //     projectsCount: 30,
  //     tier: "Premium",
  //     yearsExperience: "12",
  //     completedProjects: "20",
  //     description:
  //       "Ellington Properties is a design-led boutique real estate developer in Dubai, known for premium residential communities that blend architectural finesse with lifestyle-centered design. Since its founding in 2014, Ellington has delivered and launched numerous luxury developments across key Dubai districts such as Palm Jumeirah, MBR City, JVC, Dubai South and Business Bay, focusing on quality, innovation and artistic expression in urban living.",
  //     specialties: [
  //       "Design-Led Residential",
  //       "Luxury Communities",
  //       "Modern Architecture",
  //       "Investment Properties",
  //     ],
  //     category: "Residential",
  //     website: "https://ellingtonproperties.ae/",
  //     email: "info@ellingtongroup.com",
  //     phone: "+971 4 278 0888",
  //   },
  //   {
  //     id: 12,
  //     name: "BEYOND Developments",
  //     logo: "/brand-logos/beyond-logo.svg",
  //     location: "Dubai, UAE",
  //     rating: 4.6,
  //     projectsCount: 13,
  //     tier: "Premium",
  //     yearsExperience: "1",
  //     completedProjects: "2",
  //     description:
  //       "BEYOND is OMNIYAT Group’s premium real estate brand, focused on design-led, nature-inspired communities and on-time delivery across waterfront and urban locations in Dubai.",
  //     specialties: ["Luxury", "Waterfront", "Residential", "Commercial"],
  //     category: "Luxury",
  //     website: "https://beyonddevelopments.ae",
  //     email: "enquiries@beyondproperties.ae",
  //     phone: "+971 56 578 7777",
  //   },
  //   {
  //     id: 13,
  //     name: "Major Developments",
  //     logo: "/brand-logos/major-logo.svg",
  //     location: "Dubai & Ras Al Khaimah, UAE",
  //     rating: 4.7,
  //     projectsCount: 3,
  //     tier: "Premium",
  //     yearsExperience: "2",
  //     completedProjects: "1",
  //     description:
  //       "Major Developments is a Dubai-based real estate developer focused on lifestyle-driven residential and waterfront communities in the UAE. The company is known for flagship projects such as Manta Bay on Al Marjan Island and Colibri Views in RAK Central, blending innovative design with premium living and investment appeal. It aims to set new standards of sustainable and experiential living.",
  //     specialties: [
  //       "Residential",
  //       "Lifestyle Communities",
  //       "Waterfront Living",
  //       "Investment-Oriented Projects",
  //     ],
  //     category: "Residential",
  //     website: "https://majordevelopments.ae/",
  //     email: "communications@major.estate",
  //     phone: "+971 (04) 572 6850",
  //   },
  //   {
  //     id: 13,
  //     name: "ANAX Developments",
  //     logo: "/brand-logos/anex-logo.svg",
  //     location: "Dubai, UAE",
  //     rating: 4.7,
  //     projectsCount: 10,
  //     tier: "Premium",
  //     yearsExperience: "2",
  //     completedProjects: "1",
  //     description:
  //       "ANAX Developments is a dynamic Dubai-based real estate developer focused on contemporary residential living in prime locations such as Business Bay, Al Furjan, and Dubai Islands. Founded in 2023 as part of ANAX Holding, the company emphasizes modern design, smart living features, and premium urban communities. Flagship and upcoming projects include V-Suites in Business Bay, Evora Residences in Al Furjan, and ELLE Residences on Dubai Islands.",
  //     specialties:[
  //       "Residential Towers",
  //       "Branded Residences",
  //       "Smart Living Features",
  //       "Premium Urban Locations"
  //     ],
  //     category: "Residential",
  //     website: "https://anaxdevelopments.com/",
  //     email: "sales@anaxdevelopments.com",
  //     phone: "+971 800 2629",
  //   },
  //   {
  //     id: 15,
  //     name: "Ardee Developments",
  //     logo: "/brand-logos/ardee-logo.svg",
  //     location: "Dubai & Ras Al Khaimah, UAE",
  //     rating: 4.7,
  //     projectsCount: 1,
  //     tier: "Premium",
  //     yearsExperience: "1",
  //     completedProjects: "1",
  //     description:
  //       "Ardee Developments is a UAE-based real estate developer that combines world-class partnerships and innovative master planning to create modern luxury communities. Its flagship project, Ardee Al Marjan Island in Ras Al Khaimah, integrates branded residences, hospitality, retail, leisure and waterfront living in a single vibrant destination. The company works with global names such as Fairmont Hotels & Resorts to elevate lifestyle and investment appeal.",
  //     specialties:[
  //       "Luxury Residential",
  //       "Waterfront Master Planned",
  //       "Branded Residences",
  //       "Mixed-Use Living"
  //     ],
  //     category: "Mixed-Use",
  //     website: "https://ardee.ae/",
  //     email: "info@ardeealmarjanislandproperties.com",
  //     phone: "",
  //   },
  //   {
  //     id: 14,
  //     name: "Avenew Development",
  //     logo: "/brand-logos/avenew-logo.svg",
  //     location: "Dubai, UAE",
  //     rating: 4.7,
  //     projectsCount: 1,
  //     tier: "Premium",
  //     yearsExperience: "1",
  //     completedProjects: "1",
  //     description:
  //       "Avenew Development is a boutique real estate developer in Dubai focused on creating contemporary residential projects that emphasize refined design, lifestyle comfort, and long-term investment value. The brand positions itself around thoughtfully curated living spaces in prime urban locations, catering to modern homeowners and investors seeking quality over volume.",
  //     specialties:[
  //       "Residential Development",
  //       "Boutique Projects",
  //       "Modern Architecture",
  //       "Urban Living"
  //     ],
  //     category: "Residential",
  //     website: "https://www.avenewdevelopment.ae/",
  //     email: "info@avenew.ae",
  //     phone: "+971 506 856 280",
  //   },
  //   {
  //     id: 14,
  //     name: "AYS Developers",
  //     logo: "/brand-logos/ays-logo.svg",
  //     location: "Dubai, UAE",
  //     rating: 5,
  //     projectsCount: 4,
  //     tier: "Premium",
  //     yearsExperience: "1",
  //     completedProjects: "1",
  //     description:
  //       "AYS Developers is a Dubai-based real estate developer focused on luxury and lifestyle residential projects in prime communities such as Dubai Islands, Jumeirah Village Circle (JVC) and Arjan. The portfolio includes developments like Breva, Tivanno and the Q Gardens collection, blending modern design, quality finishes and strong investment appeal. AYS emphasizes sustainable and smart living within vibrant urban environments.",
  //     specialties: [
  //       "Luxury Residential",
  //       "Waterfront Living",
  //       "Urban Communities",
  //       "Smart & Sustainable Design"
  //     ],
  //     category: "Residential",
  //     website: "https://aysdevelopers.ae/",
  //     email: "info@aysdevelopers.com",
  //     phone: "+971 506 856 280",
  //   },
  //   {
  //     id: 15,
  //     name: "Prescott Development",
  //     logo: "/brand-logos/prescott-logo.svg",
  //     location: "Dubai, UAE",
  //     rating: 5,
  //     projectsCount: 20,
  //     tier: "Premium",
  //     yearsExperience: "18",
  //     completedProjects: "10",
  //     description:
  //       "Prescott Real Estate Development is a Dubai-based property developer established in 2006, focused on crafting quality residential and mixed-use communities across prime locations in the UAE. With a legacy spanning almost two decades, Prescott combines thoughtful design, smart home features and practical layouts to deliver homes that balance lifestyle, investment value and ongoing community growth. Its portfolio includes both completed communities and active off-plan developments in JVC, Al Furjan, Arjan, Meydan and Dubai Studio City.",
  //     specialties: [
  //       "Luxury Residential",
  //       "Waterfront Living",
  //       "Urban Communities",
  //       "Smart & Sustainable Design"
  //     ],
  //     category: "Residential",
  //     website: "https://prescott.ae/",
  //     email: "info@prescott.ae",
  //     phone: "+971 4 399 9936",
  //   },
  // ];

  const exhibitors = [
    {
      id: 1,
      booth: 1,
      name: "DAMAC Properties",
      logo: "/brand-logos/damac-logo.svg",
      location: "Downtown Dubai",
      rating: 4.9,
      projectsCount: 187,
      tier: "Platinum",
      yearsExperience: "20",
      completedProjects: "170",
      description:
        "DAMAC Properties, founded in 2002, is a globally recognised developer delivering luxury residential, commercial and mixed-use projects across Dubai and international markets.",
      specialties: ["Luxury", "Residential", "Commercial"],
      category: "Luxury",
      website: "https://www.damacproperties.com/",
      email: "connect@damacgroup.com",
      phone: "+971 4 409 4444",
    },
    {
      id: 2,
      booth: 2,
      name: "Sobha Realty",
      logo: "/brand-logos/sobha-logo.svg",
      location: "Dubai, UAE",
      rating: 4.7,
      projectsCount: "100+ projects in Dubai & UAE",
      tier: "Premium",
      yearsExperience: "47",
      completedProjects: "400",
      description:
        "Sobha Realty is a luxury developer with roots dating back to 1976, known for precision-led construction and premium master communities across Dubai and the UAE.",
      specialties: [
        "Luxury Residential",
        "Villas",
        "Master Communities",
        "Waterfront Projects",
      ],
      category: "Residential",
      website: "https://sobharealty.com/",
      email: "helpdesk@sobharealty.com",
      phone: "+971 800 76242",
    },
    {
      id: 3,
      booth: 3,
      name: "Binghatti",
      logo: "/brand-logos/binghatti-logo.svg",
      location: "Dubai, UAE",
      rating: 4.7,
      projectsCount: 100,
      tier: "Premium",
      yearsExperience: "18",
      completedProjects: "80",
      description:
        "Binghatti is a Dubai-based developer recognised for design-led architecture and branded luxury residences, delivering distinctive residential projects across prime urban communities.",
      specialties: [
        "Luxury Residential",
        "Branded Residences",
        "Premium Apartments",
        "Design-Led Architecture",
      ],
      category: "Luxury",
      website: "https://www.binghatti.com",
      email: "uksales@binghatti.com",
      phone: "+97180015",
    },
    {
      id: 4,
      booth: 4,
      name: "BNW Developments",
      logo: "/brand-logos/bnw-logo.svg",
      location: "Dubai & Ras Al Khaimah, UAE",
      rating: 4.8,
      projectsCount: 6,
      tier: "Premium",
      yearsExperience: "3",
      completedProjects: "2",
      description:
        "BNW Developments is a UAE-based luxury developer delivering premium residential, mixed-use and waterfront projects across Dubai and Ras Al Khaimah.",
      specialties: ["Luxury", "Waterfront", "Master Communities"],
      category: "Luxury",
      website: "https://bnw.ae/en",
      email: "info@bnw.ae",
      phone: "+971-54-999-4155",
    },
    {
      id: 5,
      booth: 6,
      name: "One Development",
      logo: "/brand-logos/one-dev-logo.svg",
      location: "Dubai & Abu Dhabi",
      rating: 4.7,
      projectsCount: 4,
      tier: "Premium",
      yearsExperience: "3",
      completedProjects: "1",
      description:
        "One Development is a boutique UAE developer creating innovation-driven residential communities that integrate smart technology, sustainability and modern living.",
      specialties: ["Luxury", "Residential", "Villas"],
      category: "Residential",
      website: "https://oneuae.com/",
      email: "info@oneuae.com",
      phone: "+800 663 338",
    },
    {
      id: 6,
      booth: 7,
      name: "Pantheon Development",
      logo: "/brand-logos/pantheon-dev-logo.svg",
      location: "Dubai Marina",
      rating: 4.7,
      projectsCount: 6,
      tier: "Premium",
      yearsExperience: "10",
      completedProjects: "4",
      description:
        "Pantheon Development is a UAE developer delivering design-focused residential and mixed-use communities across Dubai, with a growing portfolio of lifestyle-driven projects.",
      specialties: ["Residential", "Mixed-Use", "Lifestyle Communities"],
      category: "Residential",
      website: "https://pantheondevelopment.ae",
      email: "info@pered.ae",
      phone: "+971 4 523 5235",
    },
    {
      id: 7,
      booth: 9,
      name: "Citi Developers",
      logo: "/brand-logos/citi-dev-logo.svg",
      location: "Dubai, UAE",
      rating: 4.9,
      projectsCount: 4,
      tier: "Premium",
      yearsExperience: "10",
      completedProjects: "1",
      description:
        "Citi Developers is a Dubai-based developer delivering contemporary luxury residences designed around innovation, quality craftsmanship and strong urban lifestyle appeal.",
      specialties: [
        "Luxury Residential",
        "Urban Living",
        "Design-Led Communities",
        "Innovation",
      ],
      category: "Luxury",
      website: "https://citideveloper.com/",
      email: "Hello@citideveloper.com",
      phone: "+80044440",
    },
    {
      id: 8,
      booth: 11,
      name: "Object One Developers",
      logo: "/brand-logos/object-1-logo.svg",
      location: "Dubai, UAE",
      rating: 4.9,
      projectsCount: 10,
      tier: "Premium",
      yearsExperience: "14",
      completedProjects: "6",
      description:
        "Object One is a Dubai-based developer delivering contemporary residential projects inspired by modern architecture, urban living concepts and lifestyle-oriented communities.",
      specialties: [
        "Luxury Residential",
        "Urban Living",
        "Design-Led Communities",
        "Innovation",
      ],
      category: "Luxury",
      website: "https://www.object-1.com/",
      email: "info@object-1.com",
      phone: "+971 52 381 0148",
    },
    {
      id: 9,
      booth: 12,
      name: "Object One Developers",
      logo: "/brand-logos/object-1-logo.svg",
      location: "Dubai, UAE",
      rating: 4.9,
      projectsCount: 10,
      tier: "Premium",
      yearsExperience: "14",
      completedProjects: "6",
      description:
        "Object One is a Dubai-based developer delivering contemporary residential projects inspired by modern architecture, urban living concepts and lifestyle-oriented communities.",
      specialties: [
        "Luxury Residential",
        "Urban Living",
        "Design-Led Communities",
        "Innovation",
      ],
      category: "Luxury",
      website: "https://www.object-1.com/",
      email: "info@object-1.com",
      phone: "+971 52 381 0148",
    },
    {
      id: 10,
      booth: 14,
      name: "Tiger Group",
      logo: "/brand-logos/tiger-logo.svg",
      location: "Dubai, UAE",
      rating: 4.9,
      projectsCount: 270,
      tier: "Premium",
      yearsExperience: "48",
      completedProjects: "270",
      description:
        "Tiger Group is a long-established UAE developer delivering residential, commercial and mixed-use projects across the region through decades of diversified real estate experience.",
      specialties: [
        "Luxury Residential",
        "Urban Living",
        "Design-Led Communities",
        "Innovation",
      ],
      category: "Mixed-Use",
      website: "https://www.tigergroup.ae/",
      email: "contact@tigergroup.ae",
      phone: "+971 800 300 300",
    },
    {
      id: 11,
      booth: 15,
      name: "Tiger Group",
      logo: "/brand-logos/tiger-logo.svg",
      location: "Dubai, UAE",
      rating: 4.9,
      projectsCount: 270,
      tier: "Premium",
      yearsExperience: "48",
      completedProjects: "270",
      description:
        "Tiger Group is a long-established UAE developer delivering residential, commercial and mixed-use projects across the region through decades of diversified real estate experience.",
      specialties: [
        "Luxury Residential",
        "Urban Living",
        "Design-Led Communities",
        "Innovation",
      ],
      category: "Mixed-Use",
      website: "https://www.tigergroup.ae/",
      email: "contact@tigergroup.ae",
      phone: "+971 800 300 300",
    },
    {
      id: 12,
      booth: 16,
      name: "Ellington Properties",
      logo: "/brand-logos/ellington-logo.svg",
      location: "Business Bay, Dubai, UAE",
      rating: 4.4,
      projectsCount: 30,
      tier: "Premium",
      yearsExperience: "12",
      completedProjects: "20",
      description:
        "Ellington Properties is a design-led boutique developer creating premium residential communities focused on architecture, lifestyle details and long-term investment value across Dubai.",
      specialties: [
        "Design-Led Residential",
        "Luxury Communities",
        "Modern Architecture",
        "Investment Properties",
      ],
      category: "Residential",
      website: "https://ellingtonproperties.ae/",
      email: "info@ellingtongroup.com",
      phone: "+971 4 278 0888",
    },
    {
      id: 13,
      booth: 17,
      name: "BEYOND Developments",
      logo: "/brand-logos/beyond-logo.svg",
      location: "Dubai, UAE",
      rating: 4.6,
      projectsCount: 13,
      tier: "Premium",
      yearsExperience: "1",
      completedProjects: "2",
      description:
        "BEYOND is OMNIYAT Group's premium real estate brand creating design-led, nature-inspired communities and waterfront developments with a focus on quality, delivery and lifestyle value.",
      specialties: ["Luxury", "Waterfront", "Residential", "Commercial"],
      category: "Luxury",
      website: "https://beyonddevelopments.ae",
      email: "enquiries@beyondproperties.ae",
      phone: "+971 56 578 7777",
    },
    {
      id: 14,
      booth: 18,
      name: "BEYOND Developments",
      logo: "/brand-logos/beyond-logo.svg",
      location: "Dubai, UAE",
      rating: 4.6,
      projectsCount: 13,
      tier: "Premium",
      yearsExperience: "1",
      completedProjects: "2",
      description:
        "BEYOND is OMNIYAT Group's premium real estate brand creating design-led, nature-inspired communities and waterfront developments with a focus on quality, delivery and lifestyle value.",
      specialties: ["Luxury", "Waterfront", "Residential", "Commercial"],
      category: "Luxury",
      website: "https://beyonddevelopments.ae",
      email: "enquiries@beyondproperties.ae",
      phone: "+971 56 578 7777",
    },
    {
      id: 15,
      booth: 19,
      name: "Major Developments",
      logo: "/brand-logos/major-logo.svg",
      location: "Dubai & Ras Al Khaimah, UAE",
      rating: 4.7,
      projectsCount: 3,
      tier: "Premium",
      yearsExperience: "2",
      completedProjects: "1",
      description:
        "Major Developments is a UAE-based developer focused on lifestyle-driven residential and waterfront projects, delivering modern communities designed for strong investment appeal in Dubai and Ras Al Khaimah.",
      specialties: [
        "Residential",
        "Lifestyle Communities",
        "Waterfront Living",
        "Investment-Oriented Projects",
      ],
      category: "Residential",
      website: "https://majordevelopments.ae/",
      email: "communications@major.estate",
      phone: "+971 (04) 572 6850",
    },
    {
      id: 16,
      booth: 20,
      name: "ANAX Developments",
      logo: "/brand-logos/anex-logo.svg",
      location: "Dubai, UAE",
      rating: 4.7,
      projectsCount: 10,
      tier: "Premium",
      yearsExperience: "2",
      completedProjects: "1",
      description:
        "ANAX Developments is a Dubai-based developer creating contemporary residential communities in prime locations, blending modern design, smart-living features and premium amenities for urban homeowners and investors.",
      specialties: [
        "Residential Towers",
        "Branded Residences",
        "Smart Living Features",
        "Premium Urban Locations",
      ],
      category: "Residential",
      website: "https://anaxdevelopments.com/",
      email: "sales@anaxdevelopments.com",
      phone: "+971 800 2629",
    },
    {
      id: 17,
      booth: 21,
      name: "Ardee Developments",
      logo: "/brand-logos/ardee-logo.svg",
      location: "Dubai & Ras Al Khaimah, UAE",
      rating: 4.7,
      projectsCount: 1,
      tier: "Premium",
      yearsExperience: "1",
      completedProjects: "1",
      description:
        "Ardee Developments is a UAE-based developer creating master-planned luxury waterfront communities, partnering with global brands to deliver integrated residential, hospitality, retail and leisure destinations in high-growth locations.",
      specialties: [
        "Luxury Residential",
        "Waterfront Master Planned",
        "Branded Residences",
        "Mixed-Use Living",
      ],
      category: "Mixed-Use",
      website: "https://ardee.ae/",
      email: "info@ardeealmarjanislandproperties.com",
      phone: "",
    },
    {
      id: 18,
      booth: 29,
      name: "Avenew Development",
      logo: "/brand-logos/avenew-logo.svg",
      location: "Dubai, UAE",
      rating: 4.7,
      projectsCount: 1,
      tier: "Premium",
      yearsExperience: "1",
      completedProjects: "1",
      description:
        "Avenew Development is a boutique Dubai developer focused on contemporary residential projects, offering refined design, lifestyle comfort and investment value through carefully curated urban living spaces.",
      specialties: [
        "Residential Development",
        "Boutique Projects",
        "Modern Architecture",
        "Urban Living",
      ],
      category: "Residential",
      website: "https://www.avenewdevelopment.ae/",
      email: "info@avenew.ae",
      phone: "+971 506 856 280",
    },
    {
      id: 19,
      booth: 30,
      name: "AYS Developers",
      logo: "/brand-logos/ays-logo.svg",
      location: "Dubai, UAE",
      rating: 5,
      projectsCount: 4,
      tier: "Premium",
      yearsExperience: "1",
      completedProjects: "1",
      description:
        "AYS Developers is a Dubai-based developer delivering lifestyle-focused residential projects in prime communities, combining modern design, quality finishes and smart living concepts for homeowners and investors.",
      specialties: [
        "Luxury Residential",
        "Waterfront Living",
        "Urban Communities",
        "Smart & Sustainable Design",
      ],
      category: "Residential",
      website: "https://aysdevelopers.ae/",
      email: "info@aysdevelopers.com",
      phone: "+971 506 856 280",
    },
    {
      id: 20,
      booth: 31,
      name: "Prescott Development",
      logo: "/brand-logos/prescott-logo.svg",
      location: "Dubai, UAE",
      rating: 5,
      projectsCount: 20,
      tier: "Premium",
      yearsExperience: "18",
      completedProjects: "10",
      description:
        "Prescott Real Estate Development is a Dubai-based developer established in 2006, delivering quality residential and mixed-use communities that balance thoughtful design, smart features and long-term value.",
      specialties: [
        "Luxury Residential",
        "Waterfront Living",
        "Urban Communities",
        "Smart & Sustainable Design",
      ],
      category: "Residential",
      website: "https://prescott.ae/",
      email: "info@prescott.ae",
      phone: "+971 4 399 9936",
    },
  ];

  const filteredExhibitors =
    selectedCategory === "All"
      ? exhibitors
      : exhibitors.filter(
          (exhibitor) => exhibitor.category === selectedCategory
        );

  const faqs = [
    {
      question: "How do I book a visit to an exhibitor's booth?",
      answer:
        "You can book visits directly through our platform by clicking 'Visit Booth' on any exhibitor card. You can also call our concierge service at +971 5 457 27505 for personalized assistance with scheduling multiple visits.",
    },
    {
      question: "Are all exhibitors verified and licensed?",
      answer:
        "Yes, every exhibitor at DPS is thoroughly vetted. All developers must provide valid RERA licenses, financial statements, and project completion records. We maintain the highest standards to ensure you're dealing with reputable, established developers.",
    },
    {
      question: "Can I compare properties from different developers?",
      answer:
        "Absolutely! DPS is designed for easy comparison. You can view side-by-side comparisons of specifications, prices, payment plans, and amenities across different developers and projects all in one location.",
    },
    {
      question: "What services do exhibitors provide at their booths?",
      answer:
        "Exhibitors offer comprehensive services including property consultations, virtual tours, payment plan discussions, legal guidance, and immediate booking assistance. Many also provide financing options and investment advice.",
    },
    {
      question: "Is there a cost to visit DPS and meet with exhibitors?",
      answer:
        "Entry to DPS is complimentary for serious buyers and investors. Simply register online or at the entrance. All consultations with exhibitors are also free of charge.",
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="py-20 bg-gradient-to-br from-slate-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <Badge className="mb-6 bg-blue-50 text-[#073c75] border-blue-200 hover:text-white text-sm font-semibold px-4 py-2">
              Premier Exhibitors
            </Badge>
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              Meet Dubai's{" "}
              <span className="text-gradient">Leading Developers</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Connect with the most respected names in Dubai real estate. From
              iconic landmarks to luxury communities, discover the developers
              shaping the city's skyline and your future investment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#073c75] to-[#51779e] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Building2 className="text-white" size={28} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">30+</div>
              <div className="text-gray-600">Premium Developers</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#073c75] to-[#51779e] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="text-white" size={28} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">4.8</div>
              <div className="text-gray-600">Average Rating</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#073c75] to-[#51779e] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={28} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600">Projects Available</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#073c75] to-[#51779e] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-white" size={28} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">20+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Exhibitors Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Categories */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`px-6 py-2 transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-[#073c75] text-white shadow-lg"
                    : "hover:bg-blue-50 hover:text-[#073c75] hover:border-[#073c75]"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </motion.div> */}

          {/* Results Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              All Premium Developers
            </h3>
            {/* <p className="text-gray-600">
              {selectedCategory === "All"
                ? "All categories"
                : `Specializing in ${selectedCategory}`}
            </p> */}
          </motion.div>

          {/* Exhibitors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredExhibitors.map((exhibitor, index) => (
              <ExhibitorCard
                key={exhibitor.id}
                exhibitor={exhibitor}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="mb-6 bg-blue-50 text-[#073c75] border-blue-200 hover:text-white text-sm font-semibold px-4 py-2">
              Why Choose DPS Exhibitors
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Verified Excellence,{" "}
              <span className="text-gradient">Proven Results</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every exhibitor at DPS undergoes rigorous verification to ensure
              you're connecting with Dubai's most trusted and successful
              developers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#073c75] to-[#51779e] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <CheckCircle className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Verified Credentials
              </h3>
              <p className="text-gray-600">
                All developers verified with valid RERA licenses and proven
                track records.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#073c75] to-[#51779e] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Award Winners
              </h3>
              <p className="text-gray-600">
                Industry-recognized developers with multiple awards and
                accolades.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#073c75] to-[#51779e] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Clock className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                On-Time Delivery
              </h3>
              <p className="text-gray-600">
                Proven history of delivering projects on schedule and within
                budget.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#073c75] to-[#51779e] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Customer Focus
              </h3>
              <p className="text-gray-600">
                High customer satisfaction ratings and dedicated after-sales
                support.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="mb-6 bg-blue-50 text-[#073c75] border-blue-200 hover:text-white text-sm font-semibold px-4 py-2">
              FAQ
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our exhibitors and services.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-lg px-6 bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-[#073c75] py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Meet the Developers?
          </h2>
          <p className="text-xl text-gray-200 mb-12 leading-relaxed">
            Schedule your visit to DPS and connect with Dubai's premier real
            estate developers. Discover exclusive properties, compare options,
            and make informed investment decisions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button
              size="xl"
              className="bg-white text-[#073c75] hover:bg-gray-100 text-lg px-8 py-4 shadow-2xl"
            >
              Schedule Your Visit
            </Button>

            <Button
              size="xl"
              variant="outline"
              className="bg-white text-[#073c75] hover:bg-gray-100 text-lg px-8 py-4 shadow-2xl"
            >
              Download Exhibitor Guide
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-white">
            <div className="flex items-center justify-center gap-3">
              <MapPin className="text-blue-300" size={24} />
              <div>
                <div className="font-semibold">DPS Exhibition Center</div>
                <div className="text-sm text-gray-300">
                  Umm Seqiem Road, Dubai
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3">
              <Clock className="text-purple-300" size={24} />
              <div>
                <div className="font-semibold">Open Daily</div>
                <div className="text-sm text-gray-300">10 AM - 10 PM</div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3">
              <Phone className="text-green-300" size={24} />
              <div>
                <div className="font-semibold">+971 5 457 27505</div>
                <div className="text-sm text-gray-300">Book Your Visit</div>
              </div>
            </div>
          </div>
        </motion.div>
      </section> */}
    </div>
  );
};

export default Exhibitors;
