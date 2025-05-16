import StarsRating from "@/components/stars/stars-rating";
import Image from "next/image";
import { HeroButton } from "./hero-button";

export default function UseSteps() {
    return (
        <section id="how-it-works" className="mt-6 px-6 py-6 lg:py-24 lg:mt-12 lg:px-36">
            <div className="flex flex-col items-center justify-center rounded-2xl">
                <div className="mx-auto flex max-w-3xl flex-col gap-6 px-4 pt-10 lg:pb-12">
                    <h2
                        className="text-transparent mx-auto bg-clip-text text-center text-3xl font-extrabold sm:text-4xl lg:text-5xl lg:leading-[60px]">
                        <span className="text-transparent bg-gradient-to-b from-white from-70% to-[#b2b2b2] bg-clip-text">Get
                            your form </span><span
                                className="text-transparent bg-gradient-to-b from-white from-30% to-[#7496F8] bg-clip-text">live on
                            your website </span><span
                                className="text-transparent bg-gradient-to-b from-white from-70% to-[#b2b2b2] bg-clip-text">in just
                            60 seconds</span>
                    </h2>
                    <div className="mx-auto max-w-[325px] text-center text-lg text-white md:max-w-full lg:text-xl">Let FeedBackz.co do the hard work for you. It's this easy:</div>
                </div>
                <div
                    className="grid max-w-7xl grid-cols-1 items-start justify-center justify-items-center gap-6 md:grid-cols-2 md:gap-20 lg:grid-cols-3">
                    <div className="relative flex flex-col items-center justify-center px-2">
                        <Image
                            src='/images/landing-page/create-form.png'
                            alt=""
                            width={350}
                            height={350}
                            className="rounded-[10px]"
                        />
                        <img src="/images/step1.svg" className="mx-auto -mb-3 mt-9 w-full max-w-[30px]"
                            alt="Step 1" width="30" height="30" />
                        <div className="max-w-[350px] text-center text-2xl font-[500] tracking-tight text-white">Create & Share Branded Testimonial Forms
                        </div>
                        <p className="mt-6 text-center text-[#9ca3af]">Design fully customizable feedback forms (text or video) tailored to your brand. Share them via link, popup, or embed — and start collecting testimonials effortlessly from clients, partners, or users.
                        </p>
                    </div>
                    <div className="relative flex flex-col items-center justify-center px-2">
                        <Image
                            src='/images/landing-page/curate-testimonials.png'
                            alt=""
                            width={400}
                            height={400}
                            className="rounded-[10px]"
                        />
                        <img src="/images/step2.svg" className="mx-auto -mb-3 mt-9 w-full max-w-[50px]"
                            alt="Step 2" width="50" height="50" />
                        <div className="max-w-[350px] text-center text-2xl font-[500] tracking-tight text-white">Collect, Review & Curate Authentic Testimonials
                        </div>
                        <p className="mt-6 text-center text-[#9ca3af]">Centralize all responses in your Feedbackz dashboard. Approve, tag, and manage testimonials with ease. You can also import existing reviews from platforms like Capterra, G2, or Trustpilot.
                        </p>
                    </div>
                    <div className="relative flex flex-col items-center justify-center px-2 md:col-span-2 lg:col-auto">
                        <div className="w-[300px] h-[300px] rounded-full bg-gradient-to-br from-brandLinear to-blueSecondary opacity-30 blur-2xl absolute left-[0px] top-[-30px] z-[0] shadow-2xl shadow-indigo-500"></div>

                        <div className="w-full">
                            {/* @ts-ignore */}
                            <feedbackz-widget data-widget-id="MKR3po8"></feedbackz-widget>
                        </div>

                        <div className="w-full flex justify-end mt-2">
                            {/* @ts-ignore */}
                            <feedbackz-widget data-widget-id="thXZLkW"></feedbackz-widget>
                        </div>

                        {/* @ts-ignore */}
                        <feedbackz-widget data-widget-id="3xznjqW"></feedbackz-widget>

                        <img src="/images/step3.svg" className="mx-auto -mb-3 mt-9 w-full max-w-[50px]"
                            alt="Step 3" width="50" height="50" />
                        <div className="max-w-[350px] text-center text-2xl font-[500] tracking-tight text-white">Build & Embed Stunning Widgets in Seconds
                        </div>
                        <p className="mt-6 text-center text-[#9ca3af]">Turn your best testimonials into beautiful, embeddable widgets — like carousels, walls of love, or minimal avatar quotes. Customize their look and drop them into your website, SaaS app, blog, or landing page with a single line of code.
                        </p>
                    </div>
                </div>
                <div className="mx-auto mt-6 flex flex-col justify-center gap-2 lg:mt-12">
                    <div className="mt-6 flex flex-row flex-wrap items-center justify-center md:mt-0">
                        <div>
                            {/* @ts-ignore */}
                            <feedbackz-widget data-widget-id="MXD2QPb"></feedbackz-widget>
                        </div>
                    </div>
                    <div className="w-full flex justify-center">
                        <HeroButton
                            variant="lg"
                            text="Start collecting reviews today"
                        />
                    </div>
                    
                    <div className="text-center text-[#9ca3af]">Risk-Free Trial - Start Creating Testimonials Embeddable Widgets
                        Today with No Credit Card Required!
                    </div>
                </div>
            </div>
        </section>
    )
}