import { inject, Injectable } from '@angular/core';
import { ProductsService } from '@core/api';
import { map, Observable } from 'rxjs';
import {
	IProduct,
	IProductShort,
	mapProductDTOToProduct,
	mapProductShortDTOToProductShort,
} from '@shared/model';

@Injectable()
export class ShopService {
	private readonly productsService = inject(ProductsService);

	getProducts(): Observable<IProductShort[]> {
		return this.productsService
			.getProducts()
			.pipe(
				map((products) =>
					products.map(mapProductShortDTOToProductShort),
				),
			);
	}

	getProduct(id: string): Observable<IProduct> {
		return this.productsService
			.getProduct(id)
			.pipe(map((product) => mapProductDTOToProduct(product)));
	}
}
