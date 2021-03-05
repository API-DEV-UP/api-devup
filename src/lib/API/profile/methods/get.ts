// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Params {}

export interface Response {
	id: number;
	id_vk: number;
	first_name: string;
	last_name: string;
	verified: number;
	premium: boolean;
	notifications: boolean;
	last_ip: string;
	last_online: number;
	req_time: number;
	api: {
		key: string;
		limit: number;
		rate_limit: number;
		warn: number;
		used: number;
	};
}

export const method = "profile.get";
