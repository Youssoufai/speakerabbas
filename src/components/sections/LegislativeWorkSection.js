import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import StatCounter from "@/components/ui/StatCounter";
import LegislativeCard from "@/components/cards/LegislativeCard";
import Button from "@/components/ui/Button";
import {
  legislativeStats,
  legislativeInitiatives,
  legislativeNote,
} from "@/data/legislative";

export default function LegislativeWorkSection() {
  return (
    <section className="bg-paper px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1600px]">
        <SectionHeading
          eyebrow="By the Numbers"
          title="Legislative Work"
          description="His record as a member of the 8th and 9th Houses, and the vote that made him Speaker. House-wide totals are explained underneath and are not added to these figures."
        />

        <div className="mt-16 grid grid-cols-2 gap-8 border-y border-line py-12 md:grid-cols-4">
          {legislativeStats.map((stat, i) => (
            <Reveal key={stat.id} delay={i * 0.08}>
              <StatCounter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            </Reveal>
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-[14px] leading-relaxed text-ink-soft/70">
          {legislativeNote}
        </p>

        <div className="mt-16">
          {legislativeInitiatives.map((item) => (
            <LegislativeCard key={item.id} item={item} />
          ))}
        </div>

        <Reveal className="mt-14">
          <Button href="/legislative-work" variant="outline" className="text-ink">
            View Legislative Record
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
