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
	{"label": "Software development", "value": "SD", "father":"", "options":
		[
            {"label": "SQL", "value": "SQL", "father":"DataBase", rank: "", my_rank:"", "explanation": ""},
            {"label": "NO-SQL", "value": "SQL", "father":"DataBase", "explanation": ""},
            {"label": "Big Data", "value": "Big Data", "father":"DataBase", "explanation": ""},
            {"label": "General", "value": "General", "father":"DataBase", "explanation": ""},

            {"label": "IOS", "value": "IOS", "father":"Mobile", "explanation": ""},
            {"label": "Android", "value": "Android", "father":"Mobile", "explanation": ""},
            {"label": "General", "value": "General", "father":"Mobile", "explanation": ""},

            {"label": "Administration", "value": "Administration", "father":"Networks", "explanation": ""},
            {"label": "Security", "value": "Security", "father":"Networks", "explanation": ""},
            {"label": "Administration", "value": "Administration", "father":"Networks", "explanation": ""},
            {"label": "Switches", "value": "Switches", "father":"Networks", "explanation": ""},
            {"label": "Routers", "value": "Routers", "father":"Networks", "explanation": ""},
            {"label": "VPNs", "value": "VPNs", "father":"Networks", "explanation": ""},
            {"label": "Firewall", "value": "Firewall", "father":"Networks", "explanation": ""},
            {"label": "IP", "value": "IP", "father":"Networks", "explanation": ""},
            {"label": "VoIP", "value": "VoiP", "father":"Networks", "explanation": ""},
            {"label": "Data centers", "value": "Data centers", "father":"Networks", "explanation": ""},
            {"label": "General", "value": "General", "father":"Networks", "explanation": ""},

            {"label": "CSS", "value": "CSS", "father":"Web", "explanation": ""},
            {"label": "Javascript", "value": "Javascript", "father":"Web", "explanation": ""},
            {"label": "PHP", "value": "PHP", "father":"Web", "explanation": ""},
            {"label": "HTML5", "value": "HTML5", "father":"Web", "explanation": ""},
            {"label": "Node.js", "value": "Node.js", "father":"Web", "explanation": ""},
            {"label": "React.js", "value": "React.js", "father":"Web", "explanation": ""},
            {"label": "General", "value": "General", "father":"Web", "explanation": ""},

            {"label": "Wireframes", "value": "Wireframes", "father":"UI", "explanation": ""},
            {"label": "Bootstrap", "value": "Bootstrap", "father":"UI", "explanation": ""},
            {"label": "Responsive", "value": "Responsive", "father":"UI", "explanation": ""},
            {"label": "General", "value": "General", "father":"UI", "explanation": ""},

            {"label": "Linux", "value": "Linux", "father":"OS", "explanation": ""},
            {"label": "Windows", "value": "Window", "father":"OS", "explanation": ""},
            {"label": "MacOs", "value": "MacOs", "father":"OS", "explanation": ""},
            {"label": "Memory", "value": "Memory", "father":"OS", "explanation": ""},
            {"label": "Compilers", "value": "Compilers", "father":"OS", "explanation": ""},
            {"label": "General", "value": "General", "father":"OS", "explanation": ""},

            {"label": "Embedded", "value": "Embedded", "father":"Arch", "explanation": ""},
            {"label": "RealTime", "value": "RealTime", "father":"Arch", "explanation": ""},
            {"label": "Containers", "value": "Containers", "father":"Arch", "explanation": ""},
            {"label": "MicroServices", "value": "Microservices", "father":"Arch", "explanation": ""},
            {"label": "BlockChain", "value": "Blockchain", "father":"Arch", "explanation": ""},
            {"label": "Security", "value": "Security", "father":"Arch", "explanation": ""},
            {"label": "General", "value": "General", "father":"Arch", "explanation": ""},

            {"label": "Python", "value": "Python", "father":"Coding", "explanation": ""},
            {"label": "Java", "value": "Java", "father":"Coding", "explanation": ""},
            {"label": "C++", "value": "C++", "father":"Coding", "explanation": ""},
            {"label": "Scala", "value": "Scala", "father":"Coding", "explanation": ""},
            {"label": "Go", "value": "Go", "father":"Coding", "explanation": ""},
            {"label": "General", "value": "General", "father":"Coding", "explanation": ""},

            {"label": "Automation", "value": "Automation", "father":"QA", "explanation": ""},
            {"label": "Manual", "value": "Manual", "father":"QA", "explanation": ""},
            {"label": "CI frameworks", "value": "CI frameworks", "father":"QA", "explanation": ""},
            {"label": "Testing tools", "value": "Testing tools", "father":"QA", "explanation": ""},
            {"label": "Test design", "value": "Test design", "father":"QA", "explanation": ""},
            {"label": "General", "value": "General", "father":"QA", "explanation": ""},


    	]
	},

	{"label": "Hardware development", "value": "HD", "father":"", "options":
		[



		]
	},
    {"label": "Analytics","value":"AR", "options":
        [
			{"label": "Report", "value": "report", "father":"research", "explanation": "an internal report"},

        	]
    },
    {"label": "Marketing", "value": "MT", "options":
		[
			{"label": "Deep learning", "value": "deep learning", "father":"research", "explanation": ""},

		]
	},
	{"label": "Design", "value": "DN", "options":
		[
			{"label": "Web design", "value": "web design", "father":"", "explanation": ""},
			{"label": "Graphic design", "value": "graphic design", "father":"", "explanation": ""},
			{"label": "Animation", "value": "animation", "father":"", "explanation": ""},
			{"label": "Wireframing", "value": "wireframe", "father":"", "explanation": ""},
			{"label": "Art", "value": "art", "father":"", "explanation": ""},

		]
	},
	{"label": "Tools", "value": "TL", "options":
		[
			{"label": "Week", "value": "a week", "father":"", "explanation": ""},


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
