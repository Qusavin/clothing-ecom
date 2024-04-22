import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import {
	TuiRootModule,
	TuiDialogModule,
	TuiAlertModule,
	TUI_SANITIZER,
} from '@taiga-ui/core';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GlobalLoaderComponent } from '@shared/components/global-loader';

@Component({
	selector: 'ce-root',
	standalone: true,
	imports: [
		RouterOutlet,
		TuiRootModule,
		TuiDialogModule,
		TuiAlertModule,
		GlobalLoaderComponent,
	],
	templateUrl: './app.template.html',
	styleUrl: './app.style.less',
	providers: [{ provide: TUI_SANITIZER, useClass: NgDompurifySanitizer }],
})
export class AppComponent {}
