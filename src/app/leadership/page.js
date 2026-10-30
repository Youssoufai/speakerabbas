import LeadershipTimeline from "@/components/sections/LeadershipTimeline";
import SectionHeading from "@/components/ui/SectionHeading";
import PageBanner from "@/components/ui/PageBanner";
import Reveal from "@/components/ui/Reveal";
import { site } from "@/data/site";
import { roles } from "@/data/timeline";

export const metadata = {
  title: "Leadership",
  description: `Parliamentary career of ${site.name}, from the 7th Assembly to the Speakership of the 10th House.`,
};

export default function LeadershipPage() {
  return (
    <>
      <PageBanner
        eyebrow="Leadership"
        title="A Life in Public Service"
        image="/images/speaker/office.jpg"
        alt="Rt. Hon. Abbas Tajudeen in his office at the National Assembly."
      />

      <LeadershipTimeline />

      <section className="bg-paper-dim px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <SectionHeading
            eyebrow="Parliamentary offices"
            title="From committee rooms to the Chair"
            description="Committee chairman in the 8th and 9th Assemblies, and Speaker from the opening of the 10th House on 13 June 2023."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {roles.map((role, i) => (
              <Reveal
                key={role.id}
                delay={i * 0.06}
                className="border border-line bg-paper p-7"
              >
                <p className="text-[12px] uppercase tracking-[0.16em] text-ink-soft/50">
                  {role.period}
                </p>
                <h3 className="mt-3 font-display text-2xl tracking-tight text-ink">
                  {role.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft/75">
                  {role.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
