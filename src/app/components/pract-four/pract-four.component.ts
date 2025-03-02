import { Component, EventEmitter, Output } from "@angular/core";
import { MinorUser } from "../../models/minorUser";

@Component({
  selector: "app-pract-four",
  standalone: true,
  imports: [],
  templateUrl: "./pract-four.component.html",
  styleUrl: "./pract-four.component.css",
})
export class PractFourComponent {
  @Output() minorUserObj = new EventEmitter<MinorUser>();

  passMinorUserObjectToParent() {
    const minorUser: MinorUser = {
      name: "Burhan Ameen",
      assetAmount: 5000,
    };

    this.minorUserObj.emit(minorUser);
  }
}
