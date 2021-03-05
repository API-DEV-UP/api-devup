export interface Params {
	sticker_id: number;
}

interface Image {
	url: string;
	width: number;
	height: number;
}

export interface Response {
	response: {
		sticker: {
			id: number;
			images: Image[];
			hints: {
				count: number;
				items: string[];
			};
		};
		pack: {
			id: number;
			title: string;
			stickers_count: number;
			price: {
				votes: number;
				rub: number;
				discount: {
					price_buy_discount: string;
					votes: {
						old: number;
						installed: number;
					};
					rub: {
						old: number;
						installed: number;
					};
				};
			};
			author: string;
			description: string;
		};
	};
}

export const method = "vk.getStickerInfo";
