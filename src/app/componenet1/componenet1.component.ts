import { Component, OnInit } from '@angular/core';
import { CarousalComponent } from '../carousal/carousal.component';
import  { Card } from '../card';
import { CardService } from '../card.service';
import { Http } from '@angular/http';
import { Router ,ActivatedRoute} from '@angular/router';  
@Component({
  selector: 'app-componenet1',
  templateUrl: './componenet1.component.html',
  styleUrls: ['./componenet1.component.css'],
  providers: [CardService]
})
export class Componenet1Component implements OnInit {
   parentCurrentRate = 8;
   cards:Card[];
   comp:any;
  constructor(private cardsService: CardService,private router:Router,private actiroute: ActivatedRoute) {
     
   }

  ngOnInit() {
  this.comp = this.actiroute.params.subscribe(params => {
       this.comp = params.comp;
      
       if(this.comp=='modal') {
       //alert("enter")
          setTimeout(function() {
        const element = document.querySelector("#giftCard")
if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start',inline: "nearest" });

    }, 1000);

       }else{

       }
      
    });
    document.getElementById('matclass').style.width="1366px";
    document.getElementById('myCart').style.display="block";

  this.getCards();
  
  let x = <HTMLAudioElement>document.getElementById("mainAudio"); 
  x.play(); 
  }
  getCards(): void {
    this.cardsService.getCards().subscribe( data => {
      this.cards = data,console.table( this.cards);

    });
      
  }
  getProductDetail(id:any){
   // alert(id);
      // console.log(id);
      let x = <HTMLVideoElement>document.getElementById("mainAudio");
x.pause(); 
      let cardobj=this.cards[id];

      this.router.navigate(['/product', cardobj]);  
  }

}


