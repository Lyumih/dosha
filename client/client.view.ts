namespace $.$$ {
	export class $dosha_client extends $.$dosha_client {
		sub():any {
			return this.auth() ? [this.Secure()] : [this.Auth_page()]
		}

		logout( next?: boolean ) {
			this.auth(false)
		}

		login(next?: boolean) {
			this.auth(true)
		}
	}
}
