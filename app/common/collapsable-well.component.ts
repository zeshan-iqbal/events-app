import { Component, Input } from "@angular/core";


@Component({
    selector: 'collapsable-well',
    template: `<div (click)="toggleContent()" class="well pointable">
    <h4>
        <ng-content select="[well-title]"></ng-content>
    </h4>
    <div [ngClass]="{'hide': !visible}">
        <ng-content select="[well-body]"></ng-content>
    </div>
    <div>`
})
export class CollapsableWellComponent{
    @Input() title: string;
    visible: boolean = true

    toggleContent(){
        this.visible = !this.visible;
    }
}