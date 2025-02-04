import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularLhcFormsComponent } from './angular-lhc-forms.component';

describe('AngularLhcFormsComponent', () => {
  let component: AngularLhcFormsComponent;
  let fixture: ComponentFixture<AngularLhcFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularLhcFormsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularLhcFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
