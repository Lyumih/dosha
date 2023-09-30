namespace $.$$ {
	export class $dosha_client_auth_registration extends $.$dosha_client_auth_registration {
		
		registration_success( next?: any ) {
			this.fetch_registration()
		}

		fetch_registration(){
			const result = this.$.$dosha_fetch.json('auth/local/register', {
				method: "POST",
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					email: this.email(),
					username: this.username(),
					password: this.password(),
				})
			})
			this.$.$mol_state_local.value( 'user', result )
			$mol_state_arg.go({})
			console.log(result)
		}
	}
}
