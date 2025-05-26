// import Image from "next/image";
// import mainDoctor from "../../public/images/doctor_main.png";
// import sideDoctor from "../../public/images/side-doctor.png";
// import dentalTools from "../../public/images/dental-tools.png";
// import xrayBanner from "../../public/images/xray-banner.png";
// const About = () => {
//   return (
//     <section className="relative bg-white py-16 px-6 md:px-20 overflow-hidden">
//       {/* Banner Strip */}
//       <div className="bg-blue-900 text-white px-6 py-4 flex items-center gap-4">
//         <Image
//           src={xrayBanner}
//           alt="Xray banner"
//           width={80}
//           height={80}
//           className="rounded-md object-cover"
//         />
//         <div>
//           <h4 className="text-sm font-bold">GET FREE</h4>
//           <p className="text-sm text-blue-300">Consultation & Xray</p>
//           <p className="text-sm">Call Us at : +91 040-66666666</p>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-12">
//         {/* Left side - Image & label */}
//         <div className="relative w-full md:w-1/2 flex justify-center items-center">
//           <Image
//             src={mainDoctor}
//             alt="Dentist"
//             width={320}
//             height={400}
//             className="rounded-lg object-cover z-10"
//           />
//           <div className="absolute bottom-[-20px] left-[-20px] w-24 h-24 rounded-full bg-blue-900 text-white flex items-center justify-center text-sm font-bold z-20 shadow-xl">
//             25+
//             <br />
//             Experience
//           </div>
//           <Image
//             src={sideDoctor}
//             alt="Dentist Working"
//             width={200}
//             height={150}
//             className="absolute bottom-0 right-[-30px] rounded-md object-cover shadow-lg z-0"
//           />
//         </div>

//         {/* Right side - Text content */}
//         <div className="w-full md:w-1/2">
//           <h5 className="text-blue-600 font-semibold text-sm mb-2 uppercase tracking-wide">
//             Our About Us
//           </h5>
//           <h2 className="text-3xl font-bold mb-4">
//             Take Charge of Your Smile—
//             <span className="text-blue-600">
//               {" "}
//               Get a Zero-Cost Second Opinion{" "}
//             </span>
//             Today!
//           </h2>
//           <p className="text-gray-700 mb-6 leading-relaxed">
//             At ZERO DENTAL, we believe everyone deserves to make informed dental
//             decisions, free from confusion and financial worry. That’s why we
//             provide expert second opinions, X-rays, and pickup & drop
//             services—completely free of charge. Discover your best dental
//             options with the support of our caring team at zero cost.
//           </p>

//           <ul className="text-blue-700 font-semibold space-y-2 mb-6">
//             <li>• Zero cost second opinion</li>
//             <li>• Zero cost consultation</li>
//             <li>• Zero cost X-Rays and scans</li>
//             <li>• Zero hassle zero cavities</li>
//           </ul>

//           <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold transition">
//             Book Appointment
//           </button>
//         </div>
//       </div>

//       {/* Right Side Dental Graphic */}
//       <Image
//         src={dentalTools}
//         alt="Dental Illustration"
//         width={200}
//         height={200}
//         className="absolute bottom-4 right-4 hidden md:block"
//       />

