namespace $.$$ {
	export class $dosha_client_auth extends $.$dosha_client_auth {
		logout() {
			$mol_state_arg.go( {
				page: 'login'
			} )
			this.auth( false )
		}

		login() {
			// const url = 'http://localhost:1337/api/foundations'

			// const data = $mol_fetch.json( url ) as any | null
			// console.log( data, [ ...Object.values( data ) ] )
			$mol_state_arg.go({})
			this.auth( true )
		}

		pages() {
			const page = $mol_state_arg.value( 'page' )
			return page === 'registration' ? [ this.Registration() ] : [ this.Login() ]
		}

		@$mol_mem
		auth( next?: boolean ) {
			return this.$.$mol_state_local.value( 'auth', next ) ?? false
		}
	}
}
