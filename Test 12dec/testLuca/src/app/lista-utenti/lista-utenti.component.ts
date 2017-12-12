import { Component, OnInit } from '@angular/core';
import {FilterService} from '../filter-service.service';
import {ModelFilter} from '../model-filter';
import {DataService} from "../data.service";

@Component({
  selector: 'app-lista-utenti',
  templateUrl: './lista-utenti.component.html',
  styleUrls: ['./lista-utenti.component.css']
})
export class ListaUtentiComponent implements OnInit {
currentFilter: ModelFilter;
currentSearchResult = undefined;
  constructor(private filterService: FilterService, private data: DataService) { }

  ngOnInit() {
    this.filterService.getFilter().subscribe(_filterService => {
      this.currentFilter = _filterService;
    });
    this.data.getData('10', 'male', 'Germania').subscribe(users => {
      this.currentSearchResult = users.results;
      for (const idx in users.results) {
        console.log(users.results[idx]);
      }
    });
  }

}
