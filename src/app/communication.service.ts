import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CommunicationService {

    // 1. Create a regular Subject
    private subjectMsg = new Subject<string>();

    // 2. Create a BehaviorSubject (requires an initial value)
    private behaviorSubjectMsg = new BehaviorSubject<string>('Default/Initial Value');

    // Expose them as observables so the child can subscribe to them
    subject$ = this.subjectMsg.asObservable();
    behaviorSubject$ = this.behaviorSubjectMsg.asObservable();

    constructor() { }

    // Method to send message using Subject
    sendUsingSubject(message: string) {
        this.subjectMsg.next(message);
    }

    // Method to send message using BehaviorSubject
    sendUsingBehaviorSubject(message: string) {
        this.behaviorSubjectMsg.next(message);
    }
}
