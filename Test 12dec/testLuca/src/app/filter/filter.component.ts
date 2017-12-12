import {Component} from '@angular/core';
import {ModelFilter} from '../model-filter';
import {FilterService} from '../filter-service.service';
import {DataService} from '../data.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  selectedNation: string;
  maleFilter: boolean;
  femaleFilter: boolean;
  maxResultNum: string;

  constructor(private filterService: FilterService, private data: DataService) {
  }

  ApplyFilter() {
    const filter = {
      selectedNation: this.selectedNation,
      maleFilter: this.maleFilter,
      femaleFilter: this.femaleFilter,
      maxResultNum: this.maxResultNum
    };
    this.filterService.setFilter(filter);
    console.log('i dati ottenuti: ');

    this.data.getData('10', 'male', this.selectedNation).subscribe(users => {
      for (const idx in users.results) {
          console.log(users.results[idx]);
      }
  });
  }
}
