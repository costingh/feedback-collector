import LayoutWrapper from "@/components/layouts/LayoutWrapper";

export default async function TestimonialsLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { projectName: string };
}) {
	return (
		<LayoutWrapper projectName={params.projectName}>
			{children}
		</LayoutWrapper>
	);
}

