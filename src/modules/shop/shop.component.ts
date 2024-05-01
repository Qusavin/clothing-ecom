import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopService } from './shop.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { IProductShort } from '@shared/model';
import { ProductComponent } from '@shared/components/product';
import { RoutingService } from '@shared/routing';
import { getRouteData } from '@shared/helpers';
import { Observable } from 'rxjs';

@Component({
	selector: 'ce-shop',
	standalone: true,
	imports: [CommonModule, ProductComponent],
	templateUrl: './shop.template.html',
	styleUrl: './shop.style.less',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopComponent {
	private readonly routingService = inject(RoutingService);

	// Fetching products on the server
	readonly products = toSignal<IProductShort[]>(
		getRouteData('products') as Observable<IProductShort[]>,
	);

	toProduct(id: string) {
		this.routingService.toProduct(id);
	}
}
