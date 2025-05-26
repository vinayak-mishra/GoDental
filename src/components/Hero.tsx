// // // // import dentalImage from "../../public/images/dental-image.jpg";
// // // // import Image from "next/image";

// // // // const Hero = () => {
// // // //   return (
// // // //     <section className="bg-gray-50 p-6 md:p-16 flex flex-col md:flex-row items-center justify-between">
// // // //       <div className="max-w-xl">
// // // //         <h1 className="text-4xl font-bold mb-4">
// // // //           Unsure about your dental diagnosis? <br />
// // // //           <span className="text-blue-600">Get a second opinion</span> with ZERO
// // // //           Dental Team!
// // // //         </h1>
// // // //         <p className="mb-4 text-gray-700">
// // // //           Not sure about your diagnosis? Visit ZERO Dental Team for a completely
// // // //           unbiased second opinion. Our experienced professionals will provide an
// // // //           honest consultation to help you make the right decision.
// // // //         </p>
// // // //         <div className="flex items-center gap-4">
// // // //           <span className="text-sm text-purple-700 font-semibold">
// // // //             Free Pickup & Drop
// // // //           </span>
// // // //           <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">
// // // //             Book Appointment
// // // //           </button>
// // // //         </div>
// // // //       </div>

// // // //       <Image
// // // //         src={dentalImage}
// // // //         fill
// // // //         alt={"Banner Article"}
// // // //         className="opacity-60"
// // // //       />
// // // //     </section>
// // // //   );
// // // // };

// // // // export default Hero;
// // // import dentalImage from "../../public/images/dental-image.jpg";
// // // import Image from "next/image";

// // // const Hero = () => {
// // //   return (
// // //     <section className="bg-gray-50 p-6 md:p-16 flex flex-col md:flex-row items-center justify-between">
// // //       <div className="max-w-xl md:w-1/2 mb-10 md:mb-0">
// // //         <h1 className="text-4xl font-bold mb-4">
// // //           Unsure about your dental diagnosis? <br />
// // //           <span className="text-blue-600">Get a second opinion</span> with ZERO
// // //           Dental Team!
// // //         </h1>
// // //         <p className="mb-4 text-gray-700">
// // //           Not sure about your diagnosis? Visit ZERO Dental Team for a completely
// // //           unbiased second opinion. Our experienced professionals will provide an
// // //           honest consultation to help you make the right decision.
// // //         </p>
// // //         <div className="flex items-center gap-4">
// // //           <span className="text-sm text-purple-700 font-semibold">
// // //             Free Pickup & Drop
// // //           </span>
// // //           <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">
// // //             Book Appointment
// // //           </button>
// // //         </div>
// // //       </div>

// // //       <div className="relative md:w-1/2 w-full h-64 md:h-[400px]">
// // //         <Image
// // //           src={dentalImage}
// // //           alt="Banner Article"
// // //           className="-scale-x-100 object-cover rounded-xl opacity-90"
// // //           fill
// // //         />
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default Hero;

// // import dentalImage from "../../public/images/dental-image.jpg";
// // import Image from "next/image";

// // const Hero = () => {
// //   return (
// //     <section className="bg-gray-50 p-6 md:p-16 flex flex-col md:flex-row items-center justify-between">
// //       <div className="max-w-xl md:w-1/2 mb-10 md:mb-0">
// //         <h1 className="text-4xl font-bold mb-4">
// //           Unsure about your dental diagnosis? <br />
// //           <span className="text-blue-600">Get a second opinion</span> with ZERO
// //           Dental Team!
// //         </h1>
// //         <p className="mb-4 text-gray-700">
// //           Not sure about your diagnosis? Visit ZERO Dental Team for a completely
// //           unbiased second opinion. Our experienced professionals will provide an
// //           honest consultation to help you make the right decision.
// //         </p>
// //         <div className="flex items-center gap-4">
// //           <span className="text-sm text-purple-700 font-semibold">
// //             Free Pickup & Drop
// //           </span>
// //           <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">
// //             Book Appointment
// //           </button>
// //         </div>
// //       </div>

// //       <div className="md:w-1/2 w-full flex justify-center">
// //         <Image
// //           src={dentalImage}
// //           alt="Dental Banner"
// //           className="-scale-x-100 max-w-full h-auto"
// //           priority
// //         />
// //       </div>
// //     </section>
// //   );
// // };

// // export default Hero;
// import dentalImage from "../../public/images/dental-image.jpg";
// import Image from "next/image";

// const Hero = () => {
//   return (
//     <section className="bg-gray-50 p-6 md:p-16 flex flex-col md:flex-row items-center justify-between">
//       {/* Text Content */}
//       <div className="max-w-xl md:w-1/2 z-10">
//         <h1 className="text-4xl font-bold mb-4">
//           Unsure about your dental diagnosis? <br />
//           <span className="text-blue-600">Get a second opinion</span> with ZERO
//           Dental Team!
//         </h1>
//         <p className="mb-4 text-gray-700">
//           Not sure about your diagnosis? Visit ZERO Dental Team for a completely
//           unbiased second opinion. Our experienced professionals will provide an
//           honest consultation to help you make the right decision.
//         </p>
//         <div className="flex items-center gap-4">
//           <span className="text-sm text-purple-700 font-semibold">
//             Free Pickup & Drop
//           </span>
//           <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">
//             Book Appointment
//           </button>
//         </div>
//       </div>

//       {/* Background Image Side */}
//       <div className="relative md:w-1/2 w-full h-64 md:h-[400px]">
//         <Image
//           src={dentalImage}
//           alt="Dental Background"
//           fill
//           className="object-contain -scale-x-100"
//           priority
//         />
//       </div>
//     </section>
//   );
// };

// export default Hero;

import Image from "next/image";
import dentalImage from "../../public/images/dental-image.jpg";
import textImage from "../../public/images/text-logo.png";
import pyramidLogo from "../../public/images/pyramid-logo.png";
import dental from "../../public/images/dental.png";
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
          <p className="mt-4">
            Not sure about your dental treatment plan? The ZERO (0) Dental Team
            offers you a completely free, unbiased second opinion—so you can
            make confident decisions about your dental health, with no cost, no
            pressure, and no hassle. Enjoy zero-cost X-rays and complimentary
            pickup and drop services. Let us help you find clarity and peace of
            mind—at zero expense.
          </p>

          <div>
            <div className="text-blue-900 font-bold text-2xl mt-4">
              Free Pickup & Drop
            </div>
            <div className="text-black  text-xl mt-2">
              Call Us at : +91 040-66666666
            </div>
            <div className="bg-blue-950 mt-4 rounded-4xl w-[200] py-2 text-white text-center font-semibold">
              Book Appointment
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
