namespace $ {
	export let $dosha_client_auth_login_user_model = $mol_data_record({
		id: $mol_data_number,
		email: $mol_data_string,
		username: $mol_data_string,
		provider: $mol_data_string,
		createAt: $mol_data_string,
		updatedAt: $mol_data_string,
		blocked: $mol_data_boolean,
		confirmed: $mol_data_boolean,
	})

	export let $dosha_client_auth_login_jwt_model = $mol_data_record({
		jwt: $mol_data_string,
		user: $dosha_client_auth_login_user_model,
	})
}

namespace $.$$ {

	export class $dosha_client_auth_login extends $.$dosha_client_auth_login {
		
		login_submit( next?: any ) {
			console.log('login_submit', next)
			const result = this.fetch_auth() as typeof $dosha_client_auth_login_jwt_model.Value
			this.$.$mol_state_local.value( 'user', result.user )
			this.$.$mol_state_local.value( 'jwt', result.jwt )
			console.log(result)
			$mol_state_arg.go({})
		}


		fetch_auth() {
			const auth_result = $dosha_fetch.json('auth/local?populate=*', {
				method: 'POST',
				body: JSON.stringify({
					identifier: this.email(),
					password: this.password(),
				})
			})
			console.log(auth_result);
			return auth_result
		}

		login_demo( next?: any ) {
			this.email('demo@dosha.com')
			this.password('123456')
			this.login_submit()
		}

		@ $mol_mem
		static get_user(): typeof $dosha_client_auth_login_user_model.Value {
			return this.$.$mol_state_local.value( 'user' ) as typeof $dosha_client_auth_login_user_model.Value
		}

		@ $mol_mem
		static get_jwt(): string {
			return this.$.$mol_state_local.value( 'jwt' ) ?? ''
		}
		
	}
}
