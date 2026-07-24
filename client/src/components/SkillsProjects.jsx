import { useMemo, useState } from "react";
import { Code2, MonitorSmartphone, Server, Wrench } from "lucide-react";
import { skills } from "../data";
import ParticleTerrain from "./ParticleTerrain";
import FadeIn from "./FadeIn";
const categoryIcons = {
    Languages: Code2,
    Frontend: MonitorSmartphone,
    Backend: Server,
    Tools: Wrench,
};
const projects = [
    {
        title: "Student Management System",
        description:
            "A desktop application built with Python, Tkinter, and SQLite for managing student records.",
        technologies: ["Python", "Tkinter", "SQLite"],
    },
    {
        title: "Chat Client-Server Application",
        description:
            "A real-time chat application using socket programming and threading.",
        technologies: ["Python", "Socket Programming", "Threading"],
    },
    {
        title: "Web-Based Portal System",
        description:
            "A full-stack web portal developed using React, Laravel, PHP, and MySQL.",
        technologies: ["React", "Laravel", "PHP", "MySQL"],
    },
];
export default function SkillsProjects() {
    const [activeSkill, setActiveSkill] = useState(null);
    function toggleSkill(skill) {
        setActiveSkill((prev) => (prev === skill ? null : skill));
    }
    function projectMatches(project) {
        if (!activeSkill) return true;
        return project.technologies.some(
            (t) => t.toLowerCase() === activeSkill.toLowerCase()
        );
    }
    const matchCount = useMemo(
        () => (activeSkill ? projects.filter(projectMatches).length : null),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [activeSkill]
    );
    return (
        <section className="relative bg-jet">
            {/* Decorative animated terrain banner */}
            <div className="relative h-64 sm:h-80 overflow-hidden border-b border-graphite/60">
                <ParticleTerrain className="absolute inset-0 w-full h-full" />
                <div className="absolute inset-0 bg-gradient-to-t from-jet via-transparent to transparent" />
                <div className="relative z-10 h-full flex items-end justify-center pb-6">
                    <p className="text-ash text-xs tracking-[0.3em] uppercase">
                        Skills mapped to projects
                    </p>
                </div>
            </div>
            <div className="relative data-grid">
                {/* Skills */}
                <div id="skills" className="scroll-mt-24 max-w-5xl mx-auto px-6 pt-16 pb-10">
                    <h2 className="font-display text-4xl sm:text-5xl font-bold text-center mb-3 text-platinum">
                        Skills
                    </h2>
                    <p className="text-center text-ash mb-10">
                        Tap a skill to see which projects below use it.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-5">
                        {Object.entries(skills).map(([category, items], i) => {
                            const Icon = categoryIcons[category] ?? Code2;
                            return (
                                <FadeIn key={category} delay={i * 80}>
                                    <div className="rounded-xl border border-graphite bg graphite/30 backdrop-blur-sm p-5">
                                        <div className="flex items-center gap-2 mb-3">
                                            <Icon className="h-4 w-4 text-ash" strokeWidth={2} />
                                            <h3 className="text-base font-medium text-ash uppercase tracking-wide">
                                                {category}
                                            </h3>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {items.map((s) => {
                                                const isActive = activeSkill === s;
                                                return (
                                                    <button
                                                        key={s}
                                                        type="button"
                                                        onClick={() => toggleSkill(s)}
                                                        aria-pressed={isActive}
                                                        className={`text-sm px-2.5 py-1 roundedfull border transition-all duration-200 ${isActive ? "bg-platinum text-onyx borderplatinum scale-105" : "bg-onyx/60 border-graphite text-platinum hover:border-ash"}`}>
                                                        {s}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </FadeIn>
                            );
                        })}
                    </div>
                    <p className="sr-only" aria-live="polite">
                        {activeSkill ? `${matchCount} project${matchCount === 1 ? "" : "s"} use ${activeSkill}` : "No skill filter active"}
                    </p>
                    {activeSkill && matchCount === 0 && (
                        <p className="text-center text-ash text-sm mt-6">
                            No projects tagged with "{activeSkill}" yet — check back as more get added.
                        </p>
                    )}
                </div>
                {/* Projects */}
                <div id="projects" className="scroll-mt-24 max-w-5xl mx-auto px-6 pb-24">
                    <h2 className="font-display text-4xl sm:text-5xl font-bold text-center mb-10 text-platinum">
                        My Projects
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {projects.map((project, i) => {
                            const highlighted = projectMatches(project);
                            const dimmed = activeSkill && !highlighted;
                            return (
                                <FadeIn key={project.title} delay={i * 100}>
                                    <div
                                        className={`h-full bg-graphite/30 backdrop-blur-smrounded-xl p-6 border transition-all duration-300 ${dimmed ? "border-graphite opacity-35 scale-[0.98]" : activeSkill ? "border-platinum shadow[0_0_24px_rgba(224,224,224,0.25)] scale-[1.02]" : "border-graphite hover:-translate-y-1 hover:border-ash"}`}>
                                        <h3 className="font-display text-2xl font-semibold mb-3 text-platinum">
                                            {project.title}
                                        </h3>
                                        <p className="text-ash mb-4">{project.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((t) => (
                                                <span
                                                    key={t}
                                                    className={`text-sm px-2.5 py-1 rounded-full border ${activeSkill?.toLowerCase() === t.toLowerCase() ? "bg-platinum text-onyx border platinum" : "bg-onyx/60 border-graphite text platinum"}`}>
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </FadeIn>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}