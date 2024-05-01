import { Routes } from '@angular/router';
import { RoutingPath } from '@shared/routing';
import { CartComponent } from './cart.component';

export const cartRoutes: Routes = [
	{
		path: RoutingPath.EMPTY,
		component: CartComponent,
	},
];
