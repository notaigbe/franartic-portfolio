import {
  Sparkles,
  Palette,
  Camera,
  Mail,
  Star,
  Heart,
  Award,
  Phone,
  User,
  BadgeCheck,
  PartyPopper,
} from "lucide-react";

const screens = [
  {
    id: "hero",
    title: "Francisca Otaigbe",
    subtitle: "Beauty and Special Effects Makeup Artist",
    content: "From brush to screen: Crafting characters, telling stories",
    bgColor: "bg-gradient-to-br from-[#F6F1EA] via-[#EECFC4] to-neutral",
    icon: <Sparkles className="w-16 h-16 md:w-20 md:h-20 text-amber-400 mb-4" />,
    accentText: "Hair and Makeup Design for Film",
    image: "/assets/img/me.jpg",
  },
  {
    id: "about",
    title: "About Me",
    subtitle: "Francisca Otaigbe",
    content:
      "I’m a seasoned beauty and special effects makeup artist with over seven years of professional experience and two AMVCA nominations. From film sets to TV screens, I have carved a space for myself as a transformative storyteller — one brush stroke, one prosthetic piece at a time.\n\nAs a freelance artist, I’ve worked across multiple productions and currently lead a talented team of makeup artists and hairstylists on film and television projects. My artistry is rooted in a deep love for storytelling, where every detail becomes a living chapter in a character’s journey.\n\nDriven by the power of transformation, I breathe life into scripts — whether it’s subtle glam or full-blown gore. My mission is always the same: to bring the director’s vision to life, to make audiences believe, feel, and remember.\n\nI don’t just do makeup, I build identities.",
    bgColor: "bg-gradient-to-br from-[#D9B270] via-[#C1BA9A] to-neutral",
    icon: <User className="w-16 h-16 md:w-20 md:h-20 text-green-300 mb-4" />,
    accentText: "All Occasions Covered",
    images: ["/assets/img/about.jpg"],
  },
  {
    id: "services",
    title: "My Services",
    subtitle: "Specializing In",
    content:
      "Bridal • Editorial • Special Events • Photoshoots • Glam Makeovers • Special Effects",
    bgColor: "bg-gradient-to-br from-amber-200 via-[#F6F1EA] to-orange-200",
    icon: <BadgeCheck className="w-16 h-16 md:w-20 md:h-20 text-rose-300 mb-4" />,
    accentText: "All Occasions Covered",
    images: [
      "/assets/img/portfolio/portfolio-1.png",
      "/assets/img/portfolio/portfolio-3.png",
      "/assets/img/portfolio/portfolio-4.png",
    ],
  },
  {
    id: "featured",
    title: "Featured Film Projects",
    subtitle: "Specializing In",
    content:
      "Bridal • Editorial • Special Events • Photoshoots • Glam Makeovers",
    bgColor: "bg-gradient-to-br from-[#D9B270] via-[#EECFC4] to-nuetral",
    icon: <PartyPopper className="w-16 h-16 md:w-20 md:h-20 text-blue-300 mb-4" />,
    accentText: "All Occasions Covered",
    images: [
      "/assets/img/featured/featured-1.png",
      "/assets/img/featured/featured-2.png",
      "/assets/img/featured/featured-3.png",
      "/assets/img/featured/featured-4.png",
      "/assets/img/featured/featured-5.png",
      "/assets/img/featured/featured-6.png",
      "/assets/img/featured/featured-7.png",
      "/assets/img/featured/featured-8.png",
      "/assets/img/featured/featured-9.png",
      "/assets/img/featured/featured-10.png",
    ],
  },
  {
    id: "other-projects",
    title: "Other Projects",
    subtitle: "Specializing In",
    content:
      "Bridal • Editorial • Special Events • Photoshoots • Glam Makeovers",
    bgColor: "bg-gradient-to-br from-[#EECFC4] via-[#F0FFF0] to-neutral",
    icon: <Palette className="w-16 h-16 md:w-20 md:h-20 text-pink-300 mb-4" />,
    accentText: "All Occasions Covered",
    images: [
      "/assets/img/portfolio/portfolio-1.png",
      "/assets/img/portfolio/portfolio-3.png",
      "/assets/img/portfolio/portfolio-4.png",
    ],
  },

  {
    id: "portfolio",
    title: "Portfolio",
    subtitle: "Recent Work",
    content:
      "Award-winning makeup artistry featured in top fashion magazines and celebrity events",
    bgColor: "bg-gradient-to-br from-[#D3B6A1] via-[#D9B270] to-neutral",
    icon: <Camera className="w-16 h-16 md:w-20 md:h-20 text-stone-300 mb-4" />,
    accentText: "500+ Happy Clients",
    images: [
      "/assets/img/portfolio/portfolio-1.png",
      "/assets/img/portfolio/portfolio-2.jpeg",
      "/assets/img/portfolio/portfolio-3.png",
      "/assets/img/portfolio/portfolio-4.png",
    ],
  },
  {
    id: "testimonials",
    title: "What Clients Say",
    subtitle: "Testimonials",
    content:
      '"Sophia made me feel like a goddess on my wedding day. Her attention to detail is unmatched!" - Sarah K.',
    bgColor: "bg-gradient-to-br from-rose-200 via-[#C1BA9A] to-neutral",
    icon: <Star className="w-16 h-16 md:w-20 md:h-20 text-teal-300 mb-4" />,
    accentText: "5 Star Rating",
  },
  {
    id: "contact",
    title: "Get in touch",
    subtitle: "Let's Create Magic",
    content:
      "Ready to look and feel amazing? Contact me to schedule your personalized makeup session",
    bgColor: "bg-gradient-to-br from-[#D9B270] via-[#D3B6A1] to-neutral",
    icon: <Mail className="w-16 h-16 md:w-20 md:h-20 text-neutral-300 mb-4" />,
    accentText: "Available 7 Days",
  },
];

export default screens;
