import { map, Observable } from 'rxjs';
import { inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export function getRouteData(key: string): Observable<any> {
	return inject(ActivatedRoute).data.pipe(map((data) => data[key]));
}
