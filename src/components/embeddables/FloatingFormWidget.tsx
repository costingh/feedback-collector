"use client";

import { useState } from "react";
import { MegaphoneLoud20RegularIcon } from "@/constants";
import clsx from "clsx";
import { CloseIconX } from "../icons/close-icon-x";

export const FloatingFormWidget = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleForm = () => setIsOpen(!isOpen);

    return (
        <>
            {/* Trigger Button */}
            <div
                onClick={toggleForm}
                className={clsx(
                    "fixed bottom-[15px] left-[15px] w-[58px] h-[58px] z-[999999] rounded-full overflow-hidden p-[2px] group transition-transform hover:scale-110 cursor-pointer"
                )}
            >
                {/* Animated Border */}
                <div className="absolute inset-0 z-10 h-[100px] animate-rotate rounded-full bg-[conic-gradient(#6756ff_20deg,transparent_120deg)]"></div>

                {/* Inner Gradient Button */}
                <div className="relative z-20 flex h-full w-full items-center justify-center rounded-full purple-background !border-[2px] !border-[rgb(89,76,255)]">
                    {!isOpen ? <MegaphoneLoud20RegularIcon className="w-5 h-5 text-white" /> : <CloseIconX className="w-5 h-5 text-white" />}
                </div>
            </div>

            {/* Tooltip */}
            <div className="fixed bottom-[30px] left-[85px] bg-gradient-to-br from-[#868CFF] to-[#4318FF] bg-clip-text text-transparent font-semibold text-[16px] z-[999999] animate-buzz-occasionally">
                Leave a testimonial
            </div>

            {/* Popup Panel */}
            <div
                className={clsx(
                    "bottom-[80px] left-[15px] z-[999998] rounded-2xl shadow-xl animate-slide-up w-full",
                    isOpen ? "fixed animate-slide-up" : "hidden animate-slide-up-reverse"
                )}
            >
                {children}
            </div>
        </>
    );
};
