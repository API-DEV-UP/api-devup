interface Settings {
	auth: string;
	method: "POST";
	credentials: "same-origin";
	headers: {
		"Content-Type": "application/json";
	};
	url: Record<string, string>;
}

export class Auth {
	constructor(key: string);
	private settings: Settings;

	public call(method: string, params: Record<string, any>): Promise<any>;

	public createShortLink(
		params: API.CreateShortLinkParams,
	): API.CreateShortLinkResponse;

	public buyPremium(
		params: API.BuyPremiumParams,
	): Promise<API.BuyPremiumResponse>;

	public buyLimit(params: API.BuyLimitParams): Promise<API.BuyLimitResponse>;

	public getWebInfo(
		params: API.GetWebInfoParams,
	): Promise<API.GetWebInfoResponse>;

	public audioSpeech(
		params: API.AudioSpeechParams,
	): Promise<API.AudioSpeechResponse>;

	public getProfile(): Promise<API.GetProfileResponse>;

	public getApps(params: API.GetAppsParams): Promise<API.GetAppsResponse>;

	public getGroups(params: API.GetGroupsParams): Promise<API.GetGroupsResponse>;

	public getStickers(
		params: API.GetStickersParams,
	): Promise<API.GetStickersResponse>;

	public getStickerInfo(
		params: API.GetStickerInfoParams,
	): Promise<API.GetStickerInfoResponse>;
}

declare namespace API {
	export interface CreateShortLinkParams {
		url: string;
	}
	export interface CreateShortLinkResponse {
		response: {
			id: number;
			create_vk: number;
			original_url: string;
			create_date: number;
			notifications: boolean;
			link: {
				url: string;
				code: string;
			};
		};
	}

	export type BuyPremiumParams = any;
	export type BuyPremiumResponse = any;

	export type BuyLimitParams = any;
	export type BuyLimitResponse = any;

	export interface GetWebInfoParams {
		address: string;
	}
	export interface GetWebInfoResponse {
		response: {
			ip_info: {
				address: string;
				ip: string;
				dns: string;
				organization: {
					name: string;
					as_code: string;
					as_name: string;
				};
				offset: number;
				connection: {
					status: string;
					mobile_network: boolean;
					direct_connection: boolean;
					proxy: boolean;
					web_server: boolean;
				};
			};
			ip_geo: {
				continent: {
					name: string;
					code: string;
				};
				country: {
					name: string;
					code: string;
				};
				region: {
					name: string;
					code: string;
				};
				city: string;
				currency: string;
				zip: string;
				timezone: string;
				coordinates: {
					latitude: number;
					longitude: number;
				};
			};
		};
	}

	export interface AudioSpeechParams {
		url: string;
	}
	export interface AudioSpeechResponse {
		response: {
			url: string;
			text: string;
		};
	}

	export interface GetProfileResponse {
		response: {
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
		};
	}

	export interface GetAppsParams {
		user_id: number;
	}
	interface UserApp {
		id: number;
		name: string;
		photo: string;
		domain: string;
		members_count: number;
	}
	export interface GetAppsResponse {
		response: {
			user_id: number;
			count: number;
			apps: UserApp[];
			description: {
				ru: string;
				en: string;
				kz: string;
				uk: string;
			};
		};
	}

	export interface GetGroupsParams {
		user_id: number;
	}
	interface UserGroup {
		id: number;
		name: string;
		photo: string;
		domain: string;
		members_count: number;
		verified: number;
	}
	export interface GetGroupsResponse {
		response: {
			user_id: number;
			count: number;
			groups: UserGroup[];
			description: {
				ru: string;
				en: string;
				kz: string;
				uk: string;
			};
		};
	}

	export interface GetStickersParams {
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
	export interface GetStickersResponse {
		response: {
			user_id: number;
			count: number;
			stickers: UserSticker[];
			price: {
				votes: number;
				rub: number;
			};
		};
	}

	export interface GetStickerInfoParams {
		sticker_id: number;
	}
	export interface GetStickerInfoResponse {
		response: {
			sticker: {
				id: number;
				images: [
					{
						url: string;
						width: number;
						height: number;
					},
				];
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
}
