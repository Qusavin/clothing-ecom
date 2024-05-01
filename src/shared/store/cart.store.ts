import { ICartProduct, IProduct } from '@shared/model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CartStore extends BehaviorSubject<ICartProduct[]> {
	constructor() {
		super([]);
	}

	addProduct(product: IProduct, size: string) {
		const products = [...this.value];
		const existedProduct = products.find(
			(existedProduct) =>
				existedProduct.id === product.id &&
				existedProduct.size === size,
		);

		if (existedProduct) {
			existedProduct.count++;
			return;
		}

		products.push({
			id: product.id,
			url: product.url,
			title: product.title,
			price: product.price,
			currency: product.currency,
			size: size,
			count: 1,
		});

		this.next(products);
	}

	remove(product: ICartProduct) {
		this.next(this.value.filter((cartProduct) => cartProduct !== product));
	}
}
