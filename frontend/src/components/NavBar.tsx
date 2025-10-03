import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function NavBar() {
  const link = ({ isActive }: { isActive: boolean }) =>
    `rounded-lg px-3 py-2 text-sm font-medium ${isActive ? "bg-gray-900 text-white" : "text-gray-700 hover:bg-gray-100"}`;

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          <Link to="/" className="text-lg font-semibold">✨ Portfolio</Link>
          <nav className="flex gap-1">
            <NavLink to="/" className={link} end>Home</NavLink>
            <NavLink to="/projects" className={link}>Projects</NavLink>
            <NavLink to="/team" className={link}>Meet the Team</NavLink>
            <NavLink to="/contact" className={link}>Contact Us</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
