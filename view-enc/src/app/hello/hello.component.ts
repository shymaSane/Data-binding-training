import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef  } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HelloComponent implements OnInit {

  message: string = "heyy im here again"
  isDisabled: boolean = false;
  @ViewChild('localReference') localReference: ElementRef;

  onClick(value: HTMLInputElement){
    console.log(this.localReference.nativeElement.value)
  this.isDisabled = true;
  }

  constructor() { }

  ngOnInit() {
  }

}
