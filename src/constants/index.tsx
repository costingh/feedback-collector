export const MAX_FREE_COUNTS = 5;

import {
	Bell,
	CreditCard,
	FileDuoToneBlack,
	Home,
	Settings,
} from "@/components/icons";
import {
	BrickWall,
	Bug,
	CreditCardIcon,
	Feather,
	Heart,
	LayoutDashboardIcon,
	Pickaxe,
	Rows2,
	Settings2Icon,
	Tag,
	Zap,
} from "lucide-react";

export const MENU_ITEMS = (
	workspaceId: string
): { title: string; href: string; icon: React.ReactNode }[] => [
	{
		title: "Home",
		href: `/dashboard/${workspaceId}/home`,
		icon: <LayoutDashboardIcon />,
	},
	{
		title: "Forms",
		href: `/dashboard/${workspaceId}/forms`,
		icon: <Rows2 className="w-6 h-6" />,
	},
	{
		title: "Testimonials",
		href: `/dashboard/${workspaceId}/testimonials`,
		icon: <Heart className="w-6 h-6" />,
	},
	{
		title: "Tags",
		href: `/dashboard/${workspaceId}/tags`,
		icon: <Tag className="w-6 h-6" />,
	},
	{
		title: "Widgets hub",
		href: `/dashboard/${workspaceId}/widgets`,
		icon: <BrickWall className="w-6 h-6" />,
	},
	{
		title: "Creator",
		href: `/dashboard/${workspaceId}/creator`,
		icon: <Pickaxe className="w-6 h-6" />,
	},
	{
		title: "Automate",
		href: `/dashboard/${workspaceId}/automate`,
		icon: <Zap className="w-6 h-6" />,
	},
	{
		title: "Feature request",
		href: `/dashboard/${workspaceId}/feature-request`,
		icon: <Feather className="w-6 h-6" />,
	},
	{
		title: "Report a bug",
		href: `/dashboard/${workspaceId}/report-a-bug`,
		icon: <Bug className="w-6 h-6" />,
	},
	{
		title: "Notifications",
		href: `/dashboard/${workspaceId}/notifications`,
		icon: <Bell className="w-6 h-6" />,
	},
	{
		title: "Billing",
		href: `/dashboard/${workspaceId}/billing`,
		icon: <CreditCardIcon className="w-6 h-6" />,
	},
	{
		title: "Settings",
		href: `/dashboard/${workspaceId}/settings`,
		icon: <Settings2Icon className="w-6 h-6" />,
	},
];
