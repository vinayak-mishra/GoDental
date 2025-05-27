import Image from "next/image";
import videoBg from "../../public/images/video_section.webp";
import clinic from "../../public/images/clinic.webp";
import contact from "../../public/images/contact.png";
export default function FreeConsultationSection() {
  return (
    <section>
      {/* Watch Video Section */}
      <div className="relative bg-[#001530] text-white overflow-hidden">
        <Image
          src={videoBg}
          alt="Video Background"
          fill
          priority
          className="object-cover object-center absolute top-0 left-0 right-0 w-full h-full"
        />
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center px-4 py-16 md:py-24">
          {/* Left side with background image */}
          <div className="relative h-96 md:h-full w-full flex items-center justify-center">
            <div className=" flex z-10 text-center">
              <button className="bg-[#00B4FF] w-20 h-20 rounded-full flex items-center justify-center shadow-xl mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
              <p className="text-white mt-6 mx-4 text-lg font-semibold text-white">
                Watch Video
              </p>
            </div>
          </div>

          {/* Right side text */}
          <div className="z-10 mt-10 md:mt-0">
            <p className="text-sm text-[#00B4FF] font-semibold mb-2">
              OUR WATCH VIDEO
            </p>
            <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
              Get Clarity, Not Surprises –<br />
              <span className="text-[#00B4FF]">
                Experience a 100% Free Dental Second Opinion,
              </span>{" "}
              with <span className="text-[#00B4FF]">Zero Hidden Costs!</span>
            </h2>
            <p className="text-sm text-gray-300 max-w-lg">
              Worried about the right dental treatment or unexpected bills? At
              ZERO DENTAL, your second opinion, X-rays, and consultation are
              absolutely FREE. No fees. No pressure. No hidden charges.
            </p>
          </div>
        </div>
      </div>

      {/* Consultation Form Section */}
      <div className="bg-[#E5EEF3] py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          {/* Form */}
          <div>
            <p className="flex text-sm font-semibold text-[#008FE2] mb-2">
              <Image
                src={contact}
                alt="Contact Icon"
                width={32}
                height={16}
                className="mr-2"
              />
              CONTACT US
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Book My Free Consultation – Zero Cost, Zero Pressure
            </h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your name*"
                  className="p-3 rounded-md w-full bg-white placeholder-gray-400"
                />
                <input
                  type="email"
                  placeholder="Your email*"
                  className="p-3 rounded-md w-full bg-white placeholder-gray-400"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Address*"
                  className="p-3 rounded-md w-full bg-white placeholder-gray-400"
                />
                <input
                  type="text"
                  placeholder="Phone*"
                  className="p-3 rounded-md w-full bg-white placeholder-gray-400"
                />
              </div>
              <textarea
                placeholder="Comments"
                rows={4}
                className="w-full p-3 bg-white rounded-md resize-none placeholder-gray-400"
              />
              <button
                type="submit"
                className="bg-[#008FE2] hover:bg-[#0070c2] text-white font-semibold px-6 py-2 rounded-full"
              >
                Book Appointment
              </button>
            </form>
          </div>

          {/* Image */}
          <div className="hidden md:block">
            <Image
              src={clinic}
              alt="Dental Clinic"
              width={600}
              height={400}
              className="rounded-xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
