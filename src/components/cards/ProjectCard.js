"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const statusStyles = {
  Ongoing: "bg-gold/15 text-gold",
  Completed: "bg-forest/10 text-forest",
  Mixed: "bg-ink/10 text-ink-soft",
  Commissioned: "bg-forest/10 text-forest",
};

export default function ProjectCard({ project }) {
  return (
    <motion.div whileHover="hover" initial="idle" className="group">
      <div className="relative flex h-40 flex-col justify-end bg-forest-deep p-5">
        <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-gold-soft">
          {project.category}
        </span>
        {project.status ? (
          <span
            className={cn(
              "mt-3 inline-flex w-fit rounded-full bg-paper px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em]",
              statusStyles[project.status] ?? "text-ink"
            )}
          >
            {project.status}
          </span>
        ) : null}
      </div>
      <div className="mt-5">
        <p className="text-[12px] uppercase tracking-[0.16em] text-ink-soft/50">
          {project.location}
        </p>
        <h3 className="mt-2 font-display text-xl tracking-tight text-ink">
          {project.title}
        </h3>
        <p className="mt-2 text-[14px] leading-relaxed text-ink-soft/70">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
}
