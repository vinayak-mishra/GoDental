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
import About from "../../public/images/about-us.png";
import AboutUSText from "../../public/images/aboutus-text.png";
import dentalTools from "../../public/images/dental-tools.png";
// import xrayBanner from "../../public/images/xray-banner.png";
import feature1 from "../../public/images/feature-1.png";
import smile from "../../public/images/smiles.png";
import trust from "../../public/images/trust.png";
import done from "../../public/images/done.png";
import journey from "../../public/images/journey.png";
export default function HowWeWorkSection() {
  return (
    <section className="bg-white pt-16 pb-20 relative">
      <div className="absolute top-20 right-10  z-10 w-64 h-64">
        <Image src={dentalTools} alt="Dentist" objectFit="cover" />
      </div>

      <div className=" max-w-7xl mx-auto px-40 grid md:grid-cols-2 gap-0 items-center">
        {/* Left Side - Images */}

        <Image className="pr-8" src={About} alt="Dentist" objectFit="cover" />
        <div>
          <Image src={AboutUSText} alt="Dentist" objectFit="cover" />
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="bg-[#001F4D] text-white mt-24 ml-24 py-10 w-[90%] self-center">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className=" border-r border-white pr-4 flex flex-col items-center justify-center text-center">
            <Image src={smile} alt="Dentist" objectFit="cover" />
            <p className="text-2xl font-bold mt-2">30000+</p>
            <p className="text-sm mt-1">Smiles Treated</p>
          </div>
          <div className=" border-r border-white pr-4 flex flex-col items-center justify-center text-center">
            <Image src={trust} alt="Dentist" objectFit="cover" />
            <p className="text-2xl font-bold mt-2">20+</p>
            <p className="text-sm mt-1">Years of Trust</p>
          </div>
          <div className=" border-r border-white pr-4 flex flex-col items-center justify-center text-center">
            <Image src={done} alt="Dentist" objectFit="cover" />
            <p className="text-2xl font-bold mt-2">4,000+</p>
            <p className="text-sm mt-1">Implants Done</p>
          </div>
          <div className="  pr-4 flex flex-col items-center justify-center text-center">
            <Image src={journey} alt="Dentist" objectFit="cover" />
            <p className="text-2xl font-bold mt-2">600+</p>
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
