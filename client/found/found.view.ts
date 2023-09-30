namespace $.$$ {
	export class $dosha_client_found extends $.$dosha_client_found {

		/** Делаем запрос при старте компонента и сразу же наполняем его данными */
		@$mol_mem
		founds() {
			const url = 'http://localhost:1337/api/foundations'
			const request = $mol_fetch.json( url ) as any | null
			console.log( request, [...Object.values(request)] )
			return request.data ?? []
		}

		/** Так работаем со списком - мапим наши данные на Компоненты! */
		active_founds(): readonly any[] {
			console.log( 'active_founds', this.founds())
			return this.founds().filter( ( f: any ) => f.attributes.active ).map( ( found: any ) => this.Found_active( found.id ) ) || []
		}

		new_founds(): readonly any[] {
			return this.founds().filter( ( f: any ) => f.attributes.active !== true ).map( ( found: any ) => this.Found_new( found.id ) ) || []
		}

		get_found(id: string) {
			return this.founds().find( ( found: any ) => found.id === id )
		}

		// Это нужно для view.tree - получаем наше поле объекта из массива
		found_active_title( id: any ): string {
			return this.get_found(id)?.attributes.title || ''
		}
		found_active_uri( id: any ): string {
			return this.get_found(id)?.attributes.uri || ''
		}

		found_new_title( id: any ): string {
			return this.get_found(id)?.attributes.title || ''
		}
		found_new_uri( id: any ): string {
			return this.get_found(id)?.attributes.uri || ''
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
