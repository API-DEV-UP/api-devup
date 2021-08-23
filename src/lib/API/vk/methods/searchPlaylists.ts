export interface Params {
	q: string;
}

export interface Response {
	q: string;
	count: number;
	attachments: string;
	msg_response: string;
}

export const method = "vk.searchPlaylists";
