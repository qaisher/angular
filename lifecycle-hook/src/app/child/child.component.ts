import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {

  constructor() { 
    console.log(`constructor executed`);
  }

  ngOnInit(): void {
    console.log(`onInit executed`);
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    {
      console.log('ngOnChanges called');
    }
  }

}
