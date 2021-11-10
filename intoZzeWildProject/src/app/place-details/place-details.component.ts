import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PopUpImgComponent } from '../pop-up-img/pop-up-img.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  image: string;
}


@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.css']
})
export class PlaceDetailsComponent implements OnInit {

  public id: number;
  difficulty: number;
  image: string;

  constructor(private route: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.difficulty = 0;
    this.image = "assets/default-image.jpeg"; 
  }

  openDialog() {
    const dialogRef = this.dialog.open(PopUpImgComponent, {
      width: '400px',
      height: '400px',
      data: {image: this.image}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
