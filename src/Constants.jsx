import { FiUserPlus } from "react-icons/fi";
import { BsClipboard2Check } from "react-icons/bs";
import { TiInputChecked } from "react-icons/ti";
import { CiLock } from "react-icons/ci";
import { RiShieldStarLine } from "react-icons/ri";
import { FaRegClock, FaRegBell } from "react-icons/fa";
import { PiCurrencyDollarSimple } from "react-icons/pi";
import { HiUsers } from "react-icons/hi";
import { LuSquareUserRound } from "react-icons/lu";

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
    icon: <RiShieldStarLine size={40} className="text-[#02534D]" />,
    title: "Secure Transactions",
    description:
      "Bank-level encryption and security protocols protects your funds at times. ",
  },
  {
    id: 2,
    icon: <FaRegClock size={40} className="text-[#02534D]" />,
    title: "Fast processing",
    description:
      "Quick verification and instant fund releases when milestones are approved",
  },
  {
    id: 3,
    icon: <PiCurrencyDollarSimple size={40} className="text-[#02534D]" />,
    title: "Low Fees ",
    description:
      "Competitive pricing with transparent fees. No hidden charges ever",
  },
  {
    id: 4,
    icon: <FaRegBell size={40} className="text-[#02534D]" />,
    title: "Real-time updates",
    description:
      "Get instant notifications for every transaction milestone and status change",
  },
  {
    id: 5,
    icon: <HiUsers size={40} className="text-[#02534D]" />,
    title: "Dispute Resolution",
    description:
      "Professional meditation team available to resolve any transaction disputes",
  },
  {
    id: 6,
    icon: <LuSquareUserRound size={40} className="text-[#02534D]" />,
    title: "Secure Transactions",
    description:
      "Bank-level encryption and security protocols protects your funds at times. ",
  },
];
