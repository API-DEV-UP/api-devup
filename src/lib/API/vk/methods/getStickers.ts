export interface Params {
	user_id: number;
}

interface UserSticker {
	id: number;
	pack_id: number;
	name: string;
	stickers_count: number;
	author: string;
	description: string;
	photo: string;
	price: {
		votes: number;
		rub: number;
	};
	url_buy: string;
}

export interface Response {
	user_id: number;
	count: number;
	stickers: UserSticker[];
	price: {
		votes: number;
		rub: number;
	};
}

export const Method = "vk.getStickers";
