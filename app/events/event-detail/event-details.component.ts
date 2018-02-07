import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EventsService } from "../shared/EventsService";
import { IEvent, ISession } from "../index";

@Component({
    templateUrl: './app/events/event-detail/event-details.component.html',
    styles: [`
    .container {padding-left: 20px; padding-right: 20px;}
    .event-image {height: 100px;}
    a {cursor: pointer}
    .active {background-color: #DE6C1E;}
    `]
})
export class EventDetailsComponent implements OnInit {
    event: IEvent;
    addMode: boolean
    filterBy: string = 'all'
    sortBy: string = 'votes'
    constructor(private eventsService: EventsService, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.event = this.eventsService.getEvent(+this.route.snapshot.params['id']);
    }

    addSession() {
        this.addMode = true;
    }

    saveNewSession(session: ISession){
        let nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
        session.id = nextId + 1;
        this.event.sessions.push(session);
        this.eventsService.updateEvent(this.event);
        this.addMode = false;
    }

}