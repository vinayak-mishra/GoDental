// // "use client";

// // import { useState } from "react";
// // import Image from "next/image";
// // import { Plus, Minus } from "lucide-react";
// // import faq from "../../public/images/faq.webp";
// // const faqData = [
// //   {
// //     question: "How much do you charge for a second opinion?",
// //     answer:
// //       "ZERO DENTAL offers second opinions at absolutely no cost. Our expert dentists will evaluate your case and provide guidance—free of charge! There are no consultation fees. No hidden charges.",
// //   },
// //   {
// //     question: "How much does a Root Canal Treatment (RCT) cost?",
// //     answer:
// //       "The cost of an RCT depends on the tooth and the severity of decay. It generally ranges between ₹2,000 – ₹5,000 per tooth. For exact pricing, our partnered clinics can assess your case and give you detailed estimates.",
// //   },
// //   {
// //     question: "Do you provide free dental treatment?",
// //     answer: "",
// //   },
// //   {
// //     question: "What is the cost of a dental implant?",
// //     answer: "",
// //   },
// //   {
// //     question: "How much does tooth whitening cost?",
// //     answer: "",
// //   },
// //   {
// //     question: "Do you offer EMI or installment options?",
// //     answer: "",
// //   },
// //   {
// //     question: "Where are your clinics located?",
// //     answer: "",
// //   },
// //   {
// //     question: "Do you provide home visits for dental treatment?",
// //     answer: "",
// //   },
// //   {
// //     question: "How do I book an appointment?",
// //     answer: "",
// //   },
// //   {
// //     question: "Can I get my treatment done at my preferred clinic?",
// //     answer: "",
// //   },
// // ];

// // export default function FAQSection() {
// //   const [openIndex, setOpenIndex] = useState<number | null>(0);

// //   const toggleIndex = (index: number) => {
// //     setOpenIndex((prev) => (prev === index ? null : index));
// //   };

// //   return (
// //     <section className="bg-white py-16">
// //       <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-3 gap-12">
// //         <div className="md:col-span-2">
// //           <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left mb-4">
// //             Frequently asked question
// //           </h2>
// //           <p className="text-center md:text-left text-gray-500 mb-10 max-w-2xl">
// //             Lorem ipsum dolor sit amet consectetur. Eget diam amet nibh habit
// //             turpis turpis. Duis imperdiet nulla penatibus suspendisse ultricies.
// //             Duis sed semper facilisis non amet
// //           </p>
// //           <div className="grid md:grid-cols-2 gap-4">
// //             {faqData.map((item, index) => (
// //               <div
// //                 key={index}
// //                 className="border border-gray-300 rounded-lg overflow-hidden"
// //               >
// //                 <button
// //                   onClick={() => toggleIndex(index)}
// //                   className="w-full flex items-center justify-between p-4 text-left"
// //                 >
// //                   <span className="text-sm md:text-base font-medium text-gray-800">
// //                     {item.question}
// //                   </span>
// //                   <span className="text-blue-500">
// //                     {openIndex === index ? <Minus /> : <Plus />}
// //                   </span>
// //                 </button>
// //                 {openIndex === index && item.answer && (
// //                   <div className="px-4 pb-4 text-gray-600 text-sm md:text-base">
// //                     {item.answer}
// //                   </div>
// //                 )}
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //         <div className="hidden md:block">
// //           <Image
// //             src={faq}
// //             alt="Dental Tools"
// //             width={400}
// //             height={400}
// //             className="w-full h-auto object-contain"
// //           />
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { Plus, Minus } from "lucide-react";
// import faq from "../../public/images/faq.webp";

// const faqData = [
//   {
//     question: "How much do you charge for a second opinion?",
//     answer:
//       "ZERO DENTAL offers second opinions at absolutely no cost. Our expert dentists will evaluate your case and provide guidance—free of charge! There are no consultation fees. No hidden charges.",
//   },
//   {
//     question: "How much does a Root Canal Treatment (RCT) cost?",
//     answer:
//       "The cost of an RCT depends on the tooth and the severity of decay. It generally ranges between ₹2,000 – ₹5,000 per tooth. For exact pricing, our partnered clinics can assess your case and give you a detailed estimate.",
//   },
//   {
//     question: "Do you provide free dental treatment?",
//     answer: "",
//   },
//   {
//     question: "What is the cost of a dental implant?",
//     answer: "",
//   },
//   {
//     question: "How much does tooth whitening cost?",
//     answer: "",
//   },
//   {
//     question: "Do you offer EMI or installment options?",
//     answer: "",
//   },
//   {
//     question: "Where are your clinics located?",
//     answer: "",
//   },
//   {
//     question: "Do you provide home visits for dental treatment?",
//     answer: "",
//   },
//   {
//     question: "How do I book an appointment?",
//     answer: "",
//   },
//   {
//     question: "Can I get my treatment done at my preferred clinic?",
//     answer: "",
//   },
// ];

