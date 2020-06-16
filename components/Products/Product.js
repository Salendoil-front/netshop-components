class Product{
	constructor(){
		this.classNameActive = 'product-element__btn_active'
		this.labelAdd = 'Добавить в корзину'
		this.labelRemove = 'Удалить из корзины'
	}

	handleSetLocationStorage(element,id){
		const {pushProduct, product} = localStorageUttil.putProduct(id)

		if(pushProduct){
			element.classList.add(this.classNameActive)
			element.innerHTML = this.labelRemove
		}else{
			element.classList.remove(this.classNameActive);
			element.innerHTML = this.labelAdd;
		}

		headerPage.render(product.length)
	}

	render(){
		let productStore = localStorageUttil.getProduct()
		let htmlCatalog = '';

		CATALOG.forEach(({id, name, img, price}) => {
			let activeClass = '';
			let activeText = '';

			if(productStore.indexOf(id) === -1){
				activeText = this.labelAdd
			}else{
				activeClass =' ' + this.classNameActive
				activeText = this.labelRemove
			}

			htmlCatalog +=` 
				<li class="product-element">
					<span class="product-element__name">${name}</span>
					<img class="product-element__img" src="${img}" alt="" />
					<span class="product-element__price">🤞${price.toLocaleString()} RUB</span>
					<button class="product-element__btn${activeClass}" onclick="productPage.handleSetLocationStorage(this, '${id}')">
						${activeText}
					</button>
				</li>	
			`

			const html = ` 
				<ul class="product-container">
					${htmlCatalog}
				</ul>
			`;

			ROOT_PRODUCT.innerHTML = html;
		})
	}
}

const productPage = new Product()
