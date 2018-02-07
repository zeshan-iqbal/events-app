import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { ISession } from "../index";


@Component({
    selector: 'session-list',
    templateUrl: './app/events/event-detail/session-list.component.html'
})
export class SessionListComponent {
    private _sortBy: string;
    private _filterBy: string;

    @Input() sessions: ISession[]
    @Input()
    set filterBy(value: string) {
        if (this.sessions) this.filterSessions(value);
        this._filterBy = value;
    }
    @Input()
    set sortBy(value: string) {
        value == 'name' ? this.visibleSessions.sort(sortByNameAsc) : this.visibleSessions.sort(sortByVotesDsc)
        this._sortBy = value
    }
    visibleSessions: ISession[]

    filterSessions(filterBy: string) {
        if (filterBy == 'all')
            this.visibleSessions = this.sessions.slice(0);
        else
            this.visibleSessions = this.sessions.filter(s => s.level.toLocaleLowerCase() === filterBy)
    }
}

function sortByNameAsc(s1: ISession, s2: ISession): number {
    if (s1.name > s2.name) return 1
    else if (s1.name === s2.name) return 0
    else return -1
}

function sortByVotesDsc(s1: ISession, s2: ISession): number {
    return s2.voters.length - s1.voters.length
}