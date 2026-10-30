import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ProjectCard from "@/components/cards/ProjectCard";
import Button from "@/components/ui/Button";
import { projects, constituencyNote } from "@/data/projects";

export default function ConstituencySection() {
  return (
    <section className="bg-paper px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-12 md:grid-cols-2 md:items-end">
          <SectionHeading
            eyebrow="On the Ground"
            title="Serving the Constituency"
            description="Zaria Federal Constituency, Kaduna State, which he has represented since 2011. Each project is labelled with the status given in the public record."
          />
          <Reveal
            variant="right"
            className="flex h-56 w-full flex-col justify-end bg-forest-deep p-6 text-paper md:h-64"
          >
            <p className="text-[12px] uppercase tracking-[0.2em] text-gold-soft">
              Kaduna State
            </p>
            <p className="mt-2 font-display text-3xl leading-tight tracking-tight">
              Zaria Federal Constituency
            </p>
            <p className="mt-2 text-[13px] leading-relaxed text-paper/70">
              Member of the House since 2011. Fourth term, 2023–2027.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.06}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <p className="mt-12 max-w-3xl text-[14px] leading-relaxed text-ink-soft/70">
          {constituencyNote}
        </p>

        <Reveal className="mt-14">
          <Button href="/constituency" variant="outline" className="text-ink">
            Explore Constituency Work
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
