import { Component } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
    selector: 'app-parent',
    standalone: false,
    templateUrl: './parent.component.html'
})
export class ParentComponent {

    constructor(private communicationService: CommunicationService) { }

    sendSubject(value: string) {
        this.communicationService.sendUsingSubject(value);
    }

    sendBehaviorSubject(value: string) {
        this.communicationService.sendUsingBehaviorSubject(value);
    }
}
