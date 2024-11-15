import {
	LayoutDashboard,
	MessageSquare,
	ImageIcon,
	VideoIcon,
	Music,
	Code,
	Settings,
	Rows2,
	Heart,
	Zap,
	Bug,
	Feather,
	Tag,
	BrickWall,
	CreditCard,
	Pickaxe,
	SquareDashedMousePointer,
	Unlink,
	Link,
	LayoutDashboardIcon
} from "lucide-react";

export const routes = [
	{
		section: 'MONITORIZE',
		routes: [
			{
				label: "Dashboard",
				icon: LayoutDashboardIcon,
				href: "/dashboard",
				color: "text-sky-500",
			},
		]
	},
	{
		section: 'COLLECT',
		routes: [
			{
				label: "Forms",
				icon: Rows2,
				href: "/forms",
				color: "text-sky-500",
			},
		]
	},
	{
		section: 'ORGANIZE',
		routes: [
			{
				label: "Testimonials",
				icon: Heart,
				href: "/testimonials",
				color: "text-sky-500",
			},
			{
				label: "Tags",
				icon: Tag,
				href: "/tags",
				color: "text-sky-500",
			},
		]
	},
	{
		section: 'SHARE',
		routes: [
			{
				label: "Widgets hub",
				icon: BrickWall,
				href: "/widgets",
				color: "text-sky-500",
			},
			{
				label: "Creator",
				icon: Pickaxe,
				href: "/creator",
				color: "text-sky-500",
			},
		]
	},
	{
		section: 'AUTOMATIONS',
		routes: [
			{
				label: "Automate",
				icon: Zap,
				href: "/automate",
				color: "text-sky-500",
			},
		]
	},
	{
		section: 'PRODUCT',
		routes: [
			{
				label: "Feature request",
				icon: Feather,
				href: "/feature-request",
				color: "text-sky-500",
			},
			{
				label: "Report a bug",
				icon: Bug,
				href: "/report-a-bug",
				color: "text-sky-500",
			},
		]
	},
	{
		section: 'ACCOUNT',
		routes: [
			{
				label: "Subscription",
				icon: CreditCard,
				href: "/subscription",
				color: "text-sky-500",
			},
			{
				label: "Settings",
				icon: Settings,
				href: "/settings",
				color: "text-sky-500",
			},
		]
	}

	// {
	//   label: "Dashboard",
	//   icon: LayoutDashboard,
	//   href: "/dashboard",
	//   color: "text-sky-500",
	// },
	// {
	//   label: "Testimonials",
	//   icon: Heart,
	//   href: "/conversation",
	//   color: "text-violet-500",
	// },
	// {
	//   label: "Image Generation",
	//   icon: ImageIcon,
	//   color: "text-pink-700",
	//   href: "/image",
	// },
	// {
	//   label: "Video Generation",
	//   icon: VideoIcon,
	//   color: "text-orange-700",
	//   href: "/video",
	// },
	// {
	//   label: "Music Generation",
	//   icon: Music,
	//   color: "text-emerald-500",
	//   href: "/music",
	// },
	// {
	//   label: "Code Generation",
	//   icon: Code,
	//   color: "text-green-600",
	//   href: "/code",
	// },
	//   {
	// 		label: "Settings",
	// 		icon: Settings,
	// 		href: "/settings",
	// 	},
];


export const studioSidebarButtons = [
	{
		key: 'select_testimonials',
		label: "Add testimonials to this widget",
		icon: SquareDashedMousePointer,
		color: "text-sky-500",
	},
	{
		key: 'share_widget',
		label: "Share this widget",
		icon: Link,
		color: "text-sky-500",
	},
];