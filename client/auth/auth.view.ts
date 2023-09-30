namespace $.$$ {
	export class $dosha_client_auth extends $.$dosha_client_auth {
		pages() {
			const page = $mol_state_arg.value( 'page' )
			return page === 'registration' ? [ this.Registration() ] : [ this.Login() ]
		}
	}
}
