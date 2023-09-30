namespace $.$$ {
	export class $dosha_client_coins_links extends $.$dosha_client_coins_links {
		// @ $mol_mem
		// coins(next?: any) {
		// 	return next ?? {}
		// }

		coins_fetch(){
			const result = this.$.$dosha_fetch_user.json('coins')
			console.log(result)
		}
		
		coins_list(): readonly any[] {
			return [].map( ( coin ) => this.Coin_link( coin ) )
		}
	}
}
