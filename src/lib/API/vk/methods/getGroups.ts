export interface Params {
	user_id: string;
}

interface Group {
	id: number;
	name: string;
	photo: string;
	domain: string;
	members_count: number;
	verified: number;
}

export interface Response {
	user_id: number;
	count: number;
	groups: Group[];
	description: {
		ru: string;
		en: string;
		kz: string;
		uk: string;
	};
}

export const method = "vk.getGroups";
