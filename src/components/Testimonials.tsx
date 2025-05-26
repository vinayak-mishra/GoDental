const testimonials = [
  {
    name: "Amit K.",
    message:
      "ZERO Dental helped me understand my dental options without any pressure. Truly professional and kind!",
  },
  {
    name: "Priya S.",
    message:
      "I got a free consultation and X-ray. They explained everything so clearly. Great experience!",
  },
];

const Testimonials = () => (
  <section className="bg-blue-50 py-12 px-6 text-center">
    <h2 className="text-2xl font-bold text-blue-700 mb-8">
      What Our Patients Say
    </h2>
    <div className="grid md:grid-cols-2 gap-6">
      {testimonials.map(({ name, message }) => (
        <div key={name} className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700 italic">“{message}”</p>
          <div className="mt-4 text-blue-600 font-semibold">– {name}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
