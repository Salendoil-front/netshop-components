class ErrorPg{

	render(){
		const html = `
			<div class="errorPg-container">
				<div class="errorPg__text">
					<p>AHTUNG</p>
					<p>Попробуйте позже</p>
				</div>
			</div>
		`

		ROOT_ERRORPG.innerHTML = html;
	}

}

const errorPgPage = new ErrorPg()