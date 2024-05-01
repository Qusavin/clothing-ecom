import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiSvgModule } from '@taiga-ui/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { RoutingPath } from '@shared/routing';
import { tuiPure } from '@taiga-ui/cdk';

@Component({
	selector: 'ce-app-header',
	standalone: true,
	imports: [CommonModule, TuiSvgModule, RouterLink, RouterLinkActive],
	templateUrl: './app-header.template.html',
	styleUrl: './app-header.style.less',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppHeaderComponent {
	readonly RoutingPath = RoutingPath;

	@tuiPure
	getLink(link: string): string {
		return `/${link}`;
	}
}
