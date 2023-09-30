namespace $.$$ {
	export class $dosha_client_profile extends $.$dosha_client_profile {

		@ $mol_mem
		username( next?: string ): string {
			return next ?? this.$.$dosha_client_auth_login.get_user().username
		}

		@ $mol_mem
		email( next?: string ): string {
			return next ?? this.$.$dosha_client_auth_login.get_user().email
		}

		@ $mol_mem
		company( next?: string ) {
			return next ?? this.$.$dosha_client_auth_login.get_user().company?.company ?? ''
		}

		@ $mol_mem
		department( next?: string ) {
			return next ?? this.$.$dosha_client_auth_login.get_user().company?.department ?? ''
		}

		update_profile() {
			$dosha_fetch.json('users/' + this.$.$dosha_client_auth_login.get_user().id, {
				method: 'PUT',
				body: JSON.stringify({
					username: this.username(),
					email: this.email(),
				})
			})
			this.$.$dosha_client_auth_login.update_user()
		}

		@ $mol_mem
		update_company() {
			// http://localhost:1337/api/companies?filters[$and][0][company][$eq]=Kokoc&filters[$and][1][department][$eq]=Marketing		}
			if (this.company() && this.department()) {
				const d = '$'
				const uri = `companies?filters[${d}and][0][company][${d}eqi]=${this.company()}&filters[${d}and][1][department][${d}eqi]=${this.department()}`
				const result = this.$.$dosha_fetch.json(uri) as { data: []}
				if (result && result.data.length > 0) {
					console.log(result)
					$dosha_fetch.json('users/' + this.$.$dosha_client_auth_login.get_user().id, {
						method: 'PUT',
						body: JSON.stringify({
							company: {
								// @ts-ignore
								connect: [result.data[0].id]
							}
						})
					})
					this.$.$dosha_client_auth_login.update_user()
				} else {
					throw Error('Компания не найдена')
				}
				console.log(result)
			}
		}
	}
}
