import { ResolveFn } from '@angular/router';
import { IProduct } from '@shared/model';
import { inject } from '@angular/core';
import { of } from 'rxjs';
import { ShopService } from '../shop.service';

export const productResolver: ResolveFn<IProduct | null> = (route, state) => {
	const id: string | null = route.params['id'] ?? null;

	if (!id) {
		return of(null);
	}

	return inject(ShopService).getProduct(id);
};
