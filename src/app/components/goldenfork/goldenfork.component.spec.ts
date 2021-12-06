import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldenforkComponent } from './goldenfork.component';

describe('GoldenforkComponent', () => {
  let component: GoldenforkComponent;
  let fixture: ComponentFixture<GoldenforkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoldenforkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldenforkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
