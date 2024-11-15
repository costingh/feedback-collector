import LayoutWrapper from "@/components/layouts/LayoutWrapper";
import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs/server";

export default async function FormsLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { projectName: string };
}) {
	const { userId } = auth();

	if(!params.projectName && userId) {
		const projects = await prismadb.project.findMany({
            where: {
                userId: userId,
            },
        });

		let projectName = projects?.[0]?.name || "";
		return (
			<LayoutWrapper projectName={projectName}>
				{children}
			</LayoutWrapper>
		);
	}

	return (
		<LayoutWrapper projectName={params.projectName}>
			{children}
		</LayoutWrapper>
	);
}

