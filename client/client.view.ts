namespace $.$$ {
	export class $dosha_client extends $.$dosha_client {
		sub(): any {
			return this.auth() ? [ this.Secure() ] : [ this.Auth_page() ]
		}
	}
}
