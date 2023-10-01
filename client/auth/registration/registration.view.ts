namespace $.$$ {
	export class $dosha_client_auth_registration extends $.$dosha_client_auth_registration {

		fetch_registration() {
			const result = this.$.$dosha_fetch.json_post( 'auth/local/register', {
				body: JSON.stringify( {
					email: this.email(),
					username: this.username(),
					password: this.password(),
				} )
			} ) as typeof $dosha_client_auth_login_jwt_model.Value
			this.$.$mol_state_local.value( 'jwt', result.jwt )
			if( this.role() !== 'user' ) {
				this.$.$dosha_fetch.json_put( 'users/' + result.user.id, {
					body: JSON.stringify( {
						role: this.role() === 'company' ? 3 : 5,
					} )
				} )
			}
			const user_full = this.$.$dosha_fetch.json( 'users/me?populate=*' )
			this.$.$mol_state_local.value( 'user', user_full )
			$mol_state_arg.go( {} )
		}
	}
}
