import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerInfoService {

  constructor() { }

  public data=[
    {
      id: 1,
      Name: 'Annan',
      Wins: 3,
      Losses: 18,
      DNP: 3,
      Matches: 24,
      MoneySpent: 240,
      MoneyWon: 87,
      HighestPoint: 715.5,
      LowestPoint:304
    },
    {
      id: 2,
      Name: 'Rashi',
      Wins: 8,
      Losses: 16,
      DNP: 0,
      Matches: 24,
      MoneySpent: 240,
      MoneyWon: 232,
      HighestPoint: 719.5,
      LowestPoint:312
    },
    {
      id: 3,
      Name: 'Appunni',
      Wins: 13,
      Losses: 11,
      DNP: 0,
      Matches: 24,
      MoneySpent: 240,
      MoneyWon: 377,
      HighestPoint: 826,
      LowestPoint:339.5
    }
  ];

  public returnOriginalData():any{
    return this.data;
  }

  public returnSelectedData(id:number):any{
    let finalData = {};
    this.data.forEach((value:any) =>{
      if(value.id == id){
        finalData = this.data[id-1];
      }
    });
    return finalData;
  }
}
