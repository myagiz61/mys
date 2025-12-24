import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `relative text-sm font-medium transition ${
      isActive
        ? "text-slate-900 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-slate-900"
        : "text-slate-600 hover:text-slate-900"
    }`;

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <img src="/mys.png" alt="MYS Software Logo" className="h-9 w-9" />
          <span className="text-lg font-semibold tracking-tight text-slate-900">
            MYS Software
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-10">
          <NavLink to="/hakkimizda" className={linkClass}>
            Hakkımızda
          </NavLink>
          <NavLink to="/hizmetler" className={linkClass}>
            Hizmetler
          </NavLink>
          <NavLink to="/urunler" className={linkClass}>
            Ürünler
          </NavLink>
          <NavLink to="/iletisim" className={linkClass}>
            İletişim
          </NavLink>
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            to="/iletisim"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition shadow"
          >
            Teklif Al
            <span className="text-lg">→</span>
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex items-center justify-center h-10 w-10 rounded-full border text-slate-700 hover:bg-slate-100 transition"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 space-y-3 bg-white border-t text-sm">
          <NavLink
            onClick={() => setOpen(false)}
            to="/hakkimizda"
            className={linkClass}
          >
            Hakkımızda
          </NavLink>
          <NavLink
            onClick={() => setOpen(false)}
            to="/hizmetler"
            className={linkClass}
          >
            Hizmetler
          </NavLink>
          <NavLink
            onClick={() => setOpen(false)}
            to="/urunler"
            className={linkClass}
          >
            Ürünler
          </NavLink>
          <NavLink
            onClick={() => setOpen(false)}
            to="/iletisim"
            className={linkClass}
          >
            İletişim
          </NavLink>

          <Link
            to="/iletisim"
            onClick={() => setOpen(false)}
            className="block mt-4 text-center px-4 py-2.5 rounded-full bg-slate-900 text-white font-medium"
          >
            Teklif Al
          </Link>
        </div>
      </div>
    </header>
  );
}
