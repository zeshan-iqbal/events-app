import { Pipe, PipeTransform } from "@angular/core";
import { retry } from "rxjs/operator/retry";


@Pipe({
    name: 'duration'
})
export class DurationPipe implements PipeTransform {
    transform(duration: number): string {
        switch (duration) {
            case 1: return 'Half Hour'
            case 2: return '1 Hour'
            case 3: return 'Half Day'
            case 4: return 'Full Day'
            default: return duration.toString()
        }
    }

}