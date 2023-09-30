namespace $.$$ {
	export class $dosha_client_auth extends $.$dosha_client_auth {
		body() {
			const page = $mol_state_arg.value( 'page' )
			return [this.Role_text(), page === 'registration' ? this.Registration() : this.Login() ]
		}

		role_text(): string {
			return this.role() === 'user' ? 'Сотрудник' : this.role() === 'company' ? 'Компания' : 'Фонд'
		}
	}
}
