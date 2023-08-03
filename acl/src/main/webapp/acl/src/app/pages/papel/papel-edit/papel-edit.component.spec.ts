import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PapelEditComponent } from './papel-edit.component';

describe('PapelEditComponent', () => {
  let component: PapelEditComponent;
  let fixture: ComponentFixture<PapelEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PapelEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PapelEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
