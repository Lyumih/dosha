namespace $.$$ {
	export class $dosha_client_coins_links extends $.$dosha_client_coins_links {

		@ $mol_mem
		steps() {
			return (this.$.$dosha_client_auth_login.get_user()?.coin?.steps || 0) + ' 👟';
		}
		@ $mol_mem
		training() {
			return (this.$.$dosha_client_auth_login.get_user()?.coin?.trainings || 0) + ' 🏋';
		}
		@ $mol_mem
		achievements() {
			return (this.$.$dosha_client_auth_login.get_user()?.coin?.achievements || 0) + ' 🏆';
		}
		@ $mol_mem
		goods() {
			return (this.$.$dosha_client_auth_login.get_user()?.coin?.goods || 0) + ' 👑';
		}
		@ $mol_mem
		charity() {
			return (this.$.$dosha_client_auth_login.get_user()?.coin?.charities || 0) + ' 🏥';
		}
	}
}
