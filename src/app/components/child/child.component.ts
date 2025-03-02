import { I18nSelectPipe } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { User } from "../../models/user";

@Component({
  selector: "app-child",
  standalone: true,
  imports: [],
  templateUrl: "./child.component.html",
  styleUrl: "./child.component.css",
})
export class ChildComponent {
  // the prop name actually, the parameter that is being passed from parent to child component

  stringggggg = "pakistan is occupied by western tatttoooooossss";

  @Input() warriorName = "Default Warrior name";

  // todo : this is how pass value to PARENT COMPONENT
  @Output() throwableValue = new EventEmitter();

  throwValueToParent(value: string) {
    this.throwableValue.emit(value);
  }

  // we can specify the type of the variable
  @Output() childValue = new EventEmitter();
  childMethod(value: string) {
    this.childValue.emit(value);
  }

  @Output() passObject = new EventEmitter<User>();

  passObjectToParent() {

    // * Used the whole Interface to make the type completed

    const userObject = {
      name: "Burhan Ameen",
      username: "burhanameen20938470234",
      isEligible: false,
      canSwim: false,
      killsCount: 4000,
      isActive: true,
      isOnline: false,
      canDeliverSpeach: true,
      canFly: true,
      canDriveCar: true,
      assetAmount: 4000,
    };

    this.passObject.emit(userObject);
  }
}
