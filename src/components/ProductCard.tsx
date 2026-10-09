type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
};

export default function SectionHeading({ eyebrow, title, description, center = false }: SectionHeadingProps) {
  return (
    <div className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-xl'}>
      {eyebrow ? (
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-champagne">{eyebrow}</p>
      ) : null}
      <h2 className="font-display text-4xl text-abyss md:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-base text-neutral-600">{description}</p> : null}
    </div>
  );
}
