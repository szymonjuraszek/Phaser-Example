import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSceneComponent } from './main-scene.component';

describe('MainSceneComponent', () => {
  let component: MainSceneComponent;
  let fixture: ComponentFixture<MainSceneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainSceneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
