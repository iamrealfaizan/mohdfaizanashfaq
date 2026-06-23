interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,0.7fr)] lg:items-end">
      <div>
        <p className="font-body text-[11px] font-semibold uppercase tracking-[0.3em] text-[#2D1A0E]/65">
          {eyebrow}
        </p>
        <h2 className="mt-3 max-w-[11ch] text-[2.35rem] font-black leading-[0.92] tracking-tight sm:text-[2.8rem] md:text-[4.5rem]">
          {title}
        </h2>
      </div>
      <p className="max-w-[52ch] text-[15px] leading-relaxed text-[#2D1A0E]/78 md:text-base">
        {description}
      </p>
    </div>
  );
}
