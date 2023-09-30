// namespace $ {
// 	export let CoinsModel = $.$mol_data_record({
		
// 	})
// }

namespace $.$$ {
	export class $dosha_client_coins_links extends $.$dosha_client_coins_links {
		@ $mol_mem
		fetch_coins() {
			const result = this.$.$dosha_fetch_user.json('coins')
			// @ts-ignore
			return this.coins_result(result.data[0].attributes)
		}

		fetch_test() {
			this.fetch_coins()
		}

		@ $mol_mem
		coins_result(next?: any) {
			return next ?? {}
		}

		@ $mol_mem
		steps() {
			this.fetch_test()
			return this.coins_result().steps || 0 + ' 👟';
		}
		@ $mol_mem
		training() {
			return this.coins_result().training || 0 + ' 🏋';
		}
		@ $mol_mem
		achievements() {
			return this.coins_result().achievements || 0 + ' 🏆';
		}
		@ $mol_mem
		goods() {
			return this.coins_result().goods || 0 + ' 👑';
		}
		@ $mol_mem
		charity() {
			return this.coins_result().charity || 0 + ' 🏥';
		}
	}
}
