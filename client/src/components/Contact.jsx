import { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost: 4000";

export default function Contact() {
    const [status, setStatus] = useState("idle"); // idle| sendig | sent

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus("sending");
        const form = new FormData(e.target);
        const res = await fetch(`${API_URL}/api/contact`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Object.fromEntries(form)),
        });
        setStatus(res.ok ? "sent" : "idle");
    }
    return (
        <form onSubmit={handleSubmit} className="grid gap-3 max-w-md">
            <input name="name" placeholder="Name" required className="border rounded-md px-3 py-2" />
            <input name="email" type="email" placeholder="Email" required className="border rounded-md px-3 py-2" />
            <textarea name="message" placeholder="Message" required className="border rounded-md px-3 py-2" />
            <button disabled={status === "sending"} className="bg-blue-600 text-white rounded-md py-2">
                {status === "sent" ? "Sent 3" : "Send"}
            </button>
        </form>
    );
}