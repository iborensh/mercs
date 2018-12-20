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
	{"label": "Software development", "value": "SD", "options":
		[{"label": "Database", "value": "DB", "options":
            [
                {"label": "SQL", "value": "SQL", max_rank: 5, my_rank: 0, "explanation": ""},
                {"label": "NO-SQL", "value": "No-SQL", max_rank: 5, my_rank: 0, "explanation": ""},
                {"label": "Big Data", "value": "Big Data", max_rank: 5, my_rank: 0,"explanation": ""},
                {"label": "General", "value": "General", max_rank: 5, my_rank: 0,"explanation": ""}
            ]},
        [{"label": "Mobile", "value": "Mobile", "options":
            [
                {"label": "IOS", "value": "IOS" ,max_rank: 5, my_rank: 0, "explanation": ""},
                {"label": "Android", "value": "Android", max_rank: 5, my_rank: 0, "explanation": ""},
                {"label": "General", "value": "General", max_rank: 5, my_rank: 0, "explanation": ""}
            ]},
        [{"label": "Networks", "value": "Networks", "options":
            [
                {"label": "Administration", "value": "Administration", max_rank: 5, my_rank: 0, "explanation": ""},
                {"label": "Security", "value": "Security", max_rank: 5, my_rank: 0, "explanation": ""},
                {"label": "Administration", "value": "Administration", max_rank: 5, my_rank: 0, "explanation": ""},
                {"label": "Switches", "value": "Switches", max_rank: 5, my_rank: 0, "explanation": ""},
                {"label": "Routers", "value": "Routers", max_rank: 5, my_rank: 0, "explanation": ""},
                {"label": "VPNs", "value": "VPNs", max_rank: 5, my_rank: 0, "explanation": ""},
                {"label": "Firewall", "value": "Firewall", max_rank: 5, my_rank: 0, "explanation": ""},
                {"label": "IP", "value": "IP", max_rank: 5, my_rank: 0, "explanation": ""},
                {"label": "VoIP", "value": "VoiP", max_rank: 5, my_rank: 0, "explanation": ""},
                {"label": "Data centers", "value": "Data centers", max_rank: 5, my_rank: 0, "explanation": ""},
                {"label": "General", "value": "General", max_rank: 5, my_rank: 0, "explanation": ""}
            ]},
        [{"label": "Web", "value": "Web", "options":
            [
                {"label": "CSS", "value": "CSS", max_rank: 5, my_rank: 0, "explanation": ""},
                {"label": "Javascript", "value": "Javascript", max_rank: 5, my_rank: 0, "explanation": ""},
                {"label": "PHP", "value": "PHP", max_rank: 5, my_rank: 0, "explanation": ""},
                {"label": "HTML5", "value": "HTML5", max_rank: 5, my_rank: 0, "explanation": ""},
                {"label": "Node.js", "value": "Node.js", max_rank: 5, my_rank: 0, "explanation": ""},
                {"label": "React.js", "value": "React.js", max_rank: 5, my_rank: 0, "explanation": ""},
                {"label": "General", "value": "General", max_rank: 5, my_rank: 0, "explanation": ""}
            ]},
        [{"label": "UI" , "value": "UI", "options":
            [
                {"label": "Wireframes", "value": "Wireframes", max_rank: 5, my_rank: 0, "explanation": ""},
                {"label": "Bootstrap", "value": "Bootstrap", max_rank: 5, my_rank: 0, "explanation": ""},
                {"label": "Responsive", "value": "Responsive", max_rank: 5, my_rank: 0, "explanation": ""},
                {"label": "General", "value": "General", max_rank: 5, my_rank: 0, "explanation": ""},
            ]},
        [{"label": "OS", "value": "OS", "options":
            [
                {"label": "Linux", "value": "Linux", max_rank: 5, my_rank: 0, "explanation": ""},
                {"label": "Windows", "value": "Window", max_rank: 5, my_rank: 0, "explanation": ""},
                {"label": "MacOs", "value": "MacOs", max_rank: 5, my_rank: 0, "explanation": ""},
                {"label": "Memory", "value": "Memory", max_rank: 5, my_rank: 0, "explanation": ""},
                {"label": "Compilers", "value": "Compilers", max_rank: 5, my_rank: 0, "explanation": ""},
                {"label": "General", "value": "General", max_rank: 5, my_rank: 0, "explanation": ""}
            ]},
        [{"label": "Arch", "value": "Arch", "options":
            [
                {"label": "Embedded", "value": "Embedded", max_rank: 5, my_rank: 0, "explanation": ""},
                {"label": "RealTime", "value": "RealTime", max_rank: 5, my_rank: 0, "explanation": ""},
                {"label": "Containers", "value": "Containers", max_rank: 5, my_rank: 0, "explanation": ""},
                {"label": "MicroServices", "value": "Microservices", max_rank: 5, my_rank: 0, "explanation": ""},
                {"label": "BlockChain", "value": "Blockchain", max_rank: 5, my_rank: 0, "explanation": ""},
                {"label": "Security", "value": "Security", max_rank: 5, my_rank: 0, "explanation": ""},
                {"label": "General", "value": "General", max_rank: 5, my_rank: 0, "explanation": ""}
            ]},
        [{"label": "Coding", "value": "Coding", "options":
            [
                {"label": "Python", "value": "Python", max_rank: 5, my_rank: 0, "explanation": ""},
                {"label": "Java", "value": "Java", max_rank: 5, my_rank: 0, "explanation": ""},
                {"label": "C++", "value": "C++", max_rank: 5, my_rank: 0, "explanation": ""},
                {"label": "Scala", "value": "Scala", max_rank: 5, my_rank: 0, "explanation": ""},
                {"label": "Go", "value": "Go", max_rank: 5, my_rank: 0, "explanation": ""},
                {"label": "General", "value": "General", max_rank: 5, my_rank: 0, "explanation": ""},
            ]},
        [{"label": "QA", "value": "QA", "options":
            [
            {"label": "Automation", "value": "Automation", max_rank: 5, my_rank: 0, "explanation": ""},
            {"label": "Manual", "value": "Manual", max_rank: 5, my_rank: 0, "explanation": ""},
            {"label": "CI frameworks", "value": "CI frameworks", max_rank: 5, my_rank: 0, "explanation": ""},
            {"label": "Testing tools", "value": "Testing tools", max_rank: 5, my_rank: 0, "explanation": ""},
            {"label": "Test design", "value": "Test design", max_rank: 5, my_rank: 0, "explanation": ""},
            {"label": "General", "value": "General", max_rank: 5, my_rank: 0, "explanation": ""},
            ]},
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
