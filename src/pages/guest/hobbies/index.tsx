import { HobbiesCardSection } from "@/components/features/hobbies/hobbies-card-section";

export default function HobbiesPage() {
  return (
    <div className="content-grid">
      <div className="content-card flex flex-col justify-between gap-6">
        <div>
          <p className="text-[0.85rem] text-gray-600 m-0">Welcome to my space — Thanks for visiting ! (khate)</p>
          <h2 className="text-[2rem] font-black text-gray-900 mt-4 mb-0">
            MY <span className="text-[#581c25]">HOBBIES</span>
          </h2>
          <p className="text-[0.95rem] text-gray-700 mt-3 mb-0">
            In my free time, I love dancing, watching K-dramas, traveling, and listening to music. These activities help me relax, stay inspired, and enjoy life outside of school.
          </p>
        </div>

        <HobbiesCardSection />
      </div>

      <div className="content-card flex flex-col items-center justify-center gap-6 h-full">
        <div className="image-container">
          <img src="kitkit.jpg" alt="Hobbies" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}