import { Component } from '@angular/core';
import { EmulatedComponent } from "../../common/viewencapsulation/emulated/emulated.component";
import { ShadowDomComponent } from "../../common/viewencapsulation/shadow-dom/shadow-dom.component";
import { NoEncapsulationComponent } from '../../common/viewencapsulation/no-encapsulation/no-encapsulation.component';

@Component({
  selector: 'app-encapsulation',
  standalone: true,
  imports: [EmulatedComponent,ShadowDomComponent,NoEncapsulationComponent],
  templateUrl: './encapsulation.component.html',
  styleUrl: './encapsulation.component.scss'
})
export class EncapsulationComponent {

}
