import axios from 'axios';
import { toast } from 'sonner';

type Project = {
    name: string;
};

type HandleDashboardClickParams = {
    isSignedIn: boolean | undefined;
    isRedirecting: boolean;
    setIsRedirecting: (value: boolean) => void;
    router: any;
};

export const handleDashboardClick = async ({
    isSignedIn,
    isRedirecting,
    setIsRedirecting,
    router,
}: HandleDashboardClickParams): Promise<void> => {
    if (!isSignedIn) {
        router.push('/sign-up')
        return;
    }

    if (isRedirecting) {
        return;
    }

    try {
        setIsRedirecting(true);
        const response = await axios.get<{ projects: Project[] }>('/api/project/get-all-user-projects');
        const projects = response.data.projects;

        if (projects.length > 0) {
            const encodedProjectName = encodeURIComponent(projects[0].name);
            router.push(`/projects/${encodedProjectName}/forms`);
        } else {
            const firstProject = await createFirstUserProject();
            if (firstProject?.name) {
                const encodedFirstProjectName = encodeURIComponent(firstProject.name);
                router.push(`/projects/${encodedFirstProjectName}/forms`);
            } else {
                toast.error('Could not redirect you because there was an error creating your first project :(');
            }
        }
        setIsRedirecting(false);
    } catch (error) {
        console.error('Failed to fetch projects', error);
        toast.error('Could not retrieve your forms');
        setIsRedirecting(false);
    }
};

const createFirstUserProject = async () => {
    const response = await axios.post("/api/project/create", {
        data: {
            name: "New Project",
            description: "Empty project",
        },
    });

    const createdWorkspace = response?.data?.result;

    if (!createdWorkspace) {
        toast.error("Could not create your first workspace");
        return null;
    } else {
        return createdWorkspace;
    }
};
