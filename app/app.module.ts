import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { EventsAppComponenet } from "./events-app.component";
import { EventListComponent } from "./events/events-list.component";
import { EventThumbnailComponent } from "./events/event-thumbnail.component";
import { Input } from "@angular/core/src/metadata/directives";
import { NavComponent } from "./nav/nav.component";
import { EventsService } from "./events/shared/EventsService";

@NgModule({
    imports: [BrowserModule],
    declarations: [EventsAppComponenet, EventListComponent, EventThumbnailComponent, NavComponent],
    providers: [EventsService],
    bootstrap: [EventsAppComponenet]
})
export class AppModule {
}