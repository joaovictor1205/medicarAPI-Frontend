import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCriarConsultaComponent } from './page-criar-consulta.component';

describe('PageCriarConsultaComponent', () => {
  let component: PageCriarConsultaComponent;
  let fixture: ComponentFixture<PageCriarConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCriarConsultaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCriarConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
