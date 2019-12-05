import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router'; 
@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Priyanka!</h4>
      <!--<button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>-->
    </div>
    <div class="modal-body">
      <div style="background-color: #03484C;height:100px;width:100px;border-radius:50px;"><i class="fa fa-check" aria-hidden="true"></i></div>
      <h4>Gift is successfully added to Cart</h4>
       <button class="expand" id="a2c" type="submit" (click)="firstComponent()">Keep Shopping</button>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `,
   styleUrls: ['./modal.component.css'],
})
export class NgbdModalContent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal,private router:Router) {}
  firstComponent(){
   let comp='modal'
   this.router.navigate(['/first',{comp:comp}]); 
   
     this.activeModal.close();
  }
}

@Component({
  selector: 'ngbd-modal-component',
  templateUrl: './modal.component.html'
})
export class NgbdModalComponent {
  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'World';
  }
  
}
