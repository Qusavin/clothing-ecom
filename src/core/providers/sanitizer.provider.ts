import { Provider } from '@angular/core';
import { TUI_SANITIZER } from '@taiga-ui/core';
import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';

export const sanitizerProvider: Provider = {
	provide: TUI_SANITIZER,
	useClass: NgDompurifySanitizer,
};
