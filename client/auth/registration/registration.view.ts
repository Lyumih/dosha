namespace $.$$ {
	export class $dosha_client_auth_registration extends $.$dosha_client_auth_registration {

		fetch_registration() {
			const result = this.$.$dosha_fetch.json( 'auth/local/register', {
				method: "POST",
				body: JSON.stringify( {
					email: this.email(),
					username: this.username(),
					password: this.password(),
				} )
			} ) as typeof $dosha_client_auth_login_jwt_model.Value
			this.$.$mol_state_local.value( 'jwt', result.jwt )
			if( this.role() !== 'user' ) {
				this.$.$dosha_fetch.json( 'users/' + result.user.id, {
					method: "PUT",
					body: JSON.stringify( {
						role: this.role() === 'company' ? 3 : 5,
					} )
				} )
			}
			console.log( 'Update role' )
			const user_full = this.$.$dosha_fetch.json( 'users/me?populate=*' )
			this.$.$mol_state_local.value( 'user', user_full )
			$mol_state_arg.go( {} )
			console.log( result )
		}
	}
}
