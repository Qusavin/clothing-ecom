import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	DestroyRef,
	inject,
	OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiLoaderModule } from '@taiga-ui/core';
import {
	NavigationCancel,
	NavigationEnd,
	NavigationError,
	NavigationStart,
	Router,
} from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs';
import { GlobalLoaderService } from './global-loader.service';

@Component({
	selector: 'ce-global-loader',
	standalone: true,
	imports: [CommonModule, TuiLoaderModule],
	templateUrl: './global-loader.template.html',
	styleUrl: './global-loader.style.less',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GlobalLoaderComponent implements OnInit {
	private readonly destroyRef = inject(DestroyRef);
	private readonly router = inject(Router);
	private readonly globalLoaderService = inject(GlobalLoaderService);
	private readonly cdr = inject(ChangeDetectorRef);

	readonly showLoader$ = this.globalLoaderService.pipe(
		tap(() => this.cdr.markForCheck()),
	);
	readonly params$ = this.globalLoaderService.params$.pipe(
		tap(() => this.cdr.markForCheck()),
	);

	ngOnInit() {
		this.router.events
			.pipe(takeUntilDestroyed(this.destroyRef))
			.subscribe((event) => {
				switch (event.constructor) {
					case NavigationStart:
						this.globalLoaderService.showLoader();

						break;

					case NavigationEnd:
					case NavigationError:
					case NavigationCancel:
						this.globalLoaderService.hideLoader();

						break;
				}
			});
	}
}
