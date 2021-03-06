const MODULE_VERSION = "1.3.2";
const DEFAULT_API_URL = "https://api.dev-up.ru/method/";

class DevUpError extends Error {
	/**
	 * Error code
	 */
	public code: string | number;

	/**
	 * Error level
	 */
	public level: string;

	/**
	 * Error stack
	 */
	public stack!: string;

	/**
	 * Constructor
	 */
	public constructor({
		err_code: code,
		err_critical_lvl: level,
		err_msg: message,
	}: {
		err_code: number;
		err_critical_lvl: string;
		err_msg: string;
	}) {
		super(message);

		this.code = code;
		this.level = level;

		this.name = this.constructor.name;
	}

	/**
	 * Returns custom tag
	 */
	public get [Symbol.toStringTag](): string {
		return this.constructor.name;
	}

	/**
	 * Returns property for json
	 */
	public toJSON(): Pick<this, keyof this> {
		const json = {} as Pick<this, keyof this>;

		for (const key of Object.getOwnPropertyNames(this)) {
			json[key as keyof this] = this[key as keyof this];
		}

		return json;
	}
}

export default {
	version: MODULE_VERSION,
	url: DEFAULT_API_URL,
	error: DevUpError,
};
