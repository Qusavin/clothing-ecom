import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { IProduct } from '@shared/model';
import { getRouteData } from '@shared/helpers';
import { TuiCurrencyPipeModule } from '@taiga-ui/addon-commerce';
import {
	TuiDataListWrapperModule,
	TuiInputNumberModule,
	tuiInputNumberOptionsProvider,
	TuiSelectModule,
} from '@taiga-ui/kit';
import {
	FormControl,
	FormGroup,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms';
import {
	TuiAlertService,
	TuiButtonModule,
	TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import { CartStore } from '@shared/store';

@Component({
	selector: 'ce-shop-product',
	standalone: true,
	imports: [
		CommonModule,
		TuiCurrencyPipeModule,
		TuiSelectModule,
		ReactiveFormsModule,
		TuiDataListWrapperModule,
		TuiButtonModule,
		TuiTextfieldControllerModule,
		TuiInputNumberModule,
	],
	templateUrl: './shop-product.template.html',
	styleUrl: './shop-product.style.less',
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [
		tuiInputNumberOptionsProvider({
			decimal: 'never',
			step: 1,
		}),
	],
})
export class ShopProductComponent {
	private readonly cartStore = inject(CartStore);
	private readonly alertService = inject(TuiAlertService);

	readonly form = new FormGroup({
		size: new FormControl<string>('m', {
			validators: [Validators.required],
			nonNullable: true,
		}),
		count: new FormControl<number>(1, {
			validators: [Validators.required],
			nonNullable: true,
		}),
	});

	readonly product = toSignal<IProduct>(getRouteData('product'));

	addToCart() {
		const count = this.form.controls.count.value;
		const size = this.form.controls.size.value;

		for (let i = 0; i < count; i++) {
			this.cartStore.addProduct(this.product()!, size);
		}

		this.alertService
			.open('Продукт добавлен в корзину', { status: 'success' })
			.subscribe();
		this.form.reset();
	}
}
