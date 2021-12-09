import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalogDisplayComponent } from './analog-display.component';

describe('AnalogDisplayComponent', () => {
    let component: AnalogDisplayComponent;
    let fixture: ComponentFixture<AnalogDisplayComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AnalogDisplayComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AnalogDisplayComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
