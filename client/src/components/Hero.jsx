import heroBg from "../assets/hero-bg.png";
export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-end md:items-center overflow-hidden"
            style={{
                backgroundImage: `url(${heroBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Dark gradient overlay so text stays readable over the photo */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to black/20" />
            <div className="relative z-10 max-w-4xl mx-auto px-6 pb-20 pt-32 md:pt-24 w-full">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white trackingtight">
                    Charles Diego Chima
                </h1>
                <p className="mt-4 text-lg text-slate-200 max-w-xl">
                    Full-stack developer building fast, practical web apps.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                    <a
                        href="#projects"
                        className="px-5 py-2.5 bg-white text-slate-900 rounded-md text-sm fontmedium hover:bg-slate-200 transition-colors"
                    >
                        View projects
                    </a>
                    <a
                        href="/resume.pdf"
                        className="px-5 py-2.5 border border-white/70 text-white rounded-md textsm font-medium hover:bg-white/10 transition-colors"
                    >
                        Resume
                    </a>
                </div>
            </div>
            {/* Scroll cue */}
            <a
                href="#about"
                aria-label="Scroll to About section"
                className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-10 h-9 w9 items-center justify-center rounded-full border border-white/40 text-white animate-bounce">
            </a>
        </section>
    );
}
