export interface Params {
	address: string;
}

export interface Response {
	ip_info: {
		address: string;
		ip: string;
		dns: string;
		organization: {
			name: string;
			as_code: string;
			as_name: string;
		};
		offset: number;
		connection: {
			status: string;
			mobile_network: boolean;
			direct_connection: boolean;
			proxy: boolean;
			web_server: boolean;
		};
	};
	ip_geo: {
		continent: {
			name: string;
			code: string;
		};
		country: {
			name: string;
			code: string;
		};
		region: {
			name: string;
			code: string;
		};
		city: string;
		currency: string;
		zip: string;
		timezone: string;
		coordinates: {
			latitude: number;
			longitude: number;
		};
	};
}

export const method = "utils.getWebInfo";
