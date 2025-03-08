export type Option = {
	key: string;
	text: string;
	description: string;
	isEnabled: boolean;
	isRequired: boolean;
	icon: JSX.Element;
	input: Record<string, any>;
	alwaysRequired?: boolean;
}