import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";


@Component({
    templateUrl: './app/events/event-detail/create-session.component.html'
})
export class CreateSessionComponent implements OnInit{
    private createSessionForm: FormGroup;
    private abstract: FormControl;
    private level: FormControl;
    private duration: FormControl;
    private presenter: FormControl;
    private name: FormControl;
    private voters: FormControl;

    ngOnInit(): void {
        this.name = new FormControl("", Validators.required);
        this.presenter = new FormControl("", Validators.required);
        this.duration = new FormControl("", Validators.required);
        this.level = new FormControl("", Validators.required);
        this.abstract = new FormControl("", [Validators.required, Validators.maxLength(400)]);
        this.voters = new FormControl("", Validators.required);

        this.createSessionForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract,
            voters: this.voters
        });
    }

}