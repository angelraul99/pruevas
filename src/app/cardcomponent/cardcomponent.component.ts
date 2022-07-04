import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardcomponent',
  templateUrl: './cardcomponent.component.html',
  styleUrls: ['./cardcomponent.component.css']
})
export class CardcomponentComponent implements OnInit {
  @Input()
  cardTitle: string = "1";
  @Input()
  descripcion: string ="2";
  @Input()
  boton: string ="3";
  @Input()
  imagn: String="" ;
  constructor() { }

  ngOnInit(): void {

  }

}
