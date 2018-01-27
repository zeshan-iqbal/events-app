import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, Router } from "@angular/router";
import { EventsService } from "../shared/EventsService";

@Injectable()
export class EventRouteActivator implements CanActivate {
    constructor(private eventService: EventsService, private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        const isEventExists = !!this.eventService.getEvent(+route.params['id'])
        if (!isEventExists)
            this.router.navigate(['/404'])

        return isEventExists;
    }

}