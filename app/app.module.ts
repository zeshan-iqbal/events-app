import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import {
    EventListComponent,
    EventThumbnailComponent,
    EventsService,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventListResolver,
    CreateSessionComponent,
    SessionListComponent
} from "./events/index";
import { AuthService } from "./user/index";

import { EventsAppComponenet } from "./events-app.component";
import { NavComponent } from "./nav/nav.component";
import { ToastrService } from "./common/taostr.service";
import { appRoutes } from "./app.routes";
import { Error404Component } from "./errors/404.component";
import { CollapsableWellComponent } from "./common/collapsable-well.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        EventsAppComponenet,
        EventListComponent,
        EventThumbnailComponent,
        NavComponent,
        EventDetailsComponent,
        CreateEventComponent,
        Error404Component,
        CreateSessionComponent,
        SessionListComponent,
        CollapsableWellComponent
    ],
    providers: [
        EventsService,
        ToastrService,
        EventRouteActivator,
        EventListResolver,
        AuthService,
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