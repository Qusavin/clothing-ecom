import { Provider } from '@angular/core';
import { TUI_SVG_SRC_PROCESSOR } from '@taiga-ui/core';

export const svgProcessorProvider: Provider = {
	provide: TUI_SVG_SRC_PROCESSOR,
	useFactory: () => {
		return (src: string) => {
			const customPrefix = 'ce-icons::';

			if (String(src).startsWith(customPrefix)) {
				return `assets/icons/${String(src).replace(customPrefix, '')}.svg`;
			}

			if (String(src).startsWith('tuiIconTds')) {
				return `assets/taiga-ui/icons/${src}.svg`;
			}

			return src;
		};
	},
};
