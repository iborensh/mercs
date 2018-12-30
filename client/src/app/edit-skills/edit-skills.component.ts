import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import {forEach} from "@angular/router/src/utils/collection";
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-edit-skills',
  templateUrl: './edit-skills.component.html',
  styleUrls: ['./edit-skills.component.scss']
})
export class EditSkillsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  v0 = [
	{"label": "Software development", "value": "SD", "options":
		[{"label": "Database", "value": "DB", "options":
            [
                {"label": "SQL", "value": "SQL", "max_rank": 5, "my_rank": 0, "base_cost": 3,  "explanation": "", "requirements":[["development","SQL"]]},
                {"label": "NO-SQL", "value": "No-SQL", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "requirements":[["development","No-SQL"]]},
                {"label": "Big Data", "value": "Big Data", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "requirements":[["development","Big Data"]]},
                {"label": "General", "value": "General", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "requirements":[["development"]]}
            ]},
        {"label": "Mobile", "value": "Mobile", "options":
            [
                {"label": "IOS", "value": "IOS" ,"max_rank": 5, "my_rank": 0, "base_cost": 3,"explanation": "","requirements":[["development"]]},
                {"label": "Android", "value": "Android", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "requirements":[["development"]]},
                {"label": "General", "value": "General", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "requirements":[["development"]]}
            ]},
        {"label": "Networks", "value": "Networks", "options":
            [
                {"label": "Administration", "value": "Administration", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "requirements":[["development"]]},
                {"label": "Security", "value": "Security", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "requirements":[["development"]]},
                {"label": "Switches", "value": "Switches", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "requirements":[["development"]]},
                {"label": "Routers", "value": "Routers", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "requirements":[["development"]]},
                {"label": "VPNs", "value": "VPNs", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "requirements":[["development"]]},
                {"label": "Firewall", "value": "Firewall", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "requirements":[["development"]]},
                {"label": "IP", "value": "IP", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "requirements":[["development"]]},
                {"label": "VoIP", "value": "VoiP", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "requirements":[["development"]]},
                {"label": "Data centers", "value": "Data centers", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "requirements":[["development"]]},
                {"label": "General", "value": "General", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "requirements":[["development"]]}
            ]},
        {"label": "Web", "value": "Web", "options":
            [
                {"label": "CSS", "value": "CSS", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "requirements":[["development"]]},
                {"label": "Javascript", "value": "Javascript", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "requirements":[["development"]]},
                {"label": "PHP", "value": "PHP", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "requirements":[["development"]]},
                {"label": "HTML5", "value": "HTML5", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "requirements":[["development"]]},
                {"label": "Node.js", "value": "Node.js", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "requirements":[["development"]]},
                {"label": "React.js", "value": "React.js", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": ""},
                {"label": "General", "value": "General", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": ""}
            ]},
        {"label": "UI" , "value": "UI", "options":
            [
                {"label": "Wireframes", "value": "Wireframes", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "requirements":[["development"]]},
                {"label": "Bootstrap", "value": "Bootstrap", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "requirements":[["development"]]},
                {"label": "Responsive", "value": "Responsive", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "requirements":[["development"]]},
                {"label": "General", "value": "General", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "requirements":[["development"]]}
            ]},
        {"label": "OS", "value": "OS", "options":
            [
                {"label": "Linux", "value": "Linux", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "requirements":[["development"]]},
                {"label": "Windows", "value": "Window", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "requirements":[["development"]]},
                {"label": "MacOs", "value": "MacOs", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "requirements":[["development"]]},
                {"label": "Memory", "value": "Memory", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "requirements":[["development"]]},
                {"label": "Compilers", "value": "Compilers", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "requirements":[["development"]]},
                {"label": "General", "value": "General", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "requirements":[["development"]]}
            ]},
        {"label": "Arch", "value": "Arch", "options":
            [
                {"label": "Embedded", "value": "Embedded", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "requirements":[["development"]]},
                {"label": "RealTime", "value": "RealTime", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "requirements":[["development"]]},
                {"label": "Containers", "value": "Containers", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "requirements":[["development"]]},
                {"label": "MicroServices", "value": "Microservices", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "requirements":[["development"]]},
                {"label": "BlockChain", "value": "Blockchain", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "requirements":[["development"]]},
                {"label": "Security", "value": "Security", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "requirements":[["development"]]},
                {"label": "General", "value": "General", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "requirements":[["development"]]}
            ]},
        {"label": "Coding", "value": "Coding", "options":
            [
                {"label": "Python", "value": "Python", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "requirements":[["development"]]},
                {"label": "Java", "value": "Java", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "requirements":[["development"]]},
                {"label": "C++", "value": "C++", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "requirements":[["development"]]},
                {"label": "Scala", "value": "Scala", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "requirements":[["development"]]},
                {"label": "Go", "value": "Go", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "requirements":[["development"]]},
                {"label": "General", "value": "General", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "requirements":[["development"]]}
            ]},
        {"label": "QA", "value": "QA", "options":
            [
            {"label": "Automation", "value": "Automation", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "requirements":[["development"]]},
            {"label": "Manual", "value": "Manual", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "requirements":[["development"]]},
            {"label": "CI frameworks", "value": "CI frameworks", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "requirements":[["development"]]},
            {"label": "Testing tools", "value": "Testing tools", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "requirements":[["development"]]},
            {"label": "Test design", "value": "Test design", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "requirements":[["development"]]},
            {"label": "General", "value": "General", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "requirements":[["development"]]}
            ]}
    	]},
    {"label": "Hardware development", "value": "HD", "father":"", "options":
        [{"label": "Architectures", "value": "Architectures", "options":
            [
                {"label": "Microcontrollers", "value": "microcontrollers", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "requirements":[["development"]]},
                {"label": "Microprocessors", "value": "microprocessors", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "requirements":[["development"]]},
                {"label": "ASIC", "value": "ASIC", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "requirements":[["development"]]},
                {"label": "FPGA", "value": "FPGA", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "requirements":[["development"]]},
                {"label": "SoC", "value": "SoC", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "requirements":[["development"]]},
                {"label": "General", "value": "General", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "requirements":[["development"]]}
            ]},
        {"label": "HW SW", "value": "HW design", "options":
            [
                {"label": "Simulations", "value": "simulations", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "requirements":[["development"]]},
                {"label": "Verilog", "value": "verilog", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "requirements":[["development"]]},
                {"label": "RTL", "value": "RTL", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "requirements":[["development"]]},
                {"label": "Firmware", "value": "firmware", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "requirements":[["development"]]},
                {"label": "General", "value": "General", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "requirements":[["development"]]}
            ]},
        {"label": "Sensors", "value": "sensors", "options":
            [
                {"label": "Imaging", "value": "imaging", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "requirements":[["development"]]},
                {"label": "Sound", "value": "sound", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "requirements":[["development"]]},
                {"label": "DSP", "value": "DSP", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "requirements":[["development"]]},
                {"label": "Motion", "value": "motion", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "requirements":[["development"]]},
                {"label": "General", "value": "General", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "requirements":[["development"]]}
            ]},
        {"label": "Testing", "value": "testing", "options":
            [
                {"label": "Automation", "value": "Automation", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "requirements":[["testing"]]},
                {"label": "Pre-silicon", "value": "pre-silicon", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "requirements":[["testing"]]},
                {"label": "Post-silicon", "value": "post-silicon", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "requirements":[["testing"]]},
                {"label": "Testing tools", "value": "Testing tools", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "requirements":[["testing"]]},
                {"label": "Test design", "value": "Test design", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "requirements":[["testing"]]},
                {"label": "General", "value": "General", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": "", "requirements":[["testing"], ["testing","development"], ["development"]]}
            ]}
        ]},
    {"label": "Analytics","value":"Analytics", "options":
        [{"label": "Quantitative", "value": "Quantitative", "options":
            [
                {"label": "Statistics", "value": "statistics", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": ""},
                {"label": "Math", "value": "math", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": ""},
                {"label": "Modeling", "value": "modeling", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": ""},
                {"label": "Finance", "value": "", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": ""},
                {"label": "Risk", "value": "", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": ""},
                {"label": "General", "value": "General", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": ""}
            ]},
        {"label": "Tools", "value": "tools", "options":
            [
                {"label": "R", "value": "R", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": ""},
                {"label": "Python science", "value": "python science", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": ""},
                {"label": "Deep learning", "value": "", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": ""},
                {"label": "Matlab", "value": "Matlab", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": ""},
                {"label": "Machine learning", "value": "machine learning", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": ""},
                {"label": "General", "value": "General", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": ""}
            ]},
        {"label": "Data science", "value": "data science", "options":
            [
                {"label": "Supervised", "value": "supervised", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": ""},
                {"label": "Unsupervised", "value": "unsupervised", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": ""},
                {"label": "RNN", "value": "RNN", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": ""},
                {"label": "CNN", "value": "CNN", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": ""},
                {"label": "NLP", "value": "NLP", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": ""},
                {"label": "Reinforced", "value": "Reinforced", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": ""},
                {"label": "General", "value": "General", "max_rank": 5, "my_rank": 0, "base_cost": 3, "explanation": ""}
            ]}
	    ]}
    ]

  route = "app-edit-skills";
  titleChoose = '';
  options = [];

  ngOnInit() {
      this.titleChoose = 'DB';
      this.options = _.find(this.v0[0].options, { 'value':this.titleChoose }).options;
  }

  intToArray(num){
      return _.fill(Array(num), null);
  }

  currentTitle(titleChoose){
      this.titleChoose = titleChoose;
      this.options = _.find(this.v0[0].options, { 'value':this.titleChoose }).options;
  }

}
