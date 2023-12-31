namespace $ {
	export class $dosha_fetch extends $mol_fetch {
		static json( url: string, init?: RequestInit ) {
			const develop_mode = $mol_state_arg.href_normal().startsWith( 'http://localhost' )
			const prod_uri_db = 'https://2022831-koplenov.twc1.net/api/'
			const local_uri_db = 'http://localhost:1337/api/'
			const headers = {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			}
			const token_header = {
				Authorization: 'Bearer ' + this.$.$dosha_client_auth_login.get_jwt()
			}
			const initWithHeaders = {
				...init,
				headers: {
					...token_header,
					...headers,
					...init?.headers
				}
			}
			return super.json( ( develop_mode ? local_uri_db : prod_uri_db ) + url, initWithHeaders )

		}

		static json_post( url: string, init?: RequestInit ) {
			return this.json( url, { method: 'POST', ...init } )
		}

		static json_put( url: string, init?: RequestInit ) {
			return this.json( url, { method: 'PUT', ...init } )
		}
	}

	export class $dosha_fetch_user extends $dosha_fetch {
		static json( url: string, init?: RequestInit ) {
			const userId = this.$.$dosha_client_auth_login.get_user().id
			const response = super.json( `${ url }?populate=*`, init )
			// @ts-ignore
			response.data = response.data.filter( item => item?.attributes?.user_id?.data?.id === userId )
			return response
		}
	}
}
