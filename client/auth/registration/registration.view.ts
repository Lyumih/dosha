namespace $.$$ {
	export class $dosha_client_auth_registration extends $.$dosha_client_auth_registration {

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
			}) as typeof $dosha_client_auth_login_jwt_model.Value
			this.$.$mol_state_local.value( 'user', result.user )
			this.$.$mol_state_local.value( 'jwt', result.jwt )
			$mol_state_arg.go({})
			console.log(result)
		}
	}
}
