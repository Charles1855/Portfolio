import FadeIn from "./FadeIn";
function About() {
    return (
        <section id="about" className="py-20 px-6 scroll-mt-24">
            <div className="max-w-4xl mx-auto">
                <h2 className="font-display text-4xl sm:text-5xl font-bold text-center mb-8 text
onyx">
                    About Me
                </h2>
                <FadeIn className="max-w-3xl mx-auto bg-white/90 backdrop-blur-sm border border
ash rounded-2xl shadow-sm p-8 sm:p-10">
                    <p className="text-xl text-graphite leading-9 text-center">
                        Hello! I'm <span className="font-semibold text-onyx">Charles Diego
                            Chima</span>,
                        a Computer Science student and aspiring Full-Stack Developer from
                        Malawi. I enjoy building modern web applications and solving real-world
                        problems through technology.
                    </p>
                    <p className="text-xl text-graphite leading-9 text-center mt-6">
                        My experience includes developing applications using React, JavaScript,
                        Python, Laravel, PHP, MySQL and Git. During my internship at mHub
                        Innovation Hub, I worked on software projects that strengthened my
                        skills in web development, teamwork and problem solving.
                    </p>
                    <p className="text-xl text-graphite leading-9 text-center mt-6">
                        I'm always eager to learn new technologies and collaborate on projects
                        that create meaningful impact.
                    </p>
                </FadeIn>
            </div>
        </section>
    );
}
export default About;
