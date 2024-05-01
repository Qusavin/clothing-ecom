import {
	ChangeDetectionStrategy,
	Component,
	EventEmitter,
	input,
	Output,
	output,
} from '@angular/core';
import { IProductShort } from '@shared/model';
import { TuiCurrencyPipeModule } from '@taiga-ui/addon-commerce';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'ce-product',
	standalone: true,
	imports: [CommonModule, TuiCurrencyPipeModule],
	templateUrl: './product.template.html',
	styleUrl: './product.style.less',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
	product = input.required<IProductShort>();

	@Output()
	readonly toProduct = new EventEmitter<string>();
}
