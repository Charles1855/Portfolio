import { Code2, MonitorSmartphone, Server, Wrench } from "lucide-react";
import { skills } from "../data";
const icons = {
  Languages: Code2,
  Frontend: MonitorSmartphone,
  Backend: Server,
  Tools: Wrench,
};
export default function Skills() {
  return (
    <section id="skills" className="bg-white px-6 py-20 scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-10">
          Skills
        </h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {Object.entries(skills).map(([category, items]) => {
            const Icon = icons[category] ?? Code2;
            return (
              <div
                key={category}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition shadow hover:shadow-md">
                <div className="flex items-center gap-2 mb-3">
                  <Icon className="h-4 w-4 text-slate-400" strokeWidth={2} />
                  <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wide">
                    {category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2.5 py-1 bg-slate-50 border border-slate-200 roundedfull text-slate-700">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
