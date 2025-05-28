// // const Footer = () => {
// //   return (
// //     <footer className="bg-blue-950 text-white py-12 text-center px-6">
// //       <h2 className="text-2xl font-bold mb-4">
// //         Get Clarity, Not Surprises — Experience a{" "}
// //         <span className="text-blue-300">100% Free Dental Consultation</span>
// //       </h2>
// //       <p className="mb-6 text-gray-300">
// //         Watch our video to see how ZERO Dental ensures transparency and
// //         affordable care.
// //       </p>
// //       <button className="bg-blue-600 px-5 py-2 rounded-lg font-medium">
// //         Watch Video
// //       </button>
// //     </footer>
// //   );
// // };

// // export default Footer;
// // src/components/Footer.tsx
// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white py-12 px-6">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
//         {/* Company Info */}
//         <div>
//           <h3 className="text-xl font-bold mb-4">ZERO Dental</h3>
//           <p className="text-sm text-gray-400">
//             Providing zero-cost second opinions for your dental health. Trust
//             our experts for unbiased advice.
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
//           <ul className="space-y-2 text-sm text-gray-400">
//             <li>
//               <a href="#" className="hover:text-white">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-white">
//                 About Us
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-white">
//                 Services
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-white">
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* Services */}
//         <div>
//           <h4 className="text-lg font-semibold mb-4">Services</h4>
//           <ul className="space-y-2 text-sm text-gray-400">
//             <li>
//               <a href="#" className="hover:text-white">
//                 Free Consultation
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-white">
//                 X-Ray Analysis
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-white">
//                 Treatment Planning
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-white">
//                 Post-Treatment Care
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* Contact Info */}
//         <div>
//           <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
//           <p className="text-sm text-gray-400">
//             123 Dental Street
//             <br />
//             New Delhi, India
//             <br />
//             Phone: +91-960-000-0000
//             <br />
//             Email: info@zerodental.in
//           </p>
//         </div>
//       </div>

//       <div className="mt-8 text-center text-sm text-gray-500">
//         © {new Date().getFullYear()} ZERO Dental. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import Image from "next/image";
import { Facebook, Instagram, Youtube, X } from "lucide-react";
import dentalLogo from "../../public/images/logo-white.png"; // Adjust the path as necessary
export default function Footer() {
  return (
    <footer className="bg-[#031944] text-white pt-12 pb-6 relative">
      {/* Background wave decorations (optional, use absolute SVG or image if required) */}

      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Logo */}
        <div className="mb-4">
          <Image
            src={dentalLogo}
            alt="Zero Dental"
            width={100}
            height={40}
            className="mx-auto"
          />
        </div>

        {/* Description */}
        <p className="text-sm text-gray-300 max-w-xl mx-auto mb-6">
          Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta
          gravida at eget metus. Etiam porta sem malesuada magna mollis euismod.
        </p>

        {/* Social Icons */}
        <div className="flex items-center justify-center space-x-6 mb-6">
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
            <Youtube size={20} />
          </a>
          <a
            href="#"
            className="hover:text-sky-400 rounded-4xl bg-[#475F8D] p-2"
          >
            <X size={20} />
          </a>
          {/* <a href="#" className="hover:text-pink-600">
            <Pinterest size={20} />
          </a> */}
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center items-center space-x-8 text-sm font-medium border-t border-gray-600 pt-4 mb-4">
          <a href="#" className="hover:text-blue-400 uppercase">
            About Us
          </a>
          <a href="#" className="hover:text-blue-400 uppercase">
            Services
          </a>
          <a href="#" className="hover:text-blue-400 uppercase">
            Contact Us
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-400">copyright©2025@zerodental</p>
      </div>
    </footer>
  );
}
