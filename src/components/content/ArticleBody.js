export default function ArticleBody({ paragraphs, note, source }) {
  return (
    <div className="mt-10 space-y-6">
      {note ? (
        <p className="text-[13px] uppercase tracking-[0.14em] text-ink-soft/50">
          {note}
        </p>
      ) : null}
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="text-[17px] leading-relaxed text-ink-soft/85">
          {paragraph}
        </p>
      ))}
      {source ? (
        <p className="border-t border-line pt-6 text-[13px] leading-relaxed text-ink-soft/60">
          {source}
        </p>
      ) : null}
    </div>
  );
}
