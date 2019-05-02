import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatmapCellComponent } from './heatmap-cell.component';

describe('HeatmapCellComponent', () => {
  let component: HeatmapCellComponent;
  let fixture: ComponentFixture<HeatmapCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeatmapCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeatmapCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
