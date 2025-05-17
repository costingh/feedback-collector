"use client";
import { getWorkSpaces } from "@/actions/workspace";
import { Separator } from "@/components/ui/separator";

import { NotificationProps, WorkspaceProps } from "@/types/index.type";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { Menu } from "lucide-react";
import { MENU_ITEMS } from "@/constants";
import SidebarItem from "./sidebar-item";
import { getNotifications } from "@/actions/user";
import { useQueryData } from "@/hooks/useQueryData";
import GlobalCard from "../global-card";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useDispatch } from "react-redux";
import { SET_ACTIVE_WORKSPACE, SET_WORKSPACES } from "@/redux/slices/workspaces";
import PaymentButton from "../payment-button";
import Logo from "@/app/(website)/_components/logo";
import SidebarUserButton from "./sidebar-user-button";
import { WorkspacesSwitch } from "./workspaces-switch";

type Props = {
	activeWorkspaceId: string;
};

const Sidebar = ({ activeWorkspaceId }: Props) => {
	const router = useRouter();
	const pathName = usePathname();
	const dispatch = useDispatch();

	const { data, isFetched } = useQueryData(
		["user-workspaces"],
		getWorkSpaces
	);
	const menuItems = MENU_ITEMS(activeWorkspaceId);

	const { data: notifications } = useQueryData(
		["user-notifications"],
		getNotifications
	);

	const { data: workspace } = data as WorkspaceProps;
	const { data: count } = notifications as NotificationProps;

	const currentWorkspace = workspace?.workspace?.find(
		(s) => s.id === activeWorkspaceId
	);

	if (isFetched && workspace) {
		dispatch(SET_WORKSPACES(workspace.workspace));
		dispatch(SET_ACTIVE_WORKSPACE(activeWorkspaceId))
	}

	const onChangeActiveWorkspace = (value: string) => {
		router.push(`/dashboard/${value}`);
	};

	const SidebarSection = (
		<div className="flex-none relative p-4 h-full w-[250px] flex flex-col gap-4 items-center overflow-hidden border-r-[1px]">
			<Logo />

			<WorkspacesSwitch
				activeWorkspaceId={activeWorkspaceId}
				onChangeActiveWorkspace={onChangeActiveWorkspace}
				workspace={workspace}
				currentWorkspace={currentWorkspace}
			/>

			<nav className="w-full overflow-y-scroll">
				<ul>
					{menuItems.map((item) => (
						<>
							{item?.href ? <SidebarItem
								href={item.href || ""}
								icon={item.icon}
								selected={pathName === item.href}
								title={item.title}
								key={item.title}
								notifications={
									(item.title === "Notifications" &&
										count._count &&
										count._count.notification) ||
									0
								}
							/> : <div className="text-gray-400 text-[12px] font-semibold ml-2 my-2">{item.title}</div>}
						</>
					))}
				</ul>
			</nav>

			<div className="w-full mt-auto">
				<Separator className="w-4/5" />

				{workspace.subscription?.plan === "FREE" && (
					<GlobalCard
						title="Upgrade to PRO"
						description="Complete your trial and unlock premium features with the Pro version."
						footer={<PaymentButton planType='PRO_MONTHLY' />}
					/>
				)}

				{workspace.subscription?.plan === "PRO" && (
					<GlobalCard
						title="Upgrade to BUSINESS"
						description="Unlock workspaces and team collaboration."
						footer={<PaymentButton planType='BUSINESS_MONTHLY' />}
					/>
				)}
				<div className="w-full h-[10px]"></div>
				<SidebarUserButton />
			</div>
		</div>
	);
	return (
		<div className="full">
			<div className="md:hidden fixed my-4">
				<Sheet>
					<SheetTrigger asChild className="ml-2">
						<Button variant={"ghost"} className="mt-[2px]">
							<Menu />
						</Button>
					</SheetTrigger>
					<SheetContent side={"left"} className="p-0 w-fit h-full">
						{SidebarSection}
					</SheetContent>
				</Sheet>
			</div>
			<div className="md:block hidden h-full">{SidebarSection}</div>
		</div>
	);
};

export default Sidebar;
