namespace $.$$ {
	export class $dosha_client_found extends $.$dosha_client_found {

		/** Делаем запрос при старте компонента и сразу же наполняем его данными */
		@$mol_mem
		founds() {
			const url = 'https://dosha-api-default-rtdb.firebaseio.com/founds.json'
			const data = $mol_fetch.json( url ) as any | null
			console.log( data, [...Object.values(data)] )
			return [...Object.values(data)] as Array<any> ?? []
		}

		/** Так работаем со списком - мапим наши данные на Компоненты! */
		active_founds(): readonly any[] {
			console.log( 'active_founds' )
			return this.founds().filter( ( f: any ) => f.active ).map( ( found: any ) => this.Found_active( found.uri ) ) || []
		}

		new_founds(): readonly any[] {
			return this.founds().filter( ( f: any ) => f.uri && f.active !== true ).map( ( found: any ) => this.Found_new( found.uri ) ) || []
		}

		get_found(id: string) {
			return this.founds().find( ( found: any ) => found.uri === id )
		}

		// Это нужно для view.tree - получаем наше поле объекта из массива
		found_active_title( id: any ): string {
			return this.get_found(id)?.title || ''
		}
		found_active_uri( id: any ): string {
			return this.get_found(id)?.uri || ''
		}

		found_new_title( id: any ): string {
			return this.get_found(id)?.title || ''
		}
		found_new_uri( id: any ): string {
			return this.get_found(id)?.uri || ''
		}

		add_new_found( next?: any ) {
			console.log( 'test', next )
			if( this.new_found_title() && this.new_found_uri() ) {
				this.add_new_found_fetch( this.new_found_title(), this.new_found_uri() )
				this.founds()
			}
		}

		add_new_found_fetch( title: string, uri: string ) {
			const url = 'https://dosha-api-default-rtdb.firebaseio.com/founds.json'
			$mol_fetch.json( url, {
				method: 'POST',
				body: JSON.stringify(
					{ title, uri }
				),
			} ) as any | null
		}
	}
}
