namespace $.$$ {
	export class $dosha_client_auth extends $.$dosha_client_auth {
		logout() {
			$mol_state_arg.go( {
				page: 'login'
			} )
			this.auth( false )
		}

		login() {
			console.log( 'login' )

			const API_KEY = 'AIzaSyCbuQH3ZZnXCarsdaCGMW_Jrj4hzjcKsgQ'
			// const url = 'https://dosha-api-default-rtdb.firebaseio.com/v1/accounts:signInWithCustomToken?key=AIzaSyCbuQH3ZZnXCarsdaCGMW_Jrj4hzjcKsgQ'
			// const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`
			// const url = `https://dosha-api-default-rtdb.firebaseio.com/v1/accounts:signUp?key=${ API_KEY }`
			// const body = { email: "user@example.com", password: "[PASSWORD]", returnSecureToken: true }
			const url = 'http://localhost:1337/api/founds'

			const data = $mol_fetch.json( url ) as any | null
			console.log( data, [ ...Object.values( data ) ] )
			// $mol_state_arg.go({})
			// this.auth( true )
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
