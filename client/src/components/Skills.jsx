import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
      <h2 className="text-2xl font-semibold mb-6">Skills</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-sm font-medium text-slate-500 mb-2">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((s) => (
                <span key={s} className="text-xs px-2 py-1 bg-slate-100 rounded-md">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}