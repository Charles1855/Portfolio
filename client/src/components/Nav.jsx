import { useEffect, useState } from "react";
export default function Nav() {
    const links = ["About", "Skills", "Projects", "Contact"];
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        function handleScroll() {
            setScrolled(window.scrollY > 40);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled ? "bg-platinum/90 backdrop-blur border-b border-ash" : "bg-transparent"
                }`}
        >
            <div className="max-w-5xl mx-auto flex justify-between items-center px-6 py-4">
                <span
                    className={`font-display text-lg font-semibold transition-colors ${scrolled ? "text-onyx" : "text-white"
                        }`}
                >
                    Charles Diego
                </span>
                <div className="flex gap-6 text-base">
                    {links.map((l) => (
                        <a
                            key={l}
                            href={`#${l.toLowerCase()}`}
                            className={`transition-colors hover:text-graphite ${scrolled ? "text-onyx/80" : "text-white/90"
                                }`}
                        >
                            {l}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}
