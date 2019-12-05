import { Component, OnInit,Input } from '@angular/core';
import {FormControl, FormGroup,AbstractControl,FormBuilder,Validators} from '@angular/forms';
import {NgbdModalContent} from '../modal/modal.component';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { ProductDataService } from "../product-data.service";


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
parentCurrentRate = 8;
productQuantity = [1, 2, 3,4,6,7,8,9,10];
public cardobj;
private sub:any;
private cartvalue:number;
form = new FormGroup({
    quantity: new FormControl(this.productQuantity[3]),
  });
  constructor(private modalService: NgbModal,private route: ActivatedRoute,private global:ProductDataService) { }

  ngOnInit() {
   //this.global.cartData=0;
   this.cartvalue=1;
  let card;
   this.sub = this.route.params.subscribe(params => {
       card = params; // (+) converts string 'id' to a number
        this.cardobj=card;
       // In a real app: dispatch action to load the details here.
    });
  }
  addToCart(){
 // alert("dialog");
       this.global.cartData= this.global.cartData+this.cartvalue;
     const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'World';
  }

}
