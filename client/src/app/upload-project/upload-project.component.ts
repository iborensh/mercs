import {Component, OnInit} from '@angular/core';
import {isNumeric} from "rxjs/internal/util/isNumeric";
import {isString} from "util";
import * as _ from 'lodash';

@Component({
    selector: 'app-upload-project',
    templateUrl: './upload-project.component.html',
    styleUrls: ['./upload-project.component.scss']
})
export class UploadProjectComponent implements OnInit {

    constructor() {
    }

    newSchemaFromDb = [{"label": "Titles", "value": "titles", "next": "technology", "father":"", "options": [{"label": "Web", "value": "web", "explanation": "this is explanation"},
        {"label": "Server", "value": "server", "explanation": "this is explanation"},
        {"label": "DB", "value": "db", "explanation": "this is explanation"},
        {"label": "Babysitter", "value": "babysitter", "explanation": "this is explanation"}]},
        {"label": "Technology","value":"technology", "next": "name", "father":"titles", "options": [{"label": "Mongo", "value": "mongo", "father":"db", "explanation": "this is explanation"},
        {"label": "SQL", "value": "sql", "father":"db", "explanation": "this is explanation"},
        {"label": "Oracle", "value": "oracle", "father":"db", "explanation": "this is explanation"},
        {"label": "PYTHON", "value": "python", "father":"server", "explanation": "this is explanation"},
            {"label": "JAVA", "value": "java", "father":"server", "explanation": "this is explanation"},
            {"label": "C#", "value": "cSharp", "father":"server", "explanation": "this is explanation"},
            {"label": "Ruby", "value": "ruby", "father":"server", "explanation": "this is explanation"},
            {"label": "Angular", "value": "angular", "father":"web", "explanation": "this is explanation"},
            {"label": "View", "value": "view", "father":"web", "explanation": "this is explanation"},
            {"label": "React", "value": "react", "father":"web", "explanation": "this is explanation"},
            {"label": "wow", "value": "ok", "father":"babysitter", "explanation": "this is explanation"}]},
        {"label": "Name", "value":"name", "next": "name", "father":"technology",  "options": [{"label": "Mongo", "value": "mongo", "father":"oracle", "explanation": "this is explanation"},
        {"label": "SQL", "value": "sql", "father":"sql", "explanation": "this is explanation"},
        {"label": "Oracle", "value": "oracle", "father":"java", "explanation": "this is explanation"},
        {"label": "PYTHON", "value": "python", "father":"python", "explanation": "this is explanation"},
            {"label": "JAVA", "value": "java", "father":"cSharp", "explanation": "this is explanation"},
            {"label": "C#", "value": "cSharp", "father":"ruby", "explanation": "this is explanation"},
            {"label": "Ruby", "value": "ruby", "father":"angular", "explanation": "this is explanation"},
            {"label": "Angular", "value": "angular", "father":"view", "explanation": "this is explanation"},
            {"label": "View", "value": "view", "father":"react", "explanation": "this is explanation"},
            {"label": "React", "value": "react", "father":"react", "explanation": "this is explanation"},
            {"label": "wow", "value": "ok", "father":"ok", "explanation": "this is explanation"}]}
    ];

    options = [];
    finish = false;
    chosen = {};
    console(chosen, title) {
        if(_.has(this.chosen, title)){
            if(_.includes(this.chosen[title], chosen)){
                this.chosen[title].splice(this.chosen[title].indexOf(chosen), 1);
            }
            else {
                this.chosen[title].push(chosen);
            }
        }
        else{
            this.chosen[title] = [];
            this.chosen[title].push(chosen);
        }
    }
    next(id){

    }

    finishClick(){
        console.log(this.chosen);
        this.finish = true
    }

    ngOnInit() {
    }

}
