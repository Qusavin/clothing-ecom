import { afterNextRender, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IGlobalLoaderParams } from '@shared/components/global-loader/IGlobalLoaderParams';

@Injectable({ providedIn: 'root' })
export class GlobalLoaderService extends BehaviorSubject<boolean> {
	private readonly EVENT_NAME = 'beforeunload';

	readonly params$ = new BehaviorSubject<IGlobalLoaderParams | null>({});

	constructor() {
		super(false);

		afterNextRender(() => {
			this.handlePreventClose();
		});
	}

	showLoader(params?: IGlobalLoaderParams) {
		this.next(true);

		if (params) {
			this.params$.next(params);
		}
	}

	hideLoader() {
		this.next(false);
		this.params$.next(null);
	}

	private handlePreventClose() {
		const handler = (event: any) => {
			event.preventDefault();
			event.returnValue = '';

			return event;
		};

		this.params$.subscribe((params) => {
			const preventClose = params?.preventClose ?? false;

			if (preventClose) {
				addEventListener(this.EVENT_NAME, handler);
			} else {
				removeEventListener(this.EVENT_NAME, handler);
			}
		});
	}
}
