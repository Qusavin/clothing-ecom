import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'ce-about-us',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './about-us.template.html',
	styleUrl: './about-us.style.less',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutUsComponent {}
