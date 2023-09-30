namespace $.$$ {
	export class $dosha_client_auth_login extends $.$dosha_client_auth_login {
		
		login_submit( next?: any ) {
			console.log('login_submit', next)
			const result = this.fetch_auth( )
			this.$.$mol_state_local.value( 'user', result )
			console.log(result)
			$mol_state_arg.go({})
		}


		fetch_auth() {
			const auth_result = $dosha_fetch.json('auth/local', {
				method: 'POST',
				body: JSON.stringify({
					identifier: this.email(),
					password: this.password(),
				})
			})
			console.log(auth_result);
			return auth_result
		}
		
	}
}
