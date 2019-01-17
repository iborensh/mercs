import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import * as _ from 'lodash';


@Component({
    selector: 'app-project-manager',
    templateUrl: './project-manager.component.html',
    styleUrls: ['./project-manager.component.scss']
})
export class ProjectManagerComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }
    newDone = '';

    todo = [
        'Get to work',
        'Pick up groceries',
        'Go home',
        'Fall asleep'
    ];

    done = [
        'Get up',
        'Brush teeth',
        'Take a shower',
        'Check e-mail',
        'Walk dog'
    ];

    drop(event: CdkDragDrop<string[]>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            transferArrayItem(event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex);
        }
        console.log(this.done)
    }

    addToDo() {
        this.done.push(this.newDone);
        console.log(this.newDone);
        this.newDone = ''
    }

    delete(event) {
        console.log(event);
        _.remove(this.done, function (item) {
            return item === event;
        });
    }

}
