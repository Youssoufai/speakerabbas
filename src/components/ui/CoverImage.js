import Image from "next/image";
import { cn } from "@/lib/utils";

export default function CoverImage({
  src,
  alt,
  className,
  imageClassName = "object-cover",
  priority = false,
  sizes = "100vw",
}) {
  return (
    <div className={cn("relative h-full w-full overflow-hidden", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={imageClassName}
      />
    </div>
  );
}
