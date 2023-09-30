namespace $.$$ {
	export class $dosha_client_profile extends $.$dosha_client_profile {

		@ $mol_mem
		username( next?: string ): string {
			return next ?? $dosha_client_auth_login.get_user().username
		}

		@ $mol_mem
		email( next?: string ): string {
			return next ?? $dosha_client_auth_login.get_user().email
		}

		update_profile( next?: any ) {
			
		}
	}
}
