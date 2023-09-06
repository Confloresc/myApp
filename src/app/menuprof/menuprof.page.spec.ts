import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuprofPage } from './menuprof.page';

describe('MenuprofPage', () => {
  let component: MenuprofPage;
  let fixture: ComponentFixture<MenuprofPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MenuprofPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
