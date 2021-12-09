import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveDrawerComponent } from './responsive-drawer.component';

describe('ResponsiveDrawerComponent', () => {
    let component: ResponsiveDrawerComponent;
    let fixture: ComponentFixture<ResponsiveDrawerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ResponsiveDrawerComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ResponsiveDrawerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
