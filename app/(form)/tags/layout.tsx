import LayoutWrapper from "@/components/layouts/LayoutWrapper";

export default async function TagsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <LayoutWrapper>{children}</LayoutWrapper>;
}
