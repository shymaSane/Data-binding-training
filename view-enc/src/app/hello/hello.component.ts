import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  message: string = "heyy im here again"
  isDisabled: boolean = false;

  onClick(){
  this.isDisabled = true;
  }

  constructor() { }

  ngOnInit() {
  }

}
