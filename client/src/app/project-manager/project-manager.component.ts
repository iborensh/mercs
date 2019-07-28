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
    newToDo = '';

    todo = [
        'Set meeting',
        'ticket 1234',
        'ticket 4564',
        'Dont Fall asleep'
    ];

    done = [
        'Get up',
        'ticket 9876654',
        'Check e-mail'

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
        this.todo.push(this.newToDo);
        console.log(this.newToDo);
        this.newToDo = ''
    }

    delete(event) {
        console.log(event);
        _.remove(this.done, function (item) {
            return item === event;
        });
    }

}
