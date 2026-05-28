"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  url?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Mastering Taproot",
    description:
      "A deep technical reference on Bitcoin's Taproot soft fork — script paths, key paths, Schnorr signatures, MAST, and the developer tooling around them. Written for protocol engineers building on Bitcoin Layer 1.",
    tags: ["Bitcoin", "Writing"],
    url: "https://github.com/aaron-recompile/mastering-taproot",
  },
  {
    id: 2,
    title: "RGB & Taproot Tooling",
    description:
      "Open-source work on Bitcoin Layer 1: contributions and tooling around the RGB client-side validation protocol and Taproot native toolings.",
    tags: ["Bitcoin", "Open Source"],
    url: "https://github.com/aaron-recompile/rgb-transfer-toolkit",
  },
  {
    id: 3,
    title: "Bitcoin Layer 1 Contributions",
    description:
      "Bitcoin Layer 1 research and technical writing — protocol deep-dives and notes from active work. See Medium for active articles.",
    tags: ["Bitcoin", "Writing"],
    url: "https://medium.com/@aaron.recompile",
  },
  {
    id: 4,
    title: "btcaaron",
    description:
      "Taproot engineering, Inquisition opcode templates (CAT/CSFS/CTV/APO), and covenant protocol research.",
    tags: ["Bitcoin", "Open Source"],
    url: "https://github.com/aaron-recompile/btcaaron",
  },
  {
    id: 5,
    title: "Covenant Research",
    description:
      "Deep-dive on Bitcoin covenant primitives — what's bound under CSFS, IK-CSFS, and CHECKSIG. Published on delvingbitcoin.org.",
    tags: ["Bitcoin", "Writing"],
    url: "https://delvingbitcoin.org/t/what-exactly-is-bound-in-csfs-ik-csfs-and-checksig/2351",
  },
];

const allTags = Array.from(new Set(projects.flatMap((p) => p.tags))).sort();
const filters = ["All", ...allTags];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter));

  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-4xl font-semibold tracking-tight">Projects</h1>
      <p className="mt-6 text-lg text-zinc-600">
        Bitcoin Layer 1 protocol work, open-source tooling, and technical
        writing.
      </p>

      <div className="mt-10 flex flex-wrap gap-2">
        {filters.map((filter) => {
          const isActive = activeFilter === filter;
          return (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={
                isActive
                  ? "rounded-full bg-zinc-900 px-4 py-2 text-sm text-white"
                  : "rounded-full border border-zinc-300 px-4 py-2 text-sm text-zinc-700 transition-colors hover:bg-zinc-100"
              }
            >
              {filter}
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {visibleProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            tags={project.tags}
            href={project.url}
          />
        ))}
      </div>

      {visibleProjects.length === 0 && (
        <p className="mt-8 text-zinc-500">No projects match this filter yet.</p>
      )}
    </section>
  );
}
