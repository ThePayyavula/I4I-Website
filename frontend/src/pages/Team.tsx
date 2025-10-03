import React from "react";
import { team } from "../data/team";
import Card from "../components/ui/Card";

export default function Team() {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">Meet the Team</h1>
      {/* TODO(Team): Photos/avatars, links, roles */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {team.map((m) => (
          <Card key={m.id}>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 font-semibold">
                {m.name.split(" ").map((s) => s[0]).join("")}
              </div>
              <div>
                <h3 className="font-semibold">{m.name}</h3>
                {m.role && <p className="text-sm text-gray-600">{m.role}</p>}
                {m.bio && <p className="mt-2 text-sm">{m.bio}</p>}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
