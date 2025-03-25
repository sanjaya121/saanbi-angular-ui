import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-view-child',
  standalone: true,
  imports: [],
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.scss'
})
export class ViewChildComponent implements OnInit {

  @ViewChild(ChildComponent) viewChild: ChildComponent;

  ngOnInit(): void {
    console.log("View Child", this.viewChild)
  }
  ngAfterViewInit() {
    console.log("View Child ngAfterViewInit", this.viewChild)
  }

}
