namespace $.$$ {
	export class $dosha_client extends $.$dosha_client {
		sub(): any {
			return this.auth() ? [ this.Secure() ] : [ this.Auth_page() ]
		}

		logout() {
			this.auth( false )
		}

		@$mol_mem
		auth( next?: boolean ) {
			return this.$.$mol_state_local.value( 'auth', next ) ?? false
		}
	}
}
