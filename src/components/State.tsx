const stats = [
  { value: "30,000+", label: "Smiles Treated" },
  { value: "20+", label: "Years of Trust" },
  { value: "4,000+", label: "Implants Done" },
  { value: "600+", label: "Aligner Journeys" },
];

const Stats = () => {
  return (
    <section className="bg-blue-900 py-16 px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
      {stats.map(({ value, label }) => (
        <div key={label} className="border-r-2 border-white p-6 ">
          <div className="text-5xl font-bold text-white">{value}</div>
          <div className="text-white text-xl ">{label}</div>
        </div>
      ))}
    </section>
  );
};

export default Stats;
