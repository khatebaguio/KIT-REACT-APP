export function HobbiesCardSection() {
  const hobbies = [
    { name: "Dancing", bg: "#581c25", color: "#fff" },
    { name: "K-Dramas", bg: "#e3d5c6", color: "#333", border: "1px solid #d5c4b0" },
    { name: "Traveling", bg: "#1a1a1a", color: "#fff" },
  ];

  return (
    <div className="flex gap-2.5 flex-wrap">
      {hobbies.map((h) => (
        <span
          key={h.name}
          style={{ backgroundColor: h.bg, color: h.color, border: h.border }}
          className="px-[18px] py-2 rounded-full text-[0.8rem]"
        >
          {h.name}
        </span>
      ))}
    </div>
  );
}