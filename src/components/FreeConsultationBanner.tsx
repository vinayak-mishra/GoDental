import Image from "next/image";
import XRayBanner from "../../public/images/xray-banner.png"; // Adjust the path as necessary
import elip1 from "../../public/images/elip-1.png"; // Adjust the path as necessary
import elip2 from "../../public/images/elip-2.png"; // Adjust the path as necessary
import arrow from "../../public/images/arrow.png"; // Adjust the path as necessary
export default function FreeConsultationBanner() {
  return (
    <section className="relative bg-[#00225a] w-full  px-4 overflow-hidden">
      {/* Background Ellipses */}

      <Image
        src={elip2}
        alt="Ellipse background"
        width={60}
        height={400}
        className="absolute bottom-0 right-0 z-0 object-contain pointer-events-none"
      />
      <Image
        src={elip1}
        alt="Ellipse background"
        width={40}
        height={400}
        className="absolute bottom-0 right-0 z-0 object-contain pointer-events-none"
      />

      {/* Main Content */}
      <div className="flex items-center max-w-7xl mx-auto">
        {/* Image */}
        <div className="w-32 h-auto relative flex-shrink-0 ml-28">
          <Image
            src={XRayBanner}
            alt="X-ray Consultation"
            width={128}
            height={128}
            className="object-cover"
          />
        </div>
        <div className="w-6 h-10 relative right-1">
          <Image
            src={arrow} // <-- make sure it's a right-pointing triangle or arrow
            alt="Arrow"
            fill
            className="object-contain"
          />
        </div>

        {/* Text content */}
        <div className="ml-6 text-white">
          <h3 className="font-bold text-lg">GET FREE</h3>
          <p className="text-[#00b3ff] font-semibold -mt-1">
            Consultation & Xray
          </p>
          <p className="text-sm mt-1">Call Us at : +91 040-66666666</p>
        </div>
      </div>
    </section>
  );
}
