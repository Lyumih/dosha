namespace $.$$ {

	const FoundationModel = $dosha_strapi( $mol_data_record( {
		title: $mol_data_string,
		uri: $mol_data_string,
		active: $mol_data_boolean,
	} ) )

	export class $dosha_client_found extends $.$dosha_client_found {

		current_found_title( next?: any ) {
			return this.$.$dosha_client_auth_login.get_user().foundation?.title ?? "Автоматический"
		}

		current_found_uri() {
			return this.$.$dosha_client_auth_login.get_user().foundation?.uri ?? 'https://trends.rbc.ru/trends/social/5f2d51b19a79476077e5f164'
		}

		clean_found_enabled( next?: any ) {
			return this.$.$dosha_client_auth_login.get_user().foundation ?? false
		}

		clean_found( next?: any ) {
			this.$.$dosha_fetch.json_put( 'users/' + this.$.$dosha_client_auth_login.get_user().id, {
				body: JSON.stringify( {
					foundation: {
						disconnect: [ this.$.$dosha_client_auth_login.get_user().foundation?.id ]
					}
				} )
			} )
			return this.$.$dosha_client_auth_login.update_user()
		}

		choose_active_found( id: any, next?: any ) {
			this.$.$dosha_fetch.json_put( 'users/' + this.$.$dosha_client_auth_login.get_user().id, {
				body: JSON.stringify( {
					foundation: {
						connect: [ id ]
					}
				} )
			} )
			this.$.$dosha_client_auth_login.update_user()
		}

		/** Делаем запрос при старте компонента и сразу же наполняем его данными */
		@$mol_mem
		founds( next?: any ): typeof FoundationModel.Value {
			return this.$.$dosha_fetch.json( 'foundations' ) as typeof FoundationModel.Value ?? {}
		}

		/** Так работаем со списком - мапим наши данные на Компоненты! */
		active_founds(): readonly any[] {
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
			if( this.new_found_title() && new URL( this.new_found_uri() ) ) {
				this.add_new_found_fetch( this.new_found_title(), this.new_found_uri() )
				this.founds()
			} else {
				throw new Error( 'Не все поля заполнены' )
			}
		}

		add_new_found_fetch( title: string, uri: string ) {
			this.$.$dosha_fetch.json_post( 'foundations', {
				body: JSON.stringify( {
					data: { title, uri }
				} ),
			} )
			this.founds( true )
		}
	}
}
