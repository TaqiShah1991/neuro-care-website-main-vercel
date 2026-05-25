interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export function PageHero({ eyebrow, title, subtitle }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-accent/40 via-background to-background">
      <div className="absolute inset-0 -z-10 opacity-60">
        <div className="absolute top-10 left-1/4 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-32 right-1/4 h-72 w-72 rounded-full bg-teal/15 blur-3xl" />
      </div>
      <div className="container mx-auto px-4 lg:px-8 py-16 md:py-24 text-center">
        {eyebrow && (
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-teal" />
            {eyebrow}
          </span>
        )}
        <h1 className="text-4xl md:text-5xl font-bold text-foreground max-w-3xl mx-auto leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
