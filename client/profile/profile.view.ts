namespace $.$$ {
	export class $dosha_client_profile extends $.$dosha_client_profile {

		@ $mol_mem
		username( next?: string ): string {
			return next ?? this.$.$dosha_client_auth_login.get_user().username
		}

		@ $mol_mem
		email( next?: string ): string {
			return next ?? this.$.$dosha_client_auth_login.get_user().email
		}

		@ $mol_mem
		company( next?: string ) {
			console.log( 123432, next, this.$.$dosha_client_auth_login.get_user())
			return next ?? this.$.$dosha_client_auth_login.get_user().company.company
		}

		@ $mol_mem
		department( next?: any ) {
			console.log( 123, next, this.$.$dosha_client_auth_login.get_user())
			return next ?? this.$.$dosha_client_auth_login.get_user().company.department
		}

		update_profile() {
			let result = $dosha_fetch.json('users/' + this.$.$dosha_client_auth_login.get_user().id, {
				method: 'PUT',
				body: JSON.stringify({
					username: this.username(),
					email: this.email(),
				})
			}) as typeof this.$.$dosha_client_auth_login_user_model.Value
			$mol_state_local.value( 'user', result )
		}
	}
}
