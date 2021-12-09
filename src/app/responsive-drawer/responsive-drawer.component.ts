import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';

/** @title Responsive sidenav */
@Component({
    selector: 'app-responsive-drawer',
    templateUrl: 'responsive-drawer.component.html',
    styleUrls: ['./responsive-drawer.component.scss'],
})
export class ResponsiveDrawerComponent implements OnDestroy {
    mobileQuery: MediaQueryList;

    fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);

    private _mobileQueryListener: () => void;

    constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }

    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
}
