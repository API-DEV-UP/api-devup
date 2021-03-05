import { IOptions } from "./../types";
import axios, { AxiosRequestConfig } from "axios";

import Core from "../core";

type API_Response<MethodResponse> = Promise<{
	response: MethodResponse;
}>;

class DevUp {
	private API_Server = "https://api.dev-up.ru/method/";
	private token: string;
	private RequestConfig: AxiosRequestConfig = {
		headers: {
			"User-Agent": `api-devup@${Core.version}`,
		},
	};

	constructor(params: IOptions) {
		this.token = params.token;
	}

	private generatePayload(params: any) {
		return {
			key: this.token,
			...params,
		};
	}

	public async call(
		method: string,
		params: Record<string, any>,
	): API_Response<any> {
		return (
			await axios.post(
				this.API_Server + method,
				this.generatePayload(params),
				this.RequestConfig,
			)
		).data;
	}
}
