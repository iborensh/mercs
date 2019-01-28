import {Component, OnInit} from '@angular/core';
import {isNumeric} from "rxjs/internal/util/isNumeric";
import {isString} from "util";
import * as _ from 'lodash';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {DataService} from "../data.service";

@Component({
    selector: 'app-upload-project',
    templateUrl: './upload-project.component.html',
    styleUrls: ['./upload-project.component.scss']
})
export class UploadProjectComponent implements OnInit {

    constructor(private dataService: DataService, private http: HttpClient, public router: Router) {}

    v0 = [
	{"label": "Type", "value": "type", "father":"", "next": "field", "multiple": true, "options":
		[
			{"label": "Research", "value": "research", "explanation": "understand something"},
			{"label": "Develop", "value": "develop", "explanation": "create something"},
        	{"label": "Design", "value": "design", "explanation": "make something sparkle"},
        	{"label": "Test", "value": "test", "explanation": "how good is something"},
    	]
	},

	{"label": "Field", "value": "field", "father":"", "next": "outcome", "multiple": true, "options":
		[
			{"label": "Commerce", "value": "commerce", "father":"", "explanation": "retail, commodoties, stuff"},
			{"label": "Ecommerce", "value": "ecommerce", "father":"", "explanation": "virtual stores, stock"},
			{"label": "Education", "value": "education", "father":"", "explanation": "teach them to fish"},
			{"label": "Entertainment", "value": "entertainment", "father":"", "explanation": "entertain the people"},
			{"label": "Social", "value": "social", "father":"", "explanation": "social, communities"},
			{"label": "Legal", "value": "legal", "father":"", "explanation": "I am the law"},
			{"label": "Finance", "value": "finance", "father":"", "explanation": "blockchain, stocks, finance"},
			{"label": "Security", "value": "security", "father":"", "explanation": "cyber, monitoring, anomalies"},
		]
	},
    {"label": "Outcome","value":"outcome", "father":"type", "next": "attributes", "multiple": true, "options":
        [
			{"label": "Report", "value": "report", "father":"research", "explanation": "an internal report"},
			{"label": "Blog", "value": "blog", "father":"research", "explanation": "a blog post"},

			{"label": "Application", "value": "application", "father":"develop", "explanation": "a mobile application"},
			{"label": "Website", "value": "website", "father":"develop", "explanation": "a website"},
			{"label": "Game", "value": "game", "father":"develop", "explanation": "a game"},
			{"label": "API", "value": "api", "father":"develop", "explanation": "an api"},
			{"label": "Software tool", "value": "software tool", "father":"develop", "explanation": "general software"},
			{"label": "HW prototype", "value": "hw prototype", "father":"develop", "explanation": "something physical"},


			{"label": "Application", "value": "application", "father":"design", "explanation": "a mobile application ux/design"},
			{"label": "Website", "value": "website", "father":"design", "explanation": "a website ux/design"},
			{"label": "Game", "value": "game", "father":"design", "explanation": "game ux/design"},
			{"label": "Software tool", "value": "software tool", "father":"design", "explanation": "general software"},
			{"label": "HW module", "value": "hw module", "father":"design", "explanation": "something physical"},
			{"label": "Building", "value": "building", "father":"design", "explanation": "architectural plans"},
			{"label": "Application", "value": "application", "father":"test", "explanation": "a mobile application"},
			{"label": "Website", "value": "website", "father":"test", "explanation": "a website"},
			{"label": "Game", "value": "game", "father":"test", "explanation": "a game"},
			{"label": "API", "value": "api", "father":"test", "explanation": "an api"},
			{"label": "Software tool", "value": "software tool", "father":"test", "explanation": "general software"},
			{"label": "HW prototype", "value": "hw prototype", "father":"test", "explanation": "something physical"},
        	]
    },
    {"label": "Attributes", "value": "attributes", "father":"type", "next": "language", "multiple": true, "options":
		[
			{"label": "Deep learning", "value": "deep learning", "father":"research", "explanation": ""},
			{"label": "Statistics", "value": "statistics", "father":"research", "explanation": ""},
			{"label": "physics", "value": "physics", "father":"research", "explanation": ""},
			{"label": "mathematics", "value": "mathematics", "father":"research", "explanation": ""},
			{"label": "blockchain", "value": "blockchain", "father":"research", "explanation": ""},

			{"label": "Wix", "value": "wix", "father":"design", "explanation": "proficiancy with wix"},
			{"label": "Autocad", "value": "autocad", "father":"design", "explanation": "proficiancy with autocad"},
			{"label": "Wireframe", "value": "wireframe", "father":"design", "explanation": "proficiancy with wireframe"},

			{"label": "IOS", "value": "ios", "father":"develop", "explanation": "ios development background"},
			{"label": "Android", "value": "android", "father":"develop", "explanation": "android development background"},

			{"label": "CI", "value": "ci", "father":"test", "explanation": "continous integration"},
			{"label": "Manual", "value": "manual", "father":"test", "explanation": "manual testing"},
			{"label": "Automation", "value": "automation", "father":"test", "explanation": "develop automatic tests"},

		]
	},
	{"label": "Language", "value": "language", "next": "time", "multiple": true, "options":
		[
			{"label": "English", "value": "english", "father":"", "explanation": ""},
			{"label": "Spanish", "value": "spanish", "father":"", "explanation": ""},
			{"label": "Chinese", "value": "chinese", "father":"", "explanation": ""},
			{"label": "French", "value": "frence", "father":"", "explanation": ""},
			{"label": "German", "value": "german", "father":"", "explanation": ""},

		]
	},
	{"label": "Time", "value": "time", "next": "finish", "multiple": true, "options":

		[
			{"label": "Week", "value": "a week", "father":"", "explanation": ""},
			{"label": "Two weeks", "value": "two weeks", "father":"", "explanation": ""},
			{"label": "Three weeks", "value": "three weeks", "father":"", "explanation": ""},
			{"label": "Month", "value": "a month", "father":"", "explanation": ""},
			{"label": "Three months", "value": "three months", "father":"", "explanation": ""},
			{"label": "Six months", "value": "six months", "father":"", "explanation": ""},
		]
	},
    {"label": "Finish", "value": "finish", "next": "", "options":
		[]}];
    projectName = '';
    options = [];
    finish = false;
    chosen = {};
    userId = _.get(this.dataService.UserData, '_id', '');
    addToChosen(chosen, title) {
        if(_.has(this.chosen, title)){
            if(_.includes(this.chosen[title], chosen)){
                this.chosen[title].splice(this.chosen[title].indexOf(chosen), 1);
            }
            else {
                this.chosen[title].push(chosen);
            }
        }
        else{
            this.chosen[title] = [chosen];
        }
    }
    next(id){

    }

    finishClick(){
        console.log(this.chosen);
        let data = {'user': this.userId, 'project_name': this.projectName, 'content': this.chosen};
        this.http.post('/api/projects', data).subscribe(data => {
        // this.router.navigate(['login']);
            },
            error => {
                console.log("Error", error);
            }
        );
        this.finish = true;
        this.dataService.ChosenProject = data;
        // setTimeout(() => {
     this.router.navigate(['groups-list']);
    // }, 4000);
    }

    ngOnInit() {
    }

}
