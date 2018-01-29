import { Component, OnInit } from "@angular/core";
import { EventsService } from "./shared/EventsService";
import { ToastrService } from "../common/taostr.service";
import { ActivatedRoute } from "@angular/router";

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
  events: any[];
  constructor(private toastr: ToastrService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.events = this.route.snapshot.data['events'];
  }

  handleThumbnailClick(eventName) {
    this.toastr.success(eventName);
  }


}