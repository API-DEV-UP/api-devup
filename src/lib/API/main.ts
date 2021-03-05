import axios, { AxiosRequestConfig } from "axios";
import { IOptions } from "./../../types";
import Core from "../../core";

export class Builder {
	protected readonly token: string;
	protected readonly RequestConfig: AxiosRequestConfig = {
		headers: {
			"User-Agent": `api-devup@${Core.version}`,
		},
	};
	protected readonly apiURL: string = Core.url;

	protected constructor(params: IOptions | string) {
		if (typeof params === "string") {
			this.token = params;
		} else {
			this.token = params.token;
			this.RequestConfig.headers =
				params.apiHeaders || this.RequestConfig.headers;
			this.apiURL = params.apiURL || this.apiURL;
		}
	}

	protected async postRequest(
		method: string,
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		data?: Record<string, any>,
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	): Promise<any> {
		return (
			await axios.post(
				this.apiURL + method,
				{
					key: this.token,
					...data,
				},
				this.RequestConfig,
			)
		).data;
	}
}