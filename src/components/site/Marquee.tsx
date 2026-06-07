export function Marquee() {
  const items = ["Strength", "★", "Power", "★", "Endurance", "★", "Recovery", "★", "Athletic", "★", "Transform", "★"];
  return (
    <div className="border-y border-border py-6 overflow-hidden bg-charcoal">
      <div className="flex gap-12 animate-marquee whitespace-nowrap font-display text-3xl md:text-5xl uppercase tracking-wider">
        {[...items, ...items, ...items].map((x, i) => (
          <span key={i} className={x === "★" ? "text-ember" : "text-foreground/80"}>{x}</span>
        ))}
      </div>
    </div>
  );
}
