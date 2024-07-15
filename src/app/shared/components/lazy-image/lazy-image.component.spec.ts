import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyIamgeComponent } from './lazy-iamge.component';

describe('LazyIamgeComponent', () => {
  let component: LazyIamgeComponent;
  let fixture: ComponentFixture<LazyIamgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LazyIamgeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LazyIamgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
