class LocalStorageUttil{
	constructor(){
		this.keyName = 'product'
	}

	getProduct(){
		const productLocalStorage = localStorage.getItem(this.keyName)
		if(productLocalStorage !== null){
			return JSON.parse(productLocalStorage)
		}
		return [];
	}

	putProduct(id){
		let product = this.getProduct();
		let pushProduct = false;
		const index = product.indexOf(id);

		if(index === -1){
			product.push(id);
			pushProduct = true;
		} else{
			product.splice(index, 1)
		}

		localStorage.setItem(this.keyName, JSON.stringify(product))

		return {pushProduct, product}
	}
}

const localStorageUttil = new LocalStorageUttil()
