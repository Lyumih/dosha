namespace $.$$ {
	export class $dosha_company_report extends $.$dosha_company_report {
		
		download() {
			console.log('Скачать отчёт')
			const report_content = 'Отчёт для оплаты. Контент'
			return new $mol_dom_context.Blob( [ report_content ], { type: 'text/x-marked' } )

		}
		
	}
}
