import { Component, OnInit } from '@angular/core';
import { Characters } from 'src/app/models/Marvel.model';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-marvel',
  templateUrl: './marvel.component.html',
  styleUrls: ['./marvel.component.css']
})
export class MarvelComponent implements OnInit {

  constructor(private marvelService: MarvelService) { }
  public  marvels: Characters[]=[];

  ngOnInit(): void {
    this.marvelService.getMarvel().subscribe((response: any) => {
      console.log(response.data)
      this.marvels = response.data.results;
    });
  }

}
