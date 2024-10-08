import LayoutWrapper from "@/components/layouts/LayoutWrapper";

export default async function TestimonialsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <LayoutWrapper>{children}</LayoutWrapper>;
}
