namespace $.$$ {
	export class $dosha_client_found extends $.$dosha_client_found {

		@$mol_mem
		founds() {
			const url = 'https://dosha-api-default-rtdb.firebaseio.com/founds.json'
			const data = $mol_fetch.json( url ) as any | null
			return data ?? []
		}

		active_founds(): readonly any[] {
			return this.founds().filter( ( f: any ) => f.active ).map( ( found: any ) => this.Found_active( found.uri ) )
		}

		found_active_title( id: any ): string {
			return this.founds().find( ( found: any ) => found.uri === id )?.title || ''
		}
		found_active_uri( id: any ): string {
			return this.founds().find( ( found: any ) => found.uri === id )?.uri || ''
		}

		new_founds(): readonly any[] {
			return this.founds().filter( ( f: any ) => !f.active ).map( ( found: any ) => this.Found_new( found.uri ) )
		}

		found_new_title( id: any ): string {
			return this.founds().find( ( found: any ) => found.uri === id )?.title || ''
		}
		found_new_uri( id: any ): string {
			return this.founds().find( ( found: any ) => found.uri === id )?.uri || ''
		}
	}
}
