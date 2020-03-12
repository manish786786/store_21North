import { Component, OnInit } from '@angular/core';
import { SharedserviceService } from '../sharedservice.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  data: object;

  constructor(private _commonService: SharedserviceService) { }

  ngOnInit(): void {
    this.data = this._commonService.getValue();
  }

}
