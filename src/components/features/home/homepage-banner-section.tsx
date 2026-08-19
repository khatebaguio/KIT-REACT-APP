import { Link } from "react-router";

export function HomePageBannerSection() {
  return (
    <div className="content-grid">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="image-container">
          <img src="/khay.jpg" alt="Khate Charmeille" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="flex flex-col justify-between gap-6 pt-[75px]">
        <div>
          <p className="text-[0.85rem] text-[#666] m-0">Welcome to my space — Thanks for visiting ! (khate)</p>
          <h2 className="text-[2.4rem] font-black text-[#1a1a1a] mt-4 mb-0">HI, I'M <span className="text-[#581c25]">KHATE</span></h2>
          <p className="text-[0.95rem] text-[#444] mt-3 mb-0 leading-relaxed">I'm a 19 year old college student. I enjoy learning new things, exploring new ideas, and challenging myself to grow every day. In my free time, I love dancing, watching K-dramas, traveling, and listening to music.</p>
        </div>

        <div className="flex gap-2.5 flex-wrap">
          <Link to="/about" className="bg-[#581c25] text-white px-[18px] py-2 rounded-[20px] text-[0.8rem] no-underline">About Me</Link>
          <Link to="/hobbies" className="bg-[#e3d5c6] text-[#333] px-[18px] py-2 rounded-[20px] text-[0.8rem] no-underline border border-[#d5c4b0]">My Hobbies</Link>
        </div>
      </div>
    </div>
  );
}