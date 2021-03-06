import { IOptions, API_Response } from "./../../../types";
import { Builder } from "./../main";

import * as md5Generate from "./methods/md5Generate";
import * as getServerTime from "./methods/getServerTime";
import * as createShortLink from "./methods/createShortLink";
import * as notificationsLinks from "./methods/notificationsLinks";
import * as getWebInfo from "./methods/getWebInfo";

export default class Utils extends Builder {
	constructor(params: IOptions | string) {
		super(params);
	}

	public md5Generate = async (
		params: md5Generate.Params,
	): API_Response<md5Generate.Response> =>
		this.postRequest(md5Generate.method, params);

	public getServerTime = async (
		params?: getServerTime.Params,
	): API_Response<getServerTime.Response> =>
		this.postRequest(getServerTime.method, params);

	public createShortLink = async (
		params: createShortLink.Params,
	): API_Response<createShortLink.Response> =>
		this.postRequest(createShortLink.method, params);

	public notificationsLinks = async (
		params: notificationsLinks.Params,
	): API_Response<notificationsLinks.Response> =>
		this.postRequest(notificationsLinks.method, params);

	public getWebInfo = async (
		params: getWebInfo.Params,
	): API_Response<getWebInfo.Response> =>
		this.postRequest(getWebInfo.method, params);
}
