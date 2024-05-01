import { Routes } from '@angular/router';
import { RoutingPath } from '@shared/routing';
import { productResolver } from './shop-product/shop-product.resolver';
import { ShopService } from './shop.service';
import { inject } from '@angular/core';

export const shopRoutes: Routes = [
	{
		path: RoutingPath.EMPTY,
		providers: [ShopService],
		children: [
			{
				path: RoutingPath.EMPTY,
				resolve: {
					products: () => inject(ShopService).getProducts(),
				},
				loadComponent: () =>
					import('./shop.component').then((c) => c.ShopComponent),
			},
			{
				path: ':id',
				resolve: {
					product: productResolver,
				},
				loadComponent: () =>
					import('./shop-product/shop-product.component').then(
						(c) => c.ShopProductComponent,
					),
			},
		],
	},
];
