import { Component, OnInit } from '@angular/core';
import { cardmodel } from 'src/app/models/cardmodel';

@Component({
  selector: 'app-card-register',
  templateUrl: './card-register.component.html',
  styleUrls: ['./card-register.component.css']
})
export class CardRegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


card: cardmodel= new cardmodel();
datacard: cardmodel[]= [
  {
    cardtitul :"TITULO 1",
    descri: "descripcion",
    boton: "1",
    il: "https://images8.alphacoders.com/104/1042296.jpg"
  },
  {
    cardtitul :"TITULO2",
    descri: "descripcion2",
    boton: "2",
    il: "https://images6.alphacoders.com/470/470300.jpg"
  },
  {
    cardtitul :"TITULO3",
    descri: "descripcion3",
    boton: "3",
    il: "https://images5.alphacoders.com/518/518518.jpg"
  },
  {
    cardtitul :"TITULO4",
    descri: "descripcion4",
    boton: "4",
    il: "https://images2.alphacoders.com/902/902988.jpg"
  }
]

addcard(){
  console.log(this.card);
  this.datacard.push(this.card)
}
}

