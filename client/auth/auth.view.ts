namespace $.$$ {
	export class $dosha_client_auth extends $.$dosha_client_auth {
		logout() {
			$mol_state_arg.go( {
				page: 'login'
			} )
			this.auth( false )
		}

		login() {
			const auth_result = this.fetch_auth('test', 'pass')
			console.log(auth_result);
			// $mol_state_arg.go({})
			// this.auth( true )
		}

		pages() {
			const page = $mol_state_arg.value( 'page' )
			return page === 'registration' ? [ this.Registration() ] : [ this.Login() ]
		}

		@$mol_mem
		auth( next?: boolean ) {
			return this.$.$mol_state_local.value( 'auth', next ) ?? false
		}

		fetch_auth(identifier: string, password: string) {
			const auth_result = $dosha_fetch.json('auth/local', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					identifier,
					password,
				})
			})
			console.log(auth_result);
			return auth_result
		}
	}
}
