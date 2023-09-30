namespace $.$$ {

	const FoundationAttributesModel = $mol_data_record({
		title: $mol_data_string,
		uri: $mol_data_string,
		active: $mol_data_boolean,
	})

	const FoundationModel = $dosha_strapi(FoundationAttributesModel);

	// const T = $dosha_strapi(FoundationAttributesModel)

	export class $dosha_client_found extends $.$dosha_client_found {

		/** Делаем запрос при старте компонента и сразу же наполняем его данными */
		@$mol_mem
		founds(): typeof FoundationModel.Value {
			const url = 'http://localhost:1337/api/foundations'
			const request = $mol_fetch.json( url ) as typeof FoundationModel.Value
			console.log( request, [ ...Object.values( request ) ] )
			return request ?? {}
		}

		/** Так работаем со списком - мапим наши данные на Компоненты! */
		active_founds(): readonly any[] {
			console.log( 'active_founds', this.founds() )
			return this.founds() ? this.founds().data.filter( ( data ) => data.attributes.active ).map( ( data ) => this.Found_active( data.id ) ) : []
		}

		new_founds(): readonly any[] {
			return this.founds().data.filter( ( found ) => found.attributes.active !== true ).map( ( found ) => this.Found_new( found.id ) ) || []
		}

		get_found( id: string ) {
			return this.founds().data.find( ( found: any ) => found.id === id )?.attributes
		}

		// Это нужно для view.tree - получаем наше поле объекта из массива
		found_active_title( id: string ): string {
			return this.get_found( id )?.title || ''
		}
		found_active_uri( id: string ): string {
			return this.get_found( id )?.uri || ''
		}

		found_new_title( id: string ): string {
			return this.get_found( id )?.title || ''
		}
		found_new_uri( id: string ): string {
			return this.get_found( id )?.uri || ''
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
