import LayoutWrapper from "@/components/layouts/LayoutWrapper";

export default async function FeatureRequestLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <LayoutWrapper>{children}</LayoutWrapper>;
}
