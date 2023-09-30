namespace $ {
	export let $dosha_strapi = (attr: any) => $mol_data_record({
		data: $mol_data_array($mol_data_record({
			id: $mol_data_number,
			attributes: $mol_data_record({
				...attr,
				createdAt: $mol_data_string,
				updatedAt: $mol_data_string,
				publishedAt: $mol_data_string
			}),
		})),
		meta: $mol_data_record({
			pagination: $mol_data_record({
				page: $mol_data_number,
				pageSize: $mol_data_number,
				pageCount: $mol_data_number,
				total: $mol_data_number,
			}),
		})
	})
}
