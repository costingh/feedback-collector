export type FormAnalytics = {
    visits: number;
    testimonials: number;
    responseRate: number;
}

export type Form = {
    id?: string;
    name: string;
    backgroundColor: string;
    primaryColor: string;
    withAnimatedBg: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    userId?: string;
    published: boolean;
    isPaused: boolean;
    pausedUntil: Date | null;
    url: string;
    customUrl: string;
	formFields: any[];
	FormAnalytics: FormAnalytics;
}