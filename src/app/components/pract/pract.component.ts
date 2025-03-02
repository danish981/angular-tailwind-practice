import { NgFor, NgIf } from '@angular/common';
import { booleanAttribute, Component, Input, numberAttribute, OnInit, } from '@angular/core';

@Component({
  selector: 'app-pract',
  standalone: true,
  imports: [NgIf, NgFor], // ** to use all of these directive directly, we have to import CommonModule
  templateUrl: './pract.component.html',
  styleUrl: './pract.component.css',
})

export class PractComponent implements OnInit {
  // * The number of table to be printed
  @Input({ alias: 'tableNum', transform: numberAttribute }) num = 30;

  // * we dont need to parse manually to their types, the passed from are actually use brackets []
  @Input({ alias: 'tableLimit', transform: numberAttribute }) limit = 10;
  @Input({ alias: 'isShowable', transform: booleanAttribute }) printTable = false;

  // * and if the values being passed are not in string (they are in string basically when passed using like tableLimit="10")
  // @Input({ alias: 'tableLimit', transform: numberAttribute }) limit = 10;
  // @Input({ alias: 'isShowable', transform: booleanAttribute }) printTable = false;

  numbers: number[] = [];

  ngOnInit(): void {
    for (let index = 1; index < this.limit; index++) {
      this.numbers.push(index);
    }
  }
}
