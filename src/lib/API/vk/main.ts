import { IOptions } from "./../../../types";
import { Builder } from "./../main";
import { API_Response } from "../../../types";

import * as getStickers from "./methods/getStickers";
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
		this.postRequest(getStickers.Method, params);
}
