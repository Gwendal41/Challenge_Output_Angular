import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-onomatopia-component',
  templateUrl: './create-onomatopia-component.component.html',
  styleUrls: ['./create-onomatopia-component.component.scss']
})
export class CreateOnomatopiaComponentComponent implements OnInit {
   newOnomatopia: string ='';

  @Output() 
  sendOnomatopiaToParent: EventEmitter<string> = new EventEmitter();

  constructor() { }

  createOnomatopia(): void{
    this.sendOnomatopiaToParent.emit(this.newOnomatopia);
  }

  ngOnInit(): void {
  }
  
}
