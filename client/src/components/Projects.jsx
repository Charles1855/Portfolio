function Projects() {
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
    return (
        <section id="projects" className="py-20 px-6 scroll-mt-24">
            <div className="max-w-5xl mx-auto">
                <h2 className="font-display text-4xl sm:text-5xl font-bold text-center mb-10 text-onyx">
                    My Projects
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white/90 backdrop-blur-sm shadow-sm rounded-xl p-6 border border-ash transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                            <h3 className="font-display text-2xl font-semibold mb-3 text-onyx">
                                {project.title}
                            </h3>
                            <p className="text-graphite mb-4">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((t) => (
                                    <span
                                        key={t}
                                        className="text-sm px-2.5 py-1 bg-platinum/60 border border-ash rounded-full text-onyx">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default Projects;
