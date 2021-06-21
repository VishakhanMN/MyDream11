import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PlayerInfoService } from 'src/app/services/player-info.service';


@Component({
  selector: 'app-details-popup',
  templateUrl: './details-popup.component.html',
  styleUrls: ['./details-popup.component.scss']
})
export class DetailsPopupComponent implements OnInit {

  public getSelectedProfile: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private playerInfoService: PlayerInfoService
  ) { }

  ngOnInit(): void {
    this.setValues(this.data);
  }

  private setValues(value: any): void {
    this.getSelectedProfile =  this.playerInfoService.returnSelectedData(value.id);
  }



}
