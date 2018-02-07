import { Component, Input, OnChanges } from "@angular/core";
import { ISession } from "../index";


@Component({
    selector: 'session-list',
    templateUrl: './app/events/event-detail/session-list.component.html'
})
export class SessionListComponent implements OnChanges {        
    @Input() sessions: ISession[]
    @Input() filterBy: string
    visibleSessions: ISession[]

    ngOnChanges() {
        if(this.sessions) this.filterSessions(this.filterBy);           
    }
    
    filterSessions(filterBy: string) {
        if(filterBy == 'all')
            this.visibleSessions = this.sessions.slice(0);
        else
            this.visibleSessions = this.sessions.filter(s => s.level.toLocaleLowerCase() === filterBy)
    }
}