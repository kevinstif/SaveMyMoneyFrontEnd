import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDistributionComponent } from './add-distribution.component';

describe('AddDistributionComponent', () => {
  let component: AddDistributionComponent;
  let fixture: ComponentFixture<AddDistributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDistributionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
