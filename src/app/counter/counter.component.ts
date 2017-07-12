import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {



  @Input() counter;
  public counterValue=this.counter;
  constructor(){
    this.counterValue=1;

  }

  @Input()
  set counterSetter(value){
    this.counter=value;
    this.counterValue=this.counter;
    //this.counterValue=value;
  }

  // get getValueGetter(){
  //   return this.counterValue;
  // }

  increment(){

    this.counterValue = parseInt("" + this.counterValue) + 1;

  return false;
   /// return false;
  }
  decrement(){
    this.counterValue =parseInt(this.counterValue+"")-1;
    //return false;
  }

  ngOnInit() {
  }

}
