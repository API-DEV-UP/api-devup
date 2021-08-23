import { IOptions } from "./../../../types";
import { Builder } from "./../main";
import { API_Response } from "../../../types";

import * as getStickers from "./methods/getStickers";
import * as getStickerInfo from "./methods/getStickerInfo";
import * as getGroups from "./methods/getGroups";
import * as getApps from "./methods/getApps";
import * as searchPlaylists from "./methods/searchPlaylists";
import * as searchAudio from "./methods/searchAudio";

export default class VK extends Builder {
	constructor(params: IOptions | string) {
		super(params);
	}

	/**
	 * getStickers
	 */
	public getStickers = async (
		params: getStickers.Params,
	): API_Response<getStickers.Response> =>
		this.postRequest(getStickers.method, params);

	public getStickerInfo = async (
		params: getStickerInfo.Params,
	): API_Response<getStickerInfo.Response> =>
		this.postRequest(getStickerInfo.method, params);

	public getGroups = async (
		params: getGroups.Params,
	): API_Response<getGroups.Response> =>
		this.postRequest(getGroups.method, params);

	public getApps = async (
		params: getApps.Params,
	): API_Response<getApps.Response> => this.postRequest(getApps.method, params);

	public searchPlaylists = async (
		params: searchPlaylists.Params,
	): API_Response<searchPlaylists.Response> =>
		this.postRequest(searchPlaylists.method, params);

	public searchAudio = async (
		params: searchAudio.Params,
	): API_Response<searchAudio.Response> =>
		this.postRequest(searchAudio.method, params);
}
