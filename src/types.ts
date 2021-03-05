/**
 * @typedef {object} IOptions
 * @property {string} token - токен
 * @property {Record<string, string>} apiHeaders - набор параметров
 * @property {string} apiURL - возможность выбора другого сервера API
 */
export interface IOptions {
	token: string;
	/**
	 * @default
	 * {
	 * 	User-Agent: "api-devup@${Core.version}"
	 * }
	 */
	apiHeaders?: Record<string, string>;
	/**
	 * @default https://api.dev-up.ru/method/
	 */
	apiURL?: string;
}

export type API_Response<MethodResponse> = Promise<{
	response: MethodResponse;
}>;

export interface ICustomRequest {
	method: string;
}
