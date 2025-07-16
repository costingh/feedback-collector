'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { HeroButton } from './hero-button'
import { ChevronLeft, ChevronRight, Star, Users, MessageSquare, Award, Heart, Quote } from 'lucide-react'
import DisplayWidget from '@/components/widgets/DisplayWidget'
import { cn } from '@/lib/utils'

interface Testimonial {
	id: string
	name: string
	message: string
	rating: number
	createdAt: Date
	updatedAt: Date
	createdBy: string
	updatedBy: string
	workspaceId: string
	isPublic: boolean
	avatar: string
	company: string
	companyLogo: string
	companyUrl: string
	companyDescription: string
	companyIndustry: string
	companyLocation: string
	approvalStatus: string
	approvalDate: Date
	approvalBy: string
	approvalComment: string
	stars: number
	email: string
	jobTitle: string
	website: string
	logo: string
	video: string
	source: string
	approved: boolean
	formId: string
	tagId?: string
	widgetId?: string
}

interface WidgetData {
	id: string
	name: string
	description: string
	style: string
	custom?: boolean
	widget: {
		id: string
		name: string
		target: string
		url: string
		createdAt: Date
		updatedAt: Date
		userId: string
		type: string
		starsVariant: 'default' | 'custom1'
		starsColor: string
		widgetDescription: string
		cardBackground: string
		primaryTextColor: string
		secondaryTextColor: string
		thirdTextColor: string
		cardBorderColor: string
		variant: string
		assetColorVariant: string
		workspaceId: string
		testimonials: Testimonial[]
		_count: {
			testimonials: number
		}
		avgStars: number
		deviceWidth?: number
		scale?: number
        marginTop?: number
        style?: React.CSSProperties
	}
}

interface WidgetCategory {
	id: string
	name: string
	description: string
	icon: React.ReactNode
	widgets: WidgetData[]
}

// Sample testimonials data
const sampleTestimonials: Testimonial[] = [
	// {
	// 	id: '1',
	// 	name: 'Sarah Johnson',
	// 	message: 'Feedbackz has completely transformed how we collect and display customer testimonials. The widgets are beautiful and our conversion rate increased by 40%!',
	// 	rating: 5,
	// 	stars: 5,
	// 	createdAt: new Date('2024-01-15'),
	// 	updatedAt: new Date('2024-01-15'),
	// 	createdBy: '1',
	// 	updatedBy: '1',
	// 	workspaceId: '1',
	// 	isPublic: true,
	// 	avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
	// 	company: 'TechFlow Solutions',
	// 	companyLogo: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=150&h=150&fit=crop',
	// 	companyUrl: 'https://techflow.com',
	// 	companyDescription: 'Leading software solutions provider',
	// 	companyIndustry: 'Technology',
	// 	companyLocation: 'San Francisco, CA',
	// 	approvalStatus: 'approved',
	// 	approvalDate: new Date('2024-01-15'),
	// 	approvalBy: '1',
	// 	approvalComment: 'Great testimonial',
	// 	email: 'sarah@techflow.com',
	// 	jobTitle: 'Marketing Director',
	// 	website: 'https://techflow.com',
	// 	logo: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=150&h=150&fit=crop',
	// 	video: '',
	// 	source: 'feedbackz',
	// 	approved: true,
	// 	formId: '1'
	// },
	{
		id: '2',
		name: 'Michael Chen',
		message: 'The ease of integration and beautiful design options make Feedbackz our go-to solution for social proof. Highly recommended!',
		rating: 5,
		stars: 5,
		createdAt: new Date('2024-01-20'),
		updatedAt: new Date('2024-01-20'),
		createdBy: '1',
		updatedBy: '1',
		workspaceId: '1',
		isPublic: true,
		avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
		company: 'Digital Dynamics',
		companyLogo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=150&h=150&fit=crop',
		companyUrl: 'https://digitaldynamics.com',
		companyDescription: 'Digital marketing agency',
		companyIndustry: 'Marketing',
		companyLocation: 'New York, NY',
		approvalStatus: 'approved',
		approvalDate: new Date('2024-01-20'),
		approvalBy: '1',
		approvalComment: 'Excellent feedback',
		email: 'michael@digitaldynamics.com',
		jobTitle: 'CEO',
		website: 'https://digitaldynamics.com',
		logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=150&h=150&fit=crop',
		video: '',
		source: 'feedbackz',
		approved: true,
		formId: '1'
	},
	{
		id: '3',
		name: 'Emily Rodriguez',
		message: 'We love how customizable the widgets are. They perfectly match our brand and our customers love seeing their testimonials displayed beautifully.',
		rating: 5,
		stars: 5,
		createdAt: new Date('2024-01-25'),
		updatedAt: new Date('2024-01-25'),
		createdBy: '1',
		updatedBy: '1',
		workspaceId: '1',
		isPublic: true,
		avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
		company: 'Creative Studios',
		companyLogo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=150&h=150&fit=crop',
		companyUrl: 'https://creativestudios.com',
		companyDescription: 'Creative design agency',
		companyIndustry: 'Design',
		companyLocation: 'Los Angeles, CA',
		approvalStatus: 'approved',
		approvalDate: new Date('2024-01-25'),
		approvalBy: '1',
		approvalComment: 'Wonderful testimonial',
		email: 'emily@creativestudios.com',
		jobTitle: 'Creative Director',
		website: 'https://creativestudios.com',
		logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=150&h=150&fit=crop',
		video: '',
		source: 'feedbackz',
		approved: true,
		formId: '1'
	},
	{
		id: '4',
		name: 'David Thompson',
		message: 'The analytics and insights we get from Feedbackz help us understand what resonates with our customers. Game changer for our business!',
		rating: 5,
		stars: 5,
		createdAt: new Date('2024-01-30'),
		updatedAt: new Date('2024-01-30'),
		createdBy: '1',
		updatedBy: '1',
		workspaceId: '1',
		isPublic: true,
		avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
		company: 'Growth Labs',
		companyLogo: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=150&h=150&fit=crop',
		companyUrl: 'https://growthlabs.com',
		companyDescription: 'Business growth consultancy',
		companyIndustry: 'Consulting',
		companyLocation: 'Austin, TX',
		approvalStatus: 'approved',
		approvalDate: new Date('2024-01-30'),
		approvalBy: '1',
		approvalComment: 'Insightful feedback',
		email: 'david@growthlabs.com',
		jobTitle: 'Founder',
		website: 'https://growthlabs.com',
		logo: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=150&h=150&fit=crop',
		video: '',
		source: 'feedbackz',
		approved: true,
		formId: '1'
	}
]

