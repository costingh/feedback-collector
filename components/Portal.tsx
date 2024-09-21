import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Portal = ({ children }: { children: React.ReactNode }) => {
    const elRef = useRef<HTMLElement | null>(null);

    if (!elRef.current) {
        elRef.current = document.createElement("div");
    }

    useEffect(() => {
        const body = document.body;
        body.appendChild(elRef.current!);
        return () => {
            body.removeChild(elRef.current!);
        };
    }, []);

    return createPortal(children, elRef.current);
};

export default Portal;
