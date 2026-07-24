import { useEffect, useRef, useState } from "react";
// Returns [ref, inView]. Attach ref to any element; inView flips to true the
// first time it scrolls into the viewport, then stops observing.
export function useInView(options = { threshold: 0.15 }) {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setInView(true);
                observer.disconnect();
            }
        }, options);
        observer.observe(el);
        return () => observer.disconnect();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return [ref, inView];
}
