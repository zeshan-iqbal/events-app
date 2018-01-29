import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EventsService } from "../shared/EventsService";
import { IEvent } from "../index";

@Component({
    templateUrl: './app/events/event-detail/event-details.component.html',
    styles: [`
    .container {padding-left: 20px; padding-right: 20px;}
    .event-image {height: 100px;}
    `]
})
export class EventDetailsComponent implements OnInit {
    event: IEvent;
    constructor(private eventsService: EventsService, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.event = this.eventsService.getEvent(+this.route.snapshot.params['id']);
    }

}