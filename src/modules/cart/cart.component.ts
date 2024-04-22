import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'ce-cart',
	standalone: true,
	imports: [],
	templateUrl: './cart.template.html',
	styleUrl: './cart.style.less',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent {}
