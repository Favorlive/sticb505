import { Component, OnInit } from '@angular/core';
import { Camp } from 'src/app/models/Camp';
import { CampDataService } from 'src/app/services/CampDataService';



@Component({
  selector: 'app-declaration-camp',
  templateUrl: './declaration-camp.component.html',
  styleUrls: ['./declaration-camp.component.scss']
})

export class DeclarationCampComponent implements OnInit {

  newCamp: Camp;

  constructor(private camp: CampDataService) { }

  ngOnInit(): void {
    
  }
  
}
