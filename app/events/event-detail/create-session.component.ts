import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ISession, restrictedWords } from "../index";


@Component({
    templateUrl: './app/events/event-detail/create-session.component.html',
    styles: [`
  em { float: right; color: #E05C65; padding-left: 10 px;}
  .error input, .error select, .error textarea {background-color: #E3C3C5;}
  .error ::-webkit-input-placeholder {color: #9999;}
  .error ::-moz-placeholder {color: #9999;}
  .error :-moz-placeholder {color: #9999;}
  .error :-ms-input-placeholder {color: #9999;}
  `]
})
export class CreateSessionComponent implements OnInit{
    newSessionForm: FormGroup;
    abstract: FormControl;
    level: FormControl;
    duration: FormControl;
    presenter: FormControl;
    name: FormControl;
    //private voters: FormControl;

    ngOnInit(): void {
        this.name = new FormControl("", Validators.required);
        this.presenter = new FormControl("", Validators.required);
        this.duration = new FormControl("", Validators.required);
        this.level = new FormControl("", Validators.required);
        this.abstract = new FormControl("", [Validators.required, Validators.maxLength(400), restrictedWords(['foo', 'bar'])]);        

        this.newSessionForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract            
        });
    }

    saveSession(formValues){

        let session: ISession = {
            id: undefined,
            name: formValues.name,
            duration: +formValues.duration,
            abstract: formValues.abstract,
            level: formValues.level,
            presenter: formValues.presenter,
            voters: []
        }
        console.log(session);
    }

}