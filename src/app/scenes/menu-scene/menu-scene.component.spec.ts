import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSceneComponent } from './menu-scene.component';

describe('MenuSceneComponent', () => {
  let component: MenuSceneComponent;
  let fixture: ComponentFixture<MenuSceneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuSceneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
