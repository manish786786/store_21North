import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SharedserviceService } from '../sharedservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  data: Array<{ brandName: string, isInCart: boolean, details: string, overView: string }> = [{ brandName: "ARMANI", isInCart: false, details: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto", overView: "get it now for free" },
  { brandName: "PRADA", isInCart: false, details: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto", overView: "get it now for free" },
  { brandName: "HARMON", isInCart: false, details: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto", overView: "get it now for free" },
  { brandName: "PUMA", isInCart: false, details: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto", overView: "get it now for free" },
  { brandName: "NIKE", isInCart: false, details: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto", overView: "get it now for free" },
  { brandName: "GUCCI", isInCart: false, details: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto", overView: "get it now for free" },
  { brandName: "LOUIS VUITTON", isInCart: false, details: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto", overView: "get it now for free" }]


  constructor( private _router: Router,private _commonService: SharedserviceService,) { }

  ngOnInit(): void {
    $("#b1").hover(function () {
      $('#myModal').model({
          show: true,
          backdrop: false
      })
  });
  }

  
  goToDetails(data) {
    this._commonService.setValue(data);
    this._router.navigate(['details']);
  }
}
