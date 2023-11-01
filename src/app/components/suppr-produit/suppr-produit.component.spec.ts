import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprProduitComponent } from './suppr-produit.component';

describe('SupprProduitComponent', () => {
  let component: SupprProduitComponent;
  let fixture: ComponentFixture<SupprProduitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupprProduitComponent]
    });
    fixture = TestBed.createComponent(SupprProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
