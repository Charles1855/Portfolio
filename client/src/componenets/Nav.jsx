export default function Nav() {
    const links = ["About", "Skills", "Projects", "Contact"];
    return (
        <nav className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b">
            <div className="max-w-4xl mx-auto flex justify-between items-center px-6 py-4">
                <span className="font-semibold">Your Name</span>
                <div className="flex gap-6 text-sm">
                    {links.map((l) => (
                        <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-blue-600">
                            {l}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}
