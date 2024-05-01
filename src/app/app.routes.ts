import { Routes } from '@angular/router';
import { RoutingPath } from '@shared/routing/routingPath';

export const routes: Routes = [
	{
		path: RoutingPath.EMPTY,
		children: [
			{
				path: RoutingPath.SHOP,
				loadChildren: () =>
					import('../modules/shop/shop.routes').then(
						(r) => r.shopRoutes,
					),
			},
			{
				path: RoutingPath.CART,
				loadChildren: () =>
					import('../modules/cart/cart.routes').then(
						(r) => r.cartRoutes,
					),
			},
			{
				path: RoutingPath.DEFAULT,
				redirectTo: RoutingPath.SHOP,
			},
		],
	},
];
