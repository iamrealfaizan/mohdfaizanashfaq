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
    <div className="grid gap-4 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,0.7fr)] lg:items-end">
      <div>
        <p className="font-body text-[11px] font-semibold uppercase tracking-[0.3em] text-[#2D1A0E]/65">
          {eyebrow}
        </p>
        <h2 className="mt-3 max-w-[10ch] text-[3rem] font-black leading-none tracking-tight md:text-[4.5rem]">
          {title}
        </h2>
      </div>
      <p className="max-w-[52ch] text-base text-[#2D1A0E]/78">{description}</p>
    </div>
  );
}
