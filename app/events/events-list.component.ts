import { Component, OnInit } from "@angular/core";
import { EventsService } from "./shared/EventsService";

@Component({
    selector: 'events-list',
    template: `
<div>
    <h1>Upcoming Angular 2 Events</h1>
    <hr>
    <div *ngFor="let event of events" class="col-md-5">
        <event-thumbnail [event]="event"></event-thumbnail>    
    </div>
</div>`
})
export class EventListComponent implements OnInit {
  ngOnInit(): void {
    this.events = this.eventsService.getEvents();
  }

  events: any[];
  constructor(private eventsService: EventsService) {
  }


}