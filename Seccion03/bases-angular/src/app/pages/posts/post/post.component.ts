import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  // Recibida del padre
  @Input() mensaje;
  // Envia el evento al padre
  @Output() clickPost = new EventEmitter<number>(); //vamos a emitir un numero

  constructor() {}

  ngOnInit(): void {}

  // tslint:disable-next-line: typedef
  onClick() {
    this.clickPost.emit(this.mensaje.id); //emite el evento del hijo al padre.
    //console.log(this.mensaje.id);
  }
}
