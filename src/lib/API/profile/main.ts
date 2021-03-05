import { IOptions } from "./../../../types";
import { Builder } from "./../main";

export default class Profile extends Builder {
	constructor(params: IOptions | string) {
		super(params);
	}
}
