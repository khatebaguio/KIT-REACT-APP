import { useState } from "react";
import { NavLink } from "react-router";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const linkClass = "text-sm font-medium text-[#fdfbf7] opacity-90 hover:opacity-100";

  return (
    <header className="sticky top-0 z-50 w-full bg-[#4a151d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between sm:justify-end h-16">
        <div className="sm:hidden text-sm font-bold text-[#fdfbf7]">Khate's Portfolio</div>

        <nav className="hidden sm:flex items-center space-x-8">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/hobbies" className={linkClass}>Hobbies</NavLink>
        </nav>

        <button onClick={() => setIsOpen(!isOpen)} className="sm:hidden text-2xl text-[#fdfbf7]">
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {isOpen && (
        <nav className="absolute top-full left-0 w-full flex flex-col items-center py-6 gap-4 sm:hidden bg-[#4a151d] shadow-lg border-t border-[#5d1c25]">
          <NavLink to="/" onClick={() => setIsOpen(false)} className={linkClass}>Home</NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)} className={linkClass}>About</NavLink>
          <NavLink to="/hobbies" onClick={() => setIsOpen(false)} className={linkClass}>Hobbies</NavLink>
        </nav>
      )}
    </header>
  );
}