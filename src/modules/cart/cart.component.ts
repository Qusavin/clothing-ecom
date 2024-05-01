import {
	ChangeDetectionStrategy,
	Component,
	computed,
	inject,
} from '@angular/core';
import { CartStore } from '@shared/store';
import { toSignal } from '@angular/core/rxjs-interop';
import { TuiCurrencyPipeModule } from '@taiga-ui/addon-commerce';
import { TuiButtonModule } from '@taiga-ui/core';
import { ICartProduct } from '@shared/model';

@Component({
	selector: 'ce-cart',
	standalone: true,
	templateUrl: './cart.template.html',
	styleUrl: './cart.style.less',
	imports: [TuiCurrencyPipeModule, TuiButtonModule],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent {
	private readonly globalStore = inject(CartStore);

	readonly products = toSignal(this.globalStore.asObservable());

	readonly total = computed(() =>
		(this.products() ?? []).reduce(
			(acc, product) => acc + product.count * product.price,
			0,
		),
	);
	readonly currency = computed(() => this.products()?.[0].currency);

	remove(product: ICartProduct) {
		this.globalStore.remove(product);
	}
}
