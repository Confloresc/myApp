import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { CursosPage } from './cursos.page';

describe('CursosPage', () => {
  let component: CursosPage;
  let fixture: ComponentFixture<CursosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CursosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
