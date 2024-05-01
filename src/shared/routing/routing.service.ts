import { inject, Injectable } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { RoutingPath } from '@shared/routing/routingPath';

@Injectable({ providedIn: 'root' })
export class RoutingService {
	private readonly router = inject(Router);

	private defaultNavigationParams: NavigationExtras = {
		skipLocationChange: false,
		queryParamsHandling: 'merge',
	};

	toShop() {
		this.navigateToRoute(RoutingPath.SHOP);
	}

	toProduct(id: string) {
		this.navigateToRoute([RoutingPath.SHOP, id]);
	}

	toCart() {
		this.navigateToRoute(RoutingPath.CART);
	}

	private navigateToRoute(
		route: string | number | (string | number)[],
		extras: NavigationExtras = this.defaultNavigationParams,
	) {
		this.router.navigate(Array.isArray(route) ? route : [route], extras);
	}
}
