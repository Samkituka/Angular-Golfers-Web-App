import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GolfersAddEditComponent } from './golfers-add-edit.component';

describe('GolfersAddEditComponent', () => {
  let component: GolfersAddEditComponent;
  let fixture: ComponentFixture<GolfersAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GolfersAddEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GolfersAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
