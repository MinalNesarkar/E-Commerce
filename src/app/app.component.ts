import { Component } from '@angular/core';
import { Customer } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'CustomerManagement';

  customerObj: Customer = new Customer();

  customerObjs: Array<Customer> = new Array<Customer>();

  Add() {
    this.customerObjs.push(this.customerObj);
    this.customerObj = new Customer();
  }
  Edit(custEdit: Customer) {
    this.customerObj=custEdit;
    
  }
  
  Update(){
    this.customerObjs[this.customerObjs.indexOf(this.customerObj)]=this.customerObj;
    this.customerObj = new Customer();
    
    
}

}
