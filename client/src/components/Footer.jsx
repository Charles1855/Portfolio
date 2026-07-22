export default function Footer() {
    return (
        <footer className="border-t border-slate-200 py-8 px-6 text-center text-sm text-slate
500">
            <p>&copy; {new Date().getFullYear()} Charles Diego Chima. Built with React &amp;
                Tailwind CSS.</p>
            <div className="mt-3 flex justify-center gap-5">
                <a
                    href="https://github.com/DevCharlesA"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-slate-900 transition-colors"
                >
                    GitHub
                </a>
                <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-slate-900 transition-colors"
                >
                    LinkedIn
                </a>
                <a href="mailto:you@example.com" className="hover:text-slate-900 transition
colors">
                    Email
                </a>
            </div>
        </footer>
    );
}