const widgetCategories: WidgetCategory[] = [
	
	{
		id: 'wall',
		name: 'Wall of Love',
		description: 'Grid layouts that display social proof volume and build trust',
		icon: <Heart className="w-5 h-5" />,
		widgets: [
			{
				id: 'basic-wall-1',
				name: 'Classic Wall',
				description: 'Traditional grid layout with testimonials and ratings',
				style: 'bg-gradient-to-br from-purple-50 to-violet-100',
				widget: {
					id: 'basic-wall-1',
					name: 'Classic Wall',
					target: 'testimonials-page',
					url: 'classic-wall',
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: '1',
					type: 'basic_wall',
					starsVariant: 'default',
					starsColor: '#8B5CF6',
					widgetDescription: 'Classic wall of love',
					cardBackground: '#ffffff',
					primaryTextColor: '#1f2937',
					secondaryTextColor: '#6b7280',
					thirdTextColor: '#374151',
					cardBorderColor: '#e5e7eb',
					variant: 'classic',
					assetColorVariant: 'purple',
					workspaceId: '1',
					testimonials: sampleTestimonials,
					_count: { testimonials: 4 },
					avgStars: 5,
                    deviceWidth:700,
                    scale: 0.5,
                    marginTop: -100
				}
			},
			{
				id: 'basic-wall-2',
				name: 'Classic Wall #2',
				description: 'Contemporary design with enhanced visual appeal',
				style: 'bg-gradient-to-br from-orange-50 to-amber-100',
				widget: {
					id: 'basic-wall-2',
					name: 'Modern Wall',
					target: 'landing-page',
					url: 'modern-wall',
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: '1',
					type: 'basic_wall',
					starsVariant: 'custom1',
					starsColor: '#F59E0B',
					widgetDescription: 'Modern wall design',
					cardBackground: '#fefefe',
					primaryTextColor: '#111827',
					secondaryTextColor: '#4b5563',
					thirdTextColor: '#374151',
					cardBorderColor: '#fbbf24',
					variant: 'modern',
					assetColorVariant: 'orange',
					workspaceId: '1',
					testimonials: sampleTestimonials,
					_count: { testimonials: 3 },
					avgStars: 5,
                    deviceWidth:700,
                    scale: 0.5,
                    marginTop: -100
				}
			},
			{
				id: 'basic-wall-3',
				name: 'Classic Wall #2',
				description: 'Space-optimized grid for sidebar or footer placement',
				style: 'bg-gradient-to-br from-pink-50 to-rose-100',
				widget: {
					id: 'basic-wall-3',
					name: 'Compact Wall',
					target: 'sidebar',
					url: 'compact-wall',
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: '1',
					type: 'basic_wall',
					starsVariant: 'default',
					starsColor: '#EC4899',
					widgetDescription: 'Compact wall layout',
					cardBackground: '#fdf2f8',
					primaryTextColor: '#831843',
					secondaryTextColor: '#be185d',
					thirdTextColor: '#9d174d',
					cardBorderColor: '#fce7f3',
					variant: 'compact',
					assetColorVariant: 'pink',
					workspaceId: '1',
					testimonials: sampleTestimonials,
					_count: { testimonials: 2 },
					avgStars: 5,
                    deviceWidth:800,
                    scale: 0.45,
                    marginTop: -100
				}
			}
		]
	},
	{
		id: 'badge',
		name: 'Rating Badges',
		description: 'Compact widgets that highlight your overall rating and review count',
		icon: <Star className="w-5 h-5" />,
		widgets: [
			{
				id: 'rating-badge-1',
				name: 'Star Rating Badge',
				description: 'Prominent star rating with review count',
				style: 'bg-gradient-to-br from-yellow-50 to-orange-100',
				// custom: true,
				widget: {
					id: 'rating-badge-1',
					name: 'Star Rating Badge',
					target: 'header',
					url: 'star-rating-badge',
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: '1',
					type: 'rating_badge',
					starsVariant: 'default',
					starsColor: '#F59E0B',
					widgetDescription: 'Star rating badge',
					cardBackground: '#111',
					primaryTextColor: '#1f2937',
					secondaryTextColor: '#6b7280',
					thirdTextColor: '#374151',
					cardBorderColor: '#e5e7eb',
					variant: 'default',
					assetColorVariant: 'yellow',
					workspaceId: '1',
					testimonials: sampleTestimonials,
					_count: { testimonials: 4 },
					avgStars: 5
				}
			},
			{
				id: 'rating-badge-2',
				name: 'Compact Rating',
				description: 'Minimal rating display for tight spaces',
				style: 'bg-gradient-to-br from-teal-50 to-cyan-100',
				// custom: true,
				widget: {
					id: 'rating-badge-2',
					name: 'Compact Rating',
					target: 'footer',
					url: 'compact-rating',
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: '1',
					type: 'rating_badge',
					starsVariant: 'custom1',
					starsColor: '#14B8A6',
					widgetDescription: 'Compact rating display',
					cardBackground: '#111',
					primaryTextColor: '#134e4a',
					secondaryTextColor: '#0f766e',
					thirdTextColor: '#115e59',
					cardBorderColor: '#ccfbf1',
					variant: 'custom1',
					assetColorVariant: 'teal',
					workspaceId: '1',
					testimonials: sampleTestimonials,
					_count: { testimonials: 4 },
					avgStars: 5
				}
			}
		]
	},
	{
		id: 'social',
		name: 'Social Proof Avatars',
		description: 'Widgets that showcase customer avatars and social engagement',
		icon: <Users className="w-5 h-5" />,
		widgets: [
			{
				id: 'avatars-1',
				name: 'Customer Avatars',
				description: 'Display customer photos with ratings',
				style: 'bg-gradient-to-br from-indigo-50 to-blue-100',
				widget: {
					id: 'avatars-1',
					name: 'Customer Avatars',
					target: 'homepage',
					url: 'customer-avatars',
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: '1',
					type: 'avatars',
					starsVariant: 'default',
					starsColor: '#3B82F6',
					widgetDescription: 'Trusted by 1k+ entrepreneurs',
					cardBackground: '#ffffff',
					primaryTextColor: '#1e40af',
					secondaryTextColor: '#3b82f6',
					thirdTextColor: '#1d4ed8',
					cardBorderColor: '#dbeafe',
					variant: 'simple',
					assetColorVariant: 'gold',
					workspaceId: '1',
					testimonials: sampleTestimonials,
					_count: { testimonials: 4 },
					avgStars: 5,
                    style: {
                        marginTop: '60px'
                    },
				}
			},
			{
				id: 'avatars-2',
				name: 'Customer Avatar #2',
				description: 'Compact avatar display with hover effects',
				style: 'bg-gradient-to-br from-emerald-50 to-green-100',
				widget: {
					id: 'avatars-2',
					name: 'Avatar Grid',
					target: 'sidebar',
					url: 'avatar-grid',
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: '1',
					type: 'avatars',
					starsVariant: 'custom1',
					starsColor: '#10B981',
					widgetDescription: 'Trusted by 1k+ entrepreneurs',
					cardBackground: '#f0fdf4',
					primaryTextColor: '#14532d',
					secondaryTextColor: '#16a34a',
					thirdTextColor: '#15803d',
					cardBorderColor: '#bbf7d0',
					variant: 'elite',
					assetColorVariant: 'black',
					workspaceId: '1',
					testimonials: sampleTestimonials,
					_count: { testimonials: 3 },
					avgStars: 5,
                    style: {
                        transform: 'scale(0.8)'
                    },
				}
			},
            {
				id: 'avatars-2',
				name: 'Customer Avatar #3',
				description: 'Compact avatar display with hover effects',
				style: 'bg-gradient-to-br from-emerald-50 to-green-100',
				widget: {
					id: 'avatars-2',
					name: 'Avatar Grid',
					target: 'sidebar',
					url: 'avatar-grid',
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: '1',
					type: 'avatars',
					starsVariant: 'custom1',
					starsColor: '#10B981',
					widgetDescription: 'Trusted by 1k+ entrepreneurs',
					cardBackground: '#f0fdf4',
					primaryTextColor: '#14532d',
					secondaryTextColor: '#16a34a',
					thirdTextColor: '#15803d',
					cardBorderColor: '#bbf7d0',
					variant: 'inline',
					assetColorVariant: 'black',
					workspaceId: '1',
					testimonials: sampleTestimonials,
					_count: { testimonials: 3 },
					avgStars: 5,
                    style: {
                        transform: 'scale(0.6)'
                    },
				}
			}
		]
	},
	{
		id: 'quote',
		name: 'Quote Widgets',
		description: 'Highlight individual testimonials with elegant typography',
		icon: <Quote className="w-5 h-5" />,
		widgets: [
			{
				id: 'hero-quotes-1',
				name: 'Hero Quote',
				description: 'Large, impactful single testimonial',
				style: 'bg-gradient-to-br from-slate-50 to-gray-100',
				widget: {
					id: 'hero-quotes-1',
					name: 'Hero Quote',
					target: 'hero-section',
					url: 'hero-quote',
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: '1',
					type: 'hero_quotes',
					starsVariant: 'default',
					starsColor: '#64748b',
					widgetDescription: 'Hero quote display',
					cardBackground: '#ffffff',
					primaryTextColor: '#1e293b',
					secondaryTextColor: '#475569',
					thirdTextColor: '#334155',
					cardBorderColor: '#e2e8f0',
					variant: 'hero',
					assetColorVariant: 'slate',
					workspaceId: '1',
					testimonials: [sampleTestimonials[0]],
					_count: { testimonials: 1 },
					avgStars: 5
				}
			},
			{
				id: 'minimalist-review-1',
				name: 'Minimalist Quote',
				description: 'Clean, simple quote display',
				style: 'bg-gradient-to-br from-stone-50 to-neutral-100',
				widget: {
					id: 'minimalist-review-1',
					name: 'Minimalist Quote',
					target: 'content',
					url: 'minimalist-quote',
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: '1',
					type: 'minimalist_review',
					starsVariant: 'custom1',
					starsColor: '#78716c',
					widgetDescription: 'Minimalist quote widget',
					cardBackground: '#fafaf9',
					primaryTextColor: '#292524',
					secondaryTextColor: '#57534e',
					thirdTextColor: '#44403c',
					cardBorderColor: '#f5f5f4',
					variant: 'minimalist',
					assetColorVariant: 'stone',
					workspaceId: '1',
					testimonials: [sampleTestimonials[1]],
					_count: { testimonials: 1 },
					avgStars: 5
				}
			}
		]
	},
	{
		id: 'specialty',
		name: 'Specialty Widgets',
		description: 'Unique widgets for specific use cases and campaigns',
		icon: <Award className="w-5 h-5" />,
		widgets: [
			{
				id: 'social-star-1',
				name: 'Social Star',
				description: 'Star rating with social proof elements',
				style: 'bg-gradient-to-br from-red-50 to-pink-100',
				widget: {
					id: 'social-star-1',
					name: 'Social Star',
					target: 'pricing-page',
					url: 'social-star',
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: '1',
					type: 'social_star',
					starsVariant: 'default',
					starsColor: '#EF4444',
					widgetDescription: 'Social star rating',
					cardBackground: '#ffffff',
					primaryTextColor: '#991b1b',
					secondaryTextColor: '#dc2626',
					thirdTextColor: '#b91c1c',
					cardBorderColor: '#fecaca',
					variant: 'social',
					assetColorVariant: 'red',
					workspaceId: '1',
					testimonials: sampleTestimonials.slice(1, 2),
					_count: { testimonials: 4 },
					avgStars: 5,
                    style: {
                        transform: 'scale(0.8)'
                    }
				}
			},
			// {
			// 	id: 'testimonial-form-1',
			// 	name: 'Inline Form',
			// 	description: 'Collect testimonials directly on your site',
			// 	style: 'bg-gradient-to-br from-lime-50 to-green-100',
			// 	custom: true,
			// 	widget: {
			// 		id: 'testimonial-form-1',
			// 		name: 'Inline Form',
			// 		target: 'contact-page',
			// 		url: 'inline-form',
			// 		createdAt: new Date(),
			// 		updatedAt: new Date(),
			// 		userId: '1',
			// 		type: 'inline_avatars',
			// 		starsVariant: 'default',
			// 		starsColor: '#84CC16',
			// 		widgetDescription: 'Inline testimonial form',
			// 		cardBackground: '#f7fee7',
			// 		primaryTextColor: '#365314',
			// 		secondaryTextColor: '#65a30d',
			// 		thirdTextColor: '#4d7c0f',
			// 		cardBorderColor: '#d9f99d',
			// 		variant: 'inline-form',
			// 		assetColorVariant: 'lime',
			// 		workspaceId: '1',
			// 		testimonials: [],
			// 		_count: { testimonials: 0 },
			// 		avgStars: 0
			// 	}
			// }
		]
	}
]

