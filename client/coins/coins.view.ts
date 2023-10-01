namespace $.$$ {
	export class $dosha_client_coins extends $.$dosha_client_coins {

		// Деньги на сегодняшний день берутся из общего стакана на сегодняшний день
		// И концу дня плавна уменьшат на след. день
		coins_now() {
			const coins = Math.floor(Math.random() * 50)
			return {
				trainings: coins,
			}
		}

		@$mol_mem
		training_check() {
			this.$.$dosha_fetch.json_put( 'coins/' + this.$.$dosha_client_auth_login.get_user()?.coin?.id, {
				body: JSON.stringify( {
					data: {
						trainings: ( this.$.$dosha_client_auth_login.get_user()?.coin?.trainings || 0 ) + 25
					}
				} )
			} )
			this.$.$dosha_client_auth_login.update_user()
		}
	}
}
