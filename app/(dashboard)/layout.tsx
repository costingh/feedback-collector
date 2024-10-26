import LayoutWrapper from "@/components/layouts/LayoutWrapper";

export default async function FormsLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { projectName: string };
}) {
	return (
		<>
			{children}
		</>
	);
}

