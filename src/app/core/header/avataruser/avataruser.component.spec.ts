import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AvataruserComponent } from './avataruser.component';

describe('AvataruserComponent', () => {
  let component: AvataruserComponent;
  let fixture: ComponentFixture<AvataruserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvataruserComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AvataruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
