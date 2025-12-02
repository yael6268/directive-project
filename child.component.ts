import { NgIf, NgStyle } from '@angular/common';
import { Component, EventEmitter, Input ,Output,input} from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [NgIf,NgStyle],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input() name1 :any;
  @Input() age :any;

  @Input() taskDetails:any;

  @Output() dataSend : EventEmitter<any> = new EventEmitter<any>();


  changeStatus()
  {
    this.dataSend.emit(this.taskDetails);
  }

  second=0;
  interval :any;

  start(){
    // setTimeout(() => {
    //   this.second++;
      
    // }, 1000);
    this.interval = setInterval(() => {
      this.second++;
      
    }, 1000);

  }
  stop(){
    clearInterval(this.interval);
    alert('מספר השניות הוא  -  '  + this.second)
    

  }


}


