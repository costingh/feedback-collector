export type FormAnalytics = {
    actionType: string;
    total: number;
};

export type FormField = {
    id: string;
    label: string;
    fieldType: string; 
    required: boolean;
    options?: string[];
    key: string;
    isEnabled: boolean;
    isRequired: boolean;
};


export type Question = {
    id: string;
    text: string;
    type: string;
    options?: string[];
};

export type Form = {
    id: string;
    name: string;
    brandLogo: string;
    brandName: string;
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
    formFields: FormField[];
    metrics?: FormAnalytics[];
    questions: Question[];
    title: string;
    description: string;
    textareaPlaceholder: string;
    buttonLabel: string;
    thankYouPageTitle: string;
    thankYouPageMessage: string;
    thankYouCustomURL: string;
};
