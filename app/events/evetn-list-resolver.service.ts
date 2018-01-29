import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { EventsService } from "./shared/EventsService";
import { Observable } from "rxjs/Observable";
import { IEvent } from "./index";


@Injectable()
export class EventListResolver implements Resolve<any>{    
    constructor(private eventService: EventsService) {
        
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IEvent[]> {
        return this.eventService.getEvents().map(events => events);
    }

}