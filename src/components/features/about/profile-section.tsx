export function ProfileSection() {
  const socials = [
    { name: "Facebook", href: "https://www.facebook.com/khate.baguio.14", bg: "#581c25", color: "#fff" },
    { name: "Instagram", href: "https://www.instagram.com/x.khxay/", bg: "#e3d5c6", color: "#333", border: "1px solid #d5c4b0" },
    { name: "TikTok", href: "https://www.tiktok.com/@xoxokahte", bg: "#1a1a1a", color: "#fff" },
  ];

  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-[220px] h-[280px] mx-auto mb-5 rounded-2xl overflow-hidden border-4 border-white shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
        <img src="/kitlyn.jpg" alt="Khate" className="w-full h-full object-cover" />
      </div>
      
      <h2 className="text-[1.8rem] font-black text-gray-900 mb-2">
        SOCIAL <span className="text-[#581c25]">ACCOUNTS</span>
      </h2>
      
      <p className="text-[0.85rem] text-gray-600 mb-5 max-w-[300px]">
        Want to stay connected? Find my updates and social links below!
      </p>
      
      <div className="flex gap-2.5 justify-center">
        {socials.map(({ name, href, bg, color, border }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noreferrer"
            style={{ backgroundColor: bg, color, border: border || 'none' }}
            className="px-5 py-2 rounded-full text-[0.8rem] font-semibold no-underline"
          >
            {name}
          </a>
        ))}
      </div>
    </div>
  );
}