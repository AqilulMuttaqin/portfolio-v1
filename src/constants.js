import { FaLinkedinIn } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { RiInstagramFill } from "react-icons/ri";

export const SECTIONS = ["home", "about", "experience", "project", "contact"];

// Matches the height of the fixed navbar (h-16) so anchored sections are not
// hidden underneath it after scrolling.
export const SCROLL_OFFSET = -64;
export const SCROLL_DURATION = 500;

export const PROFILE = {
  name: "Muhammad Aqilul Muttaqin",
  email: "aqilulmuttaqin16@gmail.com",
  phone: "+62 823-3955-0714",
  whatsappUrl: "https://wa.me/6282339550714",
  location: "Malang, Indonesia",
  education: "D4 Informatics Engineering",
  status: "Available for Work",
  cvUrl:
    "https://drive.google.com/drive/u/0/folders/1khQQrvN5jAQ-2JL5zYGNTPzf5AAfzSJ-",
};

// Single source of truth — these profiles are rendered in the navbar (desktop
// and mobile), the footer and the contact section.
export const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    handle: "@muhammad-aqilul-muttaqin",
    href: "https://linkedin.com/in/muhammad-aqilul-muttaqin",
    label: "LinkedIn Profile",
    description: "Connect with me professionally and see my career journey",
    Icon: FaLinkedinIn,
  },
  {
    name: "GitHub",
    handle: "@AqilulMuttaqin",
    href: "https://github.com/AqilulMuttaqin",
    label: "GitHub Profile",
    description: "Check out my latest projects and open source contributions",
    Icon: TbBrandGithubFilled,
  },
  {
    name: "Instagram",
    handle: "@aql_mtqn",
    href: "https://instagram.com/aql_mtqn",
    label: "Instagram Profile",
    description: "Behind the scenes of my development journey",
    Icon: RiInstagramFill,
  },
];
