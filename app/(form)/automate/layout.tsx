import LayoutWrapper from "@/components/layouts/LayoutWrapper";

export default async function AutomateLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <LayoutWrapper>{children}</LayoutWrapper>;
}
