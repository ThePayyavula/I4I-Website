import React from "react";
export default function Card({ children }: { children: React.ReactNode }) {
  return <div className="rounded-2xl border p-5 shadow-sm">{children}</div>;
}
