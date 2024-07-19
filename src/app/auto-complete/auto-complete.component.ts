import { Component, inject, Input } from '@angular/core';
import { SearchService } from '../search.service';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { response } from 'express';
import { map } from 'rxjs';

@Component({
  selector: 'app-auto-complete',
  standalone: true,
  imports: [FormsModule, AutoCompleteModule],
  template: `<p-autoComplete [(ngModel)]="keyword" [suggestions]="results" (completeMethod)="onChange()" />`,
  styleUrl: './auto-complete.component.scss'
})
export class AutoCompleteComponent {
  keyword: string = "";
  results: string[] = [];
  service = inject(SearchService);
  ngOnInit() {
  }

  onChange() {
    this.service.getInfo(this.keyword)
      .pipe(
        map(response => response[1])
      )
      .subscribe(data => this.results = [...data])
  }

}