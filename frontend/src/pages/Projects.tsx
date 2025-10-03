import React from "react";
import { projects } from "../data/projects";
import Badge from "../components/ui/Badge";
import Card from "../components/ui/Card";

export default function Projects() {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">Projects</h1>
      {/* TODO(Projects): Filter/sort UI, cards, links to repo/demo */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <Card key={p.id}>
            <h3 className="text-lg font-semibold">{p.title}</h3>
            {p.description && <p className="mt-1 text-sm text-gray-600">{p.description}</p>}
            <div className="mt-3 flex flex-wrap gap-2">
              {(p.tags ?? []).map((t) => <Badge key={t}>{t}</Badge>)}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
