import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import PageBanner from "@/components/ui/PageBanner";
import ArticleBody from "@/components/content/ArticleBody";
import { news } from "@/data/news";
import { formatDate } from "@/lib/format";

export async function generateStaticParams() {
  return news.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = news.find((n) => n.slug === slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function NewsArticlePage({ params }) {
  const { slug } = await params;
  const article = news.find((n) => n.slug === slug);
  if (!article) notFound();

  return (
    <article>
      <PageBanner
        eyebrow={`${article.category} · ${formatDate(article.date)}`}
        title={article.title}
        image={article.image || undefined}
        alt={article.imageAlt || article.title}
        className="h-[55vh] min-h-[400px]"
        titleClassName="text-[clamp(2rem,4.2vw,3.4rem)]"
        narrow
      />

      <section className="bg-paper px-6 py-20 md:px-10">
        <div className="mx-auto max-w-[760px]">
          <Reveal>
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.14em] text-forest"
            >
              <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
              Back to News
            </Link>
          </Reveal>
          <Reveal delay={0.05}>
            <ArticleBody paragraphs={article.paragraphs} source={article.source} />
          </Reveal>
        </div>
      </section>
    </article>
  );
}
