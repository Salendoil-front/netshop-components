function render(){

	const productStore = localStorageUttil.getProduct()
	headerPage.render(productStore.length)

	productPage.render()

}

spinnerPage.render()

let CATALOG = []




fetch('server/catalog.json')
	.then(res => res.json())
	.then(body => {
		CATALOG = body;
		spinnerPage.handleClear()
		render()
	})
	.catch(err => {
		console.log(err)
		spinnerPage.handleClear()
		errorPgPage.render()
	})