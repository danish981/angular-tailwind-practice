import { booleanAttribute, Component, Input, numberAttribute, } from '@angular/core';

@Component({
  selector: 'app-child-two',
  standalone: true,
  imports: [],
  templateUrl: './child-two.component.html',
  styleUrl: './child-two.component.css',
})

export class ChildTwoComponent {
  // the parameter is passed by the name of 'country' but in HTML the child component will use it as  countryName and its default value is set to 'The Default country'
  // alias men wo name hai jis name se ham ne is component ko data pass kia
  // or country wo name hai jo child component apny html men use kry ga

  // we are passing the exact boolean fields and we dont need to parse them to boolean
  @Input() isEligible!: boolean; // the nullable type
  @Input() canDeliverSpeach!: boolean; // the nullable type

  // if the data being passed is not in the right format we can do
  @Input({ transform: booleanAttribute }) canFly!: boolean;
  @Input({ transform: booleanAttribute }) canSwim!: boolean;
  @Input({ transform: numberAttribute }) characterHeight!: number;

  @Input({
    alias: 'countryName',
    transform: (value: string) => {
      return '(' + value + ')';
    },
  })
  country = 'The default country';

  // we can use a method to transform a value , it will be now source amount
  // @Input({ alias : 'sourceAmount', transform : transformAmountToDollar }) amount = 0

  @Input({ alias: 'sourceAmount', transform: (value: number) => '$' + value })
  amount: string = Math.ceil(Math.random() * 100_000).toString();

  // You can also use formatters (create a separate utility method and use an exported function)

  mixCountries = [
    { name: this.country },
    { name: this.country },
    // {name : this.countryName, amount :  this.amount }, // class yhi use kry gi but html template dusra awala parsed use kry ga
  ];

  getArrayOfValues() {
    return this.mixCountries;
  }

  // now we will Learn how to pass data from child component to parent component
}
