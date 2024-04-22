import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'ce-contact',
	standalone: true,
	imports: [],
	templateUrl: './contact.template.html',
	styleUrl: './contact.style.less',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {}
