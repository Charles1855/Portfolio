import { useState } from "react";
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";
export default function Contact() {
    const [status, setStatus] = useState("idle"); // idle | sending | sent | error
    async function handleSubmit(e) {
        e.preventDefault();
        setStatus("sending");
        const form = new FormData(e.target);
        try {
            const res = await fetch(`${API_URL}/api/contact`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(Object.fromEntries(form)),
            });
            if (res.ok) {
                setStatus("sent");
                e.target.reset();
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    }
    return (
        <section id="contact" className="py-20 px-6 scroll-mt-24">
            <div className="max-w-md mx-auto">
                <h2 className="font-display text-4xl sm:text-5xl font-bold text-center mb-3 text onyx">
                    Get In Touch
                </h2>
                <p className="text-center text-graphite text-lg mb-10">
                    Have a project in mind or just want to say hi? Send a message below.
                </p>
                <form
                    onSubmit={handleSubmit}
                    className="grid gap-4 bg-white/90 backdrop-blur-sm border border-ash rounded 2xl shadow-sm p-8">
                    <input
                        name="name"
                        placeholder="Name"
                        required
                        className="border border-ash rounded-md px-3 py-2 text-onyx placeholder:text-graphite/60 focus:outline-none focus:ring-2 focus:ring-onyx/40" />
                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        required
                        className="border border-ash rounded-md px-3 py-2 text-onyx placeholder:text-graphite/60 focus:outline-none focus:ring-2 focus:ring-onyx/40" />
                    <textarea
                        name="message"
                        placeholder="Message"
                        required
                        rows={4}
                        className="border border-ash rounded-md px-3 py-2 text-onyx placeholder:text-graphite/60 focus:outline-none focus:ring-2 focus:ring-onyx/40" />
                    <button
                        disabled={status === "sending"}
                        className="bg-onyx text-platinum rounded-md py-2 hover:bg-graphite transition-colors disabled:opacity-60">
                        {status === "sending" ? "Sending..." : status === "sent" ? "Sent ✓" : "Send"}
                    </button>
                    {status === "error" && (
                        <p className="text-sm text-red-600 text-center">
                            Something went wrong. Please try again.
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
}
