namespace $.$$ {
	export class $dosha_client extends $.$dosha_client {
		sub(): any {
			const user = this.$.$mol_state_local.value('user');
			return user ? [ this.Secure() ] : [ this.Auth_page() ]
		}

		logout( next?: any ) {
			this.$.$mol_state_local.value( 'user', null )
			this.$.$mol_state_local.value( 'jwt', null )
			$mol_state_arg.go({})
		}
	}
}
