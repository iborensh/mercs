import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';


@Component({
  selector: 'app-edit-skills',
  templateUrl: './edit-skills.component.html',
  styleUrls: ['./edit-skills.component.scss']
})
export class EditSkillsComponent implements OnInit {

  constructor() { }

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

  titleChoose = '';
  options = [];

  ngOnInit() {
      this.titleChoose = 'type';
      this.options = this.v0[0].options;
  }

  currentTitle(titleChoose){
      this.titleChoose = titleChoose;
      this.options = _.find(this.v0, { 'value':titleChoose }).options;
  }

}
