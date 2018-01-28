import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { EventsAppComponenet } from "./events-app.component";
import { EventListComponent } from "./events/events-list.component";
import { EventThumbnailComponent } from "./events/event-thumbnail.component";
import { Input } from "@angular/core/src/metadata/directives";
import { NavComponent } from "./nav/nav.component";
import { EventsService } from "./events/shared/EventsService";
import { ToastrService } from "./common/taostr.service";
import { EventDetailsComponent } from "./events/event-detail/event-details.component";
import { appRoutes } from "./routes";
import { CreateEventComponent } from "./events/create-event.component";
import { Error404Component } from "./errors/404.component";
import { EventRouteActivator } from "./events/event-detail/event-route-activator.service";

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        EventsAppComponenet,
        EventListComponent,
        EventThumbnailComponent,
        NavComponent,
        EventDetailsComponent,
        CreateEventComponent,
        Error404Component
    ],
    providers: [
        EventsService,
        ToastrService,
        EventRouteActivator,
        { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState }
    ],
    bootstrap: [EventsAppComponenet]
})
export class AppModule {
}

function checkDirtyState(component: CreateEventComponent) {
    if (component.isDirty)
        return confirm("You have not saved this event. Do you really want to cancel?")

    return true
}