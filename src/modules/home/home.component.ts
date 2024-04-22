import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'ce-home',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './home.template.html',
	styleUrl: './home.style.less',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
