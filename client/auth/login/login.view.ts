namespace $.$$ {
	export class $dosha_client_auth_login extends $.$dosha_client_auth_login {
		
		login_submit( next?: any ) {
			console.log('login_submit', next)
			const result = this.fetch_auth( this.login(), this.password() )
			this.$.$mol_state_local.value( 'user', result )
			console.log(result)
			$mol_state_arg.go({})
			// this.auth( true )
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
