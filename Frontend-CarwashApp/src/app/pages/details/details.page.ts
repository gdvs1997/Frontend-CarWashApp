import { Component, OnInit } from '@angular/core';

declare var google;

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  opcion: number = 0;

  constructor() { }

  ngOnInit() { 
  }
}
