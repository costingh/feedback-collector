'use server'

import { client } from '@/lib/prisma'
import { currentUser } from '@clerk/nextjs/server'

export const getFormById = async (id: string) => {
    try {
        const form = await client.form.findFirst({
            where: {
                id
            },
            include: {
                formFields: true,
                questions: true,
            },
        });

        return {
            status: 200,
            data: { form },
        };
    } catch (error) {
        return {
            status: 500,
            data: { form: null },
        };
    }
};

export const getFormByUrl = async (url: string) => {
    try {
        const formattedUrl = url.includes('/p/') ? url : '/p/' + url;
        
        const form = await client.form.findFirst({
            where: { url: formattedUrl },
            include: { formFields: true, questions: true },
        });

        if (!form) throw new Error('Form not found');

        const user = await client.user.findFirst({ where: { clerkid: form.userId } });
        const payment = await client.subscription.findFirst({ where: { userId: user?.id } });

        return {
            status: 200,
            data: { 
                form: {
                    ...form,
                    hasCustomBranding: payment?.plan === 'BUSINESS' || payment?.plan === 'PRO',
                },
            },
        };
    } catch (error) {
        console.error("[getFormByUrl ERROR]", error);
        return { status: 500, data: { form: null } };
    }
};

export const getUserForms = async (workspaceId: string) => {
    try {
        const user = await currentUser();
        if (!user) return { status: 403 };

        const forms = await client.form.findMany({
            where: {
                workspaceId,
                userId: user.id,
            },
            include: {
                formFields: true,
                questions: true,
                FormAnalytics: {
                    select: {
                        actionType: true,
                        value: true,
                    },
                },
            },
        });

        // Aggregate metrics for each form
        const formsWithMetrics = forms.map((form) => {
            const metrics = form.FormAnalytics.reduce((acc, { actionType, value }) => {
                acc[actionType] = (acc[actionType] || 0) + value;
                return acc;
            }, {} as Record<string, number>);

            return {
                ...form,
                metrics: Object.entries(metrics).map(([actionType, total]) => ({
                    actionType,
                    total,
                })),
            };
        });

        return {
            status: 200,
            data: { forms: formsWithMetrics },
        };
    } catch (error) {
        console.error("[getUserForms ERROR]", error);
        return {
            status: 500,
            data: { forms: null },
        };
    }
};

const allFields = [
    {
        key: "avatar",
        isEnabled: true,
        isRequired: false,
    },
    {
        key: "logo",
        isEnabled: true,
        isRequired: false,
    },
    {
        key: "name",
        isEnabled: true,
        isRequired: true,
    },
    {
        key: "customer_email",
        isEnabled: true,
        isRequired: false,
    },
    {
        key: "job_title",
        isEnabled: true,
        isRequired: false,
    },
    {
        key: "website_url",
        isEnabled: true,
        isRequired: false,
    },
    {
        key: "collect_company",
        isEnabled: true,
        isRequired: false,
    },
];

export const createNewForm = async (workspaceId: string) => {
    try {
        const user = await currentUser();
        if (!user) return { status: 403, data: 'Not logged in', form: null };

        if (!workspaceId) return { status: 500, data: 'Invalid workspace specified', form: null };

        const form = await client.form.create({
            data: {
                userId: user.id,
                workspaceId,
                name: "Testimonials",
                backgroundColor: "#9072afff",
                brandLogo: '/logo.png',
                brandName: 'Feedbackz',
                primaryColor: "#8466b4ff",
                withAnimatedBg: false,
                title: "Your brand here",
                description:
                    "Do you love using our product? We'd love to hear about it!😊",
                textareaPlaceholder: "Write a nice message here ✨",
                buttonLabel: "Submit",
                published: false,
                isPaused: false,
                pausedUntil: null,
                url: '/p/' + generateUniqueId(),
                customUrl: "",
                formFields: { create: allFields },
                thankYouPageTitle: 'Thanks for offering us feedback 🙏',
                thankYouPageMessage: 'Thank you so much for your support! We appreciate your support and we hope you enjoy using our product.',
                thankYouCustomURL: '',
                questions: {
                    create: [
                        {
                            text: "What do you like best about our service?",
                        },
                        {
                            text: "Would you suggest us to a friend?",
                        },
                    ]
                },
            },
            include: {
                formFields: true,
                questions: true,
            },
        });

        return {
            status: 200,
            data: 'Form created successfully',
            form
        };
    } catch (error) {
        console.error("[createNewForm ERROR]", error);
        return {
            status: 500,
            data: 'Failed to create form',
            form: null
        };
    }
}

