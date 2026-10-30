import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import CoverImage from "@/components/ui/CoverImage";

export default function Introduction() {
  return (
    <section className="bg-paper px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto grid max-w-[1600px] gap-16 md:grid-cols-2 md:gap-24">
        <div>
          <Reveal>
            <span className="mb-8 inline-flex items-center gap-3 text-[12px] font-medium uppercase tracking-[0.24em] text-forest">
              <span className="h-px w-8 bg-current" />
              Message from the Speaker
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="text-balance font-display text-[clamp(2rem,4vw,3.2rem)] italic leading-[1.15] tracking-tight text-ink">
              &ldquo;As custodians of the legislative process, we must
              approach these tasks with resolve and an acute awareness of
              their implications for Nigeria&rsquo;s development
              trajectory.&rdquo;
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-lg text-[15px] leading-relaxed text-ink-soft/80">
              Rt. Hon. Abbas Tajudeen, PhD, GCON, has represented Zaria
              Federal Constituency since 2011 and has presided over the
              House since 13 June 2023. Before parliament he was a teacher,
              a lecturer at Kaduna State University, and a sponsor of more
              bills than any other member of the 9th House.
            </p>
            <p className="mt-4 max-w-lg text-[13px] leading-relaxed text-ink-soft/55">
              The quotation is published on the Office of the Speaker&rsquo;s
              biography.
            </p>
          </Reveal>
          <Reveal delay={0.22} className="mt-10">
            <Button href="/about" variant="ghost" className="!px-0 text-ink">
              Read the Speaker&rsquo;s Message
            </Button>
          </Reveal>
        </div>

        <Reveal variant="scale" delay={0.1} className="h-[420px] md:h-[560px]">
          <CoverImage
            src="/images/speaker/portrait.jpg"
            alt="Official portrait of Rt. Hon. Abbas Tajudeen, Speaker of the House of Representatives."
            imageClassName="object-cover object-top"
            className="h-full w-full"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </Reveal>
      </div>
    </section>
  );
}
