export const version = "1.3.5";
export const url = "https://api.dev-up.ru/method/";

type RequestParam = { key: string; value: number | string | boolean };

class ModuleError extends Error {
	constructor(message: string) {
		super(message);
		Object.setPrototypeOf(this, ModuleError.prototype);
	}

	protected get [Symbol.toStringTag](): string {
		return this.constructor.name;
	}

	/**
	 * Возвращает содержимое ошибки в JSON
	 */
	protected toJSON(): Pick<this, keyof this> {
		const json = {} as Pick<this, keyof this>;

		for (const key of Object.getOwnPropertyNames(this)) {
			json[key as keyof this] = this[key as keyof this];
		}

		return json;
	}
}

/**
 * Основной класс ошибок которые могут произойти в модуле
 * @hideconstructor
 */
export class DevUpError extends ModuleError {
	/**
	 * Код ошибки
	 */
	public code: string | number;

	/**
	 * Параметры запроса
	 */
	public params: RequestParam[];

	/**
	 * Уровень критичности ошибки
	 */
	public level: string;

	/**
	 * Стэк ошибки
	 */
	public stack!: string;

	public constructor({
		err_code: code,
		err_critical_lvl: level,
		err_msg: message,
		params: params,
	}: {
		err_code: number;
		err_critical_lvl: string;
		err_msg: string;
		params: RequestParam[];
	}) {
		super(message);

		this.code = code;
		this.level = level;
		this.params = params;

		this.name = this.constructor.name;

		Object.setPrototypeOf(this, DevUpError.prototype);
	}
}

export class DDOS_Guard extends ModuleError {
	constructor() {
		super(
			"The number of requests per second has been exceeded, try again later",
		);
		Object.setPrototypeOf(this, DDOS_Guard.prototype);
	}
}
