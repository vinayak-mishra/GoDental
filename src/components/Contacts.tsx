const ContactForm = () => (
  <section className="bg-white py-12 px-6 max-w-3xl mx-auto">
    <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">Book Your Free Consultation</h2>
    <form className="grid gap-4">
      <input
        type="text"
        placeholder="Full Name"
        className="border border-gray-300 p-3 rounded-lg w-full"
      />
      <input
        type="email"
        placeholder="Email Address"
        className="border border-gray-300 p-3 rounded-lg w-full"
      />
      <input
        type="tel"
        placeholder="Phone Number"
        className="border border-gray-300 p-3 rounded-lg w-full"
      />
      <textarea
        placeholder="Your Message..."
        className="border border-gray-300 p-3 rounded-lg w-full"
        rows={4}
      ></textarea>
      <button
        type="submit"
        className="bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  </section>
);

export default ContactForm;
