import axios, { AxiosRequestConfig } from "axios";
import { IOptions } from "./../../types";
import * as Core from "../../core";

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
		return new Promise((resolve, reject) => {
			axios
				.post(
					this.apiURL + method,
					{
						key: this.token,
						...data,
					},
					this.RequestConfig,
				)
				.then((response) => {
					if (response.data.err) {
						reject(new Core.DevUpError(response.data.err));
					}
					resolve(response.data);
				})
				.catch((err) => {
					if (err.response?.headers?.server === "ddos-guard") {
						reject(new Core.DDOS_Guard());
					}
					if (err.response?.data?.err) {
						reject(new Core.DevUpError(err.response.data.err));
					} else {
						reject(err);
					}
				});
		});
	}

	// protected async request(data, params: Record<string, any>)
	// TODO сделать возможность преобработки запросов и ответов
}
