function Projects() {
    const projects = [
        {
            title: "Student Management System",
            description:
                "A desktop application built with Python, Tkinter, and SQLite for managing student records.",
            technologies: "Python, Tkinter, SQLite",
        },
        {
            title: "Chat Client-Server Application",
            description:
                "A real-time chat application using socket programming and threading.",
            technologies: "Python, Socket Programming, Threading",
        },
        {
            title: "Web-Based Portal System",
            description:
                "A full-stack web portal developed using React, Laravel, PHP, and MySQL.",
            technologies: "React, Laravel, PHP, MySQL",
        },
    ];

    return (
        <section id="projects" className="py-20 px-6 scroll-mt-24">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-10">
                    My Projects
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-lg p-6 border border-transparent transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:border-slate-200"
                        >
                            <h3 className="text-xl font-semibold mb-3">
                                {project.title}
                            </h3>

                            <p className="text-gray-600 mb-4">
                                {project.description}
                            </p>

                            <p className="text-sm font-medium">
                                {project.technologies}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;