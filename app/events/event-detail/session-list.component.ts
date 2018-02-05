import { Component, Input } from "@angular/core";
import { ISession } from "../index";


@Component({
    selector: 'session-list',
    templateUrl: './app/events/event-detail/session-list.component.html'
})
export class SessionListComponent {
    @Input() Sesssions: ISession[]
}