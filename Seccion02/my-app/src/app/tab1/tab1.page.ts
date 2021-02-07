import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  constructor() {}
  ngOnInit(): void {
    let numero = 0;

    numero = 1;
    // tslint:disable-next-line: no-debugger
    debugger;
    numero = 3;

    console.log(numero);
  }
}
