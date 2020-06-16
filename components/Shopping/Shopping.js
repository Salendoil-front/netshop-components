class Shopping{

	handlerClear(){
		ROOT_SHOPPING.innerHTML = ``
	}

	render(){
		let productStore = localStorageUttil.getProduct()
		let htmlCatalog = '';
		let sumCatalog = 0;

		CATALOG.forEach(({id, name, price}) => {
			if(productStore.indexOf(id) !== -1){
				htmlCatalog += `
					<tr>
						<td class="shopping-element__name">🤞 ${name}</td>
						<td class="shopping-element__price">${price.toLocaleString()} RUB</td>
					</tr>
				`
				sumCatalog += price;
			}
		})

		const html =`
			<div class="shoopping-container">
				<div class="shopping__close" onclick="shoppingPage.handlerClear()"></div>
				<table>
					${htmlCatalog}
					<tr>
						<td class="shopping-element__name">🤞 Общая сумма заказа</td>
						<td class="shopping-element__price">${sumCatalog.toLocaleString()} RUB</td>
					</tr>
				</table>
			</div>
		`

		ROOT_SHOPPING.innerHTML = html
	}
}

const shoppingPage = new Shopping()
