import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})

export class UserProfileComponent {
  // for interpolation
  name = 'James Harvey';
  rank = 'Serial Donator';
  headBounty = 40_0000;
  randomNumberGenerated = 0;

  placeholderValueText = 'Text coming from component ts file';
  bananaInTheBoxBindingValue =
    'banana in the box placeholder value for shorter way of 2-way-data-binding';

  // for binding (two way binding)
  isButtonDisabled = true;
  users = [
    { id: 1, name: 'burhan ameen', rank: 'ultra', amount: 9000 },
    { id: 2, name: 'azam awan', rank: 'Faragh banda', amount: 2000 },
    { id: 3, name: 'ahmad abdul aleem', rank: 'gamer bacha', amount: 210000 },
    { id: 4, name: 'jawad abdul kareem', rank: 'trader bacha', amount: 120000 },
    { id: 5, name: 'sara ahmed', rank: 'designer queen', amount: 50000 },
    { id: 6, name: 'mohammad ali', rank: 'developer pro', amount: 85000 },
    { id: 7, name: 'nazia khan', rank: 'social butterfly', amount: 15000 },
    { id: 8, name: 'ali zafar', rank: 'musician star', amount: 300000 },
    { id: 9, name: 'farah khan', rank: 'marketer expert', amount: 35000 },
    { id: 10, name: 'usman rashid', rank: 'gamer master', amount: 500000 },
    { id: 11, name: 'isha tariq', rank: 'photographer', amount: 120000 },
    {
      id: 12,
      name: 'bilal ahmed',
      rank: 'cyber security expert',
      amount: 70000,
    },
    { id: 13, name: 'osman saeed', rank: 'entrepreneur', amount: 150000 },
    { id: 14, name: 'razia malik', rank: 'software engineer', amount: 95000 },
    { id: 15, name: 'saeed anwar', rank: 'digital marketer', amount: 28000 },
    { id: 16, name: 'amina tariq', rank: 'fashion influencer', amount: 45000 },
    { id: 17, name: 'rizwan sheikh', rank: 'data scientist', amount: 105000 },
    { id: 18, name: 'shahzaib aslam', rank: 'videographer', amount: 75000 },
    { id: 19, name: 'layla farooq', rank: 'public relations', amount: 22000 },
    { id: 20, name: 'imran khan', rank: 'startup founder', amount: 400000 },
  ];

  // event binding
  showARandomNumber() {
    this.randomNumberGenerated = Math.floor(Math.random() * 100_00_000);
    console.log('New Random Number in console : ' + this.randomNumberGenerated);
  }

  

  showInConsole(e: Event) {
    // const value = (e.target as HTMLInputElement).value

    // * The reason why const value = e.target.value; doesn't work as expected in your case is due to the type of e.target. The e parameter is an Event object, and e.target is typed as EventTarget, which doesn't have a value property. To access the value property of an input field, you need to cast e.target to the correct type, which is HTMLInputElement.
    // const value = e.target.value;

    const value = (e.target as HTMLInputElement).value;
    console.log('the input value : ' + value);
  }

  // * the event itself is passed to the method
  twoWayBindingCheckMethid(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    this.placeholderValueText = value;
    // * we will log the value and update the variable value too
    console.log('Two way binding value  : ' + value);
  }
}
