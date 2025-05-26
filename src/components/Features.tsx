const features = [
  {
    title: "Zero Cost, Zero Pressure",
    desc: "Get expert validation of your diagnosis from seasoned professionals.",
  },
  {
    title: "Free Consultations & X-Rays",
    desc: "No-obligation diagnosis, just honest, expert guidance.",
  },
  {
    title: "Free Pickup & Drop",
    desc: "Free transportation for your consultation visit.",
  },
  {
    title: "0% EMI & Smile Now, Pay Later",
    desc: "Flexible and affordable care without compromise.",
  },
];

const Features = () => (
  <section className="bg-gray-100 py-12 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {features.map(({ title, desc }) => (
      <div key={title} className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-blue-600 font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{desc}</p>
      </div>
    ))}
  </section>
);

export default Features;