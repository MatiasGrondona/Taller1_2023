import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyProductoComponent } from './body-producto.component';

describe('BodyProductoComponent', () => {
  let component: BodyProductoComponent;
  let fixture: ComponentFixture<BodyProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyProductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
