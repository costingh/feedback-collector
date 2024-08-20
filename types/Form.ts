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
    questions: any[];
    title: string;
    description: string;
    textareaPlaceholder: string;
    buttonLabel: string;
    thankYouPageTitle: string;
    thankYouPageMessage: string;
    thankYouCustomURL: string;
}