import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pract-two',
  standalone: true,
  imports: [],
  templateUrl: './pract-two.component.html',
  styleUrl: './pract-two.component.css',
})

export class PractTwoComponent {
  value = Math.ceil(Math.random() * 100);

  @Output() numberEvent = new EventEmitter<number>();

  // * passing data to parent component
  @Output() myEvent = new EventEmitter<string>();
  // * the question is, do we have to create a new event every time to pass value to parent component
  @Output() anotherEvent = new EventEmitter<number>();

  clickToPassValueToParent() {
    this.myEvent.emit(
      'Data from child is: The quick brown fox jumps over the lazy dog'
    );
  }

  provideValueToParent(value: number) {
    this.numberEvent.emit(value ** 2);
  }

  bringThisToParent(e: number) {
    this.anotherEvent.emit(e);
  }
}
