import { Component, OnInit } from "@angular/core";
import { UserProfileComponent } from "./components/user-profile/user-profile.component";
import { ChildComponent } from "./components/child/child.component";
import { ChildTwoComponent } from "./components/child-two/child-two.component";
import { NgFor, NgIf } from "@angular/common";
import { PractComponent } from "./components/pract/pract.component";
import { PractTwoComponent } from "./components/pract-two/pract-two.component";
import { User } from "./models/user";
import { MinorUser } from "./models/minorUser";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    NgIf,
    // UserProfileComponent,
    NgFor,
    ChildComponent,
    ChildTwoComponent,
    PractComponent,
    PractTwoComponent,
    UserProfileComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent implements OnInit {
  isShowable = false;
  randomNumbers: number[] = [];
  passedValue = 0;
  passedStringValue = "dummy value";

  parentComponentMethodToHandleChildValue(value: string) {
    console.log(
      "parent component APP_COMPONENT has received value from child component CHILD: " +
        value
    );
  }

  getObjectValueFromChildComponent(eventObjectValue: User) {
    console.log(eventObjectValue); // this is complete User object that is passed
  }

  getValueFromChild(e: string) {
    console.log(e); // * this is the value passed from child to parent
    this.passedStringValue = e;
  }

  receiveNumericVale(e: number) {
    this.passedValue = e;
  }

  ngOnInit(): void {

    // todo : type should be exactly of Minor type variable
    this.minorUsers = [
      {
        name: "User 1",
        assetAmount: 4000,
      },
      {
        name: "User 2",
        assetAmount: 3500,
      },
    ];

    for (let i = 0; i < 10; i++) {
      const randomNum = Math.floor(Math.random() * 100);
      this.randomNumbers.push(randomNum);
    }
  }

  minorUsers: MinorUser[] = [];

  countries = [
    {
      name: "Pakistan",
      amount: 245,
      isEligible: true,
      canDeliverSpeech: false,
      canFly: true,
      canSwim: false,
      characterHeight: 4000,
      population: 231402117,
      isActive: true,
    },
    {
      name: "Malaysia",
      amount: 430,
      isEligible: true,
      canDeliverSpeech: true,
      canFly: false,
      canSwim: true,
      characterHeight: 2800,
      population: 33938221,
      isActive: true,
    },
    {
      name: "Turkey",
      amount: 490,
      isEligible: false,
      canDeliverSpeech: true,
      canFly: false,
      canSwim: true,
      characterHeight: 3500,
      population: 85279553,
      isActive: true,
    },
    {
      name: "Azarbaijan",
      amount: 100,
      isEligible: true,
      canDeliverSpeech: false,
      canFly: true,
      canSwim: false,
      characterHeight: 3200,
      population: 10312992,
      isActive: false,
    },
  ];
}
