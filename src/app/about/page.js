import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import CoverImage from "@/components/ui/CoverImage";
import PageBanner from "@/components/ui/PageBanner";
import { site } from "@/data/site";

export const metadata = {
  title: "About",
  description: `About ${site.name}, Speaker of the 10th House of Representatives and member for Zaria Federal Constituency since 2011.`,
};

const facts = [
  { label: "Born", value: "1 October 1965, Zaria" },
  { label: "Constituency", value: "Zaria, Kaduna State" },
  { label: "In the House", value: "Since 2011" },
  { label: "Speaker", value: "Since 13 June 2023" },
];

export default function AboutPage() {
  return (
    <>
      <PageBanner
        eyebrow="About"
        title="Rt. Hon. Abbas Tajudeen"
        image="/images/speaker/chamber.jpg"
        alt="Rt. Hon. Abbas Tajudeen at the dais of the House of Representatives."
        imageClassName="object-cover object-[68%_40%]"
        className="h-[60vh] min-h-[420px]"
      />

      <section className="bg-paper px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1600px] gap-16 md:grid-cols-2 md:items-start">
          <div>
            <SectionHeading
              eyebrow="The Speaker"
              title="Member for Zaria, Speaker of the 10th House"
              description="A teacher and university lecturer who has represented Zaria Federal Constituency since 2011, and who has presided over the House of Representatives since 13 June 2023."
            />
            <div className="mt-10 max-w-xl space-y-5 text-[15px] leading-relaxed text-ink-soft/80">
              <p>
                Abbas Tajudeen was born in Zaria, Kaduna State, on 1 October
                1965. He is a prince of the Zazzau Emirate and holds the
                traditional title of Iyan Zazzau. The Office of the Speaker
                describes that title as the 17th in the Zazzau Emirate and
                the sixth in the hierarchy of the emirate’s kingmakers.
              </p>
              <p>
                He was educated at LEA Primary School, Lemu, Government
                Secondary School, Makarfi, and Katsina Teachers’ College. At
                Ahmadu Bello University he took a diploma in Accounting, a
                bachelor’s degree in Business Administration and an MBA. In
                2010, the year before he entered the House, Usmanu Danfodiyo
                University, Sokoto, awarded him a PhD in Business Management.
              </p>
              <p>
                He taught in Zaria primary schools, lectured at Nuhu Bamalli
                Polytechnic — where he headed Accounting and Finance, and later
                Banking and Finance — and from 2005 was senior lecturer and
                pioneer Head of Accounting at Kaduna State University. Between
                the lecture halls he worked in banking and, from 1993 to 2001,
                in tobacco distribution.
              </p>
              <p>
                Zaria elected him to the House in 2011 on the ticket of the
                Congress for Progressive Change. He joined the All Progressives
                Congress after the parties merged in 2013, and the constituency
                returned him in 2015, 2019 and 2023. On 13 June 2023 his
                colleagues elected him Speaker with 353 of 359 votes. President
                Bola Ahmed Tinubu conferred the Grand Commander of the Order of
                the Niger on him on 4 October 2024.
              </p>
              <p>
                The Office of the Speaker records that he has published 13
                papers in international journals. It also lists fellowships of
                the institutes of logistics and transport, marketing,
                administration, and treasury management.
              </p>
            </div>
          </div>
          <Reveal variant="scale" className="h-[460px] md:sticky md:top-28 md:h-[560px]">
            <CoverImage
              src="/images/speaker/portrait.jpg"
              alt="Official portrait of Rt. Hon. Abbas Tajudeen."
              imageClassName="object-cover object-top"
              className="h-full w-full"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </Reveal>
        </div>

        <div className="mx-auto mt-20 grid max-w-[1600px] border border-line sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.label} className="border-line p-6 sm:border-l sm:first:border-l-0">
              <p className="text-[12px] uppercase tracking-[0.16em] text-ink-soft/50">
                {fact.label}
              </p>
              <p className="mt-2 font-display text-2xl tracking-tight text-ink">
                {fact.value}
              </p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-[1600px] text-[13px] leading-relaxed text-ink-soft/60">
          Biography follows the profile published by the Office of the Speaker,
          the National Assembly member record, and the State House announcement
          of the GCON. A point on which those accounts disagree is not stated
          as fact.
        </p>
      </section>
    </>
  );
}
