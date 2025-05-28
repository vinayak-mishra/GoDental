// import Image from "next/image";
// import dentalLogo from "../../public/images/dental_logo.png";
// const Header = () => (
//   <div>
//     <div className="bg-blue-800 p-4 flex gap-8 items-center">
//       <div className="flex-1 text-center text-white">info@zerodental.in</div>
//       <div className="flex-1 text-center text-white">detalcare@example.com</div>
//       <div className="flex-1"></div>
//     </div>
//     <header className="bg-white py-4 px-6 shadow flex justify-between items-center">
//       <div className="text-2xl font-bold text-blue-600">
//         <Image
//           src={dentalLogo}
//           alt="Dental Background"
//           // fill
//           // width={60}
//           className="z-20 absolute top-4 left-4 md:top-8 md:left-8 w-28 h-28 object-contain"
//           // className="object-cover -scale-x-100 "
//           priority
//         />
//       </div>
//       <nav className="space-x-6 hidden md:block">
//         <a href="#" className="hover:underline">
//           Home
//         </a>
//         <a href="#" className="hover:underline">
//           About
//         </a>
//         <a href="#" className="hover:underline">
//           Services
//         </a>
//         <a href="#" className="hover:underline">
//           Contact
//         </a>
//       </nav>
//       <div className="text-white font-semibold text-sm rounded-4xl bg-blue-400 px-8 py-4 hidden md:block">
//         📞 +91-960-000-0000
//       </div>
//     </header>
//   </div>
// );

// import { Phone } from "lucide-react";
import Image from "next/image";
import dentalLogo from "../../public/images/dental_logo.png";

import { Mail, Facebook, Instagram, X, Phone, Youtube } from "lucide-react";
// export default Header;

const Header = () => {
  return (
    <div>
      {/* Top Blue Bar */}
      <div className="bg-[#00225a] text-white text-sm py-2 px-4 flex justify-between items-center">
        <div className="ml-48 flex gap-6 items-center">
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span className="text-white">info@zerodental.in</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span className="text-white">dentalcare@example.com</span>
          </div>
        </div>
        <div className="flex gap-4 items-center pr-16">
          <a
            href="#"
            className="hover:text-sky-400 rounded-4xl bg-[#475F8D] p-2"
          >
            <Facebook size={20} />
          </a>
          <a
            href="#"
            className="hover:text-sky-400 rounded-4xl bg-[#475F8D] p-2"
          >
            <Instagram size={20} />
          </a>
          <a
            href="#"
            className="hover:text-sky-400 rounded-4xl bg-[#475F8D] p-2"
          >
            <X size={20} />
          </a>
          <a
            href="#"
            className="hover:text-sky-400 rounded-4xl bg-[#475F8D] p-2"
          >
            <Youtube size={20} />
          </a>
          {/* <Pinterest className="hover:text-red-400 cursor-pointer" size={16} /> */}
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white py-4 px-6 shadow flex justify-between items-center flex-wrap">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src={dentalLogo}
            alt="Zero Dental Logo"
            width={100}
            height={100}
            className="object-contain"
            priority
          />
        </div>

        {/* Nav Links */}
        <nav className="flex gap-6 font-semibold text-black mx-auto">
          <a href="#" className="hover:text-blue-600 text-black">
            Home
          </a>
          <a href="#" className="hover:text-blue-600 text-black">
            About
          </a>
          <a href="#" className="hover:text-blue-600 text-black">
            Services
          </a>
          <a href="#" className="hover:text-blue-600 text-black">
            Contact Us
          </a>
        </nav>

        {/* Call Button */}
        <div className="hidden md:flex items-center bg-[#2ba6ff] text-white font-medium text-sm px-6 py-2 rounded-full gap-2">
          <Phone size={16} />
          040-66666666
        </div>
      </header>
    </div>
  );
};

export default Header;
