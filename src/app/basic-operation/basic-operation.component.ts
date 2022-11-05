import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-operation',
  templateUrl: './basic-operation.component.html',
  styleUrls: ['./basic-operation.component.css']
})
export class BasicOperationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  num1: number = 657;
  name: string = "Hello Angular!!!";
  dob: Date = new Date();

  array1 = [1, 2, 3, 4, 5];
  selectedItem: any;

}
