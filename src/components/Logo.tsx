import logoMark from "@/assets/logo-mark.png";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

export function Logo({ variant = "dark", className = "" }: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-primary";
  const subColor = variant === "light" ? "text-white/60" : "text-muted-foreground";
  return (
    <a href="#top" className={`flex items-center gap-2.5 ${className}`} aria-label="Total Wash Cleaning Service home">
      <img
        src={logoMark}
        alt=""
        width={36}
        height={36}
        className="h-9 w-9 object-contain"
      />
      <div className="flex flex-col leading-none">
        <span className={`text-[15px] font-bold tracking-tight ${textColor}`}>Total Wash</span>
        <span className={`text-[10px] font-medium uppercase tracking-[0.18em] ${subColor}`}>
          Cleaning Service
        </span>
      </div>
    </a>
  );
}
