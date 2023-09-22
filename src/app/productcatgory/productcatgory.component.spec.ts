import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductcatgoryComponent } from './productcatgory.component';

describe('ProductcatgoryComponent', () => {
  let component: ProductcatgoryComponent;
  let fixture: ComponentFixture<ProductcatgoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductcatgoryComponent]
    });
    fixture = TestBed.createComponent(ProductcatgoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
