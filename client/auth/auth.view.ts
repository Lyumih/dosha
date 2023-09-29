namespace $.$$ {
	export class $dosha_client_auth extends $.$dosha_client_auth {
		logout() {
			$mol_state_arg.value('page', "login")
			this.auth( false )
		}

		login() {
			$mol_state_arg.value('page', null)
			this.auth( true )
		}

		pages() {
			const page = $mol_state_arg.value('page')
			return page === 'registration' ? [ this.Registration() ] : [ this.Login() ]
		}

		@$mol_mem
		auth( next?: boolean ) {
			return this.$.$mol_state_local.value( 'auth', next ) ?? false
		}
	}
}
