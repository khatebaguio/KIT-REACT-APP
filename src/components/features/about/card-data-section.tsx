export function CardDataSection() {
  const cards = [
    { title: "Khate Charmeille Baguio", desc: "19 years old , Born on June 05, 2006" },
    { title: "BSIT Students", desc: "College student building skills in web development" },
    { title: "Passionate Dancer", desc: "Enjoys movement, choreography, and physical activity." },
    { title: "Hobbies & Interests", desc: "Watching K-dramas, traveling, and listening to music." },
  ];

  return (
    <div className="flex flex-col gap-4 w-full">
      {cards.map(({ title, desc }, i) => (
        <div key={i} className="p-4 px-6 rounded-2xl border border-[#e5dbd3] bg-white">
          <div className="text-base font-bold text-[#581c25] mb-1.5">{title}</div>
          <div className="text-[0.85rem] text-gray-500">{desc}</div>
        </div>
      ))}
    </div>
  );
}