'use client'

import { useEffect, useState } from "react";
import Confetti from "../ui/confetti";

export const ThankYouScreen = ({
    thankYouPageTitle,
    thankYouPageMessage,
}: {
    thankYouPageTitle: string | undefined;
    thankYouPageMessage: string | undefined;
}) => {
    const [showConfetti, setShowConfetti] = useState(false);

    const triggerConfetti = () => {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 5000); // Hide after 5 seconds
      };

    useEffect(() => {
        triggerConfetti()
    }, [])

    const confettiOptions = {
        particleCount: 100,
        angle: 60,
        spread: 55,
        startVelocity: 45,
        colors: ['#ff0', '#f00', '#00f']
      };
    
    return (
        <>
            <p className="my-2 text-gray-900 font-bold text-[16px]">
                {thankYouPageTitle}
            </p>
            <p className="text-gray-600 font-normal text-[16px]">{thankYouPageMessage}</p>
            {/* @ts-ignore */}
            {showConfetti && <Confetti options={confettiOptions} />}
        </>
    );
};