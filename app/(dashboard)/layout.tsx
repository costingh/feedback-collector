import LayoutWrapper from "@/components/layouts/LayoutWrapper";

export default async function FormsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <LayoutWrapper>{children}</LayoutWrapper>;
}
