import { Component } from '@angular/core';
import { SplashScreen } from '@capacitor/core';
import { Platform } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Componente } from './interfaces/interfaces';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  componentes: Observable<Componente[]>;

  // ngOnInit() {
  //   this.componentes = this.dataService.getMenuOpts();
  // }

  constructor(private dataService: DataService) {
    this.initializeApp();
  }

  initializeApp() {
    this.componentes = this.dataService.getMenuOpts();
  }
}
