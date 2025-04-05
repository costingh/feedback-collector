import React from "react";
import { UserButton, useUser } from "@clerk/nextjs";

function SidebarUserButton({ withoutUsername }: { withoutUsername?: boolean }) {
	const { user } = useUser();

	return (
		<div className="flex items-center gap-2">
			<UserButton afterSignOutUrl="/" />

			{!withoutUsername && (
				<div className="flex flex-col gap-2">
					<p className="text-gray-900 font-[600] text-[14px]">
						{user?.firstName || user?.fullName || user?.primaryEmailAddress?.emailAddress}
					</p>
				</div>
			)}
		</div>
	);
}

export default SidebarUserButton;
