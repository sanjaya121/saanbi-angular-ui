import { Component, ViewEncapsulation } from '@angular/core';
import { EmulatedComponent } from "./viewencapsulation/emulated/emulated.component";
import { ShadowDomComponent } from "./viewencapsulation/shadow-dom/shadow-dom.component";

@Component({
  selector: 'app-encapsulation',
  standalone: true,
  imports: [EmulatedComponent,ShadowDomComponent],
  templateUrl: './encapsulation.component.html',
  styleUrl: './encapsulation.component.scss',
  encapsulation:ViewEncapsulation.None
})
export class EncapsulationComponent {

}
