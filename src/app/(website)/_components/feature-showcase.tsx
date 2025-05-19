import Image from "next/image";
import { HeroButton } from "./hero-button";

type Feature = {
    title: string;
    subtitle: string[];
    description: string;
    image?: {
        src: string;
        alt: string;
        blurSrc: string;
    };
    imagePosition?: "left" | "right";
    feedbackzIntegration?: any;
};

const FeatureShowcase = ({
    title,
    subtitle,
    description,
    image,
    imagePosition = "right",
    feedbackzIntegration
}: Feature) => {
    const isImageLeft = imagePosition === "left";

    return (
        <div className="flex flex-col md:flex-row gap-8 items-center">
            {isImageLeft && image && (
                <div className="w-full md:w-1/2 flex justify-center">
                    <Image
                        src={image.src}
                        alt={image.alt}
                        width={400}
                        height={400}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        placeholder="blur"
                        blurDataURL={image.blurSrc}
                        className="w-full max-w-[400px]"
                    />
                </div>
            )}

            <div className="w-full md:w-1/2 flex flex-col gap-4">
                <p className="text-[#9ca3af]">{title}</p>
                <h2 className="text-transparent mx-auto bg-clip-text text-md font-extrabold sm:text-md lg:text-4xl">
                    {subtitle.map((line, i) => (
                        <span
                            key={i}
                            className={`text-transparent bg-clip-text ${i === 1
                                ? "bg-gradient-to-b from-white from-30% to-[#7496F8]"
                                : "bg-gradient-to-b from-white from-70% to-[#b2b2b2]"
                                }`}
                        >
                            {line}{" "}
                        </span>
                    ))}
                </h2>
                <span className="text-[#9ca3af]">{description}</span>
                <HeroButton variant="sm" text="Try Feedbackz for free" />
            </div>

            {!isImageLeft && <>
                {image ? <div className="w-full md:w-1/2 flex justify-center">
                    <Image
                        src={image.src}
                        alt={image.alt}
                        width={400}
                        height={400}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        placeholder="blur"
                        blurDataURL={image.blurSrc}
                        className="w-full max-w-[400px]"
                    />
                </div> : <div className="w-full md:w-1/2 flex flex-col gap-10 items-center">
                    <FeedbackzWidget html={feedbackzIntegration.widget1} />
                    <FeedbackzWidget html={feedbackzIntegration.widget2} />
                    <FeedbackzWidget html={feedbackzIntegration.widget3} />
                </div>}</>}
        </div>
    );
};

const FeedbackzWidget = ({ html }: { html: string }) => {
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default FeatureShowcase;
