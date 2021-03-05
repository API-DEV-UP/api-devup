export interface Params {
	user_id: string;
}

interface App {
	id: number;
	name: string;
	photo: string;
	domain: string;
	members_count: number;
}

export interface Response {
	user_id: number;
	count: number;
	apps: App[];
	description: {
		ru: string;
		en: string;
		kz: string;
		uk: string;
	};
}

export const method = "vk.getApps";
