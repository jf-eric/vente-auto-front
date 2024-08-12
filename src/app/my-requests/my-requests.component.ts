import { Component, OnInit } from '@angular/core';
import {Section} from '../my-offers/my-offers.component';
export interface Section {
    name: string;
    updated: Date;
}
@Component({
  selector: 'app-my-requests',
  templateUrl: './my-requests.component.html',
  styleUrls: ['./my-requests.component.css']
})
export class MyRequestsComponent implements OnInit {
    folders: Section[] = [
        {
            name: 'Demande',
            updated: new Date('1/1/16'),
        },
    ]
  constructor() { }

  ngOnInit() {
  }

}
