import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline-light";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-ocean text-white hover:bg-[#005ecc] shadow-glow-ocean hover:shadow-none",
  secondary:
    "bg-island-cyan text-midnight hover:bg-[#20bde0] font-semibold",
  ghost:
    "bg-transparent text-white border border-white/30 hover:bg-white/10 hover:border-white/50",
  "outline-light":
    "bg-transparent text-ocean border border-ocean/40 hover:bg-ocean/5",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-6 py-3.5 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  const base =
    "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-[6px] text-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ocean/50 focus:ring-offset-2";
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
