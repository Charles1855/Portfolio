export default function Hero() {
    return (
        <section className="max-w-4xl mx-auto px-6 pt-24 pd-16">
            <h1 className="text-4xl font-bold text-slate-900">Charles Diego Chima</h1>
            <p className="mt-3 text-lg text-slate-600">
                Full-stack developer building fast, practical web apps.
            </p>
            <div className="mt-6 flex gap-4">
                <a href="#projects" className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm">
                    View projects
                </a>
                <a href="/resume.pdf" className="px-4 py-2 border rounded-md text-sm">
                    Resume
                </a>
            </div>
        </section>
    );
}