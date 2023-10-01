namespace $.$$ {
	export class $dosha_branding extends $.$dosha_branding {
		

		// @ $mol_mem
		// font_family( next?: any ): string {
		// 	const style = document.documentElement.style
		// 	console.log(next)
		// 	next && style.setProperty('font-family', next)
		// 	console.log(style.getPropertyValue('font-family'))
		// 	return next ?? 'serif'
		// }

		@ $mol_mem
		font_style( next?: any ): string {
			const style = document.documentElement.style
			if (next === 'normal') {
				style.setProperty('font-weight', 'normal')
				style.setProperty('font-style', 'normal')
			}
			if (next === 'italic') style.setProperty('font-style', 'italic')
			if (next === 'think' || next === 'bold') style.setProperty('font-weight', next)
			return next ?? 'normal'
		}

		@ $mol_mem
		font_size( next?: any ) {
			document.documentElement.style.setProperty('font-size', `${next}px`)
			return next ?? 16
		}

		@ $mol_mem
		hue( next?: any ) {
			if (next) document.documentElement.style.setProperty('--mol_theme_hue', `${next}deg`);
			return next ?? 0
		}

		// document.documentElement.style.setProperty('--mol_gap_block', '4rem'); Поменять переменные

		// @ $mol_mem
		// config_all(next?: string){
		// 	console.log(this.config_theme())
		// 	return next ?? this.config_theme();
		// }
		
	}
}
