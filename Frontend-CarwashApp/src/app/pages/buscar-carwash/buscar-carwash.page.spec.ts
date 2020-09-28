import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BuscarCarwashPage } from './buscar-carwash.page';

describe('BuscarCarwashPage', () => {
  let component: BuscarCarwashPage;
  let fixture: ComponentFixture<BuscarCarwashPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarCarwashPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BuscarCarwashPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
