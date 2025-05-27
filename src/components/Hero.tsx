import Image from "next/image";
import dentalImage from "../../public/images/dental-image.jpg";
import textImage from "../../public/images/text-logo.png";
import pyramidLogo from "../../public/images/pyramid-logo.png";
import dental from "../../public/images/dental.png";
import Sidebar from "../../public/images/sidebar.png";
const Hero = () => {
  return (
    <section className="relative bg-gray-50 min-h-[500px] flex items-center justify-center overflow-hidden px-6 md:px-16 py-16">
      {/* Background Image (flipped, full width, not cropped) */}

      <Image
        src={dentalImage}
        alt="Dental Background"
        fill
        className="object-cover -scale-x-100 "
        priority
      />
      <Image
        src={pyramidLogo}
        alt="Dental Background"
        // fill
        // width={60}
        className="z-20 absolute top-4 left-4 md:top-8 md:left-8 w-28 h-28 object-contain"
        // className="object-cover -scale-x-100 "
        priority
      />
      <Image
        src={dental}
        alt="Dental Background"
        // fill
        // width={60}
        className="z-20 absolute bottom-4 left-4 md:bottom-8 md:left-[50%] w-48 h-48 object-contain"
        // className="object-cover -scale-x-100 "
        priority
      />
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full px-6 md:px-16 py-16">
        {/* Left: Text Image */}
        <div className="w-full md:w-1/1   justify-center md:justify-start mb-8 md:mb-0">
          <Image
            src={textImage}
            alt="Text Logo"
            // width={400}
            // height={400}
            className="w-full h-auto"
            priority
          />
          <p className="mt-4 text-[16px] font-normal text-black">
            Not sure about your dental treatment plan? The ZERO (0) Dental Team
            offers you a completely free, unbiased second opinion—so you can
            make confident decisions about your dental health, with no cost, no
            pressure, and no hassle. Enjoy zero-cost X-rays and complimentary
            pickup and drop services. Let us help you find clarity and peace of
            mind—at zero expense.
          </p>

          <div className="flex gap-1">
            <Image
              src={Sidebar}
              alt="Phone Icon"
              width={1}
              height={100}
              className="w-2 h-16 mt-4"
            />
            <div>
              <div className="text-blue-900 font-bold text-2xl mt-4">
                Free Pickup & Drop
              </div>
              <div className="text-black  text-sm mt-2">
                Call Us at : +91 040-66666666
              </div>
              <div className="bg-[#002261] mt-8 rounded-4xl w-[200] py-2 text-white text-center font-semibold">
                Book Appointment
              </div>
            </div>
          </div>
        </div>

        {/* Right: Optional Text or leave empty */}
        <div className="w-full md:w-1/1 mt-[10%]"></div>
      </div>
    </section>
  );
};

export default Hero;
