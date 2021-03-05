import { Builder } from "./API/main";
import { IOptions, API_Response } from "./../types";
import axios from "axios";
import VK from "./API/vk/main";

/**
 * @class
 * @classdesc DevUp constructor
 */
class DevUp extends Builder {
	public vk: VK;
	constructor(params: IOptions | string) {
		super(params);
		this.vk = new VK(params);
	}

	public async call(
		method: string,
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		params: Record<string, any>,
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	): API_Response<any> {
		return (
			await axios.post(
				this + method,
				{
					key: this.token,
					...params,
				},
				this.RequestConfig,
			)
		).data;
	}
}

export default DevUp;
