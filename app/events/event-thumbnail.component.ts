import { Component, Input, Output, EventEmitter } from "@angular/core";
import { IEvent } from "./index";

@Component({
    selector: 'event-thumbnail',
    template: `
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
        <h2>{{event?.name}}</h2>
        <div>Date: {{event?.date}}</div>
        <div [ngSwitch]="event?.time">
            Time: {{event?.time}}
            <span class="pad-left" *ngSwitchCase="'8:00 am'">(Early Start)</span>
            <span class="pad-left" *ngSwitchCase="'10:00 am'">(Late Start)</span>
            <span class="pad-left" *ngSwitchDefault>(Normal Start)</span>
        </div>
        <div>Price: \${{event?.price}}</div>
        <div>
            <span>Location: {{event?.location?.address}}</span>            
            <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
        </div>
    </div>
    `,
    styles: [
        `.thumbnail { min-height: 210px; }
        .pad-left {padding-left: 10px;}
        .well div {color: #bbb;}
        `
    ]
})
export class EventThumbnailComponent {
    @Input() event: IEvent;
}