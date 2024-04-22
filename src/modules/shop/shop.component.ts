import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'ce-shop',
	standalone: true,
	imports: [],
	templateUrl: './shop.template.html',
	styleUrl: './shop.style.less',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopComponent {}
