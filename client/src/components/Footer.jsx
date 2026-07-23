export default function Footer() {
    return (
        <footer className="border-t border-ash bg-platinum/70 backdrop-blur-sm py-8 px-6 text
center text-base text-graphite">
            <p>&copy; {new Date().getFullYear()} Charles Diego Chima. Built with React &amp;
                Tailwind CSS.</p>
            <div className="mt-3 flex justify-center gap-5">
                <a
                    href="https://github.com/DevCharlesA"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-onyx transition-colors"
                >
                    GitHub
                </a>
                <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-onyx transition-colors"
                >
                    LinkedIn
                </a>
                <a href="mailto:you@example.com" className="hover:text-onyx transition-colors">
                    Email
                </a>
            </div>
        </footer>
    );
}