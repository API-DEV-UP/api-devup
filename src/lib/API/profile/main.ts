import { API_Response, IOptions } from "./../../../types";
import { Builder } from "./../main";

import * as get from "./methods/get";

export default class Profile extends Builder {
	constructor(params: IOptions | string) {
		super(params);
	}

	public get = async (params?: get.Params): API_Response<get.Response> =>
		this.postRequest(get.method, params);
}
