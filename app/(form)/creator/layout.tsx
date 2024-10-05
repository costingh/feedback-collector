import LayoutWrapper from "@/components/layouts/LayoutWrapper";

export default async function CreatorLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <LayoutWrapper>{children}</LayoutWrapper>;
}
