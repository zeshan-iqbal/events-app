import { Component, OnInit } from "@angular/core";
import { EventsService } from "../shared/EventsService";

@Component({
    templateUrl: './app/events/event-detail/event-details.component.html',
    styles: [`
    .container{padding-left: 20px; padding-right: 20px;}
    .event-image{height: 100px;}
    `]
})
export class EventDetailsComponent implements OnInit {
    ngOnInit(): void {
        this.event = this.eventsService.getEvent(1);
    }

    constructor(private eventsService: EventsService) {
    }
    event: any;
}