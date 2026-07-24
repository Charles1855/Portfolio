import { useEffect, useRef } from "react";
// Renders an animated particle "terrain" silhouette on a canvas — a lightweight,
// dependency-free nod to the point-cloud mountain look, sized to fill its parent.
export default function ParticleTerrain({ className = "" }) {
    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;
        let width = 0;
        let height = 0;
        let points = [];
        let animationId = null;
        let time = 0;
        function terrainHeight(x) {
            const nx = x / width;
            const peak = Math.exp(-(((nx - 0.5) * 2.4) ** 2)) * 0.62;
            const ridge =
                Math.sin(nx * 14) * 0.035 +
                Math.sin(nx * 31 + 1.3) * 0.02 +
                Math.sin(nx * 61 + 2.7) * 0.012;
            return peak + ridge + 0.06;
        }
        function buildPoints() {
            points = [];
            const cols = Math.max(40, Math.floor(width / 7));
            const rowsPerCol = 22;
            for (let c = 0; c < cols; c++) {
                const x = (c / cols) * width;
                const h = terrainHeight(x) * height;
                for (let r = 0; r < rowsPerCol; r++) {
                    const t = r / rowsPerCol;
                    if (Math.random() > 0.55 + t * 0.4) continue;
                    const y = height - h * (1 - t * 0.9) - Math.random() * 5;
                    points.push({
                        x: x + (Math.random() - 0.5) * 5,
                        baseY: y,
                        r: Math.random() * 1 + 0.3,
                        phase: Math.random() * Math.PI * 2,
                        speed: 0.4 + Math.random() * 0.6,
                        bright: 1 - t,
                    });
                }
            }
        }
        function resize() {
            const rect = canvas.parentElement.getBoundingClientRect();
            width = canvas.width = rect.width;
            height = canvas.height = rect.height;
            buildPoints();
        }
        function draw() {
            ctx.clearRect(0, 0, width, height);
            for (const p of points) {
                const flicker = prefersReducedMotion
                    ? 1
                    : 0.6 + 0.4 * Math.sin(time * p.speed + p.phase);
                const alpha = Math.min(1, p.bright * flicker);
                const y = prefersReducedMotion
                    ? p.baseY
                    : p.baseY + Math.sin(time * 0.3 + p.phase) * 1.4;
                ctx.beginPath();
                ctx.fillStyle = `rgba(224, 224, 224, ${alpha.toFixed(3)})`;
                ctx.arc(p.x, y, p.r, 0, Math.PI * 2);
                ctx.fill();
            }
            if (!prefersReducedMotion) {
                time += 0.02;
                animationId = requestAnimationFrame(draw);
            }
        }
        resize();
        draw();
        const ro = new ResizeObserver(resize);
        ro.observe(canvas.parentElement);
        return () => {
            if (animationId) cancelAnimationFrame(animationId);
            ro.disconnect();
        };
    }, []);
    return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
