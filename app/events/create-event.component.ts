import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { EventsService } from "./shared/EventsService";


@Component({
    templateUrl: './app/events/create-event.component.html',
    styles: [`
        em { float: right; color: #E05C65; padding-left: 10 px;}
        .error input {background-color: #E3C3C5;}
        .error ::-webkit-input-placeholder {color: #9999;}
        .error ::-moz-placeholder {color: #9999;}
        .error :-moz-placeholder {color: #9999;}
        .error :-ms-input-placeholder {color: #9999;}
        `
    ]
})
export class CreateEventComponent {
    isDirty: boolean = true
    constructor(private router: Router, private eventService: EventsService) {

    }

    saveEvent(formValues) {
        this.eventService.saveEvent(formValues);
        this.isDirty = false;
        this.router.navigate(['/events']);
    }

    cancel() {
        this.router.navigate(['/events']);
    }
}