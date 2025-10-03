import React from "react";
import NavBar from "./NavBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-white text-gray-900">
      <NavBar />
      <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">{children}</main>
      <footer className="border-t py-6 text-sm text-gray-500">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} Your Team
        </div>
      </footer>
    </div>
  );
}