// export default function FAQSection() {
//   const [openIndex, setOpenIndex] = useState<number | null>(0);

//   const toggleIndex = (index: number) => {
//     setOpenIndex((prev) => (prev === index ? null : index));
//   };

//   return (
//     <section className="bg-white py-20">
//       <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-3 gap-12 items-start">
//         {/* Left: FAQ content */}
//         <div className="md:col-span-2">
//           <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left mb-4">
//             Frequently asked question
//           </h2>
//           <p className="text-gray-500 text-center md:text-left mb-10 max-w-2xl">
//             Lorem ipsum dolor sit amet consectetur. Eget diam amet nibh nisl
//             turpis turpis. Duis imperdiet nulla penatibus suspendisse ultrices.
//             Duis sed semper facilisis non amet
//           </p>

//           <div className="grid md:grid-cols-2 gap-4">
//             {faqData.map((item, index) => {
//               const isOpen = openIndex === index;
//               return (
//                 <div
//                   key={index}
//                   className="bg-white border border-gray-200 rounded-lg shadow-sm transition-all duration-200"
//                 >
//                   <button
//                     onClick={() => toggleIndex(index)}
//                     className="flex items-start gap-4 p-4 w-full text-left"
//                   >
//                     <div className="min-w-[32px] h-[32px] rounded-full bg-blue-500 text-white flex items-center justify-center mt-1">
//                       {isOpen ? <Minus size={18} /> : <Plus size={18} />}
//                     </div>
//                     <span className="text-sm md:text-base font-medium text-gray-800">
//                       {item.question}
//                     </span>
//                   </button>
//                   {isOpen && item.answer && (
//                     <div className="pl-16 pr-4 pb-4 text-gray-600 text-sm md:text-base">
//                       {item.answer}
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Right: Image */}
//         <div className="hidden md:flex items-end justify-end">
//           <Image
//             src={faq}
//             alt="Dental Tools"
//             width={400}
//             height={400}
//             className="w-full h-auto object-contain"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import faq from "../../public/images/faq.webp";

const faqData = [
  {
    question: "How much do you charge for a second opinion?",
    answer:
      "ZERO DENTAL offers second opinions at absolutely no cost. Our expert dentists will evaluate your case and provide guidance—free of charge! There are no consultation fees. No hidden charges.",
  },
  {
    question: "How much does a Root Canal Treatment (RCT) cost?",
    answer:
      "The cost of an RCT depends on the tooth and the severity of decay. It generally ranges between ₹2,000 – ₹5,000 per tooth. For exact pricing, our partnered clinics can assess your case and give you a detailed estimate.",
  },
  {
    question: "Do you provide free dental treatment?",
    answer: "",
  },
  {
    question: "What is the cost of a dental implant?",
    answer: "",
  },
  {
    question: "How much does tooth whitening cost?",
    answer: "",
  },
  {
    question: "Do you offer EMI or installment options?",
    answer: "",
  },
  {
    question: "Where are your clinics located?",
    answer: "",
  },
  {
    question: "Do you provide home visits for dental treatment?",
    answer: "",
  },
  {
    question: "How do I book an appointment?",
    answer: "",
  },
  {
    question: "Can I get my treatment done at my preferred clinic?",
    answer: "",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl  mx-auto px-4 md:px-8 grid md:grid-cols-3 gap-12 items-start">
        {/* FAQ content centered */}
        <div className="relative left-[25%] right-[10%] md:col-span-2 flex justify-center">
          <div className="max-w-3xl w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-black">
              Frequently asked question
            </h2>
            <p className="text-gray-500 text-center mb-10">
              Lorem ipsum dolor sit amet consectetur. Eget diam amet nibh nisl
              turpis turpis. Duis imperdiet nulla penatibus suspendisse
              ultrices. Duis sed semper facilisis non amet
            </p>

            <div className=" grid md:grid-cols-2 gap-4">
              {faqData.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-lg shadow-sm transition-all duration-200"
                  >
                    <button
                      onClick={() => toggleIndex(index)}
                      className="flex items-start gap-4 p-4 w-full text-left"
                    >
                      <div className="min-w-[32px] h-[32px] rounded-full bg-blue-500 text-white flex items-center justify-center mt-1">
                        {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                      </div>
                      <span className="text-sm md:text-base font-medium text-gray-800">
                        {item.question}
                      </span>
                    </button>
                    {isOpen && item.answer && (
                      <div className="pl-16 pr-4 pb-4 text-gray-600 text-sm md:text-base">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Image on the right */}
        <div className="hidden md:flex items-end justify-end">
          <Image
            src={faq}
            alt="Dental Tools"
            width={400}
            height={400}
            className="w-full h-auto object-contain relative left-20 top-40"
          />
        </div>
      </div>
    </section>
  );
}
