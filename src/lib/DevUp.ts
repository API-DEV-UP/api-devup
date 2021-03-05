import { Builder } from "./API/main";
import { IOptions, API_Response } from "./../types";

import VK from "./API/vk/main";
import Profile from "./API/profile/main";
import Audio from "./API/audio/main";
import Utils from "./API/utils/main";

/**
 * @class
 * @classdesc DevUp constructor
 * @param {Object|string} - Можно передать либо токен, либо набор параметров ({@link IOptions})
 * @example
 * const { DevUp } = require(`api-devup`);
 *
 * const API = new DevUp("token");
 * // Or
 * const API = new DevUp({
 * 	token: "token",
 * 	apiHeader: {
 * 		"User-Agent": "Custom-UserAgent"
 * 	}
 * });
 */
class DevUp extends Builder {
	public vk: VK;
	public profile: Profile;
	public audio: Audio;
	public utils: Utils;

	constructor(params: IOptions | string) {
		super(params);
		this.vk = new VK(params);
		this.profile = new Profile(params);
		this.audio = new Audio(params);
		this.utils = new Utils(params);
	}

	/**
	 * @description Метод для выполнения запроса к недобавленным методам
	 * @param method {string} - Метод
	 * @param params {Record<string, any>} - Параметры
	 */
	public call = async (
		method: string,
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		params: Record<string, any>,
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	): API_Response<any> => this.postRequest(method, params);
}

export default DevUp;
