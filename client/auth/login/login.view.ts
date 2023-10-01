namespace $ {

	const Company = $mol_data_nullable( $mol_data_record( {
		id: $mol_data_number,
		company: $mol_data_string,
		department: $mol_data_string,
		createdAt: $mol_data_string,
		updatedAt: $mol_data_string,
	} ) )

	const Foundation = $mol_data_nullable( $mol_data_record( {
		id: $mol_data_number,
		title: $mol_data_string,
		uri: $mol_data_string,
		createdAt: $mol_data_string,
		updatedAt: $mol_data_string,
	} ) )

	export let $dosha_client_auth_login_user_model = $mol_data_record( {
		id: $mol_data_number,
		email: $mol_data_string,
		username: $mol_data_string,
		provider: $mol_data_string,
		createAt: $mol_data_string,
		updatedAt: $mol_data_string,
		blocked: $mol_data_boolean,
		confirmed: $mol_data_boolean,
		company: Company,
		foundation: Foundation,
	} )

	export let $dosha_client_auth_login_jwt_model = $mol_data_record( {
		jwt: $mol_data_string,
		user: $dosha_client_auth_login_user_model,
	} )
}

namespace $.$$ {

	export class $dosha_client_auth_login extends $.$dosha_client_auth_login {
		login_submit( next?: any ) {
			const result = this.fetch_auth() as typeof $dosha_client_auth_login_jwt_model.Value
			this.$.$mol_state_local.value( 'jwt', result.jwt )
			const user_full = this.$.$dosha_fetch.json( 'users/me?populate=*' )
			this.$.$mol_state_local.value( 'user', user_full )
			$mol_state_arg.go( {} )
		}


		fetch_auth() {
			const auth_result = $dosha_fetch.json_post( 'auth/local', {
				body: JSON.stringify( {
					identifier: this.email(),
					password: this.password(),
				} )
			} )
			return auth_result
		}

		login_demo( next?: any ) {
			this.email( 'demo@dosha.com' )
			this.password( '123456' )
			this.login_submit()
		}

		@$mol_mem
		static get_user(): typeof $dosha_client_auth_login_user_model.Value {
			return this.$.$mol_state_local.value( 'user' ) as typeof $dosha_client_auth_login_user_model.Value
		}

		@$mol_mem
		static get_jwt(): string {
			return this.$.$mol_state_local.value( 'jwt' ) ?? ''
		}

		static update_user() {
			const user_full = this.$.$dosha_fetch.json( 'users/me?populate=*' )
			this.$.$mol_state_local.value( 'user', user_full )
		}

	}
}
