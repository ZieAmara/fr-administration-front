import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociationsSheetsComponent } from './associations-sheets.component';

describe('AssociationsSheetsComponent', () => {
  let component: AssociationsSheetsComponent;
  let fixture: ComponentFixture<AssociationsSheetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssociationsSheetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssociationsSheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
