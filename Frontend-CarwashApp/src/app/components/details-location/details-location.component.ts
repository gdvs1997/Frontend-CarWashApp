import { Component, OnInit } from '@angular/core';

declare var google;

@Component({
  selector: 'app-details-location',
  templateUrl: './details-location.component.html',
  styleUrls: ['./details-location.component.scss'],
})
export class DetailsLocationComponent implements OnInit {

  map = null;

  constructor() { }

  ngOnInit() {
    this.loadMap();
  }

  loadMap() {
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map');
    // create LatLng object
    const myLatLng = {lat: 4.658383846282959, lng: -74.09394073486328};
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });
  
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      //this.renderMarkers();
      mapEle.classList.add('show-map');
    });
  }

}
