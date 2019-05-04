import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphsListComponent } from './graphs-list.component';

describe('GraphsListComponent', () => {
  let component: GraphsListComponent;
  let fixture: ComponentFixture<GraphsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