export const deleteForm = async (formId: string) => {
    try {
        const user = await currentUser();
        if (!user) return { status: 403, data: 'Not logged in' };

        if (!formId) return { status: 500, data: 'Invalid form selected' };

        await client.$transaction([
            client.formField.deleteMany({
                where: {
                    formId: formId,

                },
            }),
            client.formAnalytics.deleteMany({
                where: {
                    formId: formId,

                },
            }),
            client.question.deleteMany({
                where: {
                    formId: formId,

                },
            }),
            client.form.delete({
                where: {
                    id: formId,
                    userId: user.id,
                },
            }),
        ]);

        return {
            status: 200,
            data: 'Form deleted successfully',
        };
    } catch (error) {
        console.log('Error: ', error)
        return {
            status: 500,
            data: 'Failed to delete form',
        };
    }
}

export const pauseForm = async (formId: string, pause: boolean) => {
    try {
        const user = await currentUser();
        if (!user) return { status: 403, data: 'Not logged in' };

        if (!formId) return { status: 500, data: 'Invalid form selected' };

        await client.form.update({
            where: { id: formId },
            data: {
                isPaused: pause,
            }
        });

        return {
            status: 200,
            data: 'Form updated successfully',
        };
    } catch (error) {
        console.log('Error: ', error)
        return {
            status: 500,
            data: 'Failed to update form',
        };
    }
}

export const duplicateForm = async (formId: string) => {
    try {
        const user = await currentUser();
        if (!user) return { status: 403, data: 'Not logged in', form: null };

        if (!formId) return { status: 500, data: 'Invalid form selected', form: null };

        // Fetch the original form
        const originalForm = await client.form.findUnique({
            where: { id: formId, userId: user.id },
            include: {
                formFields: true,
                questions: true,
            },
        });

        if (!originalForm) {
            return { status: 404, data: 'Form not found', form: null };
        }

        // Create a new form with the same data but a new unique URL
        const newForm = await client.form.create({
            data: {
                userId: user.id,
                workspaceId: originalForm.workspaceId,
                name: `${originalForm.name} (Copy)`,
                backgroundColor: originalForm.backgroundColor,
                brandLogo: originalForm.brandLogo,
                brandName: originalForm.brandName,
                primaryColor: originalForm.primaryColor,
                withAnimatedBg: originalForm.withAnimatedBg,
                title: originalForm.title,
                description: originalForm.description,
                textareaPlaceholder: originalForm.textareaPlaceholder,
                buttonLabel: originalForm.buttonLabel,
                published: originalForm.published,
                isPaused: originalForm.isPaused,
                pausedUntil: originalForm.pausedUntil,
                url: '/p/' + generateUniqueId(),
                customUrl: "", 
                thankYouPageTitle: originalForm.thankYouPageTitle,
                thankYouPageMessage: originalForm.thankYouPageMessage,
                thankYouCustomURL: originalForm.thankYouCustomURL,

                // Duplicate form fields
                formFields: {
                    create: originalForm.formFields.map(field => ({
                        key: field.key,
                        isEnabled: field.isEnabled,
                        isRequired: field.isRequired,
                    })),
                },

                // Duplicate questions
                questions: {
                    create: originalForm.questions.map(question => ({
                        text: question.text,
                    })),
                },
            },
            include: {
                formFields: true,
                questions: true,
            },
        });

        return {
            status: 200,
            data: 'Form duplicated successfully',
            form: newForm
        };
    } catch (error) {
        console.error("[duplicateForm ERROR]", error);
        return {
            status: 500,
            data: 'Failed to duplicate form',
            form: null
        };
    }
};


const generateUniqueId = (length = 8) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let uniqueId = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        uniqueId += characters[randomIndex];
    }
    return uniqueId;
}