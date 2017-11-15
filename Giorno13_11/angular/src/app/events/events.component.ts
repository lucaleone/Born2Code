import { Component } from '@angular/core';
import {Event} from './events.model';

@Component({
    selector: 'app-events',
    templateUrl: 'events.component.html'
})

export class EventsComponent {
    public eventList : Event[];
    constructor() { 
        this.loadEvents();

    }
    loadEvents() {
        this.eventList = [{
            titolo: 'un bel titolo',
            testo: 'tutte cose', 
            link: 'http'}];
    }
}