import Reveal from "@/components/ui/Reveal";
import CoverImage from "@/components/ui/CoverImage";
import { cn } from "@/lib/utils";

export default function PageBanner({
  eyebrow,
  title,
  image,
  alt = "",
  imageClassName,
  className,
  narrow = false,
  titleClassName,
}) {
  return (
    <section
      className={cn(
        "relative flex items-end overflow-hidden bg-forest-deep text-paper",
        className ?? "h-[50vh] min-h-[360px]"
      )}
    >
      {image ? (
        <CoverImage
          src={image}
          alt={alt}
          imageClassName={imageClassName}
          className="absolute inset-0"
          priority
        />
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/25" />
      <div
        className={cn(
          "relative z-10 mx-auto w-full px-6 pb-16 md:px-10",
          narrow ? "max-w-[1000px]" : "max-w-[1600px]"
        )}
      >
        {eyebrow ? (
          <Reveal>
            <span className="text-[12px] uppercase tracking-[0.24em] text-gold-soft">
              {eyebrow}
            </span>
          </Reveal>
        ) : null}
        <Reveal delay={0.05}>
          <h1
            className={cn(
              "mt-4 text-balance font-display leading-[1.05] tracking-tight",
              titleClassName ?? "text-[clamp(2.5rem,6vw,5rem)]"
            )}
          >
            {title}
          </h1>
        </Reveal>
      </div>
    </section>
  );
}
