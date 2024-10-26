import TestimonialsPage from "@/components/pages-wrappers/TestimonialsPage";

export default function Page({ params }: { params: { projectName: string } }) {
	return <TestimonialsPage projectName={params?.projectName} />;
}
