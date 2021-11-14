import { Component, OnInit } from '@angular/core';
import {Place} from '../model/Place';
import {PlacesService} from '../service/places.service';


@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {

  places: Place[];

  constructor(placesService: PlacesService) {
    this.places = placesService.getPlaces();
  }

  ngOnInit(): void {
  }

}
