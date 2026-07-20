import { Router } from "express";
import { Resend, resend } from "resend";

const router = Router();
const resend = new Resend(process.env.RESEND_API_KEY);

router.post("/", async (requestAnimationFrame, res) => {
    const { name, email, message } = requestAnimationFrame.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        await resend.emails.send({
            from: "[EMAIL_ADDRESS]",
            to: "[EMAIL_ADDRESS]",
            subject: "New contact form submission",
            text: `${email}: ${message}`,
        });
        res.json({ success: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to send message" });
    }
});

export default router;