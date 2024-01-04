import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersSheetsComponent } from './users-sheets.component';

describe('UsersSheetsComponent', () => {
  let component: UsersSheetsComponent;
  let fixture: ComponentFixture<UsersSheetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersSheetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersSheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
