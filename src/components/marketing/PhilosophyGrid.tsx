const principles = [
  {
    number: "01",
    title: "Quality",
    description:
      "We build with care, precision, and long-term reliability.",
  },
  {
    number: "02",
    title: "Integrity",
    description:
      "We do not fake clients, testimonials, or results.",
  },
  {
    number: "03",
    title: "Innovation",
    description: "We use technology to solve real problems.",
  },
  {
    number: "04",
    title: "Premium execution",
    description:
      "Every product and system should feel polished and valuable.",
  },
];

export function PhilosophyGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {principles.map((principle) => (
        <div
          key={principle.number}
          className="surface-plate rounded-2xl p-8 champagne-accent-top"
        >
          <p className="text-mono-label">{principle.number}</p>
          <h3 className="text-h2 mt-4 text-foreground">{principle.title}</h3>
          <p className="mt-3 text-body text-silver">{principle.description}</p>
        </div>
      ))}
    </div>
  );
}
