import Image from "next/image";
import About from "../../public/images/about-us.png";
import AboutUSText from "../../public/images/aboutus-text.png";
import dentalTools from "../../public/images/dental-tools.png";
// import xrayBanner from "../../public/images/xray-banner.png";
import feature1 from "../../public/images/feature-1.png";
import pickdrop from "../../public/images/pickdrop.png";
import smile from "../../public/images/smiles.png";
import trust from "../../public/images/trust.png";
import done from "../../public/images/done.png";
import journey from "../../public/images/journey.png";
import consult from "../../public/images/consultation.png";
import paylater from "../../public/images/paylater.png";
import vector from "../../public/images/vector.png";
export default function HowWeWorkSection() {
  return (
    <section className="bg-white pt-16 pb-20 relative">
      <div className="flex absolute top-20 right-10  z-10 w-64 h-64">
        <Image src={dentalTools} alt="Dentist" objectFit="cover" />
      </div>

      <div className=" max-w-7xl mx-auto px-40 grid md:grid-cols-2 gap-0 items-center">
        {/* Left Side - Images */}

        <div className="flex">
          <Image className="pr-8" src={About} alt="Dentist" objectFit="cover" />
          {/* <div className="mt-40 items-center justify-center">
            <Image
              className="pr-8 "
              src={howWeWork}
              alt="Dentist"
              width={40}
              // objectFit="cover"
            />
            <div className="p-3 bg-blue-400 rounded-full w-10 h-10 flex items-center justify-center ">
              <Image
                src={vector}
                alt="Dentist"
                width={50}
                height={50}
                // objectFit="cover"
              />
            </div>
          </div> */}
          <div className="mt-40 flex flex-col items-center">
            {/* Vertical Single-Line Text */}
            <p className="text-sm font-bold text-[#002b5c] transform -rotate-90 origin-bottom whitespace-nowrap">
              How We Work
            </p>

            {/* Circular Vector Icon */}
            <div className="mr-4 mt-14 w-10 h-10 rounded-full bg-[#2ca8ff] border-[5px] border-[#ccebff] flex items-center justify-center">
              <Image src={vector} alt="Vector" width={12} height={24} />
            </div>
          </div>
        </div>

        <div>
          <Image src={AboutUSText} alt="Dentist" objectFit="cover" />
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="bg-[#001F4D] text-white mt-24 ml-24 py-10 w-[90%] self-center">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className=" border-r border-white pr-4 flex flex-col items-center justify-center text-center">
            <Image src={smile} alt="Dentist" objectFit="cover" />
            <p className="text-white text-2xl font-bold mt-2">30000+</p>
            <p className="text-white text-sm mt-1">Smiles Treated</p>
          </div>
          <div className=" border-r border-white pr-4 flex flex-col items-center justify-center text-center">
            <Image src={trust} alt="Dentist" objectFit="cover" />
            <p className="text-white text-2xl font-bold mt-2">20+</p>
            <p className="text-white text-sm mt-1">Years of Trust</p>
          </div>
          <div className=" border-r border-white pr-4 flex flex-col items-center justify-center text-center">
            <Image src={done} alt="Dentist" objectFit="cover" />
            <p className="text-white text-2xl font-bold mt-2">4,000+</p>
            <p className="text-white text-sm mt-1">Implants Done</p>
          </div>
          <div className="  pr-4 flex flex-col items-center justify-center text-center">
            <Image src={journey} alt="Dentist" objectFit="cover" />
            <p className="text-white text-2xl font-bold mt-2">600+</p>
            <p className="text-white text-sm mt-1">Aligner Journeys</p>
          </div>
        </div>
      </div>
      <div className="bg-[#F2F6F9] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-sm font-semibold text-[#008FE2]">Why Choose Us</p>
          <h2 className="text-2xl font-bold mt-2 mb-4 text-black">
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
                image: feature1,
              },
              {
                title: "Free Consultations & X-Rays",
                desc: "No hidden charges, just honest, expert guidance.",
                image: consult,
              },
              {
                title: "Free Pick-Up & Drop-Off",
                desc: "Hassle-free transportation to our partner clinics for your convenience.",
                image: pickdrop,
              },
              {
                title: "0% EMI & ‘Smile Now, Pay Later",
                desc: "Making advanced dental care affordable and stress-free.",
                image: paylater,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <div className="w-10 h-10  text-white rounded-full flex items-center justify-center text-sm font-bold mb-4">
                  <Image
                    src={item.image}
                    alt={`Feature ${index + 1}`}
                    width={44}
                    height={44}
                  />
                  {/* {String.fromCharCode(65 + index)} */}
                </div>
                <h3 className="font-bold  mb-2 text-black">{item.title}</h3>
                <p className="text-sm text-black font-normal">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
