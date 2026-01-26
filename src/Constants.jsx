import { FiUserPlus } from "react-icons/fi";
import { BsClipboard2Check } from "react-icons/bs";
import { TiInputChecked } from "react-icons/ti";
import { CiLock } from "react-icons/ci";
import {
  RiShieldStarLine,
  RiGraduationCapLine,
  RiGeminiFill,
} from "react-icons/ri";
import { FaRegClock, FaRegBell } from "react-icons/fa";
import { PiCurrencyDollarSimple } from "react-icons/pi";
import { HiUsers } from "react-icons/hi";
import { LuSquareUserRound } from "react-icons/lu";
import { MdOutlineCameraAlt } from "react-icons/md";
import {
  IoCodeSharp,
  IoColorPaletteOutline,
  IoSettingsOutline,
} from "react-icons/io5";

// how it works steps data
export const steps = [
  {
    id: 1,
    icon: <FiUserPlus size={20} className="mx-auto text-[#02534D]" />,
    number: 1,
    title: "Create Agreement",
    description:
      "Both parties agrees on terms and create an escrow transaction with clear milestones and deliverables.",
  },
  {
    id: 2,
    icon: <BsClipboard2Check size={20} className="mx-auto text-[#02534D]" />,
    number: 2,
    title: "Clients Deposits Fund",
    description:
      "Clients securely deposits payment into escrow account. Funds are held until work is completed.",
  },
  {
    id: 3,
    icon: <TiInputChecked size={20} className="mx-auto text-[#02534D]" />,
    number: 3,
    title: "Freelancer Delivers",
    description:
      "Freelancer completes the work as per the agreed terms and notifies the client.",
  },
  {
    id: 4,
    icon: <CiLock size={20} className="mx-auto text-[#02534D]" />,
    number: 4,
    title: "Funds Released",
    description:
      "Once clients approves, funds are released to the service provider. Disputes are handled by our support team.",
  },
];

export const WhyChooseUssData = [
  {
    id: 1,
    icon: <RiShieldStarLine size={20} className="text-[#02534D]" />,
    title: "Secure Transactions",
    description:
      "Bank-level encryption and security protocols protects your funds at times. ",
  },
  {
    id: 2,
    icon: <FaRegClock size={20} className="text-[#02534D]" />,
    title: "Fast processing",
    description:
      "Quick verification and instant fund releases when milestones are approved",
  },
  {
    id: 3,
    icon: <PiCurrencyDollarSimple size={20} className="text-[#02534D]" />,
    title: "Low Fees ",
    description:
      "Competitive pricing with transparent fees. No hidden charges ever",
  },
  {
    id: 4,
    icon: <FaRegBell size={20} className="text-[#02534D]" />,
    title: "Real-time updates",
    description:
      "Get instant notifications for every transaction milestone and status change",
  },
  {
    id: 5,
    icon: <HiUsers size={20} className="text-[#02534D]" />,
    title: "Dispute Resolution",
    description:
      "Professional mediation team available to resolve any transaction disputes",
  },
  {
    id: 6,
    icon: <LuSquareUserRound size={20} className="text-[#02534D]" />,
    title: "Secure Transactions",
    description:
      "Bank-level encryption and security protocols protects your funds at times. ",
  },
];

// featured categories data
export const featuredCategories = [
  {
    id: 1,
    icontext: "2,340= transactions",
    icon: <MdOutlineCameraAlt size={20} className="text-[#fff]" />,
    image:
      "https://res.cloudinary.com/dfcr3ut7b/image/upload/v1769443889/Rectangle_11_lfzrsr.svg",
    name: "Photographer",
    description: "Events, wedding and portrait photography service",
  },
  {
    id: 2,
    icontext: "1,890+ transactions",
    icon: <RiGeminiFill size={20} className="text-[#fff]" />,
    image:
      "https://res.cloudinary.com/dfcr3ut7b/image/upload/v1769443890/Rectangle_11_1_kmwtgw.svg",
    name: "Cleaners",
    description: "Professional cleaning and maintenance service",
  },
  {
    id: 3,
    icontext: "3,120+ transactions",
    icon: <IoCodeSharp size={20} className="text-[#fff]" />,
    name: "Developers",
    image:
      "https://res.cloudinary.com/dfcr3ut7b/image/upload/v1769443891/Rectangle_11_2_qah3vs.svg",
    description: "Web, mobile and software development",
  },
  {
    id: 4,
    icontext: "2,670+ transactions",
    icon: <IoColorPaletteOutline size={20} className="text-[#fff]" />,
    name: "Designers",
    image:
      "https://res.cloudinary.com/dfcr3ut7b/image/upload/v1769443888/Rectangle_11_3_xylvmv.svg",
    description: "Graphics, UI/UX and branding design",
  },
  {
    id: 5,
    icontext: "1,560+ transactions",
    icon: <IoSettingsOutline size={20} className="text-[#fff]" />,
    name: "Contractors",
    image:
      "https://res.cloudinary.com/dfcr3ut7b/image/upload/v1769443982/Rectangle_11_ynscen.svg",
    description: "Home improvement and renovation service",
  },
  {
    id: 6,
    icontext: "980+ transactions",
    icon: <RiGraduationCapLine size={20} className="text-[#fff]" />,
    name: "Tutors",
    image:
      "https://res.cloudinary.com/dfcr3ut7b/image/upload/v1769443889/Rectangle_11_lfzrsr.svg",
    description: "Academic and skill-based tutoring",
  },
];
