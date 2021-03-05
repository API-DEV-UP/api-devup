import { Builder } from "./API/main";
import { IOptions, API_Response } from "./../types";
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

	public call = async (
		method: string,
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		params: Record<string, any>,
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	): API_Response<any> => this.postRequest(method, params);
}

export default DevUp;
