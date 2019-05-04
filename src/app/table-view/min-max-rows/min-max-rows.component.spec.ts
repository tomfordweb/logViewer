import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinMaxRowsComponent } from './min-max-rows.component';

describe('MinMaxRowsComponent', () => {
  let component: MinMaxRowsComponent;
  let fixture: ComponentFixture<MinMaxRowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinMaxRowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinMaxRowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
