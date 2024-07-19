import { Component, inject, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AutoCompleteComponent],
  template: `<h1>auto complete</h1>
  <!-- <input type="text" [(ngModel)]="keyword" (change)="onChange()"> -->
  <app-auto-complete />`,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  ngOnInit() {
  }



}
