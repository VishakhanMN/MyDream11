import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitoutPedaComponent } from './sitout-peda.component';

describe('SitoutPedaComponent', () => {
  let component: SitoutPedaComponent;
  let fixture: ComponentFixture<SitoutPedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitoutPedaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitoutPedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
