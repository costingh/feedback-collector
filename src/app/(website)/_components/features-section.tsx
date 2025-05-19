import Container from "@/components/layout/container";
import FeatureShowcase from "./feature-showcase";
import { cn } from "@/lib/utils";

const features = [
    {
        title: "Seamless Testimonial Collection",
        subtitle: [
            "Easily gather",
            "authentic testimonials",
            "from your website with customizable forms and popups.",
        ],
        description:
            "Say goodbye to missed opportunities and let your customers share their positive experiences effortlessly.",
        image: {
            src: "/images/webp-optimized/image-1.webp",
            alt: "Feedbackz form embedded on site",
            blurSrc: "/images/webp-blured/image-1.webp",
        },
        imagePosition: "right",
    },
    {
        title: "Dynamic Showcase Options",
        subtitle: [
            "Display testimonials in style",
            "with customizable widgets and testimonial",
            "walls",
        ],
        description:
            "Transform your website into a trust-building platform that highlights real customer satisfaction and boosts credibility.",
        image: {
            src: "/images/webp-optimized/demo-showcase-options.webp",
            alt: "Testimonial wall and widgets",
            blurSrc: "/images/webp-blured/demo-showcase-options.webp",
        },
        imagePosition: "left",
    },
    {
        title: "Effortless Integration",
        subtitle: [
            "Integrate Feedbackz seamlessly",
            "into your existing website or SaaS platform",
        ],
        description:
            "Enjoy a hassle-free setup that allows you to start collecting and showcasing testimonials without any technical headaches.",
        // image: {
        //     src: "/images/webp-optimized/demo-website-integration.webp",
        //     alt: "Integrate Feedbackz with your SaaS",
        //     blurSrc: "/images/webp-blured/demo-website-integration.webp",
        // },
        feedbackzIntegration: {
            widget1: '<feedbackz-widget data-widget-id="thXZLkW"></feedbackz-widget>',
            widget2: '<feedbackz-widget data-widget-id="kqwFSO3"></feedbackz-widget>',
            widget3: '<feedbackz-widget data-widget-id="MXD2QPb"></feedbackz-widget>',
        },
        imagePosition: "right",
    },
];

export default function FeaturesSection() {
    return (
        <Container className="my-[100px]">
            <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 mb-[60px]">
                <h2 className="text-transparent mx-auto bg-clip-text text-center text-3xl font-extrabold lg:text-5xl lg:leading-[60px]">
                    <span className="text-transparent bg-gradient-to-b from-white from-70% to-[#b2b2b2] bg-clip-text">Collect powerful testimonials </span>
                    <span className="text-transparent bg-gradient-to-b from-white from-30% to-[#7496F8] bg-clip-text">with branded forms, </span>
                    <span className="text-transparent bg-gradient-to-b from-white from-70% to-[#b2b2b2] bg-clip-text">and </span>
                    <span className="text-transparent bg-gradient-to-b from-white from-30% to-[#7496F8] bg-clip-text">showcase</span>
                    <span className="text-transparent bg-gradient-to-b from-white from-70% to-[#b2b2b2] bg-clip-text"> them anywhere</span>

                </h2>
                <div className="mx-auto max-w-[350px] text-center text-lg text-white md:max-w-3xl lg:text-xl">
                    Create beautifully branded, customizable testimonial forms. Share them with your users, collect authentic feedback, and publish it using widgets or testimonial walls — directly on your landing page, product site, or SaaS platform.
                </div>
            </div>
            <div className="card-bg !px-10 !py-10">
                {features.map((feature, idx) => (
                    <div key={idx} className={cn('mb-[100px]', idx === features.length - 1 && 'mb-0')}>
                        {/* @ts-ignore */}
                        <FeatureShowcase {...feature} />
                    </div>
                ))}
            </div>
        </Container>
    );
}
