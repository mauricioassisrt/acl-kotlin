import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PapelListaComponent } from './papel-lista.component';

describe('PapelListaComponent', () => {
  let component: PapelListaComponent;
  let fixture: ComponentFixture<PapelListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PapelListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PapelListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
