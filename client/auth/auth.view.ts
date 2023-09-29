namespace $.$$ {
	export class $dosha_client_auth extends $.$dosha_client_auth {
		
		logout() {
			this.auth( false )
		}
		login() {
			console.log('login')
			this.auth( true )
		}

		@$mol_mem
		auth( next?: boolean ) {
			return this.$.$mol_state_local.value( 'auth', next ) ?? false
		}
	}
}
