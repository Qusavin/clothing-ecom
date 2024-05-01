import { Injectable } from '@angular/core';
import { map, Observable, timer } from 'rxjs';
import { productsMock1, productsMock2 } from '@core/mock';
import { IProductDTO, IProductShortDTO } from '@core/dto';

export interface IProductService {
	getProducts(): Observable<IProductShortDTO[]>;

	getProduct(id: string): Observable<IProductDTO>;
}

@Injectable({ providedIn: 'root' })
export class ProductsService implements IProductService {
	private readonly MOCK_DURATION = 2000;

	getProducts(): Observable<IProductShortDTO[]> {
		return timer(this.MOCK_DURATION).pipe(map(() => productsMock1));
	}

	getProduct(id: string): Observable<IProductDTO> {
		return timer(this.MOCK_DURATION).pipe(
			map(() => {
				const product = productsMock2.find(
					(product) => product.id === id,
				);

				if (!product) {
					throw new Error('There is no product with specified id');
				}

				return product;
			}),
		);
	}
}
