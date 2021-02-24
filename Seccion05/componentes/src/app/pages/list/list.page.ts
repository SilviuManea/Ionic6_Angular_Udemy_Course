import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  usuarios: Observable<any>;

  // inyectamos el servicio en el constructor.
  constructor(private dataService: DataService) {}

  // nos traemos los usuarios y los guardamos en la variable
  ngOnInit() {
    this.usuarios = this.dataService.getUsuarios();
  }
}
