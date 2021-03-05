import { API_Response, IOptions } from "./../../../types";
import { Builder } from "./../main";

import * as speech from "./methods/speech";

export default class Audio extends Builder {
	constructor(params: IOptions | string) {
		super(params);
	}

	public speech = async (
		params: speech.Params,
	): API_Response<speech.Response> => this.postRequest(speech.method, params);
}
