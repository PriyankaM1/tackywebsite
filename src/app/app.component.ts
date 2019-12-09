import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { ProductDataService } from "./product-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',]
})
export class AppComponent {
  title = 'tacky-website';
  navLinks: any[];
  activeLinkIndex = -1; 
  show:boolean=true;
  constructor(private router: Router,private global:ProductDataService) {
    this.navLinks = [
        {
            label: 'Celeberate Christmas',
            link: './first',
            index: 0
        }, {
            label: 'Journey of Santa',
            link: './second',
            index: 1
        }
    ];
}
ngOnInit(): void {
//this.global.cartData=0;

  this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
  });
}

openCart(){
  this.show=true;
  this.showdiv=true;
	document.getElementById("myModal").style.display="block";
}
checkOut(){
	document.getElementById("myModal").style.display="none";
  this.global.cartData=0;
	 this.router.navigate(['/first']); 
}
}