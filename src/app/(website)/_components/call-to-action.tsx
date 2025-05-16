import Image from "next/image";
import React from "react";
import { GreenCheckIcon } from "./icons/green-check-icon";
import { HeroButton } from "./hero-button";

const CallToAction = () => {
    return <section className="-mb-20 mt-6 px-6">
        <div className="bg-transparent mx-auto grid w-full max-w-[1400px] flex-col items-center gap-10 overflow-hidden bg-[#050520] backdrop-blur-xl md:grid-cols-2 md:pt-20">
            <div className="relative order-2 mx-auto max-w-[425px] sm:order-1">
                <Image src="/images/webp-optimized/demo-image-2.webp" width={425} height={425} className="mx-auto w-full object-cover" alt="Website Conversion Optimization" />
            </div>

            <div className="order-1 flex flex-col gap-6 sm:order-2">
                <div className="mt-6 flex flex-row items-center justify-center md:mt-0 md:justify-start">
                    <div>
                        {/* @ts-ignore */}
                        <feedbackz-widget data-widget-id="MXD2QPb"></feedbackz-widget>
                    </div>
                </div>
                <h2 className="relative items-center justify-center text-center text-4xl font-bold md:text-left lg:text-5xl">
                    <span className="text-transparent bg-gradient-to-b from-white from-70% to-[#b2b2b2] bg-clip-text">Try Feedbackz.co </span>
                    <span className="text-transparent bg-gradient-to-b from-white from-30% to-[#7496F8] bg-clip-text">risk-free </span>
                </h2>
                <ul className="flex flex-col">
                    <li className="flex items-center">
                        <GreenCheckIcon />
                        <span className="ml-3 text-lg text-gray-DEFAULT-400">Create testimonial collector forms with a few clicks</span>
                    </li>
                    <li className="flex items-center">
                        <GreenCheckIcon />
                        <span className="ml-3 text-lg text-gray-DEFAULT-400">Curate and display testimonials on your website</span>
                    </li>
                    <li className="flex items-center">
                        <GreenCheckIcon />
                        <span className="ml-3 text-lg text-gray-DEFAULT-400">Increase your conversion rate by 3x</span>
                    </li>
                </ul>
                <div className="w-full max-w-[500px] flex flex-col gap-4 items-center justify-center">
                    <HeroButton
                        variant="md"
                        text="Start Now For FREE"
                    />
                    <div className="text-center text-slate-400">No credit card required</div>
                </div>
            </div>
        </div>
    </section>
};

export default CallToAction;