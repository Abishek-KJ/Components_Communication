import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommunicationService } from '../communication.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-child',
    standalone: false,
    templateUrl: './child.component.html'
})
export class ChildComponent implements OnInit, OnDestroy {

    subjectMessage: string = 'Waiting for Subject message...';
    behaviorSubjectMessage: string = '';

    private sub1!: Subscription;
    private sub2!: Subscription;

    constructor(private communicationService: CommunicationService) { }

    ngOnInit() {
        // Subscribe to Subject
        this.sub1 = this.communicationService.subject$.subscribe((msg) => {
            this.subjectMessage = msg;
        });

        // Subscribe to BehaviorSubject
        this.sub2 = this.communicationService.behaviorSubject$.subscribe((msg) => {
            this.behaviorSubjectMessage = msg;
        });
    }

    // Good practice to avoid memory leaks
    ngOnDestroy() {
        if (this.sub1) this.sub1.unsubscribe();
        if (this.sub2) this.sub2.unsubscribe();
    }
}
