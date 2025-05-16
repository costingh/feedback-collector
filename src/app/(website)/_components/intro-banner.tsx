import Container from "@/components/layout/container";
import { GreenCheckIcon } from "./icons/green-check-icon";
import { WebsiteWithReviewsIllustration } from "./illustrations/webite-with-reviews-illustration";
const benefits = [
    "Manual testimonial collection is slow and inefficient",
    "Hiring costs keep scaling with growth",
    "Competitors are already automating",
    "Quality is inconsistent without a system",
    "Scaling without structure leads to chaos",
    "Ad spend without proof kills conversions",
];

export const IntroBanner: React.FC = () => {
    return (
        <Container>
            <div className="card-bg mt-20 z-10 flex w-full flex-col px-6 py-10 backdrop-blur-md lg:px-20 lg:py-20">
                <div className="mx-auto max-w-3xl px-4 text-center">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight bg-gradient-to-b from-white to-[#7496F8] text-transparent bg-clip-text">
                        Remove the Guesswork. <br /> Amplify Trust & Sales.
                    </h2>
                    <p className="mt-4 text-lg text-white lg:text-xl">
                        Feedbackz.co automates testimonial collection using proven CRO strategies to boost conversions and cut costs.
                    </p>
                </div>

                <div className="mt-16 grid gap-10 md:grid-cols-2">
                    <div className="order-2 lg:order-1 flex flex-col space-y-6">
                        <h3 className="text-2xl font-semibold text-white">
                            Real testimonials. Real trust. Real results.
                        </h3>
                        <p className="text-gray-400 md:text-lg">
                            Automate the collection, display, and impact of customer feedback — and unlock scalable social proof that sells.
                        </p>
                        <ul className="flex flex-col gap-3">
                            {benefits.map((point, i) => (
                                <li key={i} className="flex items-start">
                                    <GreenCheckIcon />
                                    <span className="ml-3 text-white md:text-gray-400">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="order-1 lg:order-2 flex justify-center">
                        {/* <div className="h-[400px] w-full max-w-2xl rounded-lg bg-white/5 backdrop-blur-sm md:h-[420px] lg:h-[450px]" /> */}
                        <WebsiteWithReviewsIllustration />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default IntroBanner;
