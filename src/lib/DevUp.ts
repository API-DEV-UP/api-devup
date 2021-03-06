import { promise as ping } from "ping";

import { Builder } from "./API/main";
import { IOptions, API_Response } from "./../types";

import VK from "./API/vk/main";
import Profile from "./API/profile/main";
import Audio from "./API/audio/main";
import Utils from "./API/utils/main";

/**
 * DevUp API constructor
 */
class DevUp extends Builder {
	public vk: VK;
	public profile: Profile;
	public audio: Audio;
	public utils: Utils;

	/**
	 *
	 * @param {Object|string} params - Можно передать либо токен, либо набор параметров ({@link IOptions})
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
	constructor(params: IOptions | string) {
		super(params);
		this.vk = new VK(params);
		this.profile = new Profile(params);
		this.audio = new Audio(params);
		this.utils = new Utils(params);
	}

	/**
	 * Метод для выполнения запроса к недобавленным методам
	 * @param {string} method - Метод
	 * @param {Record<string, any>} [params={}] - Параметры
	 * @example
	 * API.call("profile.get").then(res => console.log(res));
	 */
	public async call(
		method: string,
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		params: Record<string, any> = {},
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	): API_Response<any> {
		return this.postRequest(method, params);
	}

	/**
	 * Позволяет узнать текущий пинг до API
	 * @returns {Object} response Объект с результатом
	 * @returns {string} response.host Хост
	 * @returns {boolean} response.alive Статус API
	 * @returns {number} response.time Пинг до API
	 * @returns {string} response.ip IP-адрес API
	 */
	public ping = async (): Promise<{
		host: string;
		alive: boolean;
		time: number;
		ip: string;
	}> => {
		const url = this.apiURL;
		let hostname;
		url.indexOf("//") > -1
			? (hostname = url.split("/")[2])
			: (hostname = url.split("/")[0]);
		hostname = hostname.split(":")[0];
		hostname = hostname.split("?")[0];
		const PingData = await ping.probe(hostname);
		return {
			host: PingData.host,
			alive: PingData.alive,
			time: Number(PingData.time) || 0,
			ip: PingData.numeric_host || "0.0.0.0",
		};
	};
}

export default DevUp;