//       {/* Statistics Row */}
//       <div className="mt-20 bg-blue-900 text-white rounded-xl py-10 px-4 grid grid-cols-2 md:grid-cols-4 text-center gap-6">
//         <div>
//           <h3 className="text-2xl font-bold">30000+</h3>
//           <p className="text-sm mt-1">Smiles Treated</p>
//         </div>
//         <div>
//           <h3 className="text-2xl font-bold">20+</h3>
//           <p className="text-sm mt-1">Years of Trust</p>
//         </div>
//         <div>
//           <h3 className="text-2xl font-bold">4,000+</h3>
//           <p className="text-sm mt-1">Implants Done</p>
//         </div>
//         <div>
//           <h3 className="text-2xl font-bold">600+</h3>
//           <p className="text-sm mt-1">Aligner Journeys</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import Image from "next/image";
import mainDoctor from "../../public/images/doctor_main.png";
import sideDoctor from "../../public/images/side-doctor.png";
// import dentalTools from "../../public/images/dental-tools.png";
// import xrayBanner from "../../public/images/xray-banner.png";
import feature1 from "../../public/images/feature-1.png";
export default function HowWeWorkSection() {
  return (
    <section className="bg-white pt-16 pb-20 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Images */}
        <div className="relative">
          {/* Big Image */}
          <div className="relative w-[300px] h-[360px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src={mainDoctor}
              alt="Dentist"
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Badge */}
          <div className="absolute top-[90%] left-[25%] transform -translate-x-1/2 -translate-y-1/2 bg-[#001F4D] text-white rounded-full w-[120px] h-[120px] flex flex-col items-center justify-center text-center text-sm shadow-xl z-10">
            <span className="font-bold text-xl">25+</span>
            <span className="text-xs mt-1">Experience</span>
          </div>

          {/* Small image */}
          <div className="absolute bottom-[-100px] left-[150px] w-[320px] h-[240px] rounded-lg overflow-hidden shadow-md border-4 border-white">
            <Image
              src={sideDoctor}
              alt="Dentist Chair"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="relative">
          {/* Side Text */}
          <div className="absolute left-[-70px] top-10 rotate-[-90deg] text-xs tracking-wider text-[#001F4D] font-medium">
            How We Work
          </div>

          {/* Title */}
          <div className="mb-4">
            <p className="text-sm font-semibold text-[#008FE2]">OUR ABOUT US</p>
            <h2 className="text-2xl md:text-3xl font-bold leading-tight mt-2">
              Take Charge of Your Smile—
              <span className="text-[#008FE2]">
                {" "}
                Get a Zero-Cost Second Opinion
              </span>{" "}
              Today!
            </h2>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600 mb-6">
            At ZERO DENTAL, we believe everyone deserves to make informed dental
            decisions, free from confusion and financial worry. That’s why we
            provide expert second opinions, X-rays, and pickup & drop
            services—completely free of charge. Discover your best dental
            options with the support of our caring team at zero cost.
          </p>

          {/* Bullet Points */}
          <ul className="space-y-2 text-sm font-semibold text-[#003366] mb-6">
            <li>• Zero cost second opinion</li>
            <li>• Zero cost consultation</li>
            <li>• Zero cost X-Rays and scans</li>
            <li>• Zero hassle zero cavities</li>
          </ul>

          {/* CTA Button */}
          <button className="bg-[#008FE2] hover:bg-[#0075c2] text-white px-6 py-2 rounded-full text-sm font-medium shadow">
            Book Appointment
          </button>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="bg-[#001F4D] text-white mt-24 ml-24 py-10 w-[90%] self-center">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="border-r border-white pr-4">
            <p className="text-2xl font-bold">30000+</p>
            <p className="text-sm mt-1">Smiles Treated</p>
          </div>
          <div className="border-r border-white pr-4">
            <p className="text-2xl font-bold">20+</p>
            <p className="text-sm mt-1">Years of Trust</p>
          </div>
          <div className="border-r border-white pr-4">
            <p className="text-2xl font-bold">4,000+</p>
            <p className="text-sm mt-1">Implants Done</p>
          </div>
          <div>
            <p className="text-2xl font-bold">600+</p>
            <p className="text-sm mt-1">Aligner Journeys</p>
          </div>
        </div>
      </div>
      <div className="bg-[#F2F6F9] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-sm font-semibold text-[#008FE2]">Why Choose Us</p>
          <h2 className="text-2xl font-bold mt-2 mb-4">
            What Makes <span className="text-[#008FE2]">ZERO DENTAL</span>{" "}
            Different?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <p className="text-sm text-gray-700 leading-relaxed">
              With ZERO DENTAL, you never have to worry about misdiagnosis,
              overcharging, or unnecessary treatments. We empower you to make
              the right choices for your dental health—without spending a rupee
              on consultations or second opinions.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-10">
            {[
              {
                title: "Zero Cost, Zero Pressure",
                desc: "Get expert validation on your treatment plan from experienced professionals.",
              },
              {
                title: "Free Consultations & X-Rays",
                desc: "No hidden charges, just honest, expert guidance.",
              },
              {
                title: "Free Pick-Up & Drop-Off",
                desc: "Hassle-free transportation to our partner clinics for your convenience.",
              },
              {
                title: "0% EMI & ‘Smile Now, Pay Later",
                desc: "Making advanced dental care affordable and stress-free.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <div className="w-10 h-10 bg-[#001F4D] text-white rounded-full flex items-center justify-center text-sm font-bold mb-4">
                  <Image
                    src={feature1}
                    alt={`Feature ${index + 1}`}
                    width={32}
                    height={32}
                  />
                  {/* {String.fromCharCode(65 + index)} */}
                </div>
                <h3 className="font-bold text-[#001F4D] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
