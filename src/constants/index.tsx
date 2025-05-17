export const MAX_FREE_COUNTS = 5;

import {
	Bell,
	CreditCard,
	FileDuoToneBlack,
	Home,
	Settings,
} from "@/components/icons";
import {
	BellRing,
	BrickWall,
	Bug,
	Command,
	CreditCardIcon,
	Feather,
	Gauge,
	Heart,
	ImageUp,
	LayoutDashboardIcon,
	Megaphone,
	Pickaxe,
	Rows2,
	Settings2Icon,
	Sparkle,
	Sparkles,
	Tag,
	Zap,
} from "lucide-react";

export const MENU_ITEMS = (
	workspaceId: string
): { title: string; href?: string; icon?: React.ReactNode }[] => [
	{
		title: "Dashboard",
		href: `/dashboard/${workspaceId}`,
		icon: <Gauge className="w-6 h-6" />,
	},
	{
		title: "COLLECT",
	},
	{
		title: "Forms",
		href: `/dashboard/${workspaceId}/forms`,
		icon: <Megaphone className="w-6 h-6" />,
	},
	{
		title: "Import Testimonials",
		href: `/dashboard/${workspaceId}/import-testimonials`,
		icon: <ImageUp className="w-6 h-6" />,
	},
	{
		title: "ORGANIZE",
	},
	{
		title: "Tags",
		href: `/dashboard/${workspaceId}/tags`,
		icon: <Tag className="w-6 h-6" />,
	},
	{
		title: "Testimonials",
		href: `/dashboard/${workspaceId}/testimonials`,
		icon: <Sparkles className="w-6 h-6" />,
	},
	{
		title: "DESIGN",
	},
	{
		title: "Widgets hub",
		href: `/dashboard/${workspaceId}/widgets`,
		icon: <Command className="w-6 h-6" />,
	},
	{
		title: "Creator",
		href: `/dashboard/${workspaceId}/creator`,
		icon: <Pickaxe className="w-6 h-6" />,
	},
	{
		title: "INTEGRATE",
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
		title: "CUSTOMIZE",
	},
	{
		title: "Report a bug",
		href: `/dashboard/${workspaceId}/report-a-bug`,
		icon: <Bug className="w-6 h-6" />,
	},
	{
		title: "Notifications",
		href: `/dashboard/${workspaceId}/notifications`,
		icon: <BellRing className="w-6 h-6" />,
	},
	{
		title: "Billing",
		href: `/dashboard/${workspaceId}/billing`,
		icon: <CreditCardIcon className="w-6 h-6" />,
	},
	// {
	// 	title: "Settings",
	// 	href: `/dashboard/${workspaceId}/settings`,
	// 	icon: <Settings2Icon className="w-6 h-6" />,
	// },
];
