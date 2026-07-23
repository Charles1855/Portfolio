function About() {
    return (
        <section id="about" className="py-20 px-6 bg-slate-50 scroll-mt-24">
            <div className="max-w-4xl mx-auto">
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-8">
                    About Me
                </h2>
                <div className="max-w-3xl mx-auto bg-white border border-slate-200 rounded-2xl shadow-sm p-8 sm:p-10">
                    <p className="text-lg text-gray-700 leading-8 text-center">
                        Hello! I'm <span className="font-semibold">Charles Diego Chima</span>,
                        a Computer Science student and aspiring Full-Stack Developer from
                        Malawi. I enjoy building modern web applications and solving real-world
                        problems through technology.
                    </p>
                    <p className="text-lg text-gray-700 leading-8 text-center mt-6">
                        My experience includes developing applications using React, JavaScript,
                        Python, Laravel, PHP, MySQL and Git. During my internship at mHub
                        Innovation Hub, I worked on software projects that strengthened my
                        skills in web development, teamwork and problem solving.
                    </p>
                    <p className="text-lg text-gray-700 leading-8 text-center mt-6">
                        I'm always eager to learn new technologies and collaborate on projects
                        that create meaningful impact.
                    </p>
                </div>
            </div>
        </section>
    );
}
export default About;
