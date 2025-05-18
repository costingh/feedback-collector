export const DemoVideo = () => {
    return (
        <div className="relative mx-auto max-w-7xl px-6 pb-4 lg:px-16">
            {/* <img src="/images/landingpage/heroCone2.webp"
                className="animate-smoothMove absolute -bottom-[150px] -left-[150px] z-20 max-w-[300px] opacity-40 blur-lg xl:opacity-100"
                alt="Feedbackz.co" width="300" height="300" /> */}
            <div className="relative overflow-hidden rounded-3xl ">
                <div
                    className="to-transparent absolute bottom-0 left-0 right-0 hidden h-[250px] w-full bg-gradient-to-t from-[#272943] via-[#272943]/70 lg:flex">
                </div>
                <video className="m-auto h-auto w-full" loop={false} autoPlay={true} playsInline={true} preload="metadata"
                    title="Feedbackz.co Testimonial Collector Demo" aria-label="How Feedbackz.co works?">
                    <source src="https://cdn.shopify.com/videos/c/o/v/12a7f831d44f4b548d0a6b45839f743d.mp4" type="video/mp4" />
                    Your browser does not support our product page generation demo video.
                </video>
            </div>
        </div>
    )
}