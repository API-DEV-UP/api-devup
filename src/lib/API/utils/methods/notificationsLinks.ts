export interface Params {
	code: string;
	status: 1 | 2;
}

export interface Response {
	notifications: boolean;
}

export const method = "utils.notificationsLinks";
