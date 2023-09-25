namespace $.$$ {
	export class $dosha_client_steps extends $.$dosha_client_steps {
		
		add_today_steps() {
			if (this.add_dosha() > 0) this.dosha_value(this.dosha_value() + this.add_dosha())
		}

		all_dosha_label() {
			return `### Всего активных шагов: *${this.dosha_value()}*`
		}
		
	}
}