const colorVariations = [
	{ name: 'Blue Theme', colors: { primary: '#3B82F6', secondary: '#1E40AF', accent: '#60A5FA' } },
	{ name: 'Green Theme', colors: { primary: '#10B981', secondary: '#059669', accent: '#34D399' } },
	{ name: 'Purple Theme', colors: { primary: '#8B5CF6', secondary: '#7C3AED', accent: '#A78BFA' } },
	{ name: 'Orange Theme', colors: { primary: '#F59E0B', secondary: '#D97706', accent: '#FBBF24' } },
	{ name: 'Pink Theme', colors: { primary: '#EC4899', secondary: '#DB2777', accent: '#F472B6' } },
	{ name: 'Dark Theme', colors: { primary: '#1F2937', secondary: '#111827', accent: '#374151' } }
]

export const WidgetShowcase = () => {
	const [selectedCategory, setSelectedCategory] = useState(widgetCategories[0])
	const [selectedColorTheme, setSelectedColorTheme] = useState(colorVariations[0])

	// Function to get widget with applied color theme
	const getWidgetWithTheme = (widget: any, theme: any) => {
		return {
			...widget,
			starsColor: theme.colors.primary,
			// cardBackground: theme.colors.secondary === '#111827' ? '#ffffff' : '#ffffff', // Keep white background for readability
			primaryTextColor: theme.colors.primary,
			secondaryTextColor: theme.colors.secondary,
			thirdTextColor: theme.colors.accent,
			cardBorderColor: theme.colors.accent,
			// assetColorVariant: theme.name.toLowerCase().includes('dark') ? 'white' : 'default'
		}
	}

	return (
		<section className="w-full bg-[#050520] py-20 px-6">
			<div className="max-w-7xl mx-auto">
				{/* Header */}
				<div className="text-center mb-16">
					<h2 className="text-transparent bg-clip-text text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight bg-gradient-to-b from-white to-[#7496F8] mb-6">
						<span className="bg-gradient-to-b from-white from-70% to-[#b2b2b2] bg-clip-text">
							Showcase Your Testimonials
						</span>
						<br />
						<span className="bg-gradient-to-b from-[#b2b2b2] from-30% to-[#7496F8] bg-clip-text">
							with Beautiful Widgets
						</span>
					</h2>
					<p className="text-[#9ca3af] text-lg max-w-3xl mx-auto">
						Choose from dozens of customizable widget types and color themes. 
						Each widget is fully responsive and designed to build trust and drive conversions.
					</p>
				</div>

				{/* Category Navigation */}
				<div className="flex flex-wrap justify-center gap-4 mb-12">
					{widgetCategories.map((category) => (
						<button
							key={category.id}
							onClick={() => setSelectedCategory(category)}
							className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-200 ${
								selectedCategory.id === category.id
									? 'border-[#7496F8] bg-[#7496F8]/10 text-white'
									: 'border-gray-600 text-[#9ca3af] hover:border-gray-500 hover:text-white'
							}`}
						>
							{category.icon}
							<span className="font-medium">{category.name}</span>
						</button>
					))}
				</div>

				{/* Color Theme Selector */}
				<div className="mb-8">
					<h3 className="text-white text-xl font-semibold mb-4 text-center">Choose Your Color Theme</h3>
					<div className="flex flex-wrap justify-center gap-3">
						{colorVariations.map((theme) => (
							<button
								key={theme.name}
								onClick={() => setSelectedColorTheme(theme)}
								className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-200 ${
									selectedColorTheme.name === theme.name
										? 'border-[#7496F8] bg-[#7496F8]/10'
										: 'border-gray-600 hover:border-gray-500'
								}`}
							>
								<div 
									className="w-4 h-4 rounded-full border-2 border-white"
									style={{ backgroundColor: theme.colors.primary }}
								/>
								<span className="text-[#9ca3af] text-sm">{theme.name}</span>
							</button>
						))}
					</div>
				</div>

				{/* Widget Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
					{selectedCategory.widgets.map((widget, index) => (
						<div
							key={index}
							className={`${widget.style} rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 group`}
						>
							<div className="mb-4">
								<h3 className="text-gray-900 font-semibold text-lg mb-2">{widget.name}</h3>
								<p className="text-gray-600 text-sm">{widget.description}</p>
							</div>
							
							<div className="h-48 flex items-center justify-center mb-4 overflow-hidden rounded-lg bg-white/50">
								{widget.custom ? (
									<div className="text-center p-4">
										<div className="text-4xl mb-2">✨</div>
										<p className="text-gray-600 text-sm">Custom Widget Preview</p>
										<p className="text-gray-500 text-xs mt-1">Available in your dashboard</p>
									</div>
								) : (
									<div className="w-full h-48 overflow-y-scroll overflow-x-hidden flex items-start justify-start">
										<DisplayWidget
											key={`${selectedCategory.id}-${widget.id}-${selectedColorTheme.name}`}
											widget={getWidgetWithTheme(widget.widget, selectedColorTheme)}
											setPage={() => {}}
											isFetching={false}
											paginationData={{
												page: 1,
												hasMore: false,
												total: widget.widget._count.testimonials
											}}
											className="flex items-start justify-center"
											scale={widget.widget.scale}
											marginTop={widget.widget.marginTop}
											style={widget.widget.style}
										/>
									</div>
								)}
							</div>

							<div className="flex justify-between items-center">
								<span className="text-xs text-gray-500">Responsive • Customizable</span>
								<Button 
									variant="outline" 
									size="sm"
									className="text-xs"
								>
									Try This Widget
								</Button>
							</div>
						</div>
					))}
				</div>

				{/* Category Description */}
				<div className="text-center mb-12">
					<div className="bg-gray-900/50 rounded-2xl p-8 max-w-4xl mx-auto">
						<div className="flex items-center justify-center gap-3 mb-4">
							{selectedCategory.icon}
							<h3 className="text-white text-xl font-semibold">{selectedCategory.name}</h3>
						</div>
						<p className="text-[#9ca3af] text-lg">{selectedCategory.description}</p>
					</div>
				</div>

				{/* CTA */}
				<div className="flex flex-col items-center justify-center">
					<HeroButton variant="lg" text="Start Creating Your Widgets" />
					<p className="text-[#9ca3af] text-sm mt-4">
						All widgets are fully customizable and mobile-responsive
					</p>
				</div>
			</div>
		</section>
	)
} 