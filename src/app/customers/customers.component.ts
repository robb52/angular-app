import { Component, OnInit } from '@angular/core';

@Component ({
  selector: 'app-customers',
  templateUrl: './customers.component.html'
})
export class CustomersComponent implements OnInit {
  title: string;
  people: any[];

  constructor() {}

  ngOnInit() {
      this.title = 'Customer';
      this.people = [
          { id: 1, name: 'John Doe', city: 'Phoenix', orderTotal: 9.99, customerSince: new Date 
          (2014, 7, 10) },
          { id: 2, name: 'Jane Doe', city: 'Los Angeles', orderTotal: 19.99, customerSince: new Date 
          (2017, 5, 1) },
          { id: 3, name: 'Bill Smith', city: 'New York', orderTotal: 99.99, customerSince: new Date 
          (2002, 3, 25) },
          { id: 4, name: 'Jessica Howard', city: 'Seattle', orderTotal: 549.99, customerSince: new Date 
          (2018, 9, 15) },
      ];
  }
}