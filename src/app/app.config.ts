import { provideAnimations } from '@angular/platform-browser/animations';
import { TuiRootModule } from '@taiga-ui/core';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { sanitizerProvider, svgProcessorProvider } from '@core/providers';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
	providers: [
		provideAnimations(),
		provideRouter(routes),
		provideClientHydration(),
		importProvidersFrom(TuiRootModule),
		sanitizerProvider,
		svgProcessorProvider,
	],
};
