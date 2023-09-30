namespace $ {
	export class $dosha_fetch extends $mol_fetch {
		static json( url: string, init?: RequestInit ) {
			const develop_mode = $mol_state_arg.href_normal().startsWith( 'http://localhost' )
			const prod_uri_db = 'https://2022831-koplenov.twc1.net//api/'
			const local_uri_db = 'http://localhost:1337/api/'
			const headers = {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			}
			const initWithHeaders = {
				...init,
				headers: {
					...headers,
					...init?.headers
				}
			}
			if( develop_mode ) {
				return super.json( local_uri_db + url, initWithHeaders )
			}
			try {
				return super.json( ( develop_mode ? local_uri_db : prod_uri_db ) + url, initWithHeaders )
			} catch {
				return super.json( local_uri_db + url, initWithHeaders )
			}
		}
	}
}
