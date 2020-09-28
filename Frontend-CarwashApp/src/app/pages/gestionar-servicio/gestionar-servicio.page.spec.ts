import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GestionarServicioPage } from './gestionar-servicio.page';

describe('GestionarServicioPage', () => {
  let component: GestionarServicioPage;
  let fixture: ComponentFixture<GestionarServicioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionarServicioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GestionarServicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
