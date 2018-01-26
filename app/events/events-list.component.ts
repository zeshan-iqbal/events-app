import { Component, OnInit } from "@angular/core";
import { EventsService } from "./shared/EventsService";
import { ToastrService } from "../common/taostr.service";

@Component({
    template: `
<div>
    <h1>Upcoming Angular 2 Events</h1>
    <hr>
    <div *ngFor="let event of events" class="col-md-5">
        <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>    
    </div>
</div>`
})
export class EventListComponent implements OnInit {
  ngOnInit(): void {
    this.events = this.eventsService.getEvents();
  }

  events: any[];
  constructor(private eventsService: EventsService, private toastr: ToastrService) {
  }

  handleThumbnailClick(eventName){
    this.toastr.success(eventName);
  }


}