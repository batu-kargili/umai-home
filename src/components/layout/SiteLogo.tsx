import Image from "next/image";
import Link from "next/link";

interface SiteLogoProps {
  tone?: "light" | "dark";
  className?: string;
  sizes?: string;
  priority?: boolean;
}

export function SiteLogo({
  tone = "light",
  className = "",
  sizes = "(min-width: 640px) 148px, 132px",
  priority = false,
}: SiteLogoProps) {
  const logo =
    tone === "dark"
      ? {
          src: "/assets/umailogo_dark.png",
          width: 1200,
          height: 273,
        }
      : {
          src: "/assets/umailogo_white.png",
          width: 828,
          height: 544,
        };

  return (
    <Link href="/" className="inline-flex items-center" aria-label="UMAI home">
      <Image
        src={logo.src}
        alt="UMAI"
        width={logo.width}
        height={logo.height}
        className={`h-auto w-[132px] sm:w-[148px] ${className}`.trim()}
        sizes={sizes}
        priority={priority}
        style={{ height: "auto" }}
      />
    </Link>
  );
}
