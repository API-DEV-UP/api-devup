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
		try {
			const Response = await axios.post(
				this.apiURL + method,
				{
					key: this.token,
					...data,
				},
				this.RequestConfig,
			);

			if (Response.data.err) {
				throw new Core.error(Response.data.err, Response.data.params || []);
			}

			return Response.data;
		} catch (error) {
			if (error.response?.data?.err) {
				throw new Core.error(
					error.response.data.err,
					error.response.data.params || [],
				);
			} else {
				console.log(error);
			}
		}
	}

	// protected async request(data, params: Record<string, any>)
	// TODO сделать возможность преобработки запросов и ответов
}
