namespace $.$$ {
	export class $dosha_client_coins_links extends $.$dosha_client_coins_links {
		@ $mol_mem
		coins_result(next?: any) {
			return next ?? null
		}

		@ $mol_mem
		steps() {
			if (this.coins_result()?.steps === undefined) {
				// @ts-ignore
				const result = this.$.$dosha_fetch_user.json('coins')?.data[0]?.attributes
				this.coins_result(result ?? {steps: 0})
			}
			return this.coins_result()?.steps || 0 + ' 👟';
		}
		@ $mol_mem
		training() {
			return this.coins_result()?.training || 0 + ' 🏋';
		}
		@ $mol_mem
		achievements() {
			return this.coins_result()?.achievements || 0 + ' 🏆';
		}
		@ $mol_mem
		goods() {
			return this.coins_result()?.goods || 0 + ' 👑';
		}
		@ $mol_mem
		charity() {
			return this.coins_result()?.charity || 0 + ' 🏥';
		}
	}
}
