import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import PageBanner from "@/components/ui/PageBanner";
import ArticleBody from "@/components/content/ArticleBody";
import { speeches } from "@/data/speeches";
import { formatDate } from "@/lib/format";

export async function generateStaticParams() {
  return speeches.map((speech) => ({ slug: speech.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const speech = speeches.find((s) => s.slug === slug);
  if (!speech) return {};
  return {
    title: speech.title,
    description: speech.excerpt,
  };
}

export default async function SpeechPage({ params }) {
  const { slug } = await params;
  const speech = speeches.find((s) => s.slug === slug);
  if (!speech) notFound();

  return (
    <article>
      <PageBanner
        eyebrow={`${formatDate(speech.date)} · ${speech.location}`}
        title={speech.title}
        image={speech.image || undefined}
        alt={speech.imageAlt || speech.title}
        className="h-[55vh] min-h-[400px]"
        titleClassName="text-[clamp(2rem,4.2vw,3.4rem)]"
        narrow
      />

      <section className="bg-paper px-6 py-20 md:px-10">
        <div className="mx-auto max-w-[760px]">
          <Reveal>
            <Link
              href="/speeches"
              className="inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.14em] text-forest"
            >
              <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
              Back to Speeches
            </Link>
          </Reveal>
          <Reveal delay={0.05}>
            <ArticleBody
              note={speech.note}
              paragraphs={speech.paragraphs}
              source={speech.source}
            />
          </Reveal>
        </div>
      </section>
    </article>
  );
}
