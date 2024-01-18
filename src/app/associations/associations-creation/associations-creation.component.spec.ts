import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociationsCreationComponent } from './associations-creation.component';

describe('AssociationsCreationComponent', () => {
  let component: AssociationsCreationComponent;
  let fixture: ComponentFixture<AssociationsCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssociationsCreationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssociationsCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
