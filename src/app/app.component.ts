import { TuiAlertModule, TuiDialogModule, TuiRootModule } from '@taiga-ui/core';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GlobalLoaderComponent } from '@shared/components/global-loader';
import { AppHeaderComponent } from './app-header/app-header.component';

@Component({
	selector: 'ce-root',
	standalone: true,
	imports: [
		RouterOutlet,
		TuiRootModule,
		TuiDialogModule,
		TuiAlertModule,
		GlobalLoaderComponent,
		AppHeaderComponent,
	],
	templateUrl: './app.template.html',
	styleUrl: './app.style.less',
})
export class AppComponent {}
