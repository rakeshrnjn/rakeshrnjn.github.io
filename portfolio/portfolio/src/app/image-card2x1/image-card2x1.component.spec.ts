import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCard2x1Component } from './image-card2x1.component';

describe('ImageCard2x1Component', () => {
  let component: ImageCard2x1Component;
  let fixture: ComponentFixture<ImageCard2x1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageCard2x1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageCard2x1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
