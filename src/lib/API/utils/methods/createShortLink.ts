export interface Params {
	url: string;
}

export interface Response {
	id: number;
	create_vk: number;
	original_url: string;
	create_date: number;
	notifications: boolean;
	link: {
		url: string;
		code: string;
	};
}

export const method = "utils.createShortLink";
