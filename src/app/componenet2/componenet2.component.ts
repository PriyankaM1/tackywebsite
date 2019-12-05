import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import 'simplebar'; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import 'simplebar/dist/simplebar.css';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-componenet2',
  templateUrl: './componenet2.component.html',
  styleUrls: ['./componenet2.component.css']
})
export class Componenet2Component implements OnInit {
   @ViewChild('santa', {static: false}) Santa: ElementRef;
   @ViewChild('ball', {static: false}) ball: ElementRef;
   @ViewChild('ballbtn', {static: false}) ballbtn: ElementRef;
   @ViewChild('ballbtninfo', {static: false}) ballbtninfo: ElementRef;
   @ViewChild('ballmsg', {static: false}) ballmsg: ElementRef;
   @ViewChild('shoes', {static: false}) shoes: ElementRef;
   @ViewChild('shoebtn', {static: false}) shoebtn: ElementRef;
   @ViewChild('shoebtninfo', {static: false}) shoebtninfo: ElementRef;
   @ViewChild('shoemsg', {static: false}) shoemsg: ElementRef;
   @ViewChild('dress', {static: false}) dress: ElementRef;
   @ViewChild('dressbtn', {static: false}) dressbtn: ElementRef;
   @ViewChild('dressbtninfo', {static: false}) dressbtninfo: ElementRef;
   @ViewChild('dressmsg', {static: false}) dressmsg: ElementRef;
    @ViewChild('makeupkit', {static: false}) makeupkit: ElementRef;
   @ViewChild('makeupkitbtn', {static: false}) makeupkitbtn: ElementRef;
   @ViewChild('makeupkitbtninfo', {static: false}) makeupkitbtninfo: ElementRef;
   @ViewChild('makeupkitmsg', {static: false}) makeupkitmsg: ElementRef;
    @ViewChild('toys', {static: false}) toys: ElementRef;
   @ViewChild('toysbtn', {static: false}) toysbtn: ElementRef;
   @ViewChild('toysbtninfo', {static: false}) toysbtninfo: ElementRef;
   @ViewChild('toysmsg', {static: false}) toysmsg: ElementRef;
    @ViewChild('choclates', {static: false}) choclates: ElementRef;
   @ViewChild('choclatesbtn', {static: false}) choclatesbtn: ElementRef;
   @ViewChild('choclatesbtninfo', {static: false}) choclatesbtninfo: ElementRef;
   @ViewChild('choclatesmsg', {static: false}) choclatesmsg: ElementRef;
    @ViewChild('myAudio', {static: false}) myAudio: ElementRef;

  constructor(private router:Router) { }

  ngOnInit() {
  document.getElementById('matclass').style.width="4098px";
  document.getElementById('myCart').style.display="none";
  //document.querySelector('.comp').style.border = '150px solid green';
   // this.nameInputRef.nativeElement.style.border = '150px solid green';
    window.addEventListener('scroll', this.scrollEvent, true);
    window.addEventListener("keydown", this.keydown, true);
    let x = <HTMLVideoElement>document.getElementById("mainaudio"); 
  x.play(); 
  }
  ngOnDestroy() {
    window.removeEventListener('scroll', this.scrollEvent, true);
  }

