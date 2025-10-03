import React from "react";
import Card from "../components/ui/Card";

export default function Home() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Home</h1>
      <p className="text-gray-600">Short intro / hero copy.</p>

      {/* TODO(Routing/Content): Add featured projects preview, CTA buttons */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Card>TODO: Featured Project 1</Card>
        <Card>TODO: Featured Project 2</Card>
      </div>
    </section>
  );
}
