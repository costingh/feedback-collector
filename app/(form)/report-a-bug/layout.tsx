import LayoutWrapper from "@/components/layouts/LayoutWrapper";

export default async function ReportABugLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <LayoutWrapper>{children}</LayoutWrapper>;
}