   playAudio() { 
let x = <HTMLVideoElement>document.getElementById("myAudio"); 
  x.play(); 
} 
 pauseAudio() { 
 let x = <HTMLVideoElement>document.getElementById("myAudio");
x.pause(); 
} 
 timer = null;
/*handling the scroll event*/
keydown = (event: any): void => {
//alert("keyup");
if(event.code=="ArrowDown")
 event.preventDefault();

  }
  scrollEvent = (event: any): void => {
    //const number = event.srcElement.scrollTop;
   // alert("scroll");
    let x = <HTMLVideoElement>document.getElementById("mainaudio");
x.pause(); 
    let trainPosition = window.pageXOffset;
    // $('.santa').css('transform','translateX('+(trainPosition)+'px)');

     this.Santa.nativeElement.style.transform = 'translateX('+(trainPosition)+'px)';

	this.Santa.nativeElement.getBoundingClientRect().x=trainPosition;
	
   this.playAudio();
	if(this.timer !== null) {
       // clearTimeout(timer);        
    }

     setTimeout(()=>{    
     let x = <HTMLVideoElement>document.getElementById("myAudio");
 x.pause(); 
 }, 150);

  
  }
  /*ballMovement function*/
  ballMovement(){

    this.ball.nativeElement.style.WebkitAnimationPlayState = "paused";
      this.ball.nativeElement.style.transition = "4s";
       let santaLeft=this.Santa.nativeElement.getBoundingClientRect().x;
         let buttonLeft = this.ballbtn.nativeElement.getBoundingClientRect().x;
          let buttonMaxRange=buttonLeft+200;
            if(santaLeft<buttonLeft){
	   //this.ball.nativeElement.style.transform='translate(-300px,30px)';
   } else if(santaLeft<buttonMaxRange){
	   /***transform right**/
	   //alert("transform right");
	   //this.ball.nativeElement.style.transform='translate(300px,50px)';
	   
   } else {
	   alert("you have exceeded the range of the gift position, Please move backward");
   }
      this.ballbtn.nativeElement.style.display='none';
      this.ballmsg.nativeElement.style.display='block';
       this.ball.nativeElement.style.display='none';
     // this.ballbtninfo.nativeElement.style.display='block';
      setTimeout(()=>{    
       //this.ball.nativeElement.style.display='none';
           this.ballmsg.nativeElement.style.display='none';
 }, 1800 );
         
  }

  showballmsg(info){
   if(info=='true'){
     this.ballmsg.nativeElement.style.display='block';
   }else{
    this.ballmsg.nativeElement.style.display='none';
   }
  }
/***end of ball functions***/
/*shoeMovement function*/
  shoeMovement(){
    this.shoes.nativeElement.style.WebkitAnimationPlayState = "paused";
      this.shoes.nativeElement.style.transition = "4s";
       let santaLeft=window.pageXOffset;
         let buttonLeft = this.shoebtn.nativeElement.getBoundingClientRect().x +1366;
          let buttonMaxRange=buttonLeft+200;
            if(santaLeft<buttonLeft){
	  // this.shoes.nativeElement.style.transform='translate(-300px,80px)';
   } else if(santaLeft<buttonMaxRange){
	   /***transform right**/
	   //alert("transform right");
	   //this.shoes.nativeElement.style.transform='translate(200px,50px)';
	   
   } else {
	   alert("you have exceeded the range of the gift position, Please move backward");
   }
      this.shoebtn.nativeElement.style.display='none';
      this.shoemsg.nativeElement.style.display='block';
     // this.shoebtninfo.nativeElement.style.display='block';
     this.shoes.nativeElement.style.display='none';
      setTimeout(()=>{    
       //this.shoes.nativeElement.style.display='none';
           this.shoemsg.nativeElement.style.display='none';
 }, 1800 );
         
  }

  showshoemsg(info){
   if(info=='true'){
     this.shoemsg.nativeElement.style.display='block';
   }else{
    this.shoemsg.nativeElement.style.display='none';
   }
  }
/***end of shoes functions***/
/*dressMovement function*/
  dressMovement(){
    this.dress.nativeElement.style.WebkitAnimationPlayState = "paused";
      this.dress.nativeElement.style.transition = "4s";
       let santaLeft=window.pageXOffset;
         let buttonLeft = this.dressbtn.nativeElement.getBoundingClientRect().x +1366;
          let buttonMaxRange=buttonLeft+200;
            if(santaLeft<buttonLeft){
	   //this.dress.nativeElement.style.transform='translate(-425px,193px)';
   } else {
	   /***transform right**/
	   //alert("transform right");
	   //this.dress.nativeElement.style.transform='translate(225px,112px)';
	   
   } 
      this.dressbtn.nativeElement.style.display='none';
      this.dressmsg.nativeElement.style.display='block';
     // this.dressbtninfo.nativeElement.style.display='block';
     this.dress.nativeElement.style.display='none';
      setTimeout(()=>{    
       //this.dress.nativeElement.style.display='none';
           this.dressmsg.nativeElement.style.display='none';
 }, 1800 );
         
  }

