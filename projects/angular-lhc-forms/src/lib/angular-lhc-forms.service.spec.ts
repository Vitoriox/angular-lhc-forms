import { TestBed } from '@angular/core/testing';

import { AngularLhcFormsService } from './angular-lhc-forms.service';

describe('AngularLhcFormsService', () => {
  let service: AngularLhcFormsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularLhcFormsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
