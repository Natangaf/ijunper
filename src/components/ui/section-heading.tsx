type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-7 text-muted sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