  showdressmsg(info){
   if(info=='true'){
     this.dressmsg.nativeElement.style.display='block';
   }else{
    this.dressmsg.nativeElement.style.display='none';
   }
  }
/***end of dress functions***/
/*makeupMovement function*/
  makeupMovement(){
    this.makeupkit.nativeElement.style.WebkitAnimationPlayState = "paused";
      this.makeupkit.nativeElement.style.transition = "4s";
       let santaLeft=window.pageXOffset;
         let buttonLeft = this.makeupkitbtn.nativeElement.getBoundingClientRect().x +1366;
          let buttonMaxRange=buttonLeft+200;
            if(santaLeft<buttonLeft){
	   //this.makeupkit.nativeElement.style.transform='translate(-645px, 534px)';
   } else {
	   /***transform right**/
	   //alert("transform right");
	  // this.makeupkit.nativeElement.style.transform='translate(654px,365px)';
	   
   }   this.makeupkitbtn.nativeElement.style.display='none';
      this.makeupkitmsg.nativeElement.style.display='block';
      this.makeupkit.nativeElement.style.display='none';
      //this.makeupkitbtninfo.nativeElement.style.display='block';
      setTimeout(()=>{    
       //this.makeupkit.nativeElement.style.display='none';
           this.makeupkitmsg.nativeElement.style.display='none';
 }, 1800 );
         
  }

  showmakeupmsg(info){
   if(info=='true'){
     this.makeupkitmsg.nativeElement.style.display='block';
   }else{
    this.makeupkitmsg.nativeElement.style.display='none';
   }
  }
/***end of makeup functions***/
/**toymovement*/
 toysMovement(){
    this.toys.nativeElement.style.WebkitAnimationPlayState = "paused";
      this.toys.nativeElement.style.transition = "4s";
       let santaLeft=window.pageXOffset;
         let buttonLeft = this.toysbtn.nativeElement.getBoundingClientRect().x +1366+1366;
          let buttonMaxRange=buttonLeft+200;
            if(santaLeft<buttonLeft){
	   //this.toys.nativeElement.style.transform='translate(-200px,190px)';
   } else {
	   /***transform right**/
	   //alert("transform right");
	   //this.toys.nativeElement.style.transform='translate(150px,195px)';
	   
   }   this.toysbtn.nativeElement.style.display='none';
      this.toysmsg.nativeElement.style.display='block';
      this.toys.nativeElement.style.display='none';
      //this.toysbtninfo.nativeElement.style.display='block';
      setTimeout(()=>{    
      // this.toys.nativeElement.style.display='none';
           this.toysmsg.nativeElement.style.display='none';
 }, 1800 );
         
  }

  showtoymsg(info){
   if(info=='true'){
     this.toysmsg.nativeElement.style.display='block';
   }else{
    this.toysmsg.nativeElement.style.display='none';
   }
  }
/***end of toy functions***/
/**choclate*/
 choclatesMovement(){
    this.choclates.nativeElement.style.WebkitAnimationPlayState = "paused";
      this.choclates.nativeElement.style.transition = "4s";
       let santaLeft=window.pageXOffset;
         let buttonLeft = this.choclatesbtn.nativeElement.getBoundingClientRect().x +1366+1366;
          let buttonMaxRange=buttonLeft+200;
          // this.choclates.nativeElement.style.transform='translate(-700px, 300px)';
            this.choclatesbtn.nativeElement.style.display='none';
      this.choclatesmsg.nativeElement.style.display='block';
      this.choclates.nativeElement.style.display='none';
      //this.choclatesbtninfo.nativeElement.style.display='block';
      setTimeout(()=>{    
      // this.choclates.nativeElement.style.display='none';
           this.choclatesmsg.nativeElement.style.display='none';
 }, 1800 );
         
  }

  showchoclatemsg(info){
   if(info=='true'){
     this.choclatesmsg.nativeElement.style.display='block';
   }else{
    this.choclatesmsg.nativeElement.style.display='none';
   }
  }
/***end of choclatefunctions***/

/**exit function**/

exit(){
     document.getElementById('myCart').style.display="block";
     document.getElementById('matclass').style.width="1366px";
      this.router.navigate(['/first']);  
  }


}

