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

    v0 = [
	{"label": "Type", "value": "type", "father":"", "next": "field", "options":
		[
			{"label": "Research", "value": "research", "explanation": "understand something"},
			{"label": "Develop", "value": "develop", "explanation": "create something"},
        	{"label": "Design", "value": "design", "explanation": "make something sparkle"},
        	{"label": "Test", "value": "test", "explanation": "how good is something"},
    	]
	},

	{"label": "Field", "value": "field", "father":"", "next": "outcome", "options":
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
    {"label": "Outcome","value":"outcome", "father":"type", "next": "attributes", "options":
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
    {"label": "Attributes", "value": "attributes", "father":"type", "next": "language", "options":
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
	{"label": "Language", "value": "language", "next": "time", "options":
		[
			{"label": "English", "value": "english", "father":"", "explanation": ""},
			{"label": "Spanish", "value": "spanish", "father":"", "explanation": ""},
			{"label": "Chinese", "value": "chinese", "father":"", "explanation": ""},
			{"label": "French", "value": "frence", "father":"", "explanation": ""},
			{"label": "German", "value": "german", "father":"", "explanation": ""},

		]
	},
	{"label": "Time", "value": "time", "next": "", "options":
		[
			{"label": "Week", "value": "a week", "father":"", "explanation": ""},
			{"label": "Two weeks", "value": "two weeks", "father":"", "explanation": ""},
			{"label": "Three weeks", "value": "three weeks", "father":"", "explanation": ""},
			{"label": "Month", "value": "a month", "father":"", "explanation": ""},
			{"label": "Three months", "value": "three months", "father":"", "explanation": ""},
			{"label": "Six months", "value": "six months", "father":"", "explanation": ""},

		]
	}];

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
